<script>
    import {Doughnut} from 'vue-chartjs'
    
    export default{
        extends: Doughnut,
        data() {
            return {
                incorrects: this.$store.state.results.incorrect_answers,
                corrects: this.$store.state.results.correct_answers
            }
        },
        mounted() {
            this.renderChart({
                labels: ['Incorrects Answers', 'Correct Answers'],
                datasets: [{
                    backgroundColor: ['#E74C3C', '#82BF56'],
                    data: [this.incorrects, this.corrects]
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false
            })
        }
    }
</script>