import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        results: { correct_answers: 0, incorrect_answers: 0 },
        questions: [],
    },
    getters: {},
    mutations: {
        translateData: function (state, questions) {
            var array = []
            for (var i = 0; i < questions.length; i++) {
                questions[i].question = htmlDecode(questions[i].question); questions[i].correct_answer = htmlDecode(questions[i].correct_answer); questions[i].incorrect_answers.push(questions[i].correct_answer);
                for (var j = 0; j < questions[i].incorrect_answers.length; j++) {
                    questions[i].incorrect_answers[j] = htmlDecode(questions[i].incorrect_answers[j]);
                }
                shuffle(questions[i].incorrect_answers);
            }
            state.questions = questions;
        },
        setResults(state, answers) {
            state.results.correct_answers = answers.corrects;
            state.results.incorrect_answers = answers.incorrects;
        },
    },
    getters: {
        getScore(state) {
            var total = state.results.correct_answers + state.results.incorrect_answers;
            return state.results.correct_answers + " / " + total
        }
    },

    actions: {
        getQuestions(context) {
            return new Promise(function (resolve, reject) {
                Vue.http.get('https://opentdb.com/api.php?amount=10')
                    .then(function (data) {
                        console.log(data.body.results);
                        context.commit('translateData', data.body.results)
                        resolve(true)
                    })
                    .catch(function (data) {
                        console.log('Error:', data)
                        reject(false)
                    })
            })
        }
    }
}),

    htmlDecode = function (input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
    },
    shuffle = function (a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }