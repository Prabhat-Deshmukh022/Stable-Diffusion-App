A simple stable diffusion app created using React.js for the frontend and fastapi in the backend.

The stable diffusion code for accepting the prompt and creating an image is in the backend, the stable diffusion model is taken from hugging face. 
Github repo for the same - (Repository)[https://github.com/CompVis/stable-diffusion].

All the app does is send a prompt from the frontend to the backend, where the prompt is passed into a Stable diffusion pipeline and an image is generated.

This image is then encoded using Base64 (ASCII characters), which is one of the ways to send images over JSON protocol that can handle only text. The image is a Base64 encoded PNG file basically.

When the frontend receives this image (GET request using axios to the fastapi url), it is rendered as "<Image src={`data:image/png;base64,${image}`} boxShadow="lg" />" where we specify that
the following data is a PNG image encoded as Base64.

It's that simple!

NOTE -

I have used cpu to run this locally as I do not have CUDA installed, but when using gpu the values passed to the Stable diffusion pipeline will differ, please make the appropriate changes if using gpu.

CREDITS - 

Huge thanks to Nicolas Renotte for making a tutorial on the same!

(YouTube)[https://www.youtube.com/c/nicholasrenotte]
(Github)[https://github.com/nicknochnack]
