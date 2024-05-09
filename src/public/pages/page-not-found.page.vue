<script>
export default {
  name: "page-not-found",
}
</script>

<template>
  <div class="card-notfound">
    <h1 class="title">Error 404</h1>
    <h2>Page not found</h2>
    <div class="router-link-sidebar">
      <router-link  :to="{name:'home'}" aria-label="Redirect to home">
        <pv-button><i class="pi pi-home" style="margin-right: 10px;"></i>Home</pv-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.card-notfound{
  text-align: center;
  width: 70vw;
  height: 75vh;
  display: block;
  padding: 2rem;
  margin: auto;
}
.router-link-sidebar {
  display: flex;
  color: white;
  justify-content: center;
  width: 100%;
  margin: auto;
}
.title{
  text-align: center;
}
button{
  color: white;
  background-color: #214729;
}
</style>