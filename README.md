# Tech stack

- Jest
- Koa.js
- Typescript
- Node

# build image

> docker build -t voxus:challenge .

# run docker container

> docker run -d --name sunset -p 8000:8000 sunset:challenge

# Request for api:

> curl -L -X GET 'localhost:8000/sunrise-sunset?latitude=-23.5653114&longitude=-46.642659&type=sunset'

# Run Project (no Docker):

> npm install

or

> yarn install


> npm run dev

or

> yarn dev


# Run tests:

> npm test

or

> yarn test
