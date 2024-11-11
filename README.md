# notasV3

## Description
This project is a web application that allows users to select and view different panels with interactive components. The application is divided into two main parts: the client (`uiclient`) and the server (`uiserver`).


## Installation

### Client
1. Navigate to the `uiclient` directory.
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the client server:
    ```sh
    npm run server
    ```

### Server
1. Navigate to the `uiserver` directory.
2. Build the Docker image:
    ```sh
    npm run build
    ```
3. Start the Docker container:
    ```sh
    npm run container
    ```

## Usage
1. Open your browser and navigate to `http://localhost:8081`.
2. Select a panel from the dropdown menu to view it.

## Code Structure

### Client
- `index.html`: Contains the HTML structure of the application.
- `css/styles.css`: Contains the CSS styles.
- `js/index.js`: Handles the main logic of the application.
- `js/classes/`: Contains the `Component` and `Panel` classes.
- `js/mapper/Mapper.js`: Contains functions to create panels and components.
- `js/modules/`: Contains auxiliary modules like `Factory`, `Http`, `HttpFetch`, and `UIBuilder`.

### Server
- `index.js`: Configures and runs the Express server.
- `interfaces/model_1.js`: Contains the data for the panels and components.

## License
This project is licensed under the ISC License.
