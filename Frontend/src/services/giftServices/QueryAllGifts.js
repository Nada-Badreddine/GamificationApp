
import { gql } from '@apollo/client'

export const LOAD_GIFTS = gql`
    query {
      gifts {
        id
    Name
    Description
    created_at
    Img {
      formats
    }
  }
    }
 `

export const LOAD_GIFTS_BY_CATEGORY = gql`
query($id: ID!) {
  category(id: $id) {
    Name
    gifts {
      id
      Name
      Description
      PointNumber
      Img {
      formats
    }

    }
  }
}
`


;