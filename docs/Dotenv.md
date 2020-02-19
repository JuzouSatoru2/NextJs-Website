# Dotenv
When using the Dotenv package you have to add the MongoDB url like in the template.

If you don't use Docker it's: ```mongodb://localhost:27017/{DATABASE}```

If younuse Docker it's: ```mongodb://admin:root@mongo:27017/{DATABASE}?authSource=admin```

Be carefull at changing the MongoDB password(admin) and username(root) because you have to change it in the .env file too!