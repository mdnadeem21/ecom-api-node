# E-commerce API

This is a RESTful API for an e-commerce system. It provides endpoints to manage products, their variants, and also includes search functionality.

## Features

- **Create, read, update, and delete products**
- **Manage product variants**
- **Search for products by name, description, or variant name**

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Joi for input validation**

## Getting Started

### Prerequisites

- **Node.js and npm should be installed on your machine**
- **MongoDB should be installed and running**

### Installation

1. **Clone the repository:**

   # git clone https://github.com/YourGitHubUsername/ecommerce-api-node.git

2. **Install the dependencies:**

   # cd ecommerce-api-node
   # npm install

### Configuration

1. **Create a `.env` file in the root directory of the project.**

2. **Set the following environment variables in the `.env` file:**

   # PORT=8000
   # MONGODB_URI=<your-mongodb-uri>

**Remember to replace `<your-mongodb-uri>` with your actual MongoDB URI.**

### Usage

1. **Start the server:**

   # nodemon server.js

2. **The API will be available at `http://localhost:8000`.**

## API Endpoints

- **POST /api/products** - Create a new product
- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get a specific product
- **PUT /api/products/:id** - Update a specific product
- **DELETE /api/products/:id** - Delete a specific product
- **GET /api/products/search** - Search for products by name, description, or variant name

## Contributing

**Contributions are welcome! Feel free to open an issue or submit a pull request.**

## Contact

**For any inquiries, **
