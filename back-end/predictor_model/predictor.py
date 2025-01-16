from tensorflow.keras.models import load_model
import pandas as pd
from sklearn.preprocessing import StandardScaler
import numpy as np
import pickle
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

def predict(entry:list):
    model_to_12_classes = load_model('./dense_neural_network_model_for_arrhythmia_prediction.keras')
    model_to_4_classes = load_model("./dense_neural_network_model_for_arrhythmia_prediction_4_classes.keras")
    abnormalities_12 = {
        0: "Sinus Rhythm",
        1: "Atrial Fibrillation (AFib)",
        2: "Atrial Flutter (AF)",
        3: "Atrial Tachycardia",
        4: "Atriventricular Node Re-entrant (AVNRT)",
        5: "Atriventricular Re-entrant (AVRT)",
        6: "Sinus Bradychardia",
        7: "Sinus Tachycardia(ST)",
        8: "Sinus Irregularity(SI)",
        9: "Sinus Atrium to Atrial wandering rhythm",
        10: "Superventricular Tachychardia",
        11: "Sinus Arrhythmia"
    }
    abnormalities_4 = {
        1:"Sinus Rhythm or Sinus Irregularity",
        2:"Sinus Brachycardia or Sinus Tachycardia",
        0:"Atrial Arrhythmia",
        3:"SupraVentricular Arrhythmia"
    }

    data = pd.DataFrame([entry])
    with open('scaler.pkl', 'rb') as f:
        std_scaler = pickle.load(f) 
    data = std_scaler.transform(data)

    data = data.reshape(1,-1)
    prediction_4 = np.argmax(model_to_4_classes.predict(data),1)
    prediction_12 =np.argmax(model_to_12_classes.predict(data),1) 

    return abnormalities_4[int(prediction_4[0])], abnormalities_12[int(prediction_12[0])]
if __name__ == "__main__" :
    sample_info = [59,0,52,92,432,401,76,42,8]
    print(predict(sample_info))
