import { menuData } from './data.js';

/* 1. NAVEGACIÓN GLOBAL */
window.showSection = function(id, element) {
    // Ocultamos todas las secciones de platos
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    
    // Quitamos el color azul de todos los botones
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    // Mostramos la sección que queremos
    const target = document.getElementById(id);
    if(target) {
        target.classList.remove('hidden');
        if(element) element.classList.add('active');
        renderPlatos(id);
    }
}

/* 2. DIBUJAR LOS PLATOS (Bucle Map) */
function renderPlatos(seccion) {
    const container = document.getElementById(seccion);
    const platos = menuData[seccion];
    
    if(!platos || platos.length === 0) {
        container.innerHTML = `<div class="card" style="text-align:center;">🚧 Próximamente en ${seccion}...</div>`;
        return;
    }

    // Este bloque .map recorre TODO tu data.js y crea las tarjetas una a una
    container.innerHTML = platos.map(p => `
        <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="color:var(--accent); font-weight:bold; font-size:0.8rem;">${p.precio || ''}</span>
            </div>
            <h2 style="margin:0; color:var(--accent);">${p.nombre}</h2>
            <p style="font-style:italic; font-size:0.9rem; margin:10px 0;">"${p.descripcion}"</p>
            <p style="font-size:0.95rem;">${p.historia}</p>
            <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:10px; margin-top:10px;">
                <p style="font-size:0.8rem; margin:0;"><strong>Origen:</strong> ${p.trazabilidad}</p>
                <div style="margin-top:10px;">
                    ${p.alergenos.map(a => `<span class="chip">${a}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

/* 3. LÓGICA DEL BOTÓN DE EXAMEN */
const btnExamen = document.getElementById('btn-certificacion');
if(btnExamen) {
    btnExamen.onclick = () => {
        alert("¡Prepárate! El examen de certificación de " + document.querySelector('.tab.active').innerText + " comenzará pronto.");
        // Aquí podrías redirigir a un Typeform o Google Forms si quieres algo rápido
        // window.location.href = "URL_DE_TU_EXAMEN";
    };
}

/* 4. ARRANQUE INICIAL */
window.onload = () => {
    // Buscamos el primer botón (Eñe) y lo pulsamos automáticamente
    const primeraTab = document.querySelector('.tab');
    if(primeraTab) {
        window.showSection('ene', primeraTab);
    }
}
