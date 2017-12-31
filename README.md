### Implementation Details
The project is comprised of two components, Backend server based on node.js and a web server comprised on node.js + React.

#### Backend Server
The backend server is built on node.js using express for the web api and fs for parsing the json file. The web api is essentially one rest endpoint (get friend) which returns a static json.   

#### Web Server
The web server is built using create-react-app (a module that creates a template react app with default configuration and minimum hassle).
The React app uses the following modules:
* axios - for the AJAX request
* react
* react-dom
* react-router-dom

### Instructions
** Assuming npm is installed.

#### Backend Server
1. Download the [baby-steps-backend](https://github.com/lior2803/baby-steps-backend) repository.
2. From the project root folder run `npm install` and then `npm start`.

#### Web Server
1. Download the [baby-steps](https://github.com/lior2803/baby-steps) repository.
2. From the project root folder run `npm install` and then `npm start`.

NOTE: The order is important, first run the backend server.

### Notes

* I worked on it a total of two full days.
* I didn't implement the animation element and the navigation side bar css is not 100% compliant with the given mockup.
