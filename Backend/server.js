const http = require('http'); // Import the HTTP module
const app = require('./app'); // Import your app module

const port = process.env.PORT || 3000; // Define the port

// Create the HTTP server
const server = http.createServer(app);

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
