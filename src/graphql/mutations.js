/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
      id
      entryType
      albumId
      masterId
      mainReleaseId
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
      id
      entryType
      albumId
      masterId
      mainReleaseId
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
      id
      entryType
      albumId
      masterId
      mainReleaseId
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
export const createWishList = /* GraphQL */ `
  mutation CreateWishList(
    $input: CreateWishListInput!
    $condition: ModelWishListConditionInput
  ) {
    createWishList(input: $input, condition: $condition) {
      id
      entryType
      albumId
      masterId
      mainReleaseId
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
export const updateWishList = /* GraphQL */ `
  mutation UpdateWishList(
    $input: UpdateWishListInput!
    $condition: ModelWishListConditionInput
  ) {
    updateWishList(input: $input, condition: $condition) {
      id
      entryType
      albumId
      masterId
      mainReleaseId
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
export const deleteWishList = /* GraphQL */ `
  mutation DeleteWishList(
    $input: DeleteWishListInput!
    $condition: ModelWishListConditionInput
  ) {
    deleteWishList(input: $input, condition: $condition) {
      id
      entryType
      albumId
      masterId
      mainReleaseId
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
