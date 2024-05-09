function getLayers() {
  return {
    "DV Hillshade (soft, VL, 2013-2015)": L.tileLayer(
      "https://geo.api.vlaanderen.be/DHMV/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=DHMV_II_HILL_25cm&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}",
      {
        attribution: "DHM SVF © AIV",
        opacity: 0.3,
        transparent: false,
        attribution: "Digitaal Vlaanderen"
      }
    ),
    "SPW Hillshade (WAL, 2021-2022)": L.tileLayer.wms(
      "https://geoservices.wallonie.be/arcgis/services/RELIEF/WALLONIE_MNT_2021_2022_HILLSHADE/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: false,
        opacity: 0.3,
        attribution: "SPW"
      }
    ),
	"Ferraris forest cover (VL)": L.tileLayer.wms(
      "https://geo.api.vlaanderen.be/INBO/wms?",
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
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 11
      }
    ),
    "OSM road surfaces": L.tileLayer(
      "https://api.mapbox.com/styles/v1/joostschouppe/cjhyp1dts2q5m2sqtxx04iwks/tiles/256/{z}/{x}/{y}?access_token={accessToken}",
      {
        accessToken:
          "pk.eyJ1Ijoiam9vc3RzY2hvdXBwZSIsImEiOiJjaWh2djF1c2owMmJrdDNtMWV2c2Rld3QwIn0.9zXJJWZ4rOcspyFIdEC3Rw",
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 11
      }
    ),
	"OSM buildings": L.tileLayer(
      "https://api.mapbox.com/styles/v1/joostschouppe/cl7oifb27000c14qlvyw5pgnv/tiles/256/{z}/{x}/{y}?access_token={accessToken}",
      {
        accessToken:
          "pk.eyJ1Ijoiam9vc3RzY2hvdXBwZSIsImEiOiJjaWh2djF1c2owMmJrdDNtMWV2c2Rld3QwIn0.9zXJJWZ4rOcspyFIdEC3Rw",
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Tiles © <a href="http://mapbox.com">Mapbox</a>',
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
    "Wegenregister (VL)": L.tileLayer.wms(
      "https://geo.api.vlaanderen.be/Wegenregister/wms?",
      {
        format: "image/png",
        layers: "AUTOSWEG,WEGGESCH,WEGEEN,ROT,SPECSIT,VERKPLEIN,OPAFOGKR,OPAFGGKR,PLLWEG,VENTWEG,INUITP,INUITD,VOETGANGERSZONE,WANDFIETS,TRAMWEG,DIENSTWEG,AARDEWEG,VEER,TYPENTG,LABELS",
        transparent: true,
        attribution: "© Digitaal Vlaanderen"
      }
    ),
    "NGI Mapindex": L.tileLayer.wms(
      "https://wms.ngi.be/inspire/mapindex/service?",
      {
        format: "image/png",
        layers: "mapindex",
        transparent: true,
        attribution: "© NGI/IGN"
      }
    ),
    "SPW Réseau hydrographique wallon (RHW) - Série (WAL)": L.tileLayer.wms(
      "https://geoservices.wallonie.be/arcgis/services/EAU/RHW_SIMPLE/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: false,
        opacity: 0.3,
        attribution: "SPW"
      }
    ),
    "Administrative units and Land register plan": L.tileLayer.wms(
      "https://ccff02.minfin.fgov.be/geoservices/arcgis/services/WMS/Cadastral_Layers/MapServer/WMSServer?",
      {
        format: "image/png",
        layers: "0",
        transparent: false,
        opacity: 0.3,
		attribution: "FPS Finance"
      }
    ),   
  };
}
