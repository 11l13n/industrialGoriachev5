# Express Click Counter by Goryachev

A simple Express application that implements a **click counter** using a REST API.
The project demonstrates routing, controllers, middleware, request parameter handling,
static files serving, and modular project structure.

---

## How to install and run

```bash
npm install
npm start
```

---

## API Endpoints

### GET `/api/counter`
Returns the current counter value.

Example response:
```json
{ "count": 5 }
```

---

### POST `/api/counter/increment`
Increases the counter value.

Optional query parameter:
```
?step=1
```

Example response:
```json
{ "count": 6 }
```

---

### PUT `/api/counter/set`
Sets the counter to a specific value.

Request body (JSON):
```json
{ "value": 10 }
```

Example response:
```json
{ "count": 10 }
```

---

### DELETE `/api/counter/reset`
Resets the counter to zero.

Example response:
```json
{ "count": 0 }
```

---

## Middleware usage

The application includes a **custom middleware** that logs each incoming request
(HTTP method and URL) to the server console.

Example output:
```
GET /
POST /api/counter/increment
```
<img width="538" height="545" alt="Screenshot 2025-12-16 at 13 16 34" src="https://github.com/user-attachments/assets/906b182d-b72e-40f1-84a1-ddde7bc5bd62" />

<img width="781" height="99" alt="Screenshot 2025-12-16 at 13 18 06" src="https://github.com/user-attachments/assets/0349ebcd-da8e-4619-8fd3-7aa5460c9370" />

