# Metricity

A centralized and customizable metrics dashboard designed to aggregate and display snapshots from various monitoring platforms, making it effortless to stay on top of key metrics without the hassle of switching between different tools.

## Getting Started

### Prerequisites

Before running the services, make sure you have the proper dependencies installed:

* Node.js installed
* Run `npm install` in the project root directory
* Run `npm install` in the `backend` directory
* Run `npm install` in the `frontend` directory

### Running the Services

In the project root directory, you can run:

* Both frontend and backend services concurrently by: `npm start`
  - Backend will be available at `http://localhost:YOUR_BACKEND_PORT`
  - Frontend will be available at [http://localhost:3000](http://localhost:3000)
* Each service individually:
  - `npm run start:backend` - Runs the backend service only
  - `npm run start:frontend` - Runs the frontend service only
