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

### Create hotel
  * Post: `/api/hotels/:hotelId`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```
{
  "id": "Number",
  "name": "String",
  "address": "String",
  "phone": "String",
  "website": "String",
  "cost": "Number"
}
```

### Get hotel photos
  * GET: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```
{
  photos: [ 
    {
      id: "Number",
      hotelId: "Number",
      url: "String"
    } 
  ]
}
```

### Update hotel photos
  * Patch: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```
{
  photos: [ 
    {
      id: "Number",
      hotelId: "Number",
      url: "String"
    } 
  ]
}
```

### Delete hotel photo
  * Delete: `/api/hotels/:hotelId/photos/:photoId`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`
