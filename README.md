# Project Name

**Project description**
  Booking service for travel destinations.

## Related Projects

  - https://github.com/SSN8KSS/gallery-proxy
  - https://github.com/SSN8KSS/Sam-Reviews-SDC
  - https://github.com/SSN8KSS/repo

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [Server API](#Server)

## Usage

> TODO: Some usage instructions

## Requirements

- TODO: Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```



## Server API

### Get hotel photos
  * GET: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```
{
  id: { type: Number, unique: true },
  name: String,
  photoAlbums: [ String ],
  price: Number,
  photos: {
    id: String,
    albums: [ String ],
    filters: [ String ],
    date: Date,
    caption: String,
    trips: [ String ],
    helpful: Number,
    url: String
    user: {
      id: String,
      username: String,
      location: String,
      type: String,
      avatarUrl: String,
      rating: Number,
      contributions: Number,
      review: String
    }
  }
}
```

### Add hotel
  * Post: `/api/hotels/:hotelId`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```
{
  id: { type: Number, unique: true },
  name: String,
  photoAlbums: [ String ],
  price: Number,
  photos: {
    id: String,
    albums: [ String ],
    filters: [ String ],
    date: Date,
    caption: String,
    trips: [ String ],
    helpful: Number,
    url: String
    user: {
      id: String,
      username: String,
      location: String,
      type: String,
      avatarUrl: String,
      rating: Number,
      contributions: Number,
      review: String
    }
  }
}
```


### Update hotel info
  * Patch: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```
{
  id: { type: Number, unique: true },
  name: String,
  photoAlbums: [ String ],
  price: Number,
  photos: {
    id: String,
    albums: [ String ],
    filters: [ String ],
    date: Date,
    caption: String,
    trips: [ String ],
    helpful: Number,
    url: String
    user: {
      id: String,
      username: String,
      location: String,
      type: String,
      avatarUrl: String,
      rating: Number,
      contributions: Number,
      review: String
    }
  }
}
```

### Delete hotel
  * Delete: `/api/hotels/:id/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`
