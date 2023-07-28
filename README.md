# user-service
user service for handling user registration and managing user profiles
folder-by-feature structure
/src
  /feature1
    feature1-controllers.ts
    feature1-models.ts
    feature1-routes.ts
    feature1-service.ts
    feature1-validation.ts
    feature1-interfaces.ts
    feature1-connection.ts
    /test/feature1-controller.test.ts
  /common
    /middlewares
      authMiddleware.ts
      validationMiddleware.ts
    /utils
      utilityFunction1.ts
      utilityFunction2.ts
    /types
      interfaces.ts
      types.ts
      enums.ts
      constants.ts
  /db
    connection.ts


docker run -d --name my_postgres_container  -e POSTGRES_USER=admin  -e POSTGRES_PASSWORD=password  -e POSTGRES_DB=mypostgresdb  -p 5432:5432  postgres