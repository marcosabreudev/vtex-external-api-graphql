import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import type { Product } from '../../typings/custom'

export class ProductClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://fakestoreapi.com', context, {
      ...options,
      headers: {
        ...(options?.headers ?? {}),
        'X-Vtex-Use-Https': 'true',
      }
    })
  }

  public async products(): Promise<Product[]> {
    return await this.http.get(`/products`)
  }

  public async product(id: number): Promise<Product> {
    return await this.http.get(`/products/${id}`)
  }
}