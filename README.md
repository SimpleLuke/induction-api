<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Induction Api</h3>
   
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start">Start</a></li>
        <li><a href="#test">Test</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#test-coverage">Test Coverage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Induction API is a self-motivated backend project for Hargreaves Lansdown interview.

The API is built with Node.js with TypeScript and served as a REST API for mobile client. (Check the iOS App [Here](https://github.com/SimpleLuke/InductionApp-Swift))

The features include user registration, user login, completing and undo an induction chapter about Hargreaves Lansdown.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Express.js
- TypeScript
- Jest
- Supertest
- Bcrypt
- PostgreSQL
- Knex
- Objection.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- database
  ```
  # Install postgresql.
  $ brew install postgresql@15
  $ brew services start postgresql
  ```

- npm
  ```sh
  npm install npm@latest -g
  ```
  

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SimpleLuke/induction-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Start

1. Start the api server

   ```
   npm start
   ```
2. Or start the api test server

   ```
   npm run dev
   ```

### Test

- Run all tests
  ```
  npm test
  ```
- Run tests in the background
  ```
  npm run test:watch
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### REST API

The REST API to the example app is described below.

### Get user by id

### Request

`GET /users/:id`

    curl -i -H 'Accept: application/json' http://localhost:5000/users/1

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 100
    ETag: W/"64-rkCq676d6KsinHhlODDj0JDkSN0"
    Date: Sat, 13 May 2023 14:31:34 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"joined":"2023-05-12T23:00:00.000Z","completed":[],"id":1,"name":"Marry","email":"marry@gmail.com"}

## Create a new user

### Request

`POST /users/register`

    curl -i -X POST http://localhost:5000/users/register -H "Content-Type: application/json" -d '{"email":"tony@gmail.com", "password":"password","name":"Tony"}' 
    
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 30
    ETag: W/"1e-lv7Az3wzAwhEGKF3p2pesoPHf3o"
    Date: Sat, 13 May 2023 14:39:26 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"message":"New user created"}
    
## Sign in user

### Request

`POST /users/signin`

    curl -i -X POST http://localhost:5000/users/signin -H "Content-Type: application/json" -d '{"email":"tony@gmail.com", "password":"password"}' 
    
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 98
    ETag: W/"62-zTIeXCvs1kxrLgFi4ZkZS0iVPQM"
    Date: Sat, 13 May 2023 14:40:55 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"joined":"2023-05-12T23:00:00.000Z","completed":[],"id":6,"name":"Tony","email":"tony@gmail.com"}
    
## Get completed chapter list from a user

### Request

`GET /chapters/completed/:uesr_id`

    curl -i -H 'Accept: application/json' http://localhost:5000/chapters/completed/1
    
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-BLejGT+sboUwzNaFocEFDFXr4Ak"
    Date: Sat, 13 May 2023 14:46:26 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"completed":["HL 5 Key Values","The HL Way"]}
    
## Complete a chapter

### Request

`PATCH /chapters/completed/`

    curl -i -X PATCH http://localhost:5000/chapters/completed -H "Content-Type: application/json" -d '{"user_id":"1", "chapter_name":"HL History"}' 
    
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 59
    ETag: W/"3b-bY1Wk6OQ7EtsoSoB8e3XlBjxNU0"
    Date: Sat, 13 May 2023 14:49:40 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"completed":["HL 5 Key Values","The HL Way","HL History"]}
    
## Undo a chapter

### Request

`PATCH /chapters/undo-completed/`

    curl -i -X PATCH http://localhost:5000/chapters/undo-completed -H "Content-Type: application/json" -d '{"user_id":"1", "chapter_name":"HL History"}' 
    
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-BLejGT+sboUwzNaFocEFDFXr4Ak"
    Date: Sat, 13 May 2023 14:50:36 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"completed":["HL 5 Key Values","The HL Way"]}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Test Coverage

![image](https://github.com/SimpleLuke/induction-api/assets/89473016/103b04a0-cffe-429a-8857-07adfaca160b)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->

## Contact

- Luke Lai - [LinkedIn](https://www.linkedin.com/in/luke-lai-309a3522b/) - lukelai.dev@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

