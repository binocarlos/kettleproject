# Project Kettle

Without docker:

```bash
yarn install
npx lerna bootstrap
(cd packages/frontend && yarn dev)
(cd packages/api && yarn dev)
```

With docker:

```bash
docker-compose build
docker-compose up
```