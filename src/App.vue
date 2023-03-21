<template lang="">
  <div class="container">
    <h1 class="text-center mt-5">Infactory Design System</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/colors">Colors</router-link></li>
      <li><router-link to="/shadow">Shadow</router-link></li>
      <li><router-link to="/font">Font</router-link></li>
      <li><router-link to="/buttons">Buttons</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/table">Table</router-link></li>

    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss">

</style>
