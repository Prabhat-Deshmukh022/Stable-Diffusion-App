from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from diffusers import StableDiffusionPipeline
from io import BytesIO
import base64

# access_token="hugging-face-token"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=["*"]
)

device="cpu"
model_id="CompVis/stable-diffusion-v1-4"

# pipeline=StableDiffusionPipeline.from_pretrained(model_id,low_cpu_mem_usage=True,use_auth_token=access_token) - Use token here first time when running locally

pipeline=StableDiffusionPipeline.from_pretrained(model_id,low_cpu_mem_usage=True)

pipeline.to(device)

@app.get("/")
def generate(prompt:str):
   
    image=pipeline(prompt,guidance_scale=8.5).images[0]
    
    image.save("test.png")
    buffer=BytesIO()
    image.save(buffer,format="PNG")
    imgstr=base64.b64encode(buffer.getvalue())

    return Response(content=imgstr, media_type="image/png")
    