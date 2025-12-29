import { menuData, examenes } from './data.js';

let currentStep = 0;
let currentSection = 'desayunos';

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
            'desayunos': 'DESAYUNOS CAÑITAS',
            'restaurant': 'RESTAURANTE CAÑITAS',
            'menus': 'MENÚS DEGUSTACIÓN',
            'pool': 'POOL SNACK',
            'ene': 'EÑE LOBBY',
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
   2. LÓGICA DEL QUIZ DE PLATO
   ========================================================== */

window.startQuiz = function (infoId, quizId) {
    const infoDiv = document.getElementById(infoId);
    const quizDiv = document.getElementById(quizId);

    if (infoDiv && quizDiv) {
        infoDiv.classList.add('hidden');
        quizDiv.classList.remove('hidden');
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

function obtenerClaseColor(alergeno) {
    const a = alergeno.toLowerCase().trim();
    if (a.includes("gluten") || a.includes("trigo")) return "bg-gluten";
    if (a.includes("lácteos") || a.includes("leche") || a.includes("lactosa")) return "bg-lacteos";
    if (a.includes("sulfitos")) return "bg-sulfitos";
    if (a.includes("soja")) return "bg-soja";
    if (a.includes("pescado")) return "bg-pescado";
    if (a.includes("cacahuete")) return "bg-cacahuete";
    if (a.includes("sésamo") || a.includes("ajonjolí")) return "bg-sesamo";
    if (a.includes("mostaza")) return "bg-mostaza";
    if (a.includes("frutos secos") || a.includes("nuez") || a.includes("almendra")) return "bg-frutos-secos";
    if (a.includes("huevo")) return "bg-huevo";
    if (a.includes("crustáceos") || a.includes("gamba") || a.includes("cangrejo")) return "bg-crustaceos";
    if (a.includes("moluscos") || a.includes("mejillón")) return "bg-moluscos";
    if (a.includes("apio")) return "bg-apio";
    if (a.includes("altramuz")) return "bg-altramuz";
    return "bg-default";
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
                    ${plato.alergenos.map(a => {
            const claseColor = obtenerClaseColor(a);
            return `<span class="chip ${claseColor}">${a}</span>`;
        }).join('')}
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

    document.getElementById('zona-examen').classList.add('hidden');
    container.classList.remove('hidden');

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
            // Mantenemos el orden de coherencia aquí también
            const nombresExamen = {
                'desayunos': 'DESAYUNOS CAÑITAS',
                'restaurant': 'RESTAURANTE CAÑITAS',
                'menus': 'MENÚS DEGUSTACIÓN',
                'pool': 'POOL SNACK',
                'ene': 'EÑE LOBBY',
                'room': 'ROOM SERVICE'
            };
            window.mostrarCertificado(nombresExamen[currentSection] || currentSection.toUpperCase());
        } else {
            resultadoDiv.innerHTML = `<div style="color:#f87171; margin-top:20px;">❌ NO APTO (${aciertos}/${preguntas.length})<br><small>Necesitas un 80% de aciertos para certificarte. ¡Repasa y vuelve a intentarlo!</small></div>`;
        }
    };
});

/* ==========================================================
   5. FUNCIONES GLOBALES DEL CERTIFICADO
   ========================================================== */
window.mostrarCertificado = function (nombreMenu) {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 11000
        });
    }

    const msgElement = document.getElementById('mensaje-certificacion');
    if (msgElement) {
        msgElement.innerText = `Has superado con éxito el examen de ${nombreMenu}. Ya eres oficialmente un experto en nuestra propuesta gastronómica.`;
    }

    const modal = document.getElementById('modal-exito');
    if (modal) {
        modal.classList.remove('modal-oculto');
    }
};

window.volverAlMenu = function () {
    window.location.reload();
};