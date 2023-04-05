
import { gql } from "@apollo/client";

const QUERY_LIST = gql`
query Continents {
    countries {
      name
      emoji
    }
  }
`;

const QUERY_ITEM_DETAILS = gql`
   query Query($code: String!) {
    country(code: $code) {
      name
      capital
      emoji
      currency
    }
  }
`;

export {QUERY_LIST, QUERY_ITEM_DETAILS};