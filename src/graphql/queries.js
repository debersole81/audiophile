/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
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
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWishList = /* GraphQL */ `
  query GetWishList($id: ID!) {
    getWishList(id: $id) {
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
export const listWishLists = /* GraphQL */ `
  query ListWishLists(
    $filter: ModelWishListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
