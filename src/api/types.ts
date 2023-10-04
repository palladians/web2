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
  date_published: string
  author: Author
  title: string
  cover_image: Asset
}
