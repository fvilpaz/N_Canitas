import { menuData, examenes } from './data.js';

let currentStep = 0;
let currentSection = 'ene';

/* ==========================================================
   1. INTERFAZ Y NAVEGACIÓN
   ========================================================== */
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
    if (zonaExamen) {
        zonaExamen.classList.add('hidden');
    }

    const btnExamen = document.getElementById('btn-examen-final');
    if (btnExamen) {
        const nombresExamen = {
            'ene': 'EÑE LOBBY',
            'restaurant': 'RESTAURANTE CAÑITAS',
            'pool': 'POOL SNACK',
            'menus': 'MENÚS DEGUSTACIÓN',
            'room': 'ROOM SERVICE'
        };
        const nombreActual = nombresExamen[id] || id.toUpperCase();
        btnExamen.innerHTML = `🚀 EXAMEN DE CERTIFICACIÓN ${nombreActual}`;
    }

    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
    }

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (tab) {
        tab.classList.add('active');
    }

    renderApp();
}

/* ==========================================================
   2. LÓGICA DEL QUIZ (ESTO ES LO QUE FALTABA)
   ========================================================== */

// Esta función hace que el botón de "Poner a prueba mi memoria" funcione
window.startQuiz = function (infoId, quizId) {
    const infoDiv = document.getElementById(infoId);
    const quizDiv = document.getElementById(quizId);

    if (infoDiv && quizDiv) {
        infoDiv.classList.add('hidden'); // Oculta la info del plato
        quizDiv.classList.remove('hidden'); // Muestra el test
    }
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
   3. RENDERIZADO Y VERIFICACIÓN
   ========================================================== */
function renderApp() {
    const container = document.getElementById(currentSection);
    if (!container) return;

    const platos = menuData[currentSection];
    if (!platos || platos.length === 0) {
        container.innerHTML = `<div class="card"><p>🚧 Contenido próximamente en ${currentSection.toUpperCase()}...</p></div>`;
        return;
    }

    const plato = platos[currentStep];
    const isLastPlato = currentStep === platos.length - 1;

    container.innerHTML = `
        <div class="card">
            <div style="margin-bottom: 5px;">
                <span style="font-size:0.75rem; color:var(--accent); font-weight:bold; letter-spacing:1px;">PLATO ${currentStep + 1} / ${platos.length}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h2 style="margin: 0 0 10px 0; line-height: 1.2; font-size: 1.35rem; width: 100%;">${plato.nombre}</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${plato.precio.includes('|')
            ? plato.precio.split('|').map(p => `
                            <span style="background: rgba(0, 150, 255, 0.1); border: 1px solid var(--accent); color: var(--accent); padding: 3px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; white-space: nowrap;">
                            ${p.trim()}
                        </span>`).join('')
            : `<span style="background: rgba(0, 150, 255, 0.1); border: 1px solid var(--accent); color: var(--accent); padding: 3px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;">${plato.precio}</span>`
        }
            </div>
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

window.verificarQuiz = function (platoId, isLastPlato) {
    const platos = menuData[currentSection];
    const plato = platos[currentStep];
    let todoCorrecto = true;

    plato.quiz.preguntas.forEach((p, i) => {
        p.opciones.forEach((o, j) => {
            const input = document.getElementById(`opt-${platoId}-${i}-${j}`);
            if (input) {
                // Para radio y checkbox, comprobamos si el estado "checked" coincide con "correcta"
                if (o.correcta !== input.checked) todoCorrecto = false;
            }
        });
    });

    const resDiv = document.getElementById(`res-${platoId}`);
    const btnVerificar = document.getElementById(`btn-verificar-${platoId}`);

    if (todoCorrecto) {
        btnVerificar.style.display = 'none';
        if (isLastPlato) {
            resDiv.innerHTML = `<div style="color:#4ade80; margin-bottom:10px;">✅ ¡SECCIÓN COMPLETADA!</div>`;
            const zonaExamen = document.getElementById('zona-examen');
            if (zonaExamen) zonaExamen.classList.remove('hidden');
        } else {
            resDiv.innerHTML = `<button onclick="window.siguientePlato()" style="width:100%; background:#22c55e;">SIGUIENTE PLATO ➔</button>`;
        }
    } else {
        resDiv.innerHTML = `<p style="color:#f87171;">❌ Revisa tus respuestas.</p>`;
    }
}

window.siguientePlato = function () {
    currentStep++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
}

window.onload = renderApp;
/* ==========================================================
   4. EXAMEN GLOBAL DE CERTIFICACIÓN
   ========================================================== */
document.getElementById('btn-examen-final').addEventListener('click', function () {
    const container = document.getElementById('super-test-container');
    const content = document.getElementById('test-content');
    const preguntas = examenes[currentSection];

    if (!preguntas) {
        alert("Examen no disponible para esta sección aún.");
        return;
    }

    // Ocultamos la zona del botón y mostramos el contenedor del test
    document.getElementById('zona-examen').classList.add('hidden');
    container.classList.remove('hidden');

    // Generamos el HTML del examen (20 preguntas)
    let html = `<h2 style="text-align:center; color:var(--accent); margin-bottom:30px;">EXAMEN OFICIAL: ${currentSection.toUpperCase()}</h2>`;

    preguntas.forEach((p, i) => {
        html += `
            <div class="card" style="margin-bottom:20px; background: rgba(255,255,255,0.03);">
                <p><strong>${i + 1}. ${p.texto}</strong></p>
                ${p.opciones.map((o, j) => `
                    <label style="display:block; margin:10px 0; cursor:pointer;">
                        <input type="radio" name="exam-${i}" value="${j}" style="margin-right:10px;">
                        ${o}
                    </label>
                `).join('')}
            </div>
        `;
    });

    html += `<button id="btn-finalizar-certificacion" style="width:100%; padding:20px; background:var(--accent); color:white; font-weight:bold;">FINALIZAR Y OBTENER CERTIFICADO</button>`;
    html += `<div id="resultado-final" style="margin-top:20px; text-align:center; font-size:1.5rem;"></div>`;

    content.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Lógica para corregir el examen
    document.getElementById('btn-finalizar-certificacion').onclick = function () {
        let aciertos = 0;
        preguntas.forEach((p, i) => {
            const seleccionada = document.querySelector(`input[name="exam-${i}"]:checked`);
            if (seleccionada && parseInt(seleccionada.value) === p.correcta) {
                aciertos++;
            }
        });

        const resultadoDiv = document.getElementById('resultado-final');
        const porcentaje = (aciertos / preguntas.length) * 100;

        if (porcentaje >= 80) {
            resultadoDiv.innerHTML = `<div style="color:#4ade80;">🏆 ¡APROBADO! (${aciertos}/${preguntas.length})<br><small>Has demostrado ser un experto en ${currentSection}</small></div>`;
        } else {
            resultadoDiv.innerHTML = `<div style="color:#f87171;">❌ NO APTO (${aciertos}/${preguntas.length})<br><small>Necesitas un 80% de aciertos. ¡Repasa y vuelve a intentarlo!</small></div>`;
        }
    };
});