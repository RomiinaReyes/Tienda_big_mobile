<template>
  <div>
    <b-row>
      <b-col class="text-center my-3">
        <h3>Equipos y Accesorios</h3>
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col cols="3" class="m-3">
          <b-row>
            <h2>Bolsa de Compras BIG MOBILE</h2>
          </b-row>
          <b-row>
            <b-col>
              <div class="my-2"></div>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="my-2" v-for="(equipo, index) in equiposAgregados" :key="'A'+index">
              <CardCompra 
              :nombre="equipo.nombre"
              :precio="equipo.precio"
              />
            </b-col>
          </b-row>
        <b-row>
          <h3>Subtotal Productos: ${{subTotal}}</h3>
        </b-row>
        <b-row>
          <h3>Descuentos: <b>${{descuento}}</b></h3>
        </b-row>
        <b-row>
          <h3>
            Total: ${{total}}
          </h3> 
        </b-row>
        <b-row>
          <b-button to="/checkout" >Confirmar</b-button>
        </b-row>
        </b-col>
        <b-col cols="8" class="m-3">
          <b-row>
            <b-col v-for="(item, index) in productos" :key="'B'+index" cols="3">
          <Card
            :id="`${item.id}`"
            :nombre="`${item.nombre}`"
            :caracteristicas="`${item.caracteristicas}`"
            :precio_normal="`${item.precio_normal}`"
            :precio_promo="`${item.precio_promo}`"
          />
        </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <b-pagination v-model="page" :length="3"> </b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from "../components/CardEquipos.vue";
import CardCompra from '../components/CardCompra.vue'
export default {
  data() {
    return {
      dataProductos: [],
      productos: [],
      page: 1,
    };
  },
  components: {
    CardCompra,
    Card,
  },
  computed:{
    ...mapState(['equiposAgregados','subTotal','total','descuento'])
  },
  created() {
    fetch("/json/equipos.json")
      .then((response) => response.json())
      .then((data) => {
        this.productos = data.productos;
        console.log(data);
        console.log(data.productos);
      });
  },
};
</script>
<style scoped>
</style>
