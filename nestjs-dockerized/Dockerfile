#A Docker image contains application code, libraries, tools, dependencies and other files needed to make an application run.

# use the latest LTS (long term support) version 16 of node
FROM node:16

# Create app directory to hold the application code inside the image [/user/src/app],
# This will be the working directory for your application:
WORKDIR /../juleb-project


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

#  bind to port 8080
EXPOSE 8080

# Compile nestjs files to dist folder (distribution folder) 
RUN npm run build

# Define the command to run your app using CMD which defines your runtime ( specific version of an application that is distributed for limited use )
CMD [ "node", "dist/main" ]