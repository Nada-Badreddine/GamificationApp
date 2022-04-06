
import { gql } from '@apollo/client'

 export const GET_ORDERS_BY_USER = gql`
query user($id: ID!
    $publicationState: PublicationState) {
  user(id: $id, publicationState: $publicationState) {
    orders {
      id
      TotalCart
      status
      created_at
    }
  }
}
`