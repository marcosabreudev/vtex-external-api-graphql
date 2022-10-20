export const product = (
  _: any,
  { id }: { id: number },
  { clients: { product: productClient } }: Context
) => productClient.product(id)