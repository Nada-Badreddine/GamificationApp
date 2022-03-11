
import { gql } from '@apollo/client'

export const LOAD_GIFTS = gql`
    query {
      gifts {
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