# Environment variables

> Set with .env, command-line or in docker-compose file

- [Mongo](#mongo)
- [Admin key](#Admin-Key)
- [JWT key](#JWT-key)
- [Optional](#Optional)

### Database URL

> DATABASE_URL

When using the environment variables you have to add the MongoDB url like in the template.

If you don't use Docker it's: `mongodb://localhost:27017/{DATABASE}`

If you use Docker it's: `mongodb://root:admin@mongo:27017/{DATABASE}?authSource=admin`

Be carefull at changing the MongoDB password(admin) and username(root) in docker-compose because you have to change it in the .env file too!

### Admin key

> ADMIN_KEY

The admin key is used for the JWT authentication. You can login with the password at the `/login` route.

### JWT key

> JWT_KEY

The jwt key is used to encrypt the jwt token. If not set the server will use the default key  "secretkey".

### Optional

You can define a specific port with `PORT` (default is 3000) or the Node environment with `NODE_ENV` (production / development).