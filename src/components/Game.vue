<template>
   <div class='game d-flex align-items-center'>
    <div class='card w-75 text-center py-4 mx-auto'>
     <question v-bind:question='question'></question>
     <answers v-bind:answers='object' v-on:nextQuestion='getQuestion($event)'></answers>
    </div> 
  </div>
</template>

<script>
    import Question from './Question.vue'
    import Answers from './Answers.vue'
    export default{
      components:{
        question: Question,
        answers: Answers
      },
      data: function(){
  			return{
   				questions: this.$store.state.questions,
   				question:'',
   				object: {},
   				result:{
     				corrects:0,
     				incorrects:0
   				},
   				gameActive: true
 				}
			},
			methods:{
				getQuestion: function(answer){
					if(answer){
					this.result.corrects++
					}
					else if(answer == false){
					this.result.incorrects++
					}
					else if(answer == null){}
					if(this.questions[0]){
					this.gameActive = true;
					this.object = this.questions.shift();
					this.question = this.object.question;
					}
					else{
					this.$store.commit('setResults', this.result);
					this.$router.push({name: 'results'})
					}
				}
			},
			created(){
				this.getQuestion()
   				console.log(this.questions)
			}
    }
</script>

<style scoped>

.game{
	min-height: 100vh;
}
</style>