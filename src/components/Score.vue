<template>
    <div class="score d-flex align-items-center">
        <div class="card w-75 animated bounce text-center py-4 px-5 mb-3 mx-auto">
            <h3 class="bits">Ranking</h3>
    
            <div class="container mb-4 px-5">
    
                <div class="d-flex justify-content-between mb-4">
                    <span class="bits">Username</span>
                    <span class="bits text-right">Score</span>
                </div>
    
                <div class="d-flex justify-content-between bits" v-for="user in score">
                    <span>{{user.username}}</span>
                    <span>{{user.score}}</span>
                </div>
    
            </div>
    
            <div class="w-100">
                <router-link class="w-100 d-flex justify-content-center" to="/">
                    <button class="w-50 action-button animate green bits">
                            Back
                          </button>
                </router-link>
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: []
            }
        },
        created() {
            this.$http.get('https://quiz-medium.firebaseio.com/score.json')
                .then(function(data) {
                    let arr = []
                    for (let x in data.body) {arr.push(data.body[x])}
                    this.score = arr.sort((a, b) => a.score < b.score ? 1 : -1)
                    console.log(this.score)
                })
                .catch(function(data) {
                    console.log('Error: ', data)
                })
        }
    }
</script>

<style>
    .score {
        min-height: 100vh
    }
</style>