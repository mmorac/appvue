<template>
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand opcion" href="/">HTTPerros</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link opcion" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link opcion" to="/hello">Te explico</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link opcion" to="/form">Form</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
    export default {
        name: 'NavbarComponent'
    }
</script>

<style lang="css" scoped>
    nav{
        background-color: #9d9974;
    }
    .opcion{
        color: white;
    }

</style>