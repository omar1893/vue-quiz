<template>
  <div class="results d-flex align-items-center">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <doughnut></doughnut>
      <div class="container">
        <router-link to="/import">
          <button class="action-button animate blue my-2 w-100">Upload Score</button>
        </router-link>
  
        <router-link to="/">
          <button class="action-button animate green w-100">Home Page</button>
        </router-link>
  
      </div>
    </div>
  
  </div>
</template>

<script>
  import Doughnut from './Doughnut'
  export default {
    name: 'results',
    data() {
      return {
  
      }
    },
    components: {
      "doughnut": Doughnut
    }
  }
</script>

<style>
  .results {
    min-height: 100vh
  }
</style>