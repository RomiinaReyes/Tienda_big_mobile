<template>
  <b-container class="m-1">
    <b-row>
      <b-col align="center" class="my-4">
        <h3>Checkout</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="8">
            <b-row>
              <b-col>
                <h3>Datos del Comprador</h3>
              </b-col>
            </b-row>
          </b-col>
          <b-row>
            <b-col cols="8">
              <div class="dropdown-divider"></div>
            </b-col>
          </b-row>
        </b-row>

        <b-row class="my-2">
          <b-col cols="8">
            <b-form-group label="Nombre">
              <b-form-input
                v-model="form.nombre"
                :rules="nameRules"
                id="Nombre"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="8">
            <b-form-group label="Email">
              <b-form-input
                v-model="form.email"
                :rules="emailRules"
                id="Email"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="8">
            <b-form-group label="Repetir Email">
              <b-form-input
                v-model="form.email"
                :rules="emailRules"
                id="eMailRepeat"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="8">
            <b-form-group label="Teléfono">
              <b-form-input
                v-model="form.telefono"
                :rules="telefonoRules"
                id="Teléfono"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-row>
              <b-col class="m-1">
                <h3>Datos del Despacho</h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <div class="dropdown-divider"></div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="8">
            <b-form-group label="Dirección">
              <b-form-input
                v-model="form.direccion"
                :rules="direccionRules"
                id="Dirección"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="8">
            <b-form-group label="Comuna">
              <b-form-input
                v-model="form.comuna"
                :rules="comunaRules"
                id="Comuna"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h3>Formas de Pago</h3>
            <b-col cols="8">
              <div class="dropdown-divider"></div>
            </b-col>
            <b-row>
              <b-col cols="8">
                <select class="form-select" multiple aria-label="multiple select example">
                <option selected>Selecciona una forma de pago</option>
                <option value="1">Transferencia Bancaria</option>
                <option value="2">Servipag</option>
                <option value="3">Webpay</option>
                <option value="4">Contraentrega</option>
            </select>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-col cols="8" class="text-center my-4">
          <b-btn
            class="primary"
            :disable="activar"
            to="/bigmobile.cl/equiposyaccesorios/checkout/confirmación"
          >Confirmar
          </b-btn>
            </b-col>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
          <b-col cols="4" class="m-3"> </b-col>
        <b-row>
          <b-col>
            <h3>Productos</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-divider></b-divider>
        </b-row>
        <b-row>
          <b-col
            class="my-2"
            v-for="(equipo, index) in equiposAgregados"
            :key="`A` + index"
          >
            <CardCompra 
            :nombre="equipo.nombre" 
            :precio="equipo.precio"/>
          </b-col>
        </b-row>
      </b-col>
        </b-row>

    <b-row>
      <b-dropdown class="my-2"></b-dropdown>
    </b-row>
    <b-col>
      <b-row class="my-1"></b-row>
      <h3>Sub total Productos :${{ subTotal }}</h3>
      <b-row class="my-1"></b-row>
      <h3>Descuentos :${{ descuento }}</h3>
      <b-row class="my-1"></b-row>
      <h2>Total :${{ descuento }}</h2>
    </b-col>
          </b-col>
        </b-row>
        
  </b-container>
</template>

<script>
import CardCompra from '../components/CardCompra.vue'
import { mapState } from 'vuex'

export default {
  names: 'Checkout',
  components: {
    CardCompra
  },
  data () {
    return {
      radioGroup: 1,
      valid: false,
      activar: true,
      nameRules: [
        v => !!v || 'Su nombre es requerido',
        v => v.lenght <= 10 || 'El nombre debe contener al menos 10 caracteres'
      ],
      direccionRules: [
        v => !!v || 'La dirección es requerida',
        v =>
          v.lenght <= 10 || 'La dirección debe contener al menos 10 caracteres'
      ],
      comunaRules: [
        v => !!v || 'Ingrese el nombre de la comuna',
        v => v.lenght <= 10 || 'La Comuna debe contener al menos 7 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El email es requerido',
        v => /.+@.+/.test(v) || 'El e-mail debe ser válido'
      ],
      resultado: false,
      form: {
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        comuna: ''
      }
    }
  },
  computed: {
    ...mapState(['equiposAgregados', 'subTotal', 'total', 'descuento'])
  },
  methods: {
    check () {
      let email = document.getElementById('eMail')
      let emailRepeat = document.getElementById('emailRepeat')
      if (email.value1 == emailRepeat.value) {
        alert('Los correos deben coincidir')
        this.activar = true
      } else this.activar = false
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 10px;
}
</style>
