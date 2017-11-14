import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Game from '@/components/Game'
import Results from "@/components/Results";
import Import from "@/components/Import";
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/import',
      name: 'import',
      component: Import
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
  ]
})
