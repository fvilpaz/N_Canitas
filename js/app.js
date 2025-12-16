import { menuData } from './data.js';

/* ==========================================================
   1. VARIABLES DE ESTADO Y VISIBILIDAD GLOBAL
   ========================================================== */
let currentStep = 0;
let currentSection = 'ene'; 

// Hacemos las funciones visibles para el HTML (necesario por ser type="module")
window.toggleTheme = function () {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    body.classList.toggle('light');
    icon.textContent = body.classList.contains('light') ? "☀️" : "🌙";
}

window.showSection = function (id, tab) {
    currentSection = id;
    currentStep = 0; 
    
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    const zonaExamen = document.getElementById('zona-examen');
    if (zonaExamen) zonaExamen.classList.add('hidden');

    // Mostrar sección seleccionada
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');

    // Gestionar pestañas activas
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (tab) tab.classList.add('active');

    renderApp();
}

window.startQuiz = function (infoId, quizId) {
    document.getElementById(infoId).classList.add('hidden');
    document.getElementById(quizId).classList.remove('hidden');
}

/* ==========================================================
   2. MOTOR DE RENDERIZADO (DIBUJAR PLATOS)
   ========================================================== */
function renderApp() {
    const container = document.getElementById(currentSection);
    if (!container) return;

    // 'listaPlatos' evita el choque de nombres con el ID 'ene'
    const listaPlatos = menuData[currentSection];

    if (!listaPlatos || listaPlatos.length === 0) {
        container.innerHTML = `
            <div class="coming-soon" style="text-align:center; padding:40px; border:2px dashed #444; border-radius:15px; margin:20px;">
                <p>🚧 Contenido de <strong>${currentSection.toUpperCase()}</strong> próximamente...</p>
            </div>`;
        return;
    }

    const plato = listaPlatos[currentStep];
    const isLastPlato = currentStep === listaPlatos.length - 1;

    container.innerHTML = `
        <div class="card">
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                <span style="font-size:0.75rem; color:var(--accent); font-weight:bold;">PLATO ${currentStep + 1} / ${listaPlatos.length}</span>
                <span class="price">${plato.precio}</span>
            </div>
            
            <h2>${plato.nombre}</h2>

            <div id="info-${plato.id}">
                <p class="descripcion" style="font-style:italic; margin-bottom:15px; opacity:0.8;">"${plato.descripcion}"</p>
                
                <div class="formacion-extra" style="border-left:4px solid var(--accent); padding-left:15px; margin-bottom:20px;">
                    <h4 style="font-size:0.7rem; text-transform:uppercase; color:var(--accent); margin-bottom:5px;">Historia y Concepto</h4>
                    <p style="font-size:0.95rem; line-height:1.5;">${plato.historia}</p>
                </div>

                <p style="font-size:0.9rem;"><strong>Trazabilidad:</strong> ${plato.trazabilidad}</p>
                
                <div class="alergenos" style="margin-top:15px;">
                    ${plato.alergenos.map(a => `<span class="chip">${a}</span>`).join('')}
                </div>

                <button onclick="startQuiz('info-${plato.id}', 'quiz-${plato.id}')" style="width:100%; margin-top:25px; padding:15px;">
                    🧠 PONER A PRUEBA MI MEMORIA
                </button>
            </div>

            <div id="quiz-${plato.id}" class="quiz hidden">
                ${generarQuizHTML(plato, isLastPlato)}
            </div>
        </div>
    `;
}

function generarQuizHTML(plato, isLastPlato) {
    const preguntasHTML = plato.quiz.preguntas.map((p, i) => {
        const opcionesHTML = p.opciones.map((o, j) => `
            <label style="display:block; margin-bottom:10px; cursor:pointer;">
                <input type="${p.tipo}" name="q-${plato.id}-${i}" id="opt-${plato.id}-${i}-${j}" style="margin-right:10px;">
                ${o.texto}
            </label>
        `).join('');
        return `<div style="margin-bottom:20px;"><p><strong>${p.texto}</strong></p>${opcionesHTML}</div>`;
    }).join('');

    return `
        ${preguntasHTML}
        <button id="btn-verificar-${plato.id}" onclick="verificarQuiz('${plato.id}', ${isLastPlato})" style="width:100%; padding:15px;">ENVIAR RESPUESTAS</button>
        <div id="res-${plato.id}" style="margin-top:20px; text-align:center; font-weight:bold;"></div>
    `;
}

