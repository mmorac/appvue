<template>
  <div class="hello">
    <div class="container titulo">
      Mira humano, estos son algunos códigos de error del HyperText Transfer Protocol:
    </div>
    <ul class="list-group lista">
      <li class="list-group-item elemento" v-for="item of Errores" v-bind:key="item.codigo">
          El error {{ item.codigo }} significa {{ item.descripcion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
        mensaje: String
    },
    data() {
        return {
            Errores: [
                {
                    codigo: "200",
                    descripcion: "Éxito"
                },
                {
                  codigo: "403",
                  descripcion: "Prohibido"
                },
                {
                  codigo: "404",
                  descripcion: "No encontrado"
                },
                {
                  codigo: "502",
                  descripcion: "Bad Gateway"
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #d5cfb6;
  height: 23em;
}

.titulo{
  background-color: transparent;
}

.lista{
  padding-top: 4em;
}
.elemento{
  background-color: transparent;
}

</style>
