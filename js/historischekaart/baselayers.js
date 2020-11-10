function getBaselayers() {
  return {
    "OSM.org": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18
    }),
    "OSM Belgium": L.tileLayer(
      "https://tile.osm.be/osmbe/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
      }
    ),
    "OSM Belgium (FR)": L.tileLayer(
      "https://tile.osm.be/osmbe-fr/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
      }
    ),
    "OSM Belgium (NL)": L.tileLayer(
      "https://tile.osm.be/osmbe-nl/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
      }
    ),
    "OSM Belgium (Archive - 03/23/2019)": L.tileLayer(
      "https://tile.osm.be/archive/20190323/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
      }
    ),
    "AGIV Luchtfoto": L.tileLayer(
      "http://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=omwrgbmrvl&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "Luchtfoto © AIV"
      }
    ),
    "Basiskaart GRB": L.tileLayer(
      "http://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=grb_bsk&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "GRB © AIV"
      }
    ),
    "SPW Hillshade (Wallonia)": L.tileLayer.wms(
      "https://geoservices.wallonie.be/arcgis/services/RELIEF/WALLONIE_MNT_2013_2014_HILLSHADE/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: false
      }
    ),
    "AIV Hillshade (strong, Flanders)": L.tileLayer(
      "https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=DHMV_II_SVF_25cm&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "DHM SVF © AIV"
      }
    ),
    "AIV Hillshade (soft, Flanders)": L.tileLayer(
      "https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=DHMV_II_HILL_25cm&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "DHM SVF © AIV"
      }
    ),
    "NGI ortho 1995": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/ortho__default__3857__1995/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    ),
    "Masse, enkel Westhoek (1729)": L.tileLayer.wms(
      "https://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms?",
      {
        format: "image/png",
        layers: "Masse",
        transparent: true
      }
    ),
    "Frickx (1745)": L.tileLayer.wms(
      "https://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms?",
      {
        format: "image/png",
        layers: "Frickx",
        transparent: true
      }
    ),
    "Villaret (1745)": L.tileLayer.wms(
      "https://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms?",
      {
        format: "image/png",
        layers: "Villaret",
        transparent: true
      }
    ),
    "Ferraris (1777)": L.tileLayer(
      "http://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ferraris&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "Luchtfoto © AGIV"
      }
    ),
    "Ferraris (1777) - WAL": L.tileLayer.wms(
      "http://geoservices.wallonie.be/arcgis/services/CARTES_ANCIENNES/FERRARIS/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: true
      }
    ),
    "Forêt de Soignes (1661)": L.tileLayer.wms(
      "http://geoservices.wallonie.be/arcgis/services/CARTES_ANCIENNES/SOIGNES_VANDERSTOCK_1661/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: true
      }
    ),
    "Atlas der Buurtwegen (1840)": L.tileLayer.wms(
      "https://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms?",
      {
        format: "image/png",
        layers: "abw",
        transparent: true
      }
    ),
    "Atlas des voiries vicinales (1841)": L.tileLayer.wms(
      "http://geoservices.wallonie.be/arcgis/services/PLAN_REGLEMENT/ATLAS_VV_MODIF/MapServer/WmsServer?",
      {
        format: "image/png",
        layers: "3,4",
        transparent: true
      }
    ),
    "Vandermaelen (1846-1854)": L.tileLayer(
      "http://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vandermaelen&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "Luchtfoto © AGIV"
      }
    ),
    "Vandermaelen (1846-1854) - WAL": L.tileLayer.wms(
      "http://geoservices.wallonie.be/arcgis/services/CARTES_ANCIENNES/VDML/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: true
      }
    ),
    "Popp (1842-1854)": L.tileLayer(
      "http://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=popp&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "Luchtfoto © AGIV"
      }
    ),
    "Carte du dépôt de la guerre (1865 - 1880)": L.tileLayer.wms(
      "http://geoservices.wallonie.be/arcgis/services/CARTES_ANCIENNES/DEPOT_GUERRE_1865_1880/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: true
      }
    ),
    "NGI Basemap 1873": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/seamless_carto__default__3857__140/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    ),
    "NGI Basemap 1904": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/seamless_carto__default__3857__450/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    ),
    "NGI Basemap 1939": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/seamless_carto__default__3857__800/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    ),
    "Ministerie Openbare Werken (1950-1970)": L.tileLayer.wms(
      "https://geoservices.informatievlaanderen.be/raadpleegdiensten/histcart/wms?",
      {
        format: "image/png",
        layers: "moww",
        transparent: true
      }
    ),
    "Plans du Ministère des Travaux publics (1950-1973)": L.tileLayer.wms(
      "http://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PLANS_TRAVAUXPUBLICS_1950_1973/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0,1",
        transparent: true
      }
    ),
    "NGI Basemap 1969": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/seamless_carto__default__3857__1100/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    ),
    "NGI Basemap 1981": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/seamless_carto__default__3857__1220/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    ),
    "NGI Basemap 1989": L.tileLayer(
      "http://www.ngi.be/tiles/arcgis/rest/services/seamless_carto__default__3857__1300/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '<a href="http://www.ngi.be/">NGI</a>'
      }
    )
  };
}
