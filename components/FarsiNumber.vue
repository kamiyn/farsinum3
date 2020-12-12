<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-btn @click="clickShowAnswer">show Answer</v-btn>
        <v-btn @click="NewQuestion">new Question</v-btn>
      </v-flex>
      <v-flex xs12 display-3>{{ randnumNormal() }}</v-flex>
      <v-flex xs12 display-2 v-show="showFarsi()">{{ randnumFarsi() }}</v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { farsiquestionStore } from '~/store'
import { numberToFarsi } from '~/utils/farsiString'

@Component({})
export default class FarsiNumber extends Vue {
  constructor() {
    super()
  }

  private mounted(): void {
    this.NewQuestion()
  }

  private showFarsi(): boolean {
    return farsiquestionStore.showFarsi
  }

  private clickShowAnswer(): boolean {
    farsiquestionStore.setShowFarsi(true)
    return true
  }

  private NewQuestion(): boolean {
    farsiquestionStore.setShowFarsi(false)
    farsiquestionStore.newQuestion()
    return true
  }

  private randnumNormal(): number {
    return farsiquestionStore.randnum
  }

  private randnumFarsi(): string {
    return numberToFarsi(farsiquestionStore.randnum)
  }
}
</script>

<style></style>
