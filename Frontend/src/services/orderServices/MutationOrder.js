import { gql } from '@apollo/client'

export const CREATE_ORDER_MUTATION  = gql`

mutation($input: createOrderInput) {
    createOrder(input: $input) {
    order {
      id
     
    }
  }
}

  `


