# Hindi Quotes Web Application

## Description

This is a simple web application built using Express.js that fetches and displays random Hindi quotes. Users can choose to see quotes of different types such as Success, Love, Attitude, Positive, and Motivational. The application allows users to select the number of quotes they want to display and switch between different visual themes.

## Features

- Fetch and display random Hindi quotes.
- Select the type of quotes (Success, Love, Attitude, Positive, Motivational).
- Choose the number of quotes to display (1 to 5).
- Change the visual theme of the webpage.

## Technologies Used

- Node.js
- Express.js
- Axios
- Body-parser
- EJS (Embedded JavaScript templating)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/ayush-agrawal001/using_API.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd using_API
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

## Usage

1. **Start the server:**

    ```sh
    npm start
    ```

2. **Open your browser and go to:**

    ```
    http://localhost:3000
    ```

3. **Interact with the application:**

    - Select a type of quote.
    - Choose the number of quotes to display.
    - Change the visual theme using the dropdown menu.

## File Structure

```sh
using_API/
├── public/
│   └── styles/
│       └── index.css
├── views/
│   └── index.ejs
├── .gitignore
├── package.json
├── package-lock.json
└── index.js
```
- **public/**: Contains static assets such as CSS files.
- **views/**: Contains EJS templates.
- **.gitignore**: Specifies files to be ignored by Git.
- **package.json**: Contains project metadata and dependencies.
- **package-lock.json**: Describes the exact dependency tree.
- **index.js**: The main server file that sets up and runs the Express app.

## API Used

- **Hindi Quotes API**: The application uses the [Hindi Quotes API](https://hindi-quotes.vercel.app/) to fetch random quotes.

## Code Overview

### `index.js`

This file contains the main logic of the application. It sets up the Express server, defines the routes, and handles the fetching of quotes from the API.

- **GET `/`**: Fetches a random quote and renders the index.ejs template with the quote data.
- **POST `/`**: Fetches the specified number of quotes of the selected type and renders them on the index.ejs template.

### `index.ejs`

This is the main HTML template file that displays the form, the quotes, and allows users to change the visual theme.

### `index.css`

Contains the CSS styles for different themes and general styling of the webpage.

## Example

When you visit the homepage, you will see a form to select the type and number of quotes. After submitting the form, the selected number of quotes of the chosen type will be displayed on the page.

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

Happy coding!
