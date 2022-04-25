import { gql } from '@apollo/client'

export const CREATE_PRODUCT_MUTATION  = gql`
mutation($input: createProductInput) {
    createProduct(input: $input) {
      product {
        name
        price
      }
    }
  }
`