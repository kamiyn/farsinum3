class ItalianHelper {
  static numberToItalian(n: number, prevK: number /* 3桁ごとに1増える */): string {
    if (prevK === 0 && n === 0) {
      return 'zero' // "Zero";
    }
    const knum = Math.floor(n / 1000)
    const kstr = this.handredString(n - knum * 1000) + this.mstr(prevK)
    const prevstr = knum > 0 ? this.numberToItalian(knum, prevK + 1) : ''
    return prevstr + (prevstr && kstr ? ' ' : '') + kstr
  }

  static handredString(n: number): string {
    const hnum = Math.floor(n / 100)
    const bnum = n - hnum * 100
    const hstr = this.hstr(hnum)
    const bstr = this.bstr(bnum)
    return hstr + (hstr && bstr ? ' ' : '') + bstr
  }

  static bstr(bnum: number): string {
    if (bnum < 20) {
      return this.cstr(bnum)
    } else {
      const dnum = Math.floor(bnum / 10)
      const cnum = bnum - dnum * 10
      const dstr = this.dstr(dnum)
      const cstr = this.cstr(cnum)
      return dstr + (dstr && cstr ? ' ' : '') + cstr
    }
  }

  // number 型の数値を イタリア語の文字列に変換する

  static cstr(cnum: number): string {
    switch (cnum) {
      case 1:
        return 'Uno' // "Uno";
      case 2:
        return 'Due';
      case 3:
        return 'Tre';
      case 4:
        return 'Quattro';
      case 5:
        return 'Cinque';
      case 6:
        return 'Sei';
      case 7:
        return 'Sette';
      case 8:
        return 'Otto';
      case 9:
        return 'Nove';
      case 10:
        return 'Dieci';
      case 11:
        return 'Undici';
      case 12:
        return 'Dodici';
      case 13:
        return 'Tredici';
      case 14:
        return 'Quattordici';
      case 15:
        return 'Quindici';
      case 16:
        return 'Sedici';
      case 17:
        return 'Diciassette';
      case 18:
        return 'Diciotto';
      case 19:
        return 'Diciannove';
      default:
        return ''
    }
  }

}

function numberToItalian(n: number): string {
  return ItalianHelper.numberToItalian(n, 0);
}

export { numberToItalian }
