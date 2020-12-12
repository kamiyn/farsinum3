import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'farsiquestion',
  stateFactory: true,
  namespaced: true
})
export default class FarsiQuestionModule extends VuexModule {
  randnum = 0
  showFarsi = false

  @Mutation
  newQuestion() {
    this.randnum = Math.floor(Math.pow(10, Math.random() * 8))
  }

  @Mutation
  setShowFarsi(v: boolean){
    this.showFarsi = v;
  }
}
