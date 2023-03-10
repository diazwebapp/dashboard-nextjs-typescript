type Post_type ={ //Esta info está en tudominio.com/wp-json/wp/v2/types
  name:string
  slug: string
  rest_base: string
}
export const  wp_post_types:Post_type[]=[
  {
    name:"post",
    slug: "post",
    rest_base: "posts"
  },
  {
    name:"page",
    slug: "page",
    rest_base: "pages"
  },
  
]   