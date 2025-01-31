# Cypress Login Page Test Suite

This project contains a simple Cypress test suite using **Mocha hooks** to test the login page of [Heroku Internet App](https://the-internet.herokuapp.com/login).

## Features
- Uses Mocha hooks (`before`, `beforeEach`, `afterEach`, `after`) for test setup and teardown.
- Tests for the presence of a **login button**.
- Verifies if the **email input field** has an "Enter email" placeholder text.

## Prerequisites
- Node.js installed (v14+ recommended)
- Cypress installed

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/cypress-mocha-tests.git
   cd cypress-mocha-tests
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Tests
To execute the test suite, run:
```sh
npx cypress open
```
Then, select **E2E Testing** and run the tests in the browser.

Alternatively, run tests in headless mode:
```sh
npx cypress run
```

## Test Cases
### 1. Check if the login button is visible
- Verifies that a login button (`button[type="submit"]`) is present on the page.

### 2. Verify the email field placeholder
- Checks that an input field (`input[type="text"]`) has the placeholder **"Enter email"**.

## Mocha Hooks Used
| Hook        | Description |
|------------|------------|
| `before()` | Runs once before all tests, and navigates to the login page. |
| `beforeEach()` | Reloads the page before each test to ensure a fresh state. |
| `afterEach()` | Logs a message after each test execution. |
| `after()` | Logs a final message when all tests are complete. |

## Folder Structure
```
/cypress
  ├── integration
  │   ├── login_spec.js  # Cypress test suite
  ├── support
  │   ├── commands.js    # Custom commands (if any)
  ├── cypress.json       # Cypress configuration file
```

## License
This project is open-source and available under the MIT License.

## Author
Paras Zumbarlal Ssanghvi - [GitHub Profile](https://github.com/Parassanghavi1008)

