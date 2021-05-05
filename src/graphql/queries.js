/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollectionAlbum = /* GraphQL */ `
  query GetCollectionAlbum($id: ID!) {
    getCollectionAlbum(id: $id) {
      id
      releaseType
      albumId
      masterId
      mainReleaseId
      albumTitle
      artistName
      label
      releaseYear
      albumImage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCollectionAlbums = /* GraphQL */ `
  query ListCollectionAlbums(
    $filter: ModelCollectionAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionAlbums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        releaseType
        albumId
        masterId
        mainReleaseId
        albumTitle
        artistName
        label
        releaseYear
        albumImage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCollectionRelease = /* GraphQL */ `
  query GetCollectionRelease($id: ID!) {
    getCollectionRelease(id: $id) {
      id
      releaseType
      albumId
      masterId
      albumTitle
      artistName
      label
      releaseYear
      albumImage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCollectionReleases = /* GraphQL */ `
  query ListCollectionReleases(
    $filter: ModelCollectionReleaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionReleases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        releaseType
        albumId
        masterId
        albumTitle
        artistName
        label
        releaseYear
        albumImage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWishListAlbum = /* GraphQL */ `
  query GetWishListAlbum($id: ID!) {
    getWishListAlbum(id: $id) {
      id
      releaseType
      albumId
      masterId
      mainReleaseId
      albumTitle
      artistName
      label
      releaseYear
      albumImage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWishListAlbums = /* GraphQL */ `
  query ListWishListAlbums(
    $filter: ModelWishListAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishListAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        releaseType
        albumId
        masterId
        mainReleaseId
        albumTitle
        artistName
        label
        releaseYear
        albumImage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWishListRelease = /* GraphQL */ `
  query GetWishListRelease($id: ID!) {
    getWishListRelease(id: $id) {
      id
      releaseType
      albumId
      masterId
      albumTitle
      artistName
      label
      releaseYear
      albumImage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWishListReleases = /* GraphQL */ `
  query ListWishListReleases(
    $filter: ModelWishListReleaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishListReleases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        releaseType
        albumId
        masterId
        albumTitle
        artistName
        label
        releaseYear
        albumImage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
