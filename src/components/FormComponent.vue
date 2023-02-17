<template>
    <div class="formulario">
        <p>
            Ingresa el código de error que quieres ver y dale clic a buscar
        </p>
        <div class="input-group mb-3 contenedorform">
            <input type="text" class="form-control inputcodigo" placeholder="Error HTTP" aria-label="Error HTTP" aria-describedby="boton" v-model="codigo">
            <button class="btn btn-outline-secondary" type="button" id="boton" @click="submit">Buscar</button>
        </div>        
        <img class="perrito" id="fotoperrito" />
    </div>
</template>

<script>
    export default {
        name: "FormComponent",
        data(){
            return{
                codigo: "",
                url: ""
            }
        },
        methods: {
            submit(){
                this.url = "https://http.dog/"+ this.codigo + ".jpg";
                document.getElementById("fotoperrito").src = this.url;
            }
        }
    }
</script>

<style lang="css" scoped>
    .formulario{
        font-family: GoodDog;
        background-color: #d5cfb6;
        height: 23em;
    }

    .inputcodigo{
        background-color: #9d9974;
    }
    .contenedorform{
        padding-top: 5em;
    }

    .perrito{
        height: 15em;
    }

</style>