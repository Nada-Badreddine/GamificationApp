
import { gql } from '@apollo/client'

export const LOAD_REWARDS_BY_USER = gql`

query($id: ID!) {
  user(id: $id) {
    user_rewards {
      Description
      type_rewards {
        Title
        MaxPointNumber
      }
    }
  }
}
  `