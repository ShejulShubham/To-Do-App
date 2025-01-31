# Command 1: docker build -t todo-app .
#                         Add this 👆 (the "." specifies the current directory as the build context)

# Command 2: docker image ls
#   to see all the image

# Command 3: docker run -p 5173:5173 todo-app
#     Map host port 5173 👆 to container port 5173
#   to run the container using our image we just build

FROM node:18-alpine

WORKDIR /todo-app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5173  
# Match Vite's port (5173 instead of 3000)
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]