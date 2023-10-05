type ID = number | string

export type Asset = {
  id: string
}

export type Author = {
  id: ID
  name: string
  x_handle: string
}

export type BlogPost = {
  id: number
  slug: string
  status: string
  sort: null | String
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  content: string
  excerpt: string
  date_published: string
  author: Author
  title: string
  cover_image: Asset
}

export type Page = {
  id: number
  slug: string
  name: string
  content: string
}

export type Lead = {
  email: string
  phoneNumber?: string
  message: string
}
