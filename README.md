# Node.js Server - Port Already in Use
This repository demonstrates a common Node.js error: 'listen EADDRINUSE'.  The error occurs when a server attempts to bind to a port that's already in use by another process.  This example shows how the error manifests and how to resolve it.

## Bug
The `bug.js` file contains a simple HTTP server that listens on port 8080. If another application is already using this port, running `bug.js` will result in the 'listen EADDRINUSE' error.

## Solution
The `bugSolution.js` file demonstrates several ways to handle the error:  checking for port availability before starting the server, gracefully handling the error, and using a different port.