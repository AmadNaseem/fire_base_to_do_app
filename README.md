# Todo List API with Firebase Cloud Functions and TypeScript

## Overview
This project is a simple backend API for managing a "Todo List" application. It uses Firebase Cloud Functions with TypeScript and Firestore as the database. The API supports creating, reading, updating, and deleting todo items.

## Features
- **Create Todo Item**
- **Get Todo Items**
- **Update Todo Item**
- **Delete Todo Item**

## Setup and Configuration

### Prerequisites
- Node.js (version 12 or later)
- Firebase CLI
- A Google Cloud project with Firestore enabled

### Steps

1. **Set up a new Firebase project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add Project" and follow the instructions to create a new project.
   - Enable Firestore in the Firebase Console by going to Firestore Database and selecting "Create database".

2. **Clone the repository:**
   ```bash
   git clone https://github.com/AmadNaseem/fire_base_to_do_app.git
   cd Functions

3. **Install Packaged**
   ```bash
   npm install
   
4. **Create .env file**
   ```bash
   Add variable: GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account-file.json

Add youe account key data in the service-account-file.json

4. **Run Locally**
   ```bash
   npm run serve
   
This will run the app on local server

5. **Run Test**
   ```bash
   npm run test

6. **Run EndPoints**
   ```bash
   GET ENDPOINT: 
   curl --request GET \
   --url http://127.0.0.1:5001/<YOUR APP KEY>/<APP LOC>/api/todos/

   POST ENDPOINT:
   curl --request POST \
   --url http://127.0.0.1:5001/<YOUR APP KEY>/<APP LOC>/api/todos \
   --header 'Content-Type: application/json' \
   --header 'User-Agent: insomnia/8.6.1' \
   --data '{
   "title": "Test Todo",
   "description": "This is a test todo item",
   "completed": false
   }'

This endpoint will automatically showed up when app is serverd successfully
   
