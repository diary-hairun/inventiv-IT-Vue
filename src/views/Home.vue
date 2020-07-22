<template>
  <div class="home">
    <div class="p-3">
      <nav class="nav justify-content-end">
        <router-link class="btn btn-primary" to="/login">Login</router-link>
        <router-link class="btn btn-primary" to="/register">Register</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: url(../assets/color-logo.png) center no-repeat,
    url(../assets/spark-bg.png) 0 0 / 300px 200px repeat;
}
nav a:first-of-type {
  margin-right: 1.25rem;
}
</style>