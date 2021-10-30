<template>
  <div id="app">
    <div id="nav">
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/equiposyaccesorios">Equipos y Accesorios</b-nav-item>
      <b-nav-item to="/">Planes</b-nav-item>
      <b-nav-item to="/">Prepago</b-nav-item>
      <b-nav-item to="/checkout">Checkout</b-nav-item>
      <b-nav-item to="/confirmacion">Confirmación</b-nav-item>
      <b-nav-item to="/">Oficina Virtual</b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</div>
    <router-view />
  </div>
</template>

<style>

</style>
