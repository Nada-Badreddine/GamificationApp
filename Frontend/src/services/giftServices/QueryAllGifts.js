
import { gql } from '@apollo/client'

export const LOAD_GIFTS = gql`
    query {
      gifts {
        id
    Name
    Description
    Img {
      formats
    }
  }
    }
 `

export const LOAD_GIFTS_BY_CATEGORY = gql`
query($id: ID!) {
  category(id: $id) {
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