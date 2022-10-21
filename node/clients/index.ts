import { IOClients } from '@vtex/api'

import { ProductClient } from './product'

export class Clients extends IOClients {
  public get product() {
    return this.getOrSet('product', ProductClient)
  }
}
