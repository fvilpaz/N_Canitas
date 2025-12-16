import { menuData } from './data.js';

let currentStep = 0;
let currentSection = 'ene'; 

window.toggleTheme = function () {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    body.classList.toggle('light');
    icon.textContent = body.classList.contains('light') ? "☀️" : "🌙";
}

window.showSection = function (id, tab) {
    currentSection = id;
    currentStep = 0; 
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
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
        container.innerHTML = `<div style="text-align:center; padding:40px;">🚧 Próximamente...</div>`;
        return;
    }

    const plato = platos[currentStep];
    const isLastPlato = currentStep === platos.length - 1;

    // AQUÍ ESTÁ EL TRUCO: Solo pintamos UNA tarjeta
    container.innerHTML = `
        <div class="card">
            <p style="font-size:0.7rem; color:var(--accent);">Plato ${currentStep + 1} de ${platos.length}</p>
            <h2>${plato.nombre}</h2>
            <div id="info-${plato.id}">
                <p class="descripcion">"${plato.descripcion}"</p>
                <div class="formacion-extra" style="border-left: 4px solid var(--accent); padding-left:15px; margin: 15px 0;">
                    <p style="font-size: 0.95rem;">${plato.historia}</p>
                </div>
                <p class="trazabilidad"><strong>Trazabilidad:</strong> ${plato.trazabilidad}</p>
                <div class="alergenos">
                    ${plato.alergenos.map(a => `<span class="chip">${a}</span>`).join('')}
                </div>
                <button onclick="startQuiz('info-${plato.id}', 'quiz-${plato.id}')" style="width:100%; margin-top:20px;">🧠 Empezar quiz</button>
            </div>
            <div id="quiz-${plato.id}" class="quiz hidden">
                ${generarQuizHTML(plato, isLastPlato)}
            </div>
        </div>
    `;
}

function generarQuizHTML(plato, isLastPlato) {
    const preguntas = plato.quiz.preguntas.map((p, i) => `
        <div style="margin-bottom:20px;">
            <p><strong>${p.texto}</strong></p>
            ${p.opciones.map((o, j) => `
                <label style="display:block; margin-bottom:8px;">
                    <input type="${p.tipo}" name="q-${plato.id}-${i}" id="opt-${plato.id}-${i}-${j}"> ${o.texto}
                </label>
            `).join('')}
        </div>
    `).join('');

    return `
        ${preguntas}
        <button id="btn-verificar-${plato.id}" onclick="verificarQuiz('${plato.id}', ${isLastPlato})" style="width:100%;">Enviar Respuestas</button>
        <div id="res-${plato.id}" style="margin-top:15px; text-align:center;"></div>
    `;
}

window.verificarQuiz = function (platoId, isLastPlato) {
    const plato = menuData[currentSection][currentStep];
    let todoCorrecto = true;
    plato.quiz.preguntas.forEach((p, i) => {
        p.opciones.forEach((o, j) => {
            const input = document.getElementById(`opt-${platoId}-${i}-${j}`);
            if (input && o.correcta !== input.checked) todoCorrecto = false;
        });
    });

    const resDiv = document.getElementById(`res-${platoId}`);
    if (todoCorrecto) {
        resDiv.innerHTML = isLastPlato 
            ? `<button onclick="location.reload()" style="background:#facc15; color:black; width:100%;">🏆 ¡EXAMEN FINAL!</button>`
            : `<button onclick="window.siguientePlato()" style="background:#22c55e; width:100%;">Siguiente Plato ➔</button>`;
        document.getElementById(`btn-verificar-${platoId}`).style.display = 'none';
    } else {
        resDiv.innerHTML = `<p style="color:#f87171;">❌ Inténtalo de nuevo</p>`;
    }
}

window.siguientePlato = function() {
    currentStep++;
    window.scrollTo(0,0);
    renderApp();
}

renderApp();
