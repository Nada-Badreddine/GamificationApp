
import { gql } from '@apollo/client'

export const LOAD_GIFTS = gql`
    query {
      gifts {
    Name
  }
    }
 `
;