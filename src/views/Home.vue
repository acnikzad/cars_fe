<template>
  <div class="home">
    <h1>All Cars</h1>
    <div v-for="car in cars">
      <h2>{{ car.make }}</h2>
        <p>Model: {{ car.model}} {{ car.submodel}}</p>
        <p>Color: {{ car.color }}</p>
        <p>Year: {{ car.year}}</p>
    </div>
    <h1>Add a car:</h1>
    <div>
      <p>Make: <input type="text" v-model="newCarMake"/></p>
      <p>Model: <input type="text" v-model="newCarModel"/></p>
      <p>Submodel: <input type="text" v-model="newCarSubmodel"/></p>
      <p>Color: <input type="text" v-model="newCarColor"/></p>
      <p>Year: <input type="text" v-model="newCarYear"/></p>
      <button v-on:click="createCar()">Add car</button>
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
      cars: [],
      newCarMake:"",
      newCarModel:"",
      newCarSubmodel:"",
      newCarColor:"",
      newCarYear:""
    };
  },
  created: function() {
    axios.get("/api/cars").then(response => {
      this.cars = response.data;
    });
  },
  methods: {
    createCar: function() {
      var params = {
        make: this.newCarMake,
        model: this.newCarModel,
        submodel: this.newCarSubmodel,
        color: this.newCarColor,
        year: this.newCarYear
      };
      axios.post("/api/cars", params).then(response => {
        this.cars.push(response.data);
        this.newCarMake = "";
        this.newCarModel = "";
        this.newCarSubmodel = "";
        this.newCarColor = "";
        this.newCarYear = "";
      });
    }
  }
};
</script>