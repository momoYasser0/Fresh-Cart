
export interface wishlist {
  sold: number
  images: string[]
  subcategory: Subcategory_W[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Category_W
  brand: Brand_W
  ratingsAverage: number
  id: string
}

export interface Subcategory_W {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category_W {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand_W {
  _id: string
  name: string
  slug: string
  image: string
}
