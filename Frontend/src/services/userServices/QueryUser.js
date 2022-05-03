import { gql } from '@apollo/client'

export const LOAD_USER_BY_ID = gql`
query($id: ID!) {
    user(id: $id) {
      username
      ImgProfil {
        formats
      }
      user_rewards {
        
        type_rewards {
          Title
          PointNumber
        }
        Description
      }
      job
    }
  }
    
 `

 export const LOAD_USERS = gql`
 query{
  users {
    username
    job
    ImgProfil {
      url
    }
  }
}
`


 ;



