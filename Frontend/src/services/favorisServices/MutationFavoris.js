
import { gql } from '@apollo/client'

export const CREATE_FAVORIS_MUTATION  = gql`

mutation($input: createFavorisInput) {
    createFavoris(input: $input) {
    favoris {
      id
    }
  }
}

  `
export const DELETE_FAVORIS_MUTATION  = gql`

mutation($input: deleteFavorisInput) {
  deleteFavoris(input:$input) {
    favoris {
      id
    }
  }
}

`
