
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
    Mi Tienda NET
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/order">Ordenes</router-link>
        </li> 
        <li class="nav-item">
          <router-link class="nav-link" to="/car">Carro de compra</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/seller">Seller</router-link>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>