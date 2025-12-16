import { menuData } from './data.js';

let currentStep = 0;
let currentSection = 'ene'; 

// Función para cambiar de sección (Lobby, Restaurante, etc.)
window.showSection = function (id, tab) {
    currentSection = id;
    currentStep = 0; 
    
    // Ocultar todo
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    const examen = document.getElementById('zona-examen');
    if (examen) examen.classList.add('hidden');

    // Mostrar sección actual
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');

    // Cambiar pestaña activa
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (tab) tab.classList.add('active');

    renderApp();
}

// Función para mostrar el plato actual
function renderApp() {
    const container = document.getElementById(currentSection);
    if (!container) return;

    const platos = menuData[currentSection];

    if (!platos || platos.length === 0) {
        container.innerHTML = `<div class="card">🚧 Próximamente...</div>`;
        return;
    }

    const plato = platos[currentStep];
    
    container.innerHTML = `
        <div class="card">
            <div style="display:flex; justify-content:space-between; color:var(--accent); font-weight:bold; font-size:0.8rem;">
                <span>PLATO ${currentStep + 1} / ${platos.length}</span>
                <span>${plato.precio}</span>
            </div>
            <h2>${plato.nombre}</h2>
            <p style="font-style:italic; opacity:0.8;">"${plato.descripcion}"</p>
            <p>${plato.historia}</p>
            <p><strong>Trazabilidad:</strong> ${plato.trazabilidad}</p>
            <div class="alergenos">
                ${plato.alergenos.map(a => `<span class="chip">${a}</span>`).join('')}
            </div>
            <button onclick="window.siguientePlato()" style="width:100%; margin-top:20px;">SIGUIENTE PLATO ➔</button>
        </div>
    `;
}

window.siguientePlato = function() {
    const platos = menuData[currentSection];
    if (currentStep < platos.length - 1) {
        currentStep++;
        renderApp();
        window.scrollTo(0,0);
    } else {
        alert("¡Has llegado al final de esta sección!");
        if (currentSection === 'ene') {
            document.getElementById('zona-examen').classList.remove('hidden');
        }
    }
}

// Arrancar la app
window.onload = () => {
    showSection('ene', document.querySelector('.tab'));
};
