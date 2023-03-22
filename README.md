# Marvin the gpt bot

Chatbot construído con Sveltekit y Open AI API.
Cómo lo construí y detalles acá: https://www.youtube.com/watch?v=qacqCWFlOe4

<img width="1600" alt="Screen Shot 2023-01-05 at 21 54 26" src="https://user-images.githubusercontent.com/1221345/211206638-43cd802d-0ed7-4911-bec9-6f89769c1b72.png">


Atención!
Si quieres usarlo en producción tienes que mover la apikey al lado de producción para no exponerla a los usuarios.

# Para ejecutar

1. Crea un archivo .env en la raíz y agrega tu api key de OpenAI: https://platform.openai.com/account/api-keys

```
PUBLIC_OPENAI_API_KEY=TU_API_KEY (sk-XXXX...)
```
2. Ejecuta `npm install` para instalar las dependencias del proyecto.
3. Ejecuta `npm run dev` para correr el proyecto. Te indicará en que url y puerto está corriendo.
4. Ingresa a la url:puerto en tu navegador, ejemplo: http://localhost:5174/