# RSU Days Counter

This project is a simple web application that calculates and displays the number of days until your next RSU (Restricted Stock Unit) vest.

## Setup

To get started with this project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/rsu-days-counter.git
    cd rsu-days-counter
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Development

To run the project in development mode:

```bash
npm run dev
```

This will open the application in your browser at `http://localhost:3000`. The page will reload if you make edits. You will also see any lint errors in the console.

## Publishing to GitHub Pages

To publish a production build of the application to GitHub Pages, follow these steps:

1.  **Build the project:**

    ```bash
    npm run build
    ```

    This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

2.  **Deploy to GitHub Pages:**

    First, ensure you have the `homepage` field in your `package.json` file set to your GitHub Pages URL (e.g., `"homepage": "https://your-username.github.io/rsu-days-counter"`).

    Then, deploy the build:

    ```bash
    npm run deploy
    ```

    This command will create a `gh-pages` branch and push the contents of the `build` directory to it, which GitHub Pages will then serve.
