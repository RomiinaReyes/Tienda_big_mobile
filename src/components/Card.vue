<template>
    <div>
  <b-card
    title=""
    img-src="https://falabella.scene7.com/is/image/Falabella/15324872_1?wid=800&hei=800&qlt=70"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
    {{subtitulo}}
    </b-card-text>
    <b-card-text>
    {{parrafo}}
    </b-card-text>
  </b-card>
</div>
</template>
<script>
export default{
name:'card',
data(){
    return{

    }

},
props:{
    subtitulo:String,
    parrafo:String
}
}


</script>
