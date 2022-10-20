import { ProductInput } from '../typings/custom'

interface EditProducyArg {
  id: number
  product: ProductInput
}

export const editProduct = (
  _: any,
  { id, product }: EditProducyArg,
  { clients: { product: productClient } }: Context
) => productClient.editProduct(id, product)