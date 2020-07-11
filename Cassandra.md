## Define Queries

### Create a hotel
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

### Get a hotel
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

### Update a hotel's info
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

### Delete a hotel
* Delete: `/api/hotels/:hotelId`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`


### Create photo(s) to specific hotel
* Post: `/api/hotels/:hotelId/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `201`

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


### Get photos of a specific hotel
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

### Delete photo(s) of specific hotel
* Delete: `/api/hotels/:hotelId/photos/:photoId`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`
