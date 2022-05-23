
import { gql } from '@apollo/client'

export const LOAD_TYPE_REWARDS = gql`
    query {
      typeRewards  {
    Title
    Description
    PointNumber

  }
    }
 `
;