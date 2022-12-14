import { gql } from "@apollo/client";

export const GET_SUBJECT = gql`
    query Subject($subjectId: Int!) {
        subject(id: $subjectId) {
            id
            title
            lecturers {
                fullName
                id
            }
        }
    }
`;

export const REMOVE_SUBJECT = gql`
    mutation RemoveSubject($removeSubjectId: Int!) {
        removeSubject(id: $removeSubjectId) {
            id
        }
    }
`;

export const CREATE_SUBJECT = gql`
    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {
        createSubject(createSubjectInput: $createSubjectInput) {
            id
        }
    }
`;

export const GET_SUBJECTS = gql`
    query Subjects {
        subjects {
            id
            title
        }
    }
`;
