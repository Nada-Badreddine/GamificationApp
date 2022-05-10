import {gql} from "@apollo/client"

export const LOGIN_MUTATION = gql`

mutation Mutation($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      username
      id
    }
  }
}




`