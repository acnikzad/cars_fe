<template>
  <div class="home">
    <h1>All Cars</h1>
    <div v-for="car in cars">
      <h2>{{ car.make }}</h2>
        <p>Model: {{ car.model}} {{ car.submodel}}</p>
        <p>Color: {{ car.color }}</p>
        <p>Year: {{ car.year}}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      cars: []
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      this.cars = response.data;
    });
  },
  methods: {}
};
</script>