<template>
    <b-container>
        <b-row>
        <b-col cols="6" class="mx-auto titulo">
            <h1>Confirmación</h1>
        </b-col>
    </b-row>
        <b-row>
            <b-col cols="6" class="mx-auto parrafo">
                <b-card class="pa-2 text-center" justify="center">
                    <p>
                La orden <b class="font-weight-bold"> N° {{ numeroOrden }} </b>ha sido <b class="font-weight-bold">{{ statusOrden }} </b> y ya ha sido preparada
                    </p>
                    </b-card>
            </b-col>
        </b-row>
        <b-row>
        <b-col cols="4" class="mx-auto my-2 text-center">
            <b-btn class="primary text-center" to="/">Ir al Home </b-btn>
        </b-col>
    </b-row>
    </b-container>
</template>


<script>
export default {
    
}
</script>
