# Metricity

A centralized and customizable metrics dashboard designed to aggregate and display snapshots from various monitoring platforms, making it effortless to stay on top of key metrics without the hassle of switching between different tools.

## Getting Started

### Installation

Before running the services, make sure you have the proper dependencies installed:

* Node.js installed
* Run `npm install` in the project root directory
* Run `npm install` in the `backend` directory
* Run `npm install` in the `frontend` directory

### Environment Setup

The application can be configured using environment variables:

* Create a local environment file by copying [`.env.example`](https://github.com/thyrlian/Metricity/blob/main/.env.example) to `.env` in the root directory: `cp .env.example .env`
* Adjust the values in `.env` as needed

### Up and Running

In the project root directory, you can run:

* Both frontend and backend services concurrently by: `npm start`
  * Backend will be available at [http://localhost:5001](http://localhost:5001) (configurable via `PORT_BACKEND` in `.env`)
  * Frontend will be available at [http://localhost:3000](http://localhost:3000) (configurable via `PORT_FRONTEND` in `.env`)
* Each service individually:
  * `npm run start:backend` - Runs the backend service only
  * `npm run start:frontend` - Runs the frontend service only

## Challenges

Limitations of external content integration via **iFrame** and **reverse proxy**

* Content Security Policy (CSP) Restrictions
  * Sites with strict CSP headers prevent embedding via iframes
  * X-Frame-Options: SAMEORIGIN/DENY blocks embedding

* CORS & Cross-Domain Limitations
  * Cross-Origin Resource Sharing restrictions block resource loading
  * External CSS/JS resources often fail to load properly

* Responsiveness Problems
  * iframe content not automatically responsive
  * Size adjustments and media queries may not work as expected

* Redirection Handling
  * HTTP redirects can break the proxy chain
  * URLs in redirects may not be properly rewritten

* Authentication & Security Challenges
  * Cookie/session management problems when proxying content
  * Security systems often reject proxy requests as suspicious

* Maintainability Concerns
  * Target sites can change their structure/security without notice
  * Requires constant updates to handle new protection mechanisms

* Legal & Terms of Service Issues
  * Many sites explicitly forbid embedding or proxying in their ToS
  * Potential copyright/legal implications
