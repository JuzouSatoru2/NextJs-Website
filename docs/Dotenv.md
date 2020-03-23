# Dotenv
- [Mongo](#mongo)
- [Mood](#mood)
- [Admin key](#Admin-Key)

### Mongo
When using the Dotenv package you have to add the MongoDB url like in the template.

If you don't use Docker it's: ```mongodb://localhost:27017/{DATABASE}```

If you use Docker it's: ```mongodb://admin:root@mongo:27017/{DATABASE}?authSource=admin```

Be carefull at changing the MongoDB password(admin) and username(root) in docker-compose because you have to change it in the .env file too!

### Mood
The variable "MOOD" enables compression, database and logger. Only set it as ```activate``` if an MongoDB instance is running and configured like mentioned.

### Admin key
The admin key is used for the JWT authentication. You can login with the password at the ```/login``` route