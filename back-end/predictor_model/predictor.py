from tensorflow.keras.models import load_model
import pandas as pd
from sklearn.preprocessing import StandardScaler
import numpy as np

def predict(entry:list):
    model = load_model('dense_neural_network_model_for_arrhythmia_prediction2.keras')

    data = pd.DataFrame([entry])
    std_scaler = StandardScaler()
    data = std_scaler.fit_transform(data)

    data = data.reshape(1,-1)
    prediction = np.argmax(model.predict(data),1)
    return prediction[0]
if __name__ == "__main__" :
    sample_info = [85,1,117,234,114,356,496,81,-27,19]
    print(predict(sample_info))
