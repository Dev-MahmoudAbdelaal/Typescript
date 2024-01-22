
# TypeScript Axios Example

## Overview

This TypeScript example demonstrates how to fetch data from an API using Axios and then log specific details from the response. The script interacts with JSONPlaceholder, a free online REST API that you can use for testing and prototyping.

## Features

- Fetches data using Axios from a mock online REST API.
- Parses and logs details from the API response.

## Prerequisites

- Node.js
- Axios (Install via npm: `npm install axios`)

## Usage

1. Clone the repository or download the TypeScript file.
2. Install Axios if not already installed (`npm install axios`).
3. Run the TypeScript compiler to compile the `.ts` file into `.js`.
4. Execute the JavaScript file with Node.js.

## Code Explanation

- The `TODO` interface is used to define the structure of the expected response.
- Axios sends a GET request to the JSONPlaceholder API.
- The response data is cast to the `TODO` type.
- Extracted data (id, title, completed status) is logged using the `logTodo` function.

