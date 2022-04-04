import { gql } from '@apollo/client'

export const LOAD_CATEGORIES = gql`
   query {
  categories {
    id
    Name
    Img {
      formats
    }
    gifts {
      Img {
        formats
      }
    }
  }
}
 `
;