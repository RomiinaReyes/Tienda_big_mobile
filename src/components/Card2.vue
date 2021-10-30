<template>
    <div>
  <b-card
    title=""
    img-src="https://img.freepik.com/vector-gratis/gente-hablando-telefono_1343-594.jpg?size=626&ext=jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
    {{nombre}}
    </b-card-text>
    <b-card-text>
    {{opinion}}
    </b-card-text>
  </b-card>
</div>
</template>
<script>
export default{
name:'card2',
data(){
    return{

    }

},
props:{
    nombre:String,
    opinion:String
}
}


</script>