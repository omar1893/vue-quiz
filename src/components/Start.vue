<template>
  <div class="start d-flex align-items-center">
  
    <div class="card w-50 text-center py-4 mx-auto">
  
      <div class="w-75 mx-auto">
        <img src="../assets/logo.png" alt="" class="img-fluid">
      </div>
  
      <h1>Quiz Game</h1>
  
      <div class="w-50 mx-auto" id="btn-container">
        <button class="action-button animate green w-100 mb-3" v-on:click='getQuestions()'>
              Play
            </button>
        <router-link to="/score">
          <button class="action-button animate blue w-100">
              Ranking
            </button>
        </router-link>
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'start',
    data() {
      return {}
    },
    methods: {
      getQuestions() {
        var router = this.$router;
        this.$store.dispatch('getQuestions')
          .then(function(data) {
            console.log("Successful Request")
            router.push({
              name: 'game'
            })
          })
          .catch(function(data) {
            console.log("Rejected Request")
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .start {
    height: 100vh;
  }
</style>
