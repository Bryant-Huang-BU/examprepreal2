FROM node:16 AS build
WORKDIR /build
COPY . .

RUN yarn install
RUN yarn run build

FROM node:16
WORKDIR /app
COPY --from=build /build .

RUN chmod +x ./frontend-entrypoint

# Running the app
ENTRYPOINT ./frontend-entrypoint