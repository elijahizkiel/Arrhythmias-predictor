from dotenv import load_dotenv
import os

load_dotenv()

# Access the API key
api_key = os.getenv('API_KEY')
DB_URI = os.getenv('DATABASE_URL')

