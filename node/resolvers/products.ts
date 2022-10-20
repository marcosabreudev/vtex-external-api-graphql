export const products = (
  _: any,
  __: any,
  { clients: { product: productClient } }: Context
) => productClient.products()
