export interface Root {
  data: pdtDetails
}

export interface pdtDetails {
  sold: number
  images: string[]
  subcategory: SubcategoryD[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: CategoryD
  brand: BrandD
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  __v: number
  reviews: any[]
  id: string
}

export interface SubcategoryD {
  _id: string
  name: string
  slug: string
  category: string
}

export interface CategoryD {
  _id: string
  name: string
  slug: string
  image: string
}

export interface BrandD {
  _id: string
  name: string
  slug: string
  image: string
}
