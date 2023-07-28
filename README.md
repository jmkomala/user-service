# user-service
user service for handling user registration and managing user profiles
folder-by-feature structure

Primary Responsibilities
   1. User Registration: Handling new user sign-ups and account creation.
   2. User Profile Management: Allowing users to update their profile information, such as name, email, profile picture, etc.
   3. Password Management: Enabling users to change/reset passwords and ensuring password security.
   4. Account Deactivation: Managing the process of deactivating or deleting user accounts.
   5. User Roles and Permissions: Assigning roles and permissions to users based on their access level within the application.
   6. User Data Storage: Storing user-related information securely.

Folder Structure
user-service
  ├── src
  │   ├── users
  │   │   ├── users-controller.ts
  │   │   ├── users-db.ts
  │   │   ├── users-models.ts
  │   │   ├── users-routes.ts
  │   │   ├── users-services.ts
  │   │   ├── users-validators.ts
  │   ├── profiles
  │   │   ├── profiles-controller.ts
  │   │   ├── profiles-db.ts
  │   │   ├── profiles-models.ts
  │   │   ├── profiles-routes.ts
  │   │   ├── profiles-services.ts
  │   │   ├── profiles-validators.ts  
  │   ├── common
  │   │   ├── types
  │   │   │   ├── interfaces.ts
  │   │   │   ├── types.ts
  │   │   │   ├── enums.ts
  │   │   │   ├── constants.ts
  │   │   ├── middleware
  │   │   │   ├── auth-middleware.ts
  │   │   │   ├── logger-middleware.ts
  │   │   ├── utils
  │   │   │   ├── interfaces.ts
  │   │   │   ├── types.ts
  │   │   │   ├── enums.ts
  │   │   │   ├── constants.ts  
  │   │   ├── logger.ts  
  │   │   ├── error-handler.ts
  │   ├── db
  │   │   ├── postgres-connection.ts  
  │   ├── app.ts
  │   └── index.ts
  ├── package.json
  ├── tsconfig.json
  ├── README.md
  └── ...