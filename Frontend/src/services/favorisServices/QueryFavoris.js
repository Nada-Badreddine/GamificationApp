
import { gql } from '@apollo/client'

export const LOAD_FAVORIS = gql`


query {
    favorises {
      id
      gifts {
        id
        Name
      }
      users_permissions_users {
        id
        username
      }
    }
  }
  
 `

export const LOAD_FAVORIS_BY_USER_ID = gql`


query($id: ID!) {
  user(id: $id) {
    favorises {
      id
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
}
  
 `


;