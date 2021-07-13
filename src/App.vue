<template>
  <div id="app">
    <div id="nav">
      <router-link to="/chart1">Chart1</router-link> |
      <router-link to="/chart2">Chart2</router-link> |
      <router-link to="/chart3">Chart3</router-link>
     </div>

     <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {

        }
    },
};
</script>

<style >
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding:  30px 30px 60px;
    background-color: #e6e6e6;
  }
  a {
    font-weight: bold;
    color:  #00b3b3;
    text-decoration: none;
  }
  a.router-link-exact-active {
    color: #009933;
  }
</style>
