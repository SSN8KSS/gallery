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
## Define Queries

### Create a hotel (QID 1)
* Post: `/api/hotels`

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

### Get a hotel (QID 2)
* GET: `/api/hotels/:hotelId`

**Success Status Code:** `200`

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

### Update a hotel's info (QID 3)
* Patch: `/api/hotels/:hotelId`

**Success Status Code:** `204`

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

### Delete a hotel (QID 4)
* Delete: `/api/hotels/:hotelId`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`


### Create photo to specific hotel (QID 5)
* Post: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `201`

**Returns:** JSON

```
{
  id: "Number",
  hotelId: "Number",
  category: "String",
  url: "String"
} 
```


### Get photos of a specific hotel (QID 6)
* GET: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```
[ 
  {
    id: "Number",
    hotelId: "Number",
    category: "String"
    url: "String"
  } 
]
```

### Delete photo(s) of specific hotel (QID 7)
* Delete: `/api/hotels/:hotelId/photos/:photoId`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`



