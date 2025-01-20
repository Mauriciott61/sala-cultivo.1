// sensorData.js
import { database } from './firebaseConfig.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Función para obtener los datos de los sensores y actualizar la interfaz
function getSensorData() {
    const dbRef = ref(database, 'sensores');
    get(dbRef).then(snapshot => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            document.getElementById("temperatura").textContent = data.temperatura;
            document.getElementById("humedad_ambiente").textContent = data.humedad_ambiente;
            document.getElementById("humedad_suelo").textContent = data.humedad_suelo;
            document.getElementById("deficit_presion_vapor").textContent = data.deficit_presion_vapor;
        } else {
            console.log("No hay datos");
        }
    }).catch(error => {
        console.error("Error al obtener los datos:", error);
    });
}

// Inicializar la obtención de datos y actualización cada 5 segundos
setInterval(getSensorData, 5000);

// Llamar a la función al cargar la página para obtener los datos iniciales
getSensorData();
