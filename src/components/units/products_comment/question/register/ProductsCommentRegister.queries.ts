import { gql } from "@apollo/client";

export const CREATE_USEDITEM_QUESTION = gql`
mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!){
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId){
        _id
        createdAt
    }
}
`