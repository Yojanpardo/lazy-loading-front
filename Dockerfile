# base image
FROM node

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
RUN npm install
RUN npm install react-scripts -g
RUN npm install axios -g
RUN npm install eslint-plugin-flowtype
RUN npm add axios
COPY . .
EXPOSE 3000
# start app
CMD ["npm", "start"]