FROM node:lts-alpine AS BUILD_IMAGE

WORKDIR /usr/app

COPY . .

# install java to build antlr
RUN apk update && apk add openjdk8

# copy npm and package.json files to local
# https://docs.npmjs.com/docker-and-private-modules
# accept token parameter from outside
ARG NPM_TOKEN  
ARG NPM_TOKEN_FONT_AWESOME
COPY .npmrc .npmrc  
COPY package.json package.json  

# install dependencies
RUN npm ci

# build application
#RUN npm run build 
RUN npm run build-storybook -- -o ./dist

# delete custom npmrc to avoid token hijacking
RUN rm -f .npmrc

#FROM node:lts-alpine

#WORKDIR /usr/app

# copy from build image
#COPY --from=BUILD_IMAGE /usr/app/dist ./dist
#COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules

CMD npm run storybook
#CMD ["node", "dist/index.html"]
#CMD ["npm", "run storybook"]