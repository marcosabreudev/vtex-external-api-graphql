export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Rating {
  rate: number,
  count: number
}

export interface ProductInput {
  title: Product['title']
  price: Product['price']
  description: Product['description']
  image: Product['image']
  category: Product['category']
}