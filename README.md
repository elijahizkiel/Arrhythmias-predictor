# Arrhythmias Predictor

## Project Overview

Arrhythmias Predictor is a machine learning project designed to predict different types of arrhythmias using a dense neural network model. The project consists of a back-end API for handling predictions and a front-end application for user interaction. 
The project provides chat bot service for users tochat about their medical conditions and ask recommendations on what they should do.

## Project Structure

        

## Back-End

The back-end is responsible for loading the machine learning models, handling API requests, and making predictions. It is implemented using Python and Flask.

### Key Files

- `API_key_loader.py`: Handles loading of API keys.
- `app.py`: Main application file that initializes the Flask app.
- `db_models.py`: Defines the database models.
- `Gemini.py`: Contains utility functions.
- `routes.py`: Defines the API routes.

### Predictor Model

The predictor model is a dense neural network designed for arrhythmia prediction. The models are stored in the `predictor_model` directory.

## Front-End

The front-end application is built using modern web technologies and provides a user-friendly interface for interacting with the prediction API.

### Key Files

- `package.json`: Contains the project dependencies and scripts.
- `public/`: Contains static assets.
- `src/`: Contains the source code for the front-end application.

## Getting Started

### Prerequisites

- Python 3.12
- Node.js
- Flask

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/arrhythmias-predictor.git
    cd arrhythmias-predictor
    ```

2. Set up the back-end:
    ```sh
    cd back-end
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Set up the front-end:
    ```sh
    cd front-end-app
    npm install
    ```

### Running the Project

1. Start the back-end server:
    ```sh
    cd back-end
    flask run
    ```

2. Start the front-end application:
    ```sh
    cd front-end-app
    npm start
    ```

## Usage

Once the project is running, you can access the front-end application in your web browser. Use the interface to input data and get arrhythmia predictions.
