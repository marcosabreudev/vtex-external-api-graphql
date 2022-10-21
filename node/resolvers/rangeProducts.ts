export const rangeProducts = (
    _: any,
    { limit }: { limit: number },
    { clients: { product: productClient } }: Context
) => productClient.rangeProducts(limit)