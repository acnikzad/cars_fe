<template>
  <div class="cars-index">
    <h1>All Cars</h1>
    <div v-for="car in cars">
      <h2>{{ car.make }}</h2>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cars: [],
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      console.log("cars index", response);
      this.cars = response.data;
    });
  },
  methods: {},
};
</script>