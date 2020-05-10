import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import farsiquestion from '~/store/farsiquestion'

let farsiquestionStore: farsiquestion

function initialiseStores(store: Store<any>): void {
  farsiquestionStore = getModule(farsiquestion, store)
}

export { initialiseStores, farsiquestionStore }
