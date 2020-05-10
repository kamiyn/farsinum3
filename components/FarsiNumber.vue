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

  private randnumNormal(): number {
    return farsiquestionStore.randnum
  }

  private NewQuestion(): boolean {
    farsiquestionStore.setShowFarsi(false)
    farsiquestionStore.newQuestion()
    return true
  }

  private randnumFarsi(): string {
    return this.farsiString(farsiquestionStore.randnum, 0)
  }

  private farsiString(n: number, prevK: number /* 3桁ごとに1増える */): string {
    if (prevK === 0 && n === 0) {
      return 'صفر' // "sefr";
    }
    const knum = Math.floor(n / 1000)
    const kstr = this.handredString(n - knum * 1000) + this.mstr(prevK)
    const prevstr = knum > 0 ? this.farsiString(knum, prevK + 1) : ''
    return prevstr + (prevstr && kstr ? ' و ' : '') + kstr
  }

  private handredString(n: number): string {
    const hnum = Math.floor(n / 100)
    const bnum = n - hnum * 100
    const hstr = this.hstr(hnum)
    const bstr = this.bstr(bnum)
    return hstr + (hstr && bstr ? ' و ' : '') + bstr
  }

  private bstr(bnum: number): string {
    if (bnum < 20) {
      return this.cstr(bnum)
    } else {
      const dnum = Math.floor(bnum / 10)
      const cnum = bnum - dnum * 10
      const dstr = this.dstr(dnum)
      const cstr = this.cstr(cnum)
      return dstr + (dstr && cstr ? ' و ' : '') + cstr
    }
  }

  private mstr(k: number) {
    switch (k) {
      case 0:
        return ''
      case 1:
        return ' هزار ' // " hazaar";
      case 2:
        return ' میایون ' // " miiliyuun";
    }
    return ''
  }

  private hstr(hnum: number): string {
    switch (hnum) {
      case 0:
        return ''
      case 1:
        return 'صد' // "sad ";
      case 2:
        return 'دویست' // "deviist ";
      case 3:
        return 'سیصد' // "siisad ";
      case 4:
        return 'چهارصد' // "chahaarsad ";
      case 5:
        return 'پانصد' // "paansad ";
      case 6:
        return 'ششصد' // "sheshsad ";
      case 7:
        return 'هفتصد' // "haftdsad ";
      case 8:
        return 'هشتصد' // "hashtsad ";
      case 9:
        return 'نهصد' // "nohsad ";
    }
    return ''
  }

  private dstr(dnum: number): string {
    switch (dnum) {
      case 0:
        return ''
      case 1:
        return ''
      case 2:
        return 'بیست' // "bist", "bis";
      case 3:
        return 'سی' // "si";
      case 4:
        return 'چهل' // "chehel", "chel";
      case 5:
        return 'پنجاه' // "panjaah", "panjaa";
      case 6:
        return 'شصت' // "shast", "shas";
      case 7:
        return 'هفتاد' // "haftaad";
      case 8:
        return 'هشتاد' // "hashtaad";
      case 9:
        return 'نود' // "navad";
    }
    return ''
  }

  private cstr(cnum: number): string {
    switch (cnum) {
      case 0:
        return '' // "sefr";
      case 1:
        return 'یک' // "yek";
      case 2:
        return 'دو' // "do";
      case 3:
        return 'سه' // "se";
      case 4:
        return 'چهار' // "chaahar", "chaar";
      case 5:
        return 'پنج' // "panj";
      case 6:
        return 'شش' // "shesh", "shish";
      case 7:
        return 'هفت' // "haft";
      case 8:
        return 'هشت' // "hasht";
      case 9:
        return 'نه' // "nou";
      case 10:
        return 'ده' // "dah";
      case 11:
        return 'یازده' // "yazdah", "yaaza";
      case 12:
        return 'دوازده' // "davazdah", "davaaza";
      case 13:
        return 'شیزده' // "sizdah", "siza";
      case 14:
        return 'چهارده' // "chardar", "chaarda";
      case 15:
        return 'پانزده' // "paanzdah", "punza";
      case 16:
        return 'شانزده' // "shaanzdah", "shunza";
      case 17:
        return 'هفده' // "hefdah", "hivda";
      case 18:
        return 'هجده' // "hejdah", "hizhda";
      case 19:
        return 'نوزده' // "nuuzdar", "nuza";
    }
    return ''
  }
}
</script>

<style></style>
