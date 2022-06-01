<template>
  <div ref="map-root" style="width: 300px; height: 500px">
  </div>
</template>

<script>
import View from 'ol/View';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// importing the OpenLayers stylesheet is required for having
// good looking buttons!
import 'ol/ol.css';

export default {
  name: 'MapContainer',
  components: {},
  props: ['layer'],
  mounted() {
    // this is where we create the OpenLayers map
    const map = new Map({
      // the map will be created using the 'map-root' ref
      target: this.$refs['map-root'],
      layers: [
        // adding a background tiled layer
        new TileLayer({
          source: new OSM(), // tiles are served by OpenStreetMap
        }),
        this.layer,
      ],
      // the map view will initially show the whole world
      view: new View({
        zoom: 0,
        center: [0, 0],
        constrainResolution: true,
      }),
    });
    console.log(map);
  },
};
</script>
