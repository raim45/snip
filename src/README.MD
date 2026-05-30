# snip

A URL shortener API. Paste a long URL, get a short one back. Click it, get redirected. Built with Node.js and Express.

---

## Getting Started

### Installation

```bash
git clone https://github.com/raim45/snip.git
cd snip
npm install
npm run dev
```

Server runs on `http://localhost:3000`

---

## Project Structure

```
snip/
├── src/
│   ├── controllers/
│   │   └── snipC.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateUrl.js
│   ├── models/
│   │   └── snipD.js
│   ├── routes/
│   │   └── paths.js
│   └── app.js
├── data.js
└── server.js
```

---

## API Endpoints

### Get All URLs
```
GET /api/snip
```
**Response**
```json
{
  "success": true,
  "data": []
}
```

---

### Get URL by ID
```
GET /api/snip/:id
```
**Response**
```json
{
  "success": true,
  "data": {},
  "shortUrl": "http://localhost:3000/xB9j2L"
}
```

---

### Create Short URL
```
POST /api/snip
```
**Required:** `url` must be a valid URL starting with `http://` or `https://`

**Request Body**
```json
{
  "url": "https://very-long-website-url.com/some/long/path"
}
```
**Response**
```json
{
  "success": true,
  "data": {
    "id": "generated-nanoid",
    "originalUrl": "https://very-long-website-url.com/some/long/path",
    "shortCode": "xB9j2L",
    "createdAt": "2026-05-29T00:00:00.000Z",
    "click": 0
  },
  "shortUrl": "http://localhost:3000/xB9j2L"
}
```

---

### Delete URL
```
DELETE /api/snip/:id
```
**Response**
```json
{
  "success": true
}
```

---

### Redirect (the actual shortening)
```
GET /:shortCode
```
Redirects to the original URL and increments the click counter. No JSON response — browser goes straight to the destination.

---

## Data Model

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique record identifier (nanoid) |
| originalUrl | string | The original long URL |
| shortCode | string | 6-character random code (nanoid) |
| createdAt | date | When the short URL was created |
| click | number | How many times the link was visited |

---

## Note
Data is stored in memory — all URLs are lost on server restart. Database support coming in a future version.