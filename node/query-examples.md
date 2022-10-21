mutation editProductById {
  editProduct(id: 1, product: {
    title: "nome do produto",
    price: 100.3,
    description: "descricao do produto"
  }) {
    title
    price
    description
    image
    category
  }
}

{
  product(id: 1) {
    title
    price
    category
  }
}

{
  products {
    title
    price
    category
  }
}

{
  rangeProducts(limit: 10) {
    title
    price
    category
    description
  }
}