## youtube-download-api

![NodeJs](https://img.shields.io/badge/-Node.js-default?style=flat-square&logo=Node.js&logoColor=white)
![Api Status](https://img.shields.io/uptimerobot/status/m787646625-9e12bd5c124f2378511a4dec?style=flat-square)
![BaseUrl](https://img.shields.io/github/license/matheusishiyama/youtube-download-api?style=flat-square)

REST API to download `.mp3` and `.mp4` files.

**Base URL endpoint** `https://youtube-download-api.matheusishiyama.repl.co`

---

### Methods:

[Video Info](#get-video-info) |
[Download .mp3](#get-download-mp3-file) |
[Download .mp4](#get-download-mp4-file)

---

#### `GET` Video Info

**endpoint:** `BaseURL/info/?url=value`

| Query | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | youtube url link |

**Response:**

```json
{
    "title": "Video title",
    "thumbnail": "Video thumbnail url"
}
```

---

#### `GET` Download `mp3` file

**endpoint:** `BaseURL/mp3/?url=value`

| Query | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | youtube url link |

**Response:**

`<video-name>.mp3` file

---

#### `GET` Download `mp4` file

**endpoint:** `BaseURL/mp4/?url=value`

| Query | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | youtube url link |

**Response:**

`<video-name>.mp4` file

---

_by Bravan_
