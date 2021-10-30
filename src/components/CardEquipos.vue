<template>
  <div>
    <b-card
      title=""
      img-src="https://www.cheso.com.py/img/celulares.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text class="text-center">
        <h1>{{id}}</h1>
      </b-card-text>
      <b-card-text>
        {{nombre}}
      </b-card-text>
      <b-card-text>
        {{caracteristicas}}
      </b-card-text>
      <b-card-text>
        precio antes: {{precio_normal}}
      </b-card-text>
       <b-card-text>
        precio oferta: {{precio_promo}}
      </b-card-text>

      <b-button @click="agregarEquipos(); funcionSubTotal()" variant="primary">Agregar</b-button>
    </b-card>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default{
    name: "cardEquipos",
    data() {
        return{
          width: 200,
        }
    },
    props:{
        id:String,
        nombre:String,
        caracteristicas:String,
        precio_normal:String,
        precio_promo:String,
        array1:[]
    },
    computed:{
      ...mapState(['equiposAgregados']),

    },
    methods:{
      ...mapActions(['agregarEquiposAction','agregarfuncionSubTotalAction'],),
      agregarEquipos(){
        const obj = {nombre:this.nombre,precio:this.precio_promo}
        this.agregarEquiposAction(obj)
      },
      funcionSubTotal(){
        let obj = {cantidad:parseInt(this.precio_promo)}
        this.agregarfuncionSubTotalAction(obj)
      }
      },
    }


</script>

