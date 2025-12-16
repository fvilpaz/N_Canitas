import { menuData } from './data.js';

/* ==========================================================
   1. FUNCIONES DE INTERFAZ (Globales)
   ========================================================== */

window.toggleTheme = function () {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    icon.textContent = "🌙";
  } else {
    body.classList.add('light');
    icon.textContent = "☀️";
  }
}

window.showSection = function (id, tab) {
  // Ocultar todas las secciones, incluido el examen si estuviera abierto
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));

  const target = document.getElementById(id);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (tab) tab.classList.add('active');

  // Mostrar el botón de examen solo si estamos en Eñe
  const zonaExamen = document.getElementById('zona-examen');
  if (zonaExamen) {
    zonaExamen.style.display = (id === 'ene') ? 'block' : 'none';
  }
}

window.startQuiz = function (infoId, quizId) {
  document.getElementById(infoId).classList.add('hidden');
  document.getElementById(quizId).classList.remove('hidden');
}

/* ==========================================================
   2. LÓGICA DE CARGA DINÁMICA
   ========================================================== */

function renderApp() {
  Object.keys(menuData).forEach(sectionId => {
    const container = document.getElementById(sectionId);
    if (!container) return;

    const platos = menuData[sectionId];

    if (platos.length === 0) {
      container.innerHTML = `
        <div class="coming-soon" style="text-align:center; padding:40px; border:2px dashed #444; border-radius:15px; margin:20px;">
          <p style="font-size:1.2rem;">🚧 Contenido de <strong>${sectionId.toUpperCase()}</strong> próximamente...</p>
        </div>`;
      return;
    }

    // Generar el HTML de los platos
    const htmlPlatos = platos.map(plato => `
      <div class="card">
        <div class="card-header" style="display:flex; justify-content:space-between; align-items:center;">
          <h2>${plato.nombre}</h2>
          <span class="price" style="font-weight:bold; color:#0098da;">${plato.precio}</span>
        </div>
        
        <div id="info-${plato.id}">
          <p class="descripcion" style="font-style: italic; color: #aaa; margin-bottom: 15px;">
            "${plato.descripcion}"
          </p>
          <div class="formacion-extra" style="background: rgba(0, 152, 218, 0.05); border-left: 4px solid #0098da; padding: 15px; margin-bottom: 20px; border-radius: 0 10px 10px 0;">
             <h4 style="margin-top:0; color:#0098da; font-size: 0.8rem; text-transform: uppercase;">Historia y Concepto</h4>
             <p style="font-size: 0.95rem; line-height: 1.6; margin: 0; text-align: justify;">
                ${plato.historia}
             </p>
          </div>
          <p class="trazabilidad"><strong>Trazabilidad:</strong> ${plato.trazabilidad}</p>
          <div class="alergenos">
            ${plato.alergenos.map(a => `<span class="chip">${a}</span>`).join('')}
          </div>
          <button onclick="startQuiz('info-${plato.id}', 'quiz-${plato.id}')" style="width:100%; margin-top:10px;">🧠 Empezar quiz</button>
        </div>
        <div id="quiz-${plato.id}" class="quiz hidden">
          ${generarQuizHTML(plato)}
        </div>
      </div>
    `).join('');

    // Si la sección es 'ene', mantenemos el div del botón de examen al final
    if (sectionId === 'ene') {
      const zonaExamen = document.getElementById('zona-examen');
      container.innerHTML = htmlPlatos;
      if (zonaExamen) container.appendChild(zonaExamen);
    } else {
      container.innerHTML = htmlPlatos;
    }
  });
}

function generarQuizHTML(plato) {
  return plato.quiz.preguntas.map((p, i) => {
    let opcionesHTML = p.opciones.map((o, j) => `
      <label style="display:block; margin-bottom:8px;">
        <input type="${p.tipo}" name="q-${plato.id}-${i}" id="opt-${plato.id}-${i}-${j}">
        ${o.texto}
      </label>
    `).join('');
    return `
      <div class="pregunta-bloque" style="margin-bottom:20px;">
        <p><strong>${p.texto}</strong></p>
        ${opcionesHTML}
      </div>
    `;
  }).join('') + `
    <button onclick="verificarQuiz('${plato.id}')" style="width:100%;">Enviar Respuestas</button>
    <p id="res-${plato.id}" style="margin-top:10px; font-weight:bold; text-align:center;"></p>
  `;
}

/* ==========================================================
   3. VERIFICACIÓN Y LÓGICA DE EXAMEN
   ========================================================== */

window.verificarQuiz = function (platoId) {
  let plato;
  for (let section in menuData) {
    plato = menuData[section].find(p => p.id === platoId);
    if (plato) break;
  }
  if (!plato) return;

  let todoCorrecto = true;
  plato.quiz.preguntas.forEach((p, i) => {
    p.opciones.forEach((o, j) => {
      const input = document.getElementById(`opt-${platoId}-${i}-${j}`);
      if (input && o.correcta !== input.checked) todoCorrecto = false;
    });
  });

  const resDiv = document.getElementById(`res-${platoId}`);
  resDiv.innerHTML = todoCorrecto ? "✅ ¡Perfecto! Conoces el plato." : "❌ Revisa la información e inténtalo de nuevo.";
}

// INICIALIZACIÓN CUANDO EL DOM ESTÉ LISTO
document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  const btnCert = document.getElementById('btn-certificacion');
  if (btnCert) {
    btnCert.addEventListener('click', () => {
      // 1. Esconder todo lo anterior
      document.getElementById('ene').classList.add('hidden');
      document.getElementById('zona-examen').style.display = 'none';

      // 2. Mostrar contenedor de examen
      const testSection = document.getElementById('super-test-container');
      const testContent = document.getElementById('test-content');
      testSection.classList.remove('hidden');
      testSection.classList.add('active');

      // 3. Crear preguntas aleatorias
      let htmlExamen = '<h2 style="color:#ffcc00; text-align:center;">🏆 EXAMEN DE CERTIFICACIÓN</h2>';
      htmlExamen += '<p style="text-align:center; margin-bottom:30px;">Responde a todas las preguntas de Eñe Lobby.</p>';

      menuData.ene.forEach((plato, index) => {
        const randomQ = plato.quiz.preguntas[Math.floor(Math.random() * plato.quiz.preguntas.length)];
        htmlExamen += `
                    <div class="pregunta-card" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <p><strong>${index + 1}. Sobre: ${plato.nombre}</strong></p>
                        <p>${randomQ.texto}</p>
                        ${randomQ.opciones.map((opt, i) => `
                            <label style="display: block; margin: 10px 0; cursor: pointer;">
                                <input type="radio" name="p${index}" value="${opt.correcta}" style="margin-right:10px;">
                                ${opt.texto}
                            </label>
                        `).join('')}
                    </div>
                `;
      });

      htmlExamen += `<button id="finalizar-examen" style="width: 100%; padding: 20px; background: #28a745; color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; margin-top: 20px;">FINALIZAR Y ENTREGAR</button>`;
      testContent.innerHTML = htmlExamen;

      // 4. Lógica de entrega
      document.getElementById('finalizar-examen').onclick = () => {
        const seleccionadas = document.querySelectorAll('#test-content input[type="radio"]:checked');
        if (seleccionadas.length < menuData.ene.length) {
          alert("⚠️ Por favor, responde a todas las preguntas.");
          return;
        }
        let aciertos = 0;
        seleccionadas.forEach(radio => { if (radio.value === "true") aciertos++; });

        alert(`Has acertado ${aciertos} de ${menuData.ene.length}.`);
        location.reload();
      };
    });
  }
});