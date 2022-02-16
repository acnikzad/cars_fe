<template>
  <body class="is-preload">
    <div id="wrapper">

    <div class="home">
    <!-- Introduction -->
      <div class="spotlight">
        <div class="content">
<!--           <header class="major">
            <h2>Ipsum sed adipiscing</h2>
          </header>
          <p>Sesdasdad lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
          adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
          Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
          <ul class="actions">
            <li><a href="generic.html" class="button">Learn More</a></li>
          </ul>
          <span class="image"><img src="images/pic01.jpg" alt="" /></span> -->
          <section id="content" class="main">
            <div class ="row">
              <!-- <div class="aln_center"> -->
                <br>
                <br>
                <br>
                <h1>All Cars</h1>
                <div class="row">
                  <div class="col span_3_of_12" v-for="car in cars">
                    <h2>{{ car.make }}</h2>
                      <p>Model: {{ car.model}} {{ car.submodel}}</p>
                      <p>Color: {{ car.color }}</p>
                      <p>Year: {{ car.year}}</p>
                  </div>
                </div>
              <!-- </div> -->
            </div>
            <div class ="row">
              <div class="align-center off-5">
                <h1>Add a car:</h1>
                <div>
                  <p>Year: <input type="text" v-model="newCarYear"/></p>
                  <p>Make: <input type="text" v-model="newCarMake"/></p>
                  <p>Model: <input type="text" v-model="newCarModel"/></p>
                  <p>Submodel: <input type="text" v-model="newCarSubmodel"/></p>
                  <p>Color: <input type="text" v-model="newCarColor"/></p>
                  <button v-on:click="createCar()">Add car</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  </body>
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