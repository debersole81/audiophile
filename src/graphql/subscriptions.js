/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection($owner: String!) {
    onCreateCollection(owner: $owner) {
      id
      releaseID
      albumName
      artistName
      label
      releaseYear
      albumImage {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection($owner: String!) {
    onUpdateCollection(owner: $owner) {
      id
      releaseID
      albumName
      artistName
      label
      releaseYear
      albumImage {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection($owner: String!) {
    onDeleteCollection(owner: $owner) {
      id
      releaseID
      albumName
      artistName
      label
      releaseYear
      albumImage {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWishList = /* GraphQL */ `
  subscription OnCreateWishList($owner: String!) {
    onCreateWishList(owner: $owner) {
      id
      releaseID
      albumName
      artistName
      label
      releaseYear
      albumImage {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateWishList = /* GraphQL */ `
  subscription OnUpdateWishList($owner: String!) {
    onUpdateWishList(owner: $owner) {
      id
      releaseID
      albumName
      artistName
      label
      releaseYear
      albumImage {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteWishList = /* GraphQL */ `
  subscription OnDeleteWishList($owner: String!) {
    onDeleteWishList(owner: $owner) {
      id
      releaseID
      albumName
      artistName
      label
      releaseYear
      albumImage {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
