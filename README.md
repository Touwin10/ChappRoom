# ChatRoom

ChatRoom is a project that let you communicate with instant messaging by sharing text and pictures. It is built following a microservices architecture using [Spring Boot](https://spring.io/projects/spring-boot "Spring Boot") and Java 8+ for the backend, [React-Redux](https://react-redux.js.org/ "React-Redux") for the client-side and MySQL to store the data.

---

###### Application Structure

- **chapproom-api-service**
  A microservice which provide access to the resources (Messages, Image, ...) using RESTFul services, [Spring Data JPA](https://spring.io/projects/spring-data-jpa "Spring Data JPA") and [Spring WebSocket](https://spring.io/guides/gs/messaging-stomp-websocket/ "Spring WebSocket")
- **chapproom-auth-service**
  It provides authentication functionality and generate a JWT tokens to be use with other APIs using Spring Security
- **chapproom-client-app**
  The client is a React-Redux application including the [Material UI](https://material-ui.com/ "Material UI") for the design interface
- **eureka-service**
  It discover and register all the microservices of the application, [learn more](https://spring.io/guides/gs/service-registration-and-discovery/ "learn more").
- **zuul-gateway-service**
  It provides an API rooting (gateway) functionality for the other services implemented using [Netflix Zuul (Spring Boot)](https://spring.io/guides/gs/routing-and-filtering/ "Netflix Zuul (Spring Boot)")

---

###### Build the application

To build the application you need to first start build and run the microservices by the following commands:

**Microservices**

```bash
   $ cd chappRoom/microservice-path
   $ ./mvnw spring-boot:run
```

**Client App**
[React Redux - Get started](https://react-redux.js.org/introduction/quick-start "React Redux - Get sarted")

```bash
   $ cd chappRoom/chapproom-client-app
   $ npm install
   $ npm start
```

---

###### Ports

| Project                    | Port |
| -------------------------- | ---- |
| **chapproom-client-app**   | 3000 |
| **zuul-gateway-service**   | 8100 |
| **chapproom-api-service**  | 8200 |
| **chapproom-auth-service** | 8300 |
| **eureka-service**         | 8761 |
