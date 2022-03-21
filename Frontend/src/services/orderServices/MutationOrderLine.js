import { gql } from '@apollo/client'

export const ADD_GIFTS_TO_LINE_MUTATION  = gql`

mutation($input: createOrderItemInput) {
  createOrderItem(input: $input) {
    orderItem {
      id
    }
  }
}


  `




