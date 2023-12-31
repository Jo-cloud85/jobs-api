#### App Info

![./screenshots/Main.png](./screenshots/Main.png)

This is a jobs (RESTful) api project hosted on render.com.

The api UI is simply setup via Swagger UI.

Click here to explore: https://jobs-api-bwjg.onrender.com/api-docs/

This app is built using:
- Node.js with Express.js
- MongoDB
- Swagger UI
- json Web Token Authentication
- and many more...

#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet - sets various http headers to prevent numerous possible attacks
- cors (stands for cross-origin resource sharing) - ensures our API is accessible from different domain. It is a mechanism to allow or restrict requested resources on a web server.
- (!! deprecated) xss-clean - sanitizes the user input in req.body,req.query and req.params, thus protecting us from cross-site scripting attacks where the attacker tries to inject some malicious code.
- express-rate-limit - to limit the amount of request the user can make

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```

#### Acknowledgement
- This project is done in conjunction with Instructor John Smilga in the following course
- Instructor John Smilga - Node.js course (https://johnsmilga.com/)