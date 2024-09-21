**Simple Stable Diffusion App**

This project is a simple Stable Diffusion application that utilizes React.js for the frontend and FastAPI for the backend. The Stable Diffusion model is sourced from Hugging Face.

**Features -**
Accepts text prompts from the frontend.
Generates images using the Stable Diffusion model.
Returns images encoded in Base64 for easy rendering.

**How It Works -**

Backend: The FastAPI backend accepts prompts from the frontend. The prompts are processed by a Stable Diffusion pipeline, which generates an image based on the input.

Model Caching: The Stable Diffusion model is loaded from Hugging Face. To use the model, you need to obtain an authentication token from your Hugging Face account. Once the backend code is run locally for the first time, the model gets cached, allowing you to remove the auth token safely afterward.

Image Encoding: The generated image is encoded in Base64 (ASCII characters), which allows it to be sent over the JSON protocol, as JSON can only handle text. The final output is a Base64-encoded PNG file.

Frontend: The frontend uses Axios to send a GET request to the FastAPI backend, receiving the Base64-encoded image. The image is then rendered using the following code:

<Image src={`data:image/png;base64,${image}`} boxShadow="lg" />

It's that simple!

**NOTE -** 

I have used cpu to run this locally as I do not have CUDA installed, but when using gpu the values passed to the Stable diffusion pipeline will differ, please make the appropriate changes if using gpu.

**CREDITS -** 

Huge thanks to Nicolas Renotte for making a tutorial on the same!

[YouTube](https://www.youtube.com/c/nicholasrenotte)
[Github](https://github.com/nicknochnack)
