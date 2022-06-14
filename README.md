# juleb-task
## Task: Package a Docker image for NestJS serving Ionic React app and push it on public docker registry with docker-compose instructions in the README

<hr style="border:2px solid orange">


## Run Docker Image with docker-compose.yml

### 1- Go to DockerComposeFile directory

### 2- Run app with docker-Compose (Start the Container)
<pre><code>docker-compose up</code></pre>

### 3- Close app with docker-Compose (shut down the Container)
<pre><code>docker-compose down</code></pre>

*The docker container is assigned to run on ports 8080 and  3000*

<hr style="border:2px solid orange">


## Start Commands for Docker

### Build your image:
<pre><code>docker build ./nestjs-dockerized -t <user>/juleb-task</code></pre>

### Run:
<pre><code>docker docker run -p 8080:3000 -d <user>/juleb-task</code></pre></code></pre>

### For Example:
<pre><code>docker build <your path> -t thomas-oliver/nestjs-dockerized</code></pre></code></pre>
<pre><code>docker run -p 8080:3000 thomas-oliver/nestjs-dockerized</code></pre>

*The docker container is assigned to run on ports 8080 and  3000*
