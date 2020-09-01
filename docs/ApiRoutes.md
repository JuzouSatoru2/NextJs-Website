# Api routes

> Most api routes require the jwt auth. The frontend adds the header by default. 

- [/msg](#msg)
- [/auth](#auth)
- [/verify](#verify)
- [/blog](#blog)
- [/monitor](#monitor)
- [/mongoadmin](#mongoadmin)
- [/portainer](#portainer)
- [/hangfire](#hangfire)

### msg

- / POST and GET requests of messages
- /:id GET, PATCH, DELETE and PUT requests for message with id in url

### auth

- / POST requests for JWT authorization

### verify

- / POST requests for JWT authentication

### blog

- / POST and GET request of articles
- /:id GET, PATCH, DELETE and PUT requests for article with id in url

### monitor

- / GET request for server informations

### mongoadmin

- / MongoDB dashboard

### portainer

- / local docker network/container dashboard

### hangfire

- / background processing dashboard
