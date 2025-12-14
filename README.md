TDD Kata – Sweet Shop Management System
Project Overview

This project is a full-stack Sweet Shop Management System developed as part of a Test-Driven Development (TDD) kata assignment. The objective of the project is to demonstrate backend API design, authentication, inventory management, frontend integration, and disciplined use of TDD practices in a real-world scenario.

The system allows users to register and log in, view available sweets, purchase sweets with inventory updates, and allows admin users to add and restock sweets. The focus of the project is correctness, maintainability, and clear test coverage rather than excessive UI complexity.

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

My AI Usage

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
