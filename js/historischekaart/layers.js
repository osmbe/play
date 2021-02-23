function getLayers() {
  return {
    "AIV Hillshade (soft, VL)": L.tileLayer(
      "https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=DHMV_II_HILL_25cm&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "DHM SVF © AIV",
        opacity: 0.3,
        transparent: true
      }
    ),
    "SPW Hillshade (WAL)": L.tileLayer.wms(
      "https://geoservices.wallonie.be/arcgis/services/RELIEF/WALLONIE_MNT_2013_2014_HILLSHADE/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: true,
        opacity: 0.3
      }
    ),
	"Ferraris forest cover (VL)": L.tileLayer.wms(
      "https://geoservices.informatievlaanderen.be/raadpleegdiensten/INBO/wms?",
      {
        format: "image/png",
        layers: "B1775",
        transparent: true,
        opacity: 0.3
      }
    ),
    "OSM roads": L.tileLayer(
      "https://api.mapbox.com/styles/v1/joostschouppe/cir5a9eob0020ccm0gc0xsqd0/tiles/256/{z}/{x}/{y}?access_token={accessToken}",
      {
        accessToken:
          "pk.eyJ1Ijoiam9vc3RzY2hvdXBwZSIsImEiOiJjaWh2djF1c2owMmJrdDNtMWV2c2Rld3QwIn0.9zXJJWZ4rOcspyFIdEC3Rw",
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 11
      }
    ),
    Strava: L.tileLayer(
      "https://heatmap-external-a.strava.com/tiles/ride/bluered/{z}/{x}/{y}.png?px=256",
      {
        attribution: "© Strava",
        maxZoom: 22,
        minZoom: 9
      }
    ),
    "OSM gpx": L.tileLayer(
      "https://gps-a.tile.openstreetmap.org/lines/{z}/{x}/{y}.png",
      {
        attribution:
          'GPX data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    ),
    "Trage Wegen Register (VL)": L.tileLayer.wms(
      "https://geoservices.vlaamsbrabant.be/TrageWegen/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: true
      }
    ),
    "Wegenregister (VL)": L.uGeoJSONLayer({
      endpoint: "https://data.grbosm.site/wr?",
      usebbox: true,
      method: "GET",
      maxRequests: 3,
      minzoom: 15,
      parameters: {
        bbsrid: "4326"
      }
    })
  };
}
