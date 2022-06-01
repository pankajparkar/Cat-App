<template>
  <div id='map'>
    <div id='mapContainer' style='height:600px;width:100%' ref='hereMap'></div>
  </div>
</template>

<script>
import { toRaw } from 'vue';

export default {
  name: 'HereMap',
  props: {
    center: Object,
    jsonData: Object,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      map: null,
      apikey: 'Mh1Vdq-GLSsqSzLd08ljHef5hTxTK7P4a53BbjAZFjM',
      // You can get the API KEY from developer.here.com
    };
  },
  mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey,
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  beforeUnmount() {
    console.log(this.map.removeLayer());
  },
  methods: {
    initializeHereMap() {
      // rendering map
      const mapContainer = this.$refs.hereMap;
      const { H } = window;
      // Obtain the default map types from the platform object
      const maptypes = this.platform.createDefaultLayers();

      // Step 2: initialize a map
      const map = new H.Map(
        mapContainer,
        maptypes.vector.normal.map,
        {
          zoom: 5,
          // center: {
          //   lat: 52.522763341087874,
          //   lng: 13.492702024100026,
          // },
          pixelRatio: window.devicePixelRatio || 1,
        },
      );

      window.addEventListener('resize', () => map.getViewPort().resize());

      // add behavior control
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      console.log(behavior);
      // add UI
      H.ui.UI.createDefault(map, maptypes);
      this.map = map;

      // End rendering the initial map
      this.showGeoJSONData();
    },

    showGeoJSONData() {
      const { H } = window;
      // Create GeoJSON reader which will download the specified file.
      // Shape of the file was obtained by using HERE Geocoder API.
      // It is possible to customize look and feel of the objects.
      const reader = new H.data.geojson.Reader(undefined, {
        // This function is called each time parser detects a new map object
        style(mapObject) {
          // Parsed geo objects could be styled using setStyle method
          if (mapObject instanceof H.map.Polygon) {
            mapObject.setStyle({
              fillColor: 'rgba(255, 0, 0, 0.5)',
              strokeColor: 'rgba(0, 0, 255, 0.2)',
              lineWidth: 3,
            });
          }
        },
        disableLegacyMode: true,
      });
      // debugger;

      // Start parsing the file
      const obj = toRaw({
        type: 'FeatureCollection',
        features: [
          toRaw(this.jsonData),
        ],
      });
      debugger;
      reader.parseData(obj);
      console.log(obj);

      // Add layer which shows GeoJSON data on the map
      this.map.addLayer(reader.getLayer());
    },
  },
};
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>
