# mi-cantina-app-backend

A simple Express-based server for sending notifications using Firebase Cloud Messaging. This project is structured in a modular way, making it easy to maintain and extend.

## Features

- Send notifications to one or multiple devices using Firebase Cloud Messaging.
- Modular structure for easy maintenance.
- Built with Express, and includes middleware for logging and error handling.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **Firebase Admin SDK**: For sending notifications via Firebase Cloud Messaging.
- **Morgan**: For HTTP request logging.
- **Dotenv**: For managing environment variables.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node package manager)
- Firebase project with Cloud Messaging enabled

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Cpelaez5/mi-cantina-app-backend.git
   cd mi-cantina-app-backend
   ``` 
2. Install the dependencies:

    ```bash
   npm install
   ``` 
3. Create a `.env` file in the root directory and add your Firebase credentials and any other necessary environment variables:
 
     ```t
   PORT=YOUR_PORT
   ```

# Running the Project

## To start the development server, use:

    ```bash
    npm run dev
    ``` 
This command will run the server with nodemon, which automatically restarts the server when file changes are detected.

To build the project for production, use:

    ```bash
    npm run build
    ```
And then start the production server with:

```bash
npm start
```
# API Endpoints

- **POST /notifications**: Send a notification.

**Request Body:**

```json
{
    "token": "your_device_token",
    "data": {
        "title": "Notification Title",
        "body": "Notification Body"
    }
}

```

#Testing the API

You can test the API using tools like Postman or curl. Make sure to send a POST request to http://localhost:3000/notifications with the appropriate JSON body.

### Contribution
- Contributions are welcome. If you wish to contribute, please follow these steps:

* Fork the repository.
* Create a new branch (git checkout -b feature/new-feature).
* Make your changes and commit them (git commit -m 'Add new feature').
* Push the branch (git push origin feature/new-feature).
* Open a Pull Request.

### Contact
- For questions or comments, you can contact [Carlos Peláez](mailto:cpelaez0811@gmail.com)

