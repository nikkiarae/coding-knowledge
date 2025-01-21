# Coding Knowledge Showcase: Next.js Application

This project serves as a learning and demonstration platform to showcase your coding knowledge and principles using **Next.js** with the **App Router** and **TypeScript**. The app includes interactive modules that explain and demonstrate key coding concepts such as state management, hooks, optimisation techniques, and more.

---

## Features

- **TypeScript** for static typing and better developer experience.
- **Next.js App Router** for building server and client components efficiently.
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
   git clone https://github.com/yourusername/coding-knowledge.git
   cd coding-knowledge

2. Install the dependencies:

    ```bash
    npm install

3. Create a .env.local file
    Create a .env.local file in the root directory and add the following variables:

    ```env
    # Host address (exp: http://localhost:3000)
    NEXT_PUBLIC_API_URL=http://<host>:<port>

    Replace <host>, and <port> with your connection details.

4. Running Project
    Use the following command to start the project:

    ```bash
    npm run dev
   
This will:
•	Start the Next.js development server on your host address (http://localhost:3000).
