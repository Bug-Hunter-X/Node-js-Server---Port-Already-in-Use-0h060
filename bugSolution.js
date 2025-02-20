const http = require('http');
const net = require('net');

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          resolve(false);
        } else {
          resolve(false);
        }
      })
      .once('listening', () => {
        tester.close();
        resolve(true);
      })
      .listen(port);
  });
}

async function startServer(port) {
  if (await isPortAvailable(port)) {
    const requestListener = (request, response) => {
      response.writeHead(200);
      response.end('Hello, World!');
    };

    const server = http.createServer(requestListener);

    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } else {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    //Optionally implement retry logic or alternative actions here.
  }
}

const port = 8080; 
startServer(port); 
//In a production system you may want to check multiple ports before giving up.