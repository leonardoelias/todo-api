# Todo Api

* [express](https://www.npmjs.com/package/express)
* [passport](https://www.npmjs.com/package/passport)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [winston](https://www.npmjs.com/package/winston)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Project
```
├── app
│   ├── authentication
│   ├── helpers
│   ├── routes
│   ├── tests
|   |    ├── auth
|   |    ├── seed
|   |    ├── todos
|   |    ├── users
│   ├── todos
│   ├── users
├── config
├── .env
├── .eslintrc
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── README.md
```

## Installation
```
$ npm install
```
Set environment variables:
```
cp .env.example .env
```
## Running Locally
```sh
# development
npm run dev

# production
npm run prod

# test
npm run test
```
