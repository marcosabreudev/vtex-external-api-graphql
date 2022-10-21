import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import type { Product, ProductInput } from '../../typings/custom'

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

  public async rangeProducts(limit: number): Promise<Product[]> {
    return await this.http.get(`/products?limit=${limit}`)
  }

  public async editProduct(id: number, product: ProductInput): Promise<any> {
    return await this.http.put(`/products/${id}`, {
      id,
      ...product
    })
  }
}