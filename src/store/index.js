import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    equiposAgregados:[],
    subTotal:0,
    total:0,
    descuento:0
  },
  mutations: {
    agregaraEquipos(state, post){
      state.equiposAgregados.push({nombre:post.nombre, precio:post.precio})
    },
    subTotalMutation (state, post) {
      state.subTotal += post.cantidad
      if (state.subTotal<100000){
        let descuentoFinal = 0.05* state.subTotal 
        state.descuento = parseInt (descuentoFinal)
        state.total = state.subTotal-state.descuento
      }else{
        let descuentofinal = 0.07* state.subTotal
        state.descuento = parseInt(descuentofinal)
      }
      }
    },
  actions: {
    agregarEquiposAction(context,post){
      context.commit("agregaraEquipos",post);
    },
    agregarfuncionSubTotalAction(context,post){
      context.commit("subTotalMutation",post)}
    },
  modules: {

  },
  });
