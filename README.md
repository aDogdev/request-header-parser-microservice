# 🔍 Request Header Parser Microservice

A RESTful API microservice that analyzes incoming HTTP request headers to provide client information. Built for the [freeCodeCamp Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/).

## 🚀 Features
- Extracts client's **IP address** from headers or socket.
- Detects preferred **language** from `Accept-Language` header.
- Parses **operating system** details from `User-Agent` header.
- Returns JSON response in the format:  
  ```json
  {
    "ipaddress": "::ffff:192.168.1.1",
    "language": "en-US",
    "software": "Windows NT 10.0; Win64; x64"
  }
  ```

## 🛠 Technologies
- **Backend**: Node.js, Express.js
- **Middleware**: `cors` for cross-origin requests

## 🧪 Usage Examples
```bash
# Get client info
curl https://your-api-url/api/whoami

# Example Response
{
  "ipaddress": "::ffff:159.20.14.100",
  "language": "en-US",
  "software": "Windows NT 10.0; Win64; x64"
}
```

## 📜 Credits
Project requirements and concept by [freeCodeCamp](https://www.freecodecamp.org/).  
Implementation by [Your Name](https://github.com/yourusername).