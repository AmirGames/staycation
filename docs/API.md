# API Documentation

## Authentication

### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

Response:
{
  "accessToken": "eyJhbGc...",
  "refreshToken": "eyJhbGc...",
  "user": { ... }
}
```

## Properties

### List Properties
```
GET /api/properties
Authorization: Bearer <token>

Response:
{
  "properties": [ ... ],
  "total": 42,
  "page": 1,
  "pageSize": 20
}
```

### Create Property
```
POST /api/properties
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Beautiful Apartment",
  "description": "...",
  "address": "...",
  "pricePerNight": 100,
  "bedrooms": 2,
  "bathrooms": 1
}
```

## Bookings

### Create Booking
```
POST /api/bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "propertyId": "...",
  "checkIn": "2024-07-15",
  "checkOut": "2024-07-20",
  "guestCount": 2
}
```

## Payments

### Create Payment Intent
```
POST /api/payments/intent
Authorization: Bearer <token>
Content-Type: application/json

{
  "bookingId": "...",
  "amount": 500
}

Response:
{
  "clientSecret": "...",
  "paymentId": "..."
}
```

See full documentation in BACKEND_API.md
