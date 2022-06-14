﻿# juleb-task
## Task: Package a Docker image for NestJS serving Ionic React app and push it on public docker registry with docker-compose instructions in the README

<hr style="border:2px solid orange">



<hr style="border:2px solid orange">


## start Commands for Docker

### Build your image:
<pre><code>docker build ./nestjs-dockerized -t <user>/juleb-task</code></pre>

### Run:
<pre><code>docker docker run -p 8080:3000 -d <user>/juleb-task</code></pre></code></pre>

## For Example:
<pre><code>docker build <your path> -t thomas-oliver/nestjs-dockerized</code></pre></code></pre>
<pre><code>docker run -p 8080:3000 thomas-oliver/nestjs-dockerized</code></pre>

