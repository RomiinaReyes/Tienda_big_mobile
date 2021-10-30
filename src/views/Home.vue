<template>
  <div>
    <div class="container-fluid px-0">
      <b-row>
        <b-col>
          <b-jumbotron
            lead="Vitrina"
            style="height: 200px; background-color: gray"
            class="text-center m-0"
          >
          </b-jumbotron>
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <b-row>
        <b-col cols="12" class="text-center">
          <h2>Planes Flexibles</h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4" v-for="(item, index) in dataPlanes" :key="index">
          <Card :subtitulo="`${item.titulo}`" :parrafo="`${item.texto}`" />
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center">
          <h2>Que dicen de nosotros</h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col v-for="(item, index) in dataOpiniones" :key="index">
          <Card2 :nombre="`${item.nombre}`" :opinion="`${item.texto}`" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";
export default {
  data() {
    return {
      dataPlanes: [],
      dataOpiniones: [],
    };
  },
  components: {
    Card,
    Card2,
  },
  created() {
    fetch("/json/home.json")
      .then((response) => response.json())
      .then((data) => {
        this.dataPlanes = data.planes;
        this.dataOpiniones = data.opiniones;
      });
  },
};
</script> 

<style>
h2 {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>