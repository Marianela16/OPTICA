<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Optica Falcon</title>
    <style>
        /* Estilos generales */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #5DC1B9;
            color: #fff;
            padding: 10px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        nav {
            background-color: #444;
            padding: 10px;
            text-align: center;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        nav ul li {
            display: inline-block;
            margin-right: 20px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            padding: 10px 15px;
            display: block;
        }
        nav ul li a:hover {
            background-color: #666;
        }
        .carousel {
            margin: 20px auto;
            width: 80%;
            overflow: hidden;
            position: relative;
        }
        .carousel-inner {
            display: flex;
            transition: transform 0.5s ease;
        }
        .carousel-item {
            min-width: 100%;
            flex: 0 0 auto;
        }
        .content {
            padding: 20px;
        }
        footer {
            background-color: #5DC1B9;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 91%;
        }
        footer a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
        }
        
        /* Estilos del Chatbot */
        #chatContainer {
            width: 350px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: fixed;
            bottom: 70px; /* Para evitar que se superponga al botón */
            right: 20px;
            display: none; /* Oculto por defecto */
        }
        #chatbox {
            height: 400px;
            border: 1px solid #ccc;
            overflow-y: auto;
            padding: 10px;
            background-color: #ffffff;
        }
        #userInput {
            width: calc(100% - 20px);
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .header {
            background-color: #5DC1B9;
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
        #chatButton {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            background-color: #5DC1B9;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <header>
        <h1>OPTICA FALCON</h1>
        <p>Eslogan o descripción breve</p>
    </header>
    <div class="container">
        <nav>
            <ul>
                <li><a href="Menuprincipal.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="acerca.html">Acerca de</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="login.html">Cuenta</a></li>
            </ul>
        </nav>
        <div class="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img src="carousel/imagen1.jpg" alt="Imagen 1">
                </div>
                <div class="carousel-item">
                    <img src="carousel/imagen2.jpg" alt="Imagen 2">
                </div>
                <div class="carousel-item">
                    <img src="carousel/imagen3.jpg" alt="Imagen 3">
                </div>
            </div>
        </div>
        <div class="content">
            <h2>Título Principal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec eros id nunc volutpat placerat. Donec tincidunt velit vitae lorem pretium vehicula.</p>
        </div>
    </div>

    <!-- Botón para abrir/cerrar el chatbot -->
    <button id="chatButton">💬</button>

    <!-- Contenedor del chatbot -->
    <div id="chatContainer">
        <div class="header">Chatbot Óptico</div>
        <div id="chatbox"></div>
        <input type="text" id="userInput" placeholder="Escribe tu mensaje...">
        <div id="suggestions"></div>
    </div>

    <footer>
        <a href="cupones.html">Cupones</a>
        <a href="terminos.html">Términos y Condiciones</a>
        <a href="politica.html">Política de Privacidad</a>
        <a href="legal.html">Aviso Legal</a>
    </footer>

    <script>
        const chatbox = document.getElementById('chatbox');
        const userInput = document.getElementById('userInput');
        const suggestionsDiv = document.getElementById('suggestions');
        const chatContainer = document.getElementById('chatContainer');
        const chatButton = document.getElementById('chatButton');

        const respuestas = {
            "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
            "buenos días": "¡Buenos días! Estoy aquí para ayudarte.",
            "buenas tardes": "¡Buenas tardes! ¿En qué puedo asistirte?",
            "buenas noches": "¡Buenas noches! Si tienes alguna pregunta, aquí estoy.",
            "¿quién eres?": "Soy un chatbot de óptica, aquí para responder tus preguntas.",
            "¿qué servicios ofrecen?": "Ofrecemos exámenes de la vista, venta de lentes y monturas.",
            // Agrega más respuestas según sea necesario...
        };

        const palabrasClave = Object.keys(respuestas);

        function enviarMensaje() {
            const mensajeUsuario = userInput.value;
            if (mensajeUsuario) {
                agregarMensaje(mensajeUsuario, 'user');
                responder(mensajeUsuario);
                userInput.value = '';
                suggestionsDiv.style.display = 'none'; // Ocultar sugerencias
            }
        }

        function agregarMensaje(mensaje, tipo) {
            const nuevoMensaje = document.createElement('div');
            nuevoMensaje.className = 'message ' + tipo;
            nuevoMensaje.textContent = mensaje;
            chatbox.appendChild(nuevoMensaje);
            chatbox.scrollTop = chatbox.scrollHeight; // Desplazar hacia abajo
        }

        function responder(mensaje) {
            const respuesta = respuestas[mensaje.toLowerCase()] || "Lo siento, no tengo una respuesta para eso.";
            agregarMensaje(respuesta, 'bot');
        }

        function mostrarSugerencias() {
            const input = userInput.value.toLowerCase();
            suggestionsDiv.innerHTML = ''; // Limpiar sugerencias

            if (input) {
                const sugerencias = palabrasClave.filter(palabra => palabra.startsWith(input));
                if (sugerencias.length > 0) {
                    sugerencias.forEach(palabra => {
                        const div = document.createElement('div');
                        div.className = 'suggestion';
                        div.textContent = palabra;
                        div.onclick = () => seleccionarSugerencia(palabra);
                        suggestionsDiv.appendChild(div);
                    });
                    suggestionsDiv.style.display = 'block'; // Mostrar sugerencias
                } else {
                    suggestionsDiv.style.display = 'none'; // Ocultar si no hay sugerencias
                }
            } else {
                suggestionsDiv.style.display = 'none'; // Ocultar si no hay entrada
            }
        }

        function seleccionarSugerencia(palabra) {
            userInput.value = palabra; // Completar la entrada
            suggestionsDiv.style.display = 'none'; // Ocultar sugerencias
            enviarMensaje(); // Enviar el mensaje
        }

        userInput.addEventListener('input', mostrarSugerencias);
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarMensaje();
            }
        });

        document.addEventListener('click', function(event) {
            if (!suggestionsDiv.contains(event.target) && event.target !== userInput) {
                suggestionsDiv.style.display = 'none'; // Ocultar si se hace clic fuera
            }
        });

        // Funcionalidad para abrir/cerrar el chatbot
        chatButton.addEventListener('click', () => {
            if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
                chatContainer.style.display = 'block';
            } else {
                chatContainer.style.display = 'none';
            }
        });
    </script>
</body>
</html>
