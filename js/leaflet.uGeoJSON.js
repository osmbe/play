L.UGeoJSONLayer = L.GeoJSON.extend({
    options: {
      debug: false,
      light: true,
      method: "POST",
      usebbox: false,
      endpoint: "-1",
      parameters: {},
      maxRequests: 3,
      pollTime:0,
      once: false,
      minzoom: 15,
      after: function(data){}
    },

    callback: function(data) {
      if(this.options.light)
      {
        // if needed, we clean the layers
        this.clearLayers();
      }

      // Then we add the new data
      this.addData(data);
      this.options.after(data);
    },

    initialize: function (uOptions, options) {
        L.GeoJSON.prototype.initialize.call(this, undefined, options);
        L.Util.setOptions(this, uOptions);

    this._layersOld = [];
    this._requests = [];
  },

  onMoveEnd: function () {
    if(this._map.getZoom() < this.options.minzoom) {
        if (this.options.debug) {
            console.debug("zoom level too high: skip load");
        }
        return false;
    }

    if (this.options.debug) {
      console.debug("load Data");
    }

    // This allows to stop the oldest requests
    while(this._requests.length > this.options.maxRequests) 
    {
      this._requests.shift().abort();
    }

    var bounds = this._map.getBounds();
    var params = '';

    if (this.options.method == 'POST') {
        if (this.options.debug) {
            console.debug("doing POST work");
        }
        var postData = new FormData();

        for(var k in this.options.parameters)
        {
            if(this.options.parameters[k].scope != undefined)
            {
                postData.append(k,this.options.parameters[k].scope[k]);
            }
            else
            {
                postData.append(k,this.options.parameters[k]);
            }
        }


        if ( this.options.usebbox ) {
            postData.append('bbox', bounds.toBBoxString());

        } else {
            postData.append('south', bounds.getSouth());
            postData.append('north', bounds.getNorth());
            postData.append('east', bounds.getEast());
            postData.append('west', bounds.getWest());
        }
        postData.append('zoom', this._map.getZoom());
    } else {
        if (this.options.debug) {
            console.debug("doing GET work");
        }
        function encodeQueryData(data) {
            let ret = [];
            for (let d in data)
                ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            return ret.join('&');
        }
        params = encodeQueryData(this.options.parameters);
    }

    var self = this;
    var request = new XMLHttpRequest();
    
    if (this.options.method == 'POST') {
        request.open("POST", this.options.endpoint +'bbox='+bounds.toBBoxString()+'&bbsrid='+'4326', true);
    }
    if (this.options.method == 'GET') {
        //request.open("GET", this.options.endpoint +'bbox='+bounds.toBBoxString()+'&bbsrid='+'4326', true);
        request.open("GET", this.options.endpoint +'bbox='+bounds.toBBoxString()+'&'+params, true);
    }

    request.onload = function() {
      for(var i in self._requests)
      {
        if(self._requests[i] === request)
        {
          // We remove the request from the list of currently running requests.
          self._requests.splice(i,1); 
          break;
        }
      }

      if (this.status >= 200 && this.status < 400) {
        self.callback(JSON.parse(this.responseText));
      }
    };

    this._requests.push(request);
    if (this.options.method == 'POST') {
        request.send(postData);
    }
    if (this.options.method == 'GET') {
        request.send(null);
    }
  },

  onAdd: function (map) {
    this._map = map;

    if (this.options.endpoint.indexOf("http") != -1) {
		this.onMoveEnd();

		if(!this.options.once) {
			map.on('dragend', this.onMoveEnd, this);
			map.on('zoomend', this.onMoveEnd, this);

			if (this.options.pollTime > 0) {
			  this.intervalID = window.setInterval(this.onMoveEnd.bind(this), this.options.pollTime);
			}
		}
	}

    if (this.options.debug) {
      console.debug("add layer");
    }
  },

  onRemove: function (map) {
    if (this.options.debug) {
      console.debug("remove layer");
    }
    L.LayerGroup.prototype.onRemove.call(this, map);

    if (!this.options.once && this.options.pollTime > 0) {
      window.clearInterval(this.intervalID);
    }

    while(this._requests.length > 0)
    {
      this._requests.shift().abort();
    }

    if(!this.options.once) {
		map.off({
		  'dragend': this.onMoveEnd
		}, this);
		map.off({
		  'zoomend': this.onMoveEnd
		}, this);
	}

    this._map = null;
  }

});

L.uGeoJSONLayer = function (uOptions, options) {
  return new L.UGeoJSONLayer(uOptions, options);
};
