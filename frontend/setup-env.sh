#!/bin/bash

cp ../.env .env

# Create React App looks for PORT environment variable by convention
echo "\nPORT=\$PORT_FRONTEND\n" >> .env
