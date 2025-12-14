TDD Kata – Sweet Shop Management System
Project Overview

This project is a full-stack Sweet Shop Management System developed as part of a Test-Driven Development (TDD) kata assignment. The objective of the project is to demonstrate backend API design, authentication, inventory management, frontend integration, and disciplined use of TDD practices in a real-world scenario.

Technology Stack

Backend: Node.js, TypeScript, Express, MongoDB (Mongoose), JWT Authentication, Jest, Supertest
Frontend: React, TypeScript, Vite, Fetch API

Features

User authentication with registration and login
JWT-based authorization for protected routes
Role-based access control for admin operations
View all available sweets
Add new sweets (admin only)
Purchase sweets with quantity reduction
Restock sweets (admin only)
All core backend logic implemented using Test-Driven Development

Project Structure

sweet-shop-management-system
backend:
src
modules (auth, sweets, inventory)
middleware
config
tests

frontend:
src
pages
components
api

How to Run the Project Locally

Clone the repository and navigate into it.

git clone https://github.com/
<your-username>/tdd-kata-sweetshop.git
cd tdd-kata-sweetshop

Backend setup:

cd backend
npm install
npm test
npm run dev

The backend runs on http://localhost:3000

Frontend setup:

cd frontend
npm install
npm run dev

The frontend runs on http://localhost:5173

Ensure the backend is running before using the frontend.

Testing

All backend functionality is covered with meaningful test cases written before implementation following the Red-Green-Refactor cycle. Tests cover authentication, authorization, sweets management, inventory updates, and health checks.

Tests can be executed using:
npm test

## Test Report

All backend tests were executed using Jest and Supertest.

Test Suites: 6 passed, 6 total  
Tests: 6 passed, 6 total  


My AI Usage

## Database Setup

MongoDB was used as the database for this project.
For local development and testing, MongoDB was run using Docker to ensure environment consistency and avoid local installation issues. This allowed the backend to connect to a containerized MongoDB instance during development.
For automated tests, an in-memory MongoDB server was used to keep tests isolated, fast, and repeatable.

##Frontend Scope Note

The backend fully supports purchasing sweets and inventory updates, with complete test coverage. The frontend demonstrates authentication, viewing sweets, and adding sweets. Purchase functionality is available via API and tested, but not exposed in the current UI to keep the frontend minimal and focused.

AI tools used: ChatGPT

AI was used as a development assistant to clarify requirements, design test cases, debug TypeScript and JWT-related issues, and refine UI presentation. All logic, architectural decisions, and final implementations were fully understood and manually verified. AI helped improve development efficiency while maintaining full ownership of the code and learning process.

Key Learnings

Applied Test-Driven Development in a full-stack application
Designed secure authentication and authorization flows
Structured a modular and maintainable backend
Integrated frontend with protected APIs
Debugged real-world issues under time constraints


Author

Mehak
MCA (Cloud Computing and DevOps)
