// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDn4smuABKPgN8DBYI2LAzoKhe3EbEYTQk",
    authDomain: "sala-cultivo.firebaseapp.com",
    databaseURL: "https://sala-cultivo-default-rtdb.firebaseio.com",
    projectId: "sala-cultivo",
    storageBucket: "sala-cultivo.firebasestorage.app",
    messagingSenderId: "388469961230",
    appId: "1:388469961230:web:d16beb9ef00ddf0866c25f",
    measurementId: "G-72JQD67R0X"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar la base de datos para su uso en otros archivos
export { database };
