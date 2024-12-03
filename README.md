# Tech Quiz Testing App

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Description
A MERN stack application that allows users to test their knowledge by taking a tech quiz. The app includes functionality for user interaction with questions, viewing results, and restarting the quiz. Comprehensive testing is implemented using Cypress for both component and end-to-end tests.

## Installation
Ensure you have Node.js, npm, and MongoDB installed on your system. Clone the GitHub repository to your local machine.

## Usage
Navigate to the cloned repository's root folder in your terminal. Create a `.env` file in the `server` folder with the following environment variables: `MONGO_URI=mongodb://localhost:27017/techquiz`, `NODE_ENV=development`, and `PORT=3001`. Install dependencies by running `npm run install`. Seed the database with questions using `npm run seed`. Start the app in development mode using `npm run start:dev`. For a production build, use `npm run start`. The application will be accessible at `http://localhost:3001`. To run tests, execute the following commands: Component Tests - `npm run test:component`, End-to-End Tests - `npm run test:e2e`. Video Demonstration can be found [HERE](https://drive.google.com/file/d/1Lv7_dzdRA-3mbskFrfISD6Q2QoroA8i3/view?usp=sharing)

## Contribution
Eric Neff

## Test
This app is tested using Cypress. The test suite includes: Component Tests for verifying individual UI components and End-to-End Tests for ensuring the complete quiz flow functions as expected. To run the full test suite, execute `npm run test:all`.

## License
This project is licensed under the MIT License.

## Questions
If you have any questions, feel free to reach out: GitHub - [github/eric7string](https://github.com/eric7string) or Email - emn531@gmail.com
