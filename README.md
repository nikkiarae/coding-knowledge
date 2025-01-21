# Next.js App Router with TypeScript & Mongoose Template

This project serves as a boilerplate for building modern web applications using the **Next.js App Router**, **TypeScript**, and **Mongoose** for MongoDB integration. It provides a ready-to-use structure for rapid development.

---

## Features

- **TypeScript** for static typing and better developer experience.
- **Next.js App Router** for building server and client components efficiently.
- **Mongoose** for MongoDB integration, making database management seamless.
- **Environment Variable Configuration** for flexible development and deployment.

---

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/) (optional for MongoDB setup)
- [Git](https://git-scm.com/)

---

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-typescript-mongoose-template.git
   cd nextjs-typescript-mongoose-template 

2. Install the dependencies:

    ```bash
    npm install

3. Create a .env.local file
    Create a .env.local file in the root directory and add the following variables:

    ```env
    # MongoDB connection URI
    MONGODB_URI=mongodb://<host>:<port>

    # MongoDB database name
    MONGO_DATABASE=your_database_name

    # Host address (exp: http://localhost:3000)
    NEXT_PUBLIC_API_URL=http://<host>:<port>

    Replace <host>, and <port> with your MongoDB connection details.

4. Running Project
    The included docker-compose.yml file sets up MongoDB and runs the development server. Use the following command to start the project:

    ```bash
    docker-compose up -d
   
This will:
•	Spin up a MongoDB instance on localhost:27017.
•	Start the Next.js development server on http://localhost:3000.
