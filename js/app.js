import { menuData } from './data.js';

let currentStep = 0;
let currentSection = 'ene'; 

window.toggleTheme = function () {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    body.classList.toggle('light');
    if (icon) icon.textContent = body.classList.contains('light') ? "☀️" : "🌙";
}

window.showSection = function (id, tab) {
    currentSection = id;
    currentStep = 0; 
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    const zonaExamen = document.getElementById('zona-examen');
    if (zonaExamen) zonaExamen.classList.add('hidden');

    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (tab) tab.classList.add('active');

    renderApp();
}

window.startQuiz = function (infoId, quizId) {
    document.getElementById(infoId).classList.add('hidden');
    document.getElementById(quizId).classList.remove('hidden');
}

function renderApp() {
    const container = document.getElementById(currentSection);
    if (!container) return;

    const platos = menuData[currentSection];
    if (!platos || platos.length === 0) {
        container.innerHTML = `<div class="card"><p>🚧 Próximamente...</p></div>`;
        return;
    }

    const plato = platos[currentStep];
    const isLastPlato = currentStep === platos.length - 1;

    container.innerHTML = `
        <div class="card">
            <div style="margin-bottom: 5px;">
                <span style="font-size:0.75rem; color:var(--accent); font-weight:bold; letter-spacing:1px;">PLATO ${currentStep + 1} / ${platos.length}</span>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items: flex-start; gap: 15px; margin-bottom: 15px;">
                <h2 style="margin:0; flex: 1; line-height: 1.2;">${plato.nombre}</h2>
                <span class="price" style="white-space: nowrap;">${plato.precio}</span>
            </div>

            <div id="info-${plato.id}">
                <p class="descripcion" style="font-style:italic; opacity:0.8; margin-bottom:15px;">"${plato.descripcion}"</p>
                
                <div class="formacion-extra">
                    <h4 style="font-size:0.7rem; text-transform:uppercase; color:var(--accent); margin-bottom:5px;">Historia y Concepto</h4>
                    <p style="font-size:0.95rem; line-height:1.5; margin-top:0;">${plato.historia}</p>
                </div>

                <p style="font-size:0.9rem; margin-bottom:10px;"><strong>Trazabilidad:</strong> ${plato.trazabilidad}</p>
                
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
            resDiv.innerHTML = `<div style="color:#4ade80; margin-bottom:10px;">✅ ¡SECCIÓN COMPLETADA!</div>`;
            if (currentSection === 'ene') document.getElementById('zona-examen').classList.remove('hidden');
        } else {
            resDiv.innerHTML = `<button onclick="window.siguientePlato()" style="width:100%; background:#22c55e;">SIGUIENTE PLATO ➔</button>`;
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

window.onload = renderApp;
