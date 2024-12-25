import google.generativeai as genai
import PIL.Image

class Gemini:
    def __init__(self, API_KEY, context = []):
        genai.configure(api_key=API_KEY)
        self.model = genai.GenerativeModel('gemini-1.5-pro', system_instruction="you are a cardiologist. you help people with general health issues and more deeply on issues related to heart diseases focusing on Arrhythmia")
        self.context = context

    def ask_gemini_text(self, message):
        self.context.append({'role':'user', 'parts':message})
        response = self.model.generate_content(self.context)
        self.context.append(response.candidates[0].content)
        return {'role':'model', 'parts':response.text}

    def ask_gemini_img_text(self,message,path_to_img):
        img = PIL.Image.open(path_to_img)
        self.context.append({'role':'user','parts':[message,img]})
        response = self.model.generate_content(self.context)
        self.context.append(response.candidates[0].content)
        return {'role':'model', 'parts':response.text}
