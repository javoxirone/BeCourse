# BeCourse - An Open Source Learning Dashboard

[BeCourse](https://github.com/javoxirone/BeCourse) is an open-source learning dashboard built with React. It provides a platform for online lessons, student tracking, and performance estimation.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

*   **Interactive Dashboard:** Monitor student progress, attendance, and performance through visual charts and indicators.
*   **Online Lessons:** A platform for delivering online educational content.
*   **Student Tracking:** Track student activity and engagement.
*   **Performance Estimation:** Evaluate student performance to motivate them.
*   **Multi-Language Support:** Supports both English and Uzbek languages.
*   **Theme Customization:** Offers light and dark themes for personalized user experience.
*   **Accessibility Mode:** Includes a color filter option for users with visual impairments.
*   **Chat Feature:** Integrated chat functionality for communication.

## Demo
[https://javoxirone.github.io/BeCourse/](https://javoxirone.github.io/BeCourse/)

## Installation

Follow these steps to set up the BeCourse project on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/javoxirone/BeCourse.git
    cd BeCourse
    ```

2.  **Install dependencies:**
    Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) installed.

    Using Yarn:

    ```bash
    yarn install
    ```

    Using npm:

    ```bash
    npm install
    ```

## Dependencies

The project relies on the following dependencies:

*   `@material-ui/core`: v4.12.3
*   `@material-ui/icons`: v4.11.2
*   `@testing-library/jest-dom`: v5.11.4
*   `@testing-library/react`: v11.1.0
*   `@testing-library/user-event`: v12.1.10
*   `gh-pages`: v3.2.3
*   `node-sass`: v4.14.1
*   `react`: v17.0.2
*   `react-dom`: v17.0.2
*   `react-router`: v5.2.1
*   `react-router-dom`: v5.2.1
*   `react-scripts`: v4.0.3
*   `recharts`: v2.1.2
*   `styled-components`: v5.3.1
*   `talkjs`: v0.14.5
*   `web-vitals`: v1.0.1

## Configuration

### Environment Variables

This project does not require specific environment variables for basic setup. However, you might want to configure variables for deployment or specific features. You can create `.env` files for different environments (e.g., `.env.development`, `.env.production`) in the root directory.

### Language Configuration

The application supports multiple languages. The default language is English. You can change the language in the settings modal within the application. The selected language is stored in the local storage.

## Running the Project

1.  **Start the development server:**

    Using Yarn:

    ```bash
    yarn start
    ```

    Using npm:

    ```bash
    npm start
    ```

    This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and any lint errors will be displayed in the console.

2.  **Build for production:**

    Using Yarn:

    ```bash
    yarn build
    ```

    Using npm:

    ```bash
    npm build
    ```

    This command builds the app for production to the `build` folder, optimizing it for the best performance.

3.  **Deployment**

    To deploy the project to GitHub Pages:

    1.  Add `"homepage": "https://<your_github_username>.github.io/<your_repository_name>"` to your `package.json`. For example:

        ```json
        {
          "name": "learning-dashboard",
          "version": "0.1.0",
          "private": true,
          "homepage": "https://javoxirone.github.io/BeCourse/",
          ...
        }
        ```

    2.  Run the deploy script:

        ```bash
        yarn deploy
        ```

        or

        ```bash
        npm run deploy
        ```

        This script first builds the project and then deploys it to GitHub Pages.

## Available Scripts

In the project directory, you can run:

*   `yarn start` or `npm start`: Runs the app in the development mode.
*   `yarn test` or `npm test`: Launches the test runner in the interactive watch mode.
*   `yarn build` or `npm build`: Builds the app for production to the `build` folder.
*   `yarn eject` or `npm eject`:  A one-way operation. If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Folder Structure

```
BeCourse/
├── .gitignore
├── README.md
├── package.json
├── public/
│   ├── ...
├── src/
│   ├── Components/
│   │   ├── Buttons/
│   │   ├── Charts/
│   │   ├── ...
│   ├── Img/
│   │   ├── ...
│   ├── Styles/
│   │   ├── ...
│   ├── App.js
│   ├── Chat.js
│   ├── Dashboard.js
│   ├── Home.js
│   ├── index.js
│   ├── ...
├── ...
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).
