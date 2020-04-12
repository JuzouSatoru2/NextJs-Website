#!/bin/bash
echo -e "\e[34mEnter Mongodb Url:\e[39m"
read mongourl
echo -e "\e[34mEnable compression, database and security headers? (y/N)\e[39m"
read mood
echo -e "\e[34mEnter admin key for Jwt:\e[39m"
read adminkey
if [ "$mongourl" != "" ]
then
 echo -e "DATABASE_URL=$mongourl" >> .env
else
 echo -e "DATABASE_URL=mongodb://root:admin@localhost:27017/test?authSource=true"
fi
if [ "$mood" = "y" ]
then
 echo -e "MOOD=activate" >> .env
else
 echo -e "MOOD=notactivate" >> .env
fi
if [ "$adminkey" != "" ]
then
 echo -e "ADMIN_KEY=$adminkey" >> .env
else
 echo -e "ADMIN_KEY=123456" >> .env
fi
echo -e "\e[34mSetup complete!"