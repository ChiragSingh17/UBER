# /users/register Endpoint Documentation

## Description
The `POST /users/register` endpoint creates a new user by accepting registration data.

## Request Body
- **fullname**: Object containing user names.
  - **firstname**: string (required, minimum 3 characters)
  - **lastname**: string (optional)
- **email**: string (required, must be a valid email)
- **password**: string (required, minimum 6 characters)

## Response
- **201 Created**: User successfully registered. Returns a JSON object with a token and user details.
- **400 Bad Request**: Validation errors with details of the failed fields.

## Example Responses

 - **user**(object):
  - **fullname**: (Object).
   - **firstname**: string (required, minimum 3 characters)
   - **lastname**: string (optional)
  - **email**: string (required, must be a valid email)
  - **password**: string (required, minimum 6 characters)

- `token` (String): JWT Token

## /users/login Endpoint Documentation

### Description
The `POST /users/login` endpoint authenticates a user using email and password.

### Request Body
- **email**: string (required, must be a valid email)
- **password**: string (required)

### Response
- **200 OK**: Returns a JSON object with a JWT token and user details.
- **400 Bad Request**: Returns validation errors.
- **401 Unauthorized**: Returned when credentials are invalid.

### Example Response
```json
{
  "token": "JWT token string",
  "user": {
    // ...user properties...
  }
}
```

## /users/profile Endpoint Documentation

### Description
The `GET /users/profile` endpoint retrieves the authenticated user's profile information.

### Headers
- **Authorization**: Bearer {token} (required)

### Response
- **200 OK**: Returns the user's profile data
- **401 Unauthorized**: Returned when no valid token is provided

### Example Response
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

## /users/logout Endpoint Documentation

### Description
The `GET /users/logout` endpoint invalidates the current user's authentication token.

### Headers
- **Authorization**: Bearer {token} (required)

### Response
- **200 OK**: Successfully logged out
- **401 Unauthorized**: Returned when no valid token is provided

### Example Response
```json
{
  "message": "Logged out successfully"
}
```

# Captain Endpoints

## /captain/register Endpoint Documentation

### Description
The `POST /captain/register` endpoint creates a new captain account with vehicle details.

### Request Body
- **fullname**: Object containing captain names
  - **firstname**: string (required, minimum 3 characters)
  - **lastname**: string (optional)
- **email**: string (required, must be a valid email)
- **password**: string (required, minimum 6 characters)
- **vehicle**: Object containing vehicle details
  - **color**: string (required, minimum 3 characters)
  - **plate**: string (required, minimum 3 characters)
  - **capacity**: number (required)
  - **vehicleType**: string (required, must be one of: 'car', 'motorcycle', 'auto')

### Response
- **201 Created**: Captain successfully registered. Returns a JSON object with token and captain details.
- **400 Bad Request**: Validation errors with details of the failed fields.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response
```json
{
  "token": "JWT token string",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "captain_id",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```