/* ==========================================================
   3. VERIFICACIÓN Y NAVEGACIÓN
   ========================================================== */
window.verificarQuiz = function (platoId, isLastPlato) {
    const platos = menuData[currentSection];
    const plato = platos[currentStep];
    let todoCorrecto = true;

    plato.quiz.preguntas.forEach((p, i) => {
        p.opciones.forEach((o, j) => {
            const input = document.getElementById(`opt-${platoId}-${i}-${j}`);
            if (input && o.correcta !== input.checked) todoCorrecto = false;
        });
    });

    const resDiv = document.getElementById(`res-${platoId}`);
    const btnVerificar = document.getElementById(`btn-verificar-${platoId}`);

    if (todoCorrecto) {
        btnVerificar.style.display = 'none';
        if (isLastPlato) {
            resDiv.innerHTML = `<div style="color:#4ade80;">✅ SECCIÓN COMPLETADA.</div>`;
            if (currentSection === 'ene') {
                document.getElementById('zona-examen').classList.remove('hidden');
            }
        } else {
            resDiv.innerHTML = `
                <div style="color:#4ade80; margin-bottom:15px;">✅ ¡CORRECTO!</div>
                <button onclick="window.siguientePlato()" style="width:100%; background:#22c55e;">SIGUIENTE PLATO ➔</button>`;
        }
    } else {
        resDiv.innerHTML = `<p style="color:#f87171;">❌ Revisa tus respuestas.</p>`;
    }
}

window.siguientePlato = function() {
    currentStep++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
}

/* ==========================================================
   4. EXAMEN FINAL Y CERTIFICACIÓN
   ========================================================== */
const btnCert = document.getElementById('btn-certificacion');
if (btnCert) {
    btnCert.addEventListener('click', () => {
        document.getElementById('ene').classList.add('hidden');
        document.getElementById('zona-examen').classList.add('hidden');
        const testSection = document.getElementById('super-test-container');
        const testContent = document.getElementById('test-content');
        testSection.classList.remove('hidden');

        let htmlExamen = '<h2 style="color:#facc15; text-align:center;">🏆 EXAMEN FINAL</h2>';
        menuData.ene.forEach((plato, index) => {
            const randomQ = plato.quiz.preguntas[Math.floor(Math.random() * plato.quiz.preguntas.length)];
            htmlExamen += `
                <div class="card" style="margin-bottom:20px;">
                    <p style="font-size:0.8rem; color:#facc15;">${plato.nombre}</p>
                    <p><strong>${randomQ.texto}</strong></p>
                    ${randomQ.opciones.map((opt, i) => `
                        <label style="display:block; margin:10px 0;">
                            <input type="radio" name="p${index}" value="${opt.correcta}"> ${opt.texto}
                        </label>
                    `).join('')}
                </div>`;
        });
        htmlExamen += `<button id="finalizar-examen" style="width:100%; padding:20px; background:#22c55e;">ENTREGAR EXAMEN</button>`;
        testContent.innerHTML = htmlExamen;

        document.getElementById('finalizar-examen').onclick = () => {
            const seleccionadas = document.querySelectorAll('#test-content input[type="radio"]:checked');
            if (seleccionadas.length < menuData.ene.length) {
                alert("Responde a todas las preguntas.");
                return;
            }
            let aciertos = 0;
            seleccionadas.forEach(radio => { if (radio.value === "true") aciertos++; });
            alert(`Has acertado ${aciertos} de ${menuData.ene.length}.`);
            location.reload();
        };
    });
}

// Inicialización
window.onload = () => {
    showSection('ene', document.querySelector('.tab'));
};
