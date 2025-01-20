// controlData.js
import { database } from './firebaseConfig.js';
import { ref, get, update } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Función para obtener los datos de los controles de dispositivos y actualizar los botones
function getControlData() {
    const dbRef = ref(database, 'controles');
    get(dbRef).then(snapshot => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            document.getElementById("bomba_riego_btn").disabled = !data.bomba_riego;
            document.getElementById("extractor_btn").disabled = !data.extractor;
            document.getElementById("humidificador_btn").disabled = !data.humidificador;
            document.getElementById("luces_btn").disabled = !data.luces;
            document.getElementById("ventilador_btn").disabled = !data.ventilador;
        } else {
            console.log("No hay datos de controles");
        }
    }).catch(error => {
        console.error("Error al obtener los datos de controles:", error);
    });
}

// Función para cambiar el estado de un control
function toggleControl(control) {
    const dbRef = ref(database, `controles/${control}`);
    get(dbRef).then(snapshot => {
        const currentState = snapshot.val();
        update(ref(database), {
            [`controles/${control}`]: !currentState
        });
    }).catch(error => {
        console.error("Error al cambiar el estado del control:", error);
    });
}

// Event listeners para los botones
document.getElementById("bomba_riego_btn").addEventListener("click", () => toggleControl('bomba_riego'));
document.getElementById("extractor_btn").addEventListener("click", () => toggleControl('extractor'));
document.getElementById("humidificador_btn").addEventListener("click", () => toggleControl('humidificador'));
document.getElementById("luces_btn").addEventListener("click", () => toggleControl('luces'));
document.getElementById("ventilador_btn").addEventListener("click", () => toggleControl('ventilador'));

// Llamar a la función al cargar la página
getControlData();

// Actualizar los controles cada 5 segundos
setInterval(getControlData, 5000);
