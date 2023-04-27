import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, page: $page) {
      _id
      name
      remarks
      price
      images
      tags
      createdAt
      pickedCount
      seller {
        name
        picture
      }
    }
  }
`;

export const FETCH_USEDITEMS_OFTHEBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
    }
  }
`;
