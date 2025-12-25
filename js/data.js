export const menuData = {
    desayunos: [
        {
            id: "huevos-rotos-bellota",
            nombre: "Huevos Rotos con Jamón de Bellota",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Huevos camperos con puntilla, patata agria y jamón 100% ibérico.",
            historia: "Este plato representa la obsesión de Javier Sanz y Juan Sahuquillo por el producto puro. La técnica de la 'puntilla' requiere un control exacto de la temperatura del aceite para que el borde de la clara se caramelice y quede crujiente, mientras la yema permanece totalmente líquida para bañar la patata agria frita al momento. El jamón de bellota aporta la elegancia final: su grasa se atempera con el calor del huevo, liberando aromas a fruto seco y una textura fundente que es la seña de identidad de los desayunos en Cañitas.",
            trazabilidad: "Huevos de granja local · Jamón 100% Ibérico de Bellota · Patata Agria de recolección seleccionada.",
            alergenos: ["Huevo"], // Alérgenos verificados según receta
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica específica se busca en la clara del huevo para este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Cocinada al vapor para máxima suavidad", correcta: false },
                            { texto: "Puntilla crujiente mediante aceite a alta temperatura", correcta: true },
                            { texto: "Escalfado en agua con vinagre", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué se utiliza específicamente la variedad de Patata Agria?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque es más dulce que el resto", correcta: false },
                            { texto: "Por su bajo contenido en azúcar y resistencia a la fritura crujiente", correcta: true },
                            { texto: "Porque es la que tiene la piel más fina", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el Menú ME: ¿Cuál es el suplemento si el cliente elige dos platos de esta sección?",
                        tipo: "radio",
                        opciones: [
                            { texto: "8€ EXTRA", correcta: false },
                            { texto: "14€ EXTRA", correcta: true },
                            { texto: "Es gratuito para clientes ME", correcta: false }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué alérgeno principal debemos advertir en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Gluten (por las patatas)", correcta: false },
                            { texto: "Huevo", correcta: true },
                            { texto: "Lácteos (por el jamón)", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué aporta el jamón de bellota al entrar en contacto con el huevo caliente?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se endurece y aporta una textura correosa", correcta: false },
                            { texto: "Su grasa infiltrada se atempera y libera aromas complejos", correcta: true },
                            { texto: "Pierde todo su sabor por el calor excesivo", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "huevos-fritos-joselito",
            nombre: "Huevos Fritos con Puntilla y Papada Joselito",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Huevos fritos de corral acompañados de la mítica papada ibérica de Guijuelo.",
            historia: "Este plato rinde homenaje a la excelencia cárnica de Joselito. La papada ibérica de bellota, curada de forma natural en Guijuelo, posee una proporción de grasa infiltrada que se vuelve translúcida y sedosa al contacto con el calor residual de los huevos recién fritos. La clave técnica es la armonía entre la potencia del ibérico y la sencillez del huevo frito con puntilla, creando una experiencia donde el producto principal brilla por su pureza aromática y textura fundente.",
            trazabilidad: "Papada Joselito (Guijuelo, Salamanca) · Huevos camperos de producción local.",
            alergenos: ["Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué marca de ibéricos de renombre mundial suministra la papada para este plato?",
                        tipo: "radio",
                        options: [
                            { texto: "Cinco Jotas", correcta: false },
                            { texto: "Joselito", correcta: true },
                            { texto: "Sánchez Romero Carvajal", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Dónde se encuentra la sede y el proceso de curación de la papada utilizada?",
                        tipo: "radio",
                        options: [
                            { texto: "Jabugo (Huelva)", correcta: false },
                            { texto: "Guijuelo (Salamanca)", correcta: true },
                            { texto: "Valle de los Pedroches (Córdoba)", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué sucede con la textura de la papada al colocarla sobre los huevos calientes?",
                        tipo: "radio",
                        options: [
                            { texto: "Se vuelve rígida y crujiente", correcta: false },
                            { texto: "Se vuelve translúcida y libera su grasa infiltrada sedosa", correcta: true },
                            { texto: "No experimenta ningún cambio", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la operativa ME: ¿Qué precio se aplica si el cliente elige solo ESTA opción?",
                        tipo: "radio",
                        options: [
                            { texto: "6€ EXTRA", correcta: false },
                            { texto: "8€ EXTRA", correcta: true },
                            { texto: "14€ EXTRA", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica el alérgeno de declaración obligatoria presente en la ficha técnica:",
                        tipo: "checkbox",
                        options: [
                            { texto: "Huevo", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Sulfitos", correcta: false },
                            { texto: "Moluscos", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "omelette-payoyo",
            nombre: "Omelette Cremosa con Queso Payoyo Curado",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Tortilla francesa de técnica precisa con el corazón fundente de queso Payoyo[cite: 3].",
            historia: "La omelette de Cañitas Maite es un ejercicio de técnica francesa clásica aplicada al producto andaluz. Buscamos el punto 'baveuse' (baboso), donde el exterior es una lámina amarilla perfecta y lisa, sin rastros de tostado, y el interior fluye como una crema. El Queso Payoyo, producido en la Sierra de Grazalema con leche de cabra payoya y oveja merina, se introduce en el último momento del plegado para que se funda con el calor residual, aportando notas de mantequilla, frutos secos y el carácter animal propio de los quesos de alta montaña gaditana[cite: 3].",
            trazabilidad: "Queso Payoyo (Villaluenga del Rosario, Cádiz) [cite: 9] · Huevos camperos de proximidad[cite: 3].",
            alergenos: ["Huevo", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué término técnico francés define el punto de cocción 'casi líquido' del interior de nuestra omelette?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Bien Cuit", correcta: false },
                            { texto: "Baveuse", correcta: true },
                            { texto: "Saignant", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué mezcla de leches hace que el Queso Payoyo sea único en su perfil de sabor?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vaca y Cabra", correcta: false },
                            { texto: "Cabra Payoya y Oveja Merina", correcta: true },
                            { texto: "Búfala y Oveja", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo debe ser el aspecto exterior de la tortilla según el estándar de Cañitas Maite?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Muy tostada y crujiente", correcta: false },
                            { texto: "Lisa, amarilla y sin color de tostado", correcta: true },
                            { texto: "Rellena de trozos de patata", correcta: false }
                        ]
                    },
                    {
                        texto: "Atención al Cliente: ¿Es este plato apto para una persona con intolerancia a la lactosa?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sí, el queso Payoyo no tiene lactosa", correcta: false },
                            { texto: "No, contiene el alérgeno Lácteos debido al queso curado", correcta: true },
                            { texto: "Solo si se pide sin huevo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿En qué momento se introduce el queso Payoyo en la elaboración?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se bate junto con los huevos antes de ir a la sartén", correcta: false },
                            { texto: "Durante el plegado final para que se funda suavemente", correcta: true },
                            { texto: "Se ralla encima una vez servido el plato", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "benedictinos-malaguenos",
            nombre: "Benedictinos Malagueños de Cañitas",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Nuestra versión local del clásico internacional con el sello de Cañitas.",
            historia: "Los huevos benedictinos se 'malagueñizan' en Cañitas para integrarse en nuestro entorno. El reto técnico reside en el escalfado perfecto del huevo (clara cuajada y yema líquida) y la emulsión de una salsa holandesa estable y aireada. En lugar del muffin inglés tradicional, utilizamos una base que rinde homenaje a la panadería local, transformando un estándar de hotel en una propuesta con alma que habla del territorio malagueño.",
            trazabilidad: "Huevos de corral de la provincia · Ingredientes seleccionados de la despensa malagueña.",
            alergenos: ["Huevo", "Gluten", "Lácteos"], // Verificados por la salsa holandesa y la base de pan
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el objetivo principal de 'malagueñizar' este plato clásico?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Hacerlo más económico", correcta: false },
                            { texto: "Integrar el estándar internacional con el producto y alma de Málaga", correcta: true },
                            { texto: "Sustituir el huevo por otro ingrediente", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué dos elementos técnicos son cruciales en la ejecución de unos Benedictinos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El fritura de la patata y el corte del jamón", correcta: false },
                            { texto: "El escalfado del huevo y la emulsión de la salsa holandesa", correcta: true },
                            { texto: "El horneado del pan y el licuado de frutas", correcta: false }
                        ]
                    },
                    {
                        texto: "Atención al Cliente: ¿Qué alérgenos presentes en este plato debemos considerar?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Huevo y Lácteos (salsa y base)", correcta: true },
                            { texto: "Gluten (base de pan)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Pescado", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se define el estado de la yema en un huevo escalfado correctamente para este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Totalmente sólida y cocinada", correcta: false },
                            { texto: "Líquida y fluida para bañar el pan al cortarse", correcta: true },
                            { texto: "Mezclada con la clara antes de cocer", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el suplemento máximo si el cliente elige este plato junto a otro del menú ME?",
                        tipo: "radio",
                        opciones: [
                            { texto: "8€ EXTRA", correcta: false },
                            { texto: "14€ EXTRA", correcta: true },
                            { texto: "22€ EXTRA", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "torta-aceite-capresse",
            nombre: "Torta de Aceite estilo Capresse",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Nuestra versión vegetal (VEG) sobre base crujiente de torta de aceite.",
            historia: "Este plato es un homenaje a la Torta de Inés Rosales, un icono de la panadería tradicional andaluza. En Cañitas la transformamos en un bocado salado utilizando la técnica 'Capresse': mozzarella de búfala fresca, tomate de temporada y albahaca. El contraste entre el dulzor sutil y anisado de la torta de aceite y la acidez del tomate crea un equilibrio sorprendente, elevando un bocado tradicional a una propuesta de bocatería fina contemporánea.",
            trazabilidad: "Torta de Aceite de Castilleja de la Cuesta · Mozzarella de Búfala artesana · Aceite de albahaca fresca.",
            alergenos: ["Gluten", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué base tradicional andaluza se utiliza para este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan de Cristal", correcta: false },
                            { texto: "Torta de Aceite (estilo Inés Rosales)", correcta: true },
                            { texto: "Focaccia de romero", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuáles son los ingredientes principales que componen el estilo 'Capresse' de este plato?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Mozzarella de Búfala", correcta: true },
                            { texto: "Tomate y Albahaca", correcta: true },
                            { texto: "Jamón y Queso", correcta: false },
                            { texto: "Aguacate y Salmón", correcta: false }
                        ]
                    },
                    {
                        texto: "Atención al Cliente: ¿Es este plato apto para un cliente vegetariano?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, contiene trazas de carne", correcta: false },
                            { texto: "Sí, es nuestra opción (VEG) de la sección", correcta: true },
                            { texto: "Solo si se quita el queso", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué matiz de sabor característico aporta la Torta de Aceite a la base?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sabor picante y ahumado", correcta: false },
                            { texto: "Sabor crujiente con matices de anís y aceite de oliva", correcta: true },
                            { texto: "Sabor amargo e intenso", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el alérgeno principal de la base crujiente de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Gluten (Cereal de trigo)", correcta: true },
                            { texto: "Pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "roll-salmon-aguacate",
            nombre: "Roll de Salmón Ahumado y Aguacate",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Roll tierno de salmón ahumado premium con aguacate en su punto óptimo de maduración.",
            historia: "El roll de salmón y aguacate es un clásico de la bocatería saludable que en Cañitas elevamos mediante la selección del producto. El salmón se somete a un ahumado ligero con maderas nobles para no tapar el sabor del pescado, y el aguacate, procedente de cultivos de la Axarquía malagueña, aporta la untuosidad necesaria para equilibrar la mordida. El pan de roll, ligeramente tostado, sirve como vehículo tierno para una combinación donde prima la frescura.",
            trazabilidad: "Salmón ahumado de corte premium · Aguacate de la Axarquía (Málaga) · Pan de brioche tipo roll.",
            alergenos: ["Pescado", "Gluten", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿De dónde procede el aguacate utilizado en nuestro Roll para garantizar la sostenibilidad y calidad?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Importado de México", correcta: false },
                            { texto: "De la Axarquía malagueña", correcta: true },
                            { texto: "De cultivos hidropónicos del norte", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos principales que un camarero debe comunicar para este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Pescado", correcta: true },
                            { texto: "Gluten y Lácteos (por el pan)", correcta: true },
                            { texto: "Moluscos", correcta: false },
                            { texto: "Frutos de cáscara", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué técnica se utiliza con el pan del roll antes de montarlo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se sirve frío directamente", correcta: false },
                            { texto: "Se tuesta ligeramente para dar temperatura y textura", correcta: true },
                            { texto: "Se fríe en abundante aceite", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo es el ahumado del salmón seleccionado por Cañitas?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Muy intenso para que sepa a humo", correcta: false },
                            { texto: "Ligero con maderas nobles para respetar el sabor del pescado", correcta: true },
                            { texto: "Ahumado con carbón activo", correcta: false }
                        ]
                    },
                    {
                        texto: "Si un cliente pregunta por el precio en el menú ME, ¿qué debemos responder si elige este plato como única opción?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Tiene un coste de 14€", correcta: false },
                            { texto: "Tiene un suplemento de 8€ EXTRA", correcta: true },
                            { texto: "Está incluido sin coste adicional", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bikini-trufado-comte",
            nombre: "Bikini Trufado de Jamón Cocido y Comté",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Sándwich de autor con queso Comté de 12 meses, jamón de alta calidad y esencia de trufa negra.",
            historia: "Inspirado en los sándwiches de culto, el Bikini de Cañitas eleva un clásico mediante el uso del queso Comté AOC de leche cruda, que aporta notas de frutos secos y una elasticidad perfecta al fundir. La trufa negra se integra para aromatizar el conjunto sin saturar, mientras que el pan se tuesta lentamente con mantequilla noisette hasta alcanzar un dorado uniforme y una textura crujiente que contrasta con el interior fundente.",
            trazabilidad: "Queso Comté AOC (Francia) con 12 meses de maduración · Jamón cocido extra · Aceite de Trufa Negra premium.",
            alergenos: ["Gluten", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué queso francés con Denominación de Origen Protegida (AOC) es el protagonista de este Bikini?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Brie de Meaux", correcta: false },
                            { texto: "Comté (12 meses de curación)", correcta: true },
                            { texto: "Roquefort", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué grasa se utiliza para el tostado exterior del pan y lograr su color dorado característico?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aceite de girasol", correcta: false },
                            { texto: "Mantequilla", correcta: true },
                            { texto: "Manteca de cerdo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuáles son los alérgenos presentes en este plato?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten (por el pan)", correcta: true },
                            { texto: "Lácteos (queso y mantequilla)", correcta: true },
                            { texto: "Pescado", correcta: false },
                            { texto: "Sulfitos", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué perfil de sabor aporta el queso Comté a este sándwich?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sabor muy picante y fuerte", correcta: false },
                            { texto: "Notas de frutos secos y una textura elástica al fundirse", correcta: true },
                            { texto: "Sabor dulce y afrutado tipo postre", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la operativa ME: ¿Qué suplemento tiene si se pide junto a una Omelette Payoyo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "8€ EXTRA", correcta: false },
                            { texto: "14€ EXTRA (Precio por 2 opciones)", correcta: true },
                            { texto: "16€ EXTRA", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "mollete-maximo-joselito",
            nombre: "Mollete Máximo de Coppa Joselito y Tomate",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Mollete artesano con la mejor selección de Coppa Joselito y emulsión de tomate natural.",
            historia: "El Mollete Máximo es nuestra oda al desayuno andaluz elevado. La Coppa Joselito, procedente de la parte superior del lomo del cerdo ibérico, destaca por su intenso veteado de grasa infiltrada y una curación lenta en secaderos naturales. Se sirve en un mollete de fermentación lenta, ligeramente vaporizado y tostado, con un tomate de máxima calidad que aporta frescura y equilibra la potencia del ibérico.",
            trazabilidad: "Coppa Joselito (Guijuelo) · Mollete artesano · Tomate de temporada y AOVE.",
            alergenos: ["Gluten"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué parte del cerdo ibérico es la Coppa Joselito?",
                        tipo: "radio",
                        opciones: [
                            { texto: "La pata trasera", correcta: false },
                            { texto: "La parte superior del lomo (cabecero)", correcta: true },
                            { texto: "La zona del vientre", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de pan se utiliza como base para este embutido premium?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan de molde trufado", correcta: false },
                            { texto: "Mollete artesano de fermentación lenta", correcta: true },
                            { texto: "Baguette clásica", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué el producto Joselito es fundamental en la trazabilidad de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Por ser el embutido más barato del mercado", correcta: false },
                            { texto: "Por su curación natural en Guijuelo y calidad de bellota reconocida", correcta: true },
                            { texto: "Porque es un producto local de Málaga", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica el alérgeno principal a declarar en este mollete:",
                        tipo: "radio",
                        opciones: [
                            { texto: "Gluten", correcta: true },
                            { texto: "Lácteos", correcta: false },
                            { texto: "Moluscos", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el precio extra si el cliente decide que solo quiere este mollete como plato ME?",
                        tipo: "radio",
                        opciones: [
                            { texto: "6€", correcta: false },
                            { texto: "8€ EXTRA", correcta: true },
                            { texto: "10€", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "churritos-chocolate",
            nombre: "Churritos Fritos con Chocolate Caliente",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Masa artesana frita al momento, crujiente por fuera y tierna por dentro, con chocolate fundido.",
            historia: "El churro es el alma del desayuno español. En Cañitas, reivindicamos la churrería tradicional elaborando la masa diariamente con harina de gran fuerza y agua, controlando la temperatura del aceite para que no absorba grasa de más. El resultado es un churrito fino, muy crujiente, que se sirve con un chocolate a la taza de alto porcentaje de cacao, denso y con el punto justo de amargor para equilibrar el azúcar del churro.",
            trazabilidad: "Harina de trigo de molienda tradicional · Chocolate artesano con 60% cacao.",
            alergenos: ["Gluten", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué característica técnica define a nuestros churritos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se hornean para que no tengan grasa", correcta: false },
                            { texto: "Se fríen al momento para garantizar el máximo crujiente", correcta: true },
                            { texto: "Se sirven congelados", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo es el chocolate que acompaña a este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Chocolate blanco muy dulce", correcta: false },
                            { texto: "Chocolate a la taza con alto porcentaje de cacao", correcta: true },
                            { texto: "Batido de chocolate industrial", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuáles son los alérgenos presentes en este plato?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten (masa)", correcta: true },
                            { texto: "Lácteos (chocolate)", correcta: true },
                            { texto: "Pescado", correcta: false },
                            { texto: "Frutos de cáscara", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué es importante controlar la temperatura del aceite en la fritura del churro?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Para que el churro quede negro", correcta: false },
                            { texto: "Para evitar que el churro absorba exceso de grasa y quede pesado", correcta: true },
                            { texto: "Para que sepa a aceite de girasol", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Se puede pedir este plato dentro de la oferta de 2 platos por 14€?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, este plato siempre vale 8€", correcta: false },
                            { texto: "Sí, forma parte de la oferta combinada del Menú ME", correcta: true },
                            { texto: "Solo si se pide con café", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "tarta-queso-payoyo",
            nombre: "Corte Cremoso de Tarta de Queso Payoyo",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Tarta de queso artesana elaborada con el carácter único del queso de Grazalema.",
            historia: "Nuestra tarta de queso se aleja de las recetas industriales buscando la potencia del Queso Payoyo curado. La técnica de horneado es precisa: buscamos una base de galleta crujiente y un corazón que, sin llegar a ser líquido, mantenga una cremosidad extrema. El Payoyo aporta ese matiz diferencial, un toque animal y persistente que la convierte en una tarta con mucha personalidad, menos dulce y más gastronómica.",
            trazabilidad: "Queso Payoyo (Cádiz) · Nata de alta calidad · Huevos de corral.",
            alergenos: ["Lácteos", "Huevo", "Gluten"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué ingrediente estrella le da el nombre y el sabor diferencial a esta tarta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Queso Philadelphia", correcta: false },
                            { texto: "Queso Payoyo curado", correcta: true },
                            { texto: "Queso Manchego", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo es la textura que buscamos en el interior de la tarta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Seca y compacta como un bizcocho", correcta: false },
                            { texto: "Cremosa y fundente", correcta: true },
                            { texto: "Totalmente líquida", correcta: false }
                        ]
                    },
                    {
                        texto: "Atención al Cliente: ¿Qué alérgenos debemos comunicar?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos y Huevo", correcta: true },
                            { texto: "Gluten (base de galleta)", correcta: true },
                            { texto: "Altramuces", correcta: false },
                            { texto: "Dióxido de azufre", correcta: false }
                        ]
                    },
                    {
                        texto: "¿De qué zona de España es originario el queso utilizado?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sierra de Madrid", correcta: false },
                            { texto: "Sierra de Grazalema (Cádiz)", correcta: true },
                            { texto: "Pirineos", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el precio si el cliente pide este plato como segunda opción del menú ME?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Paga 8€ más", correcta: false },
                            { texto: "El total por los dos platos será de 14€ EXTRA", correcta: true },
                            { texto: "Es gratis", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "torrija-tostada-cañitas",
            nombre: "Torrija Tostada con Mantequilla y Nata Fresca Montada",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Brioche artesano infusionado 24h y caramelizado con mantequilla noisette.",
            historia: "Nuestra torrija es un emblema de la casa. Utilizamos pan brioche con un alto porcentaje de mantequilla que se infusiona durante un día entero en una mezcla de leche, nata, canela y cítricos. En lugar de freírla, la terminamos en la sartén con mantequilla noisette y azúcar, creando una capa de caramelo crujiente y ambarina (técnica de Maillard) que protege un interior con textura de pudding sedoso. Se acompaña de nata montada al momento para aportar frescura y ligereza.",
            trazabilidad: "Pan brioche de obrador artesano · Mantequilla de alta calidad · Nata fresca de caserío.",
            alergenos: ["Gluten", "Lácteos", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica de cocción final se utiliza para lograr el exterior crujiente de la torrija?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fritura profunda en aceite de girasol", correcta: false },
                            { texto: "Caramelizado en sartén con mantequilla y azúcar", correcta: true },
                            { texto: "Cocción al vapor", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuánto tiempo se infusiona el brioche para conseguir su textura sedosa?",
                        tipo: "radio",
                        opciones: [
                            { texto: "30 minutos", correcta: false },
                            { texto: "24 horas", correcta: true },
                            { texto: "Se sirve directamente sin infusión", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en este postre:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten y Huevo", correcta: true },
                            { texto: "Lácteos", correcta: true },
                            { texto: "Pescado", correcta: false },
                            { texto: "Frutos de cáscara", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué acompaña a la torrija para equilibrar el dulzor del caramelo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Crema pastelera densa", correcta: false },
                            { texto: "Nata fresca montada al momento", correcta: true },
                            { texto: "Chocolate caliente", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué aporta la técnica de la mantequilla 'noisette' al plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Un color negro quemado", correcta: false },
                            { texto: "Aromas tostados que recuerdan a la avellana", correcta: true },
                            { texto: "Sabor amargo intenso", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "torta-ines-rosales-pistacho",
            nombre: "Torta de Inés Rosales con Crema de Pistacho y Pistacho Tostado",
            precio: "Una Opción: 8€ EXTRA \u00A0\u00A0|\u00A0\u00A0 Dos Opciones: 14€ EXTRA",
            descripcion: "Homenaje a la repostería tradicional sevillana con el toque malagueño del pistacho.",
            historia: "Partimos de la icónica Torta de Aceite de Castilleja de la Cuesta, famosa por su elaboración manual y su toque de anís. La acompañamos de una crema untuosa de pistacho de alta calidad y coronamos con pistachos tostados malagueños. Es un plato que juega con las texturas: el crujiente quebradizo de la torta, la cremosidad de la pasta de pistacho y el punto crocante del fruto seco recién tostado, uniendo tradición andaluza y producto local.",
            trazabilidad: "Torta de Aceite artesana · Crema de Pistacho 100% pura · Pistacho tostado malagueño.",
            alergenos: ["Gluten", "Frutos de cáscara", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el fruto seco protagonista que aporta sabor y textura a este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Almendra", correcta: false },
                            { texto: "Pistacho (crema y tostado)", correcta: true },
                            { texto: "Avellana", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué característica hace especial a la Torta de Inés Rosales?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es una masa de bizcocho blando", correcta: false },
                            { texto: "Es una elaboración manual tradicional con aceite de oliva y anís", correcta: true },
                            { texto: "Es un pan de molde frito", correcta: false }
                        ]
                    },
                    {
                        texto: "Atención: ¿Qué alérgeno específico debemos destacar por el uso del pistacho?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Frutos de cáscara", correcta: true },
                            { texto: "Altramuces", correcta: false },
                            { texto: "Sésamo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tres texturas principales se encuentran en este bocado?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Solo blanda y dulce", correcta: false },
                            { texto: "Quebradiza (torta), cremosa (crema) y crocante (fruto seco)", correcta: true },
                            { texto: "Líquida, sólida y gaseosa", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el Menú ME: ¿Es posible pedir esta torta como postre tras un plato de huevos por 14€?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, son secciones distintas", correcta: false },
                            { texto: "Sí, el cliente puede elegir 2 opciones ME por 14€", correcta: true },
                            { texto: "Solo si paga un tercer suplemento", correcta: false }
                        ]
                    }
                ]
            }
        },
    ],
    restaurant: [
        {
            id: "croqueta-2021-malaga",
            nombre: "La Mejor Croqueta del Mundo 2021",
            precio: "7.5€ (2 ud)",
            descripcion: "Bechamel ultrafina de leche de oveja y jamón Joselito.",
            historia: "Este icono de Javier Sanz y Juan Sahuquillo llega a Málaga tras haber hecho historia en Madrid Fusión 2021. La receta se basa en una técnica de bechamel casi líquida donde la leche de oveja aporta una cremosidad y una potencia grasa única. El rebozado se realiza con panko para garantizar un crujiente aireado que contrasta con el corazón fundente. Se finaliza con una fina lámina de jamón Joselito y una 'palomita' de tocino ibérico que potencia el sabor curado.",
            trazabilidad: "Jamón Joselito (Guijuelo, Salamanca) · Leche de oveja fresca de ganaderías seleccionadas de Castilla-La Mancha.",
            alergenos: ["Gluten", "Lácteos", "Huevo", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué ingrediente diferencial aporta la potencia grasa y elegancia a la bechamel?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Mantequilla de cabra", correcta: false },
                            { texto: "Leche de oveja", correcta: true },
                            { texto: "Nata de vaca 35% MG", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuáles de estos elementos forman parte del acabado y textura del plato?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Panko japonés para el crujiente", correcta: true },
                            { texto: "Lámina de jamón Joselito", correcta: true },
                            { texto: "Polvo de quicos", correcta: false },
                            { texto: "Palomita de tocino ibérico", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Por qué esta croqueta NO es apta para celíacos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Por la leche de oveja", correcta: false },
                            { texto: "Por el uso de harina de trigo y panko (Gluten)", correcta: true },
                            { texto: "Solo por la contaminación cruzada", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en este plato según su ficha técnica:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten y Lácteos", correcta: true },
                            { texto: "Huevo", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "torta-aceite-malaga",
            nombre: "Torta de aceite horneada al momento",
            precio: "7€ (2 pax)",
            descripcion: "AOVE Castillo de Canena y alioli de ajo asado.",
            historia: "Este plato es una oda a la sencillez del producto mediterráneo. La torta se hornea al momento para que llegue al cliente con una textura quebradiza y una temperatura tibia que ayuda a volatilizar los aromas del aceite Castillo de Canena. El alioli no es una salsa brava, sino una emulsión delicada donde los ajos se asan previamente para perder su fuerza y ganar notas dulces y tostadas, permitiendo que el AOVE sea el verdadero protagonista del bocado.",
            trazabilidad: "AOVE Reserva Familiar Picual Castillo de Canena (Jaén) · Ajo morado de Las Pedroñeras (Cuenca) · Harina de trigo artesana.",
            alergenos: ["Gluten", "Huevo", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el AOVE (Aceite de Oliva Virgen Extra) protagonista en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Castillo de Canena", correcta: true },
                            { texto: "Carbonell", correcta: false },
                            { texto: "Aceite local de la Axarquía", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué el alioli de este plato tiene un sabor dulce y suave en lugar de picante?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque lleva azúcar añadido", correcta: false },
                            { texto: "Porque los ajos se asan previamente antes de emulsionar", correcta: true },
                            { texto: "Porque se mezcla con miel de caña", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el servicio y concepto de la torta:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se hornea al momento de recibir la comanda", correcta: true },
                            { texto: "Es una torta fría pre-cocinada", correcta: false },
                            { texto: "Se recomienda para compartir entre 2 personas", correcta: true },
                            { texto: "Busca resaltar los aromas del aceite de alta gama", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué alérgenos debemos comunicar obligatoriamente?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten (por la masa de la torta)", correcta: true },
                            { texto: "Lácteos", correcta: false },
                            { texto: "Huevo (por la emulsión del alioli)", correcta: true },
                            { texto: "Sulfitos (presentes de forma natural en el ajo/aceite)", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Este plato es apto para un cliente con intolerancia severa al Gluten?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sí, la torta es de maíz", correcta: false },
                            { texto: "No, la torta se elabora con harina de trigo y contiene gluten", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "tomate-mela-malaga",
            nombre: "El tomate más caro (y mejor) del mundo",
            precio: "14€",
            descripcion: "Variedad Mela de origen japonés cultivada en Granada, AOVE y orégano fresco.",
            historia: "En Cañitas Málaga, este plato sube de nivel utilizando el tomate 'Mela'. Es una variedad de origen japonés que ha encontrado en el clima de Granada (Motril/Carchuna) el lugar perfecto para su cultivo. Se caracteriza por una piel casi inexistente y un dulzor natural excepcional. El nombre del plato hace justicia al alto coste de producción de esta joya botánica, que se recolecta en su punto exacto de maduración para que el cliente deguste la esencia pura de la huerta andaluza.",
            trazabilidad: "Tomate Variedad Mela (Cultivado en Granada por agricultores especializados) · AOVE de cosecha temprana · Sal de manantial.",
            alergenos: ["Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿De qué origen es la variedad de tomate 'Mela' que se sirve en Málaga?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Origen italiano (San Marzano)", correcta: false },
                            { texto: "Origen japonés, aunque cultivado actualmente en Granada", correcta: true },
                            { texto: "Origen local de Albacete exclusivamente", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué característica física hace tan especial al tomate Mela en boca?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Su piel es muy gruesa y crujiente", correcta: false },
                            { texto: "Su piel es extremadamente fina y su textura es muy carnosa", correcta: true },
                            { texto: "Es un tomate que siempre se sirve frito", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la trazabilidad y el producto:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se cultiva en la provincia de Granada para asegurar frescura", correcta: true },
                            { texto: "Es una de las variedades de tomate más valoradas en la alta cocina", correcta: true },
                            { texto: "Se acompaña de orégano seco de bote", correcta: false },
                            { texto: "El aliño busca potenciar, no enmascarar, el sabor del fruto", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Por qué marcamos Sulfitos en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque el tomate lleva una salsa de vino", correcta: false },
                            { texto: "Por los antioxidantes naturales y posibles tratamientos del aceite/fruto", correcta: true },
                            { texto: "Porque contiene trazas de marisco", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el principal 'secreto' para disfrutar al máximo de este tomate?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Servirlo directamente de la nevera a 2°C", correcta: false },
                            { texto: "Respetar la temperatura ambiente y la calidad del AOVE", correcta: true },
                            { texto: "Añadirle mucho vinagre de Módena", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "ensaladilla-gamba-malaga",
            nombre: "Ensaladilla de gamba blanca malagueña",
            precio: "15.5€",
            descripcion: "Gamba blanca de la bahía, jugo de piparras encurtidas y regañás.",
            historia: "Esta ensaladilla es un homenaje directo a la ciudad de Málaga. A diferencia de la versión de Albacete, aquí se utiliza la reina de la lonja local: la gamba blanca. La clave es su equilibrio: una patata cremosa, una mayonesa aireada y el contrapunto eléctrico del jugo de piparras encurtidas, que aporta una acidez necesaria para limpiar el paladar. Se termina con regañás artesanas, el acompañamiento tradicional andaluz que aporta el crujiente perfecto.",
            trazabilidad: "Gamba blanca de la Bahía de Málaga (Lonja de la Caleta/Vélez) · Piparras de Ibarra (País Vasco) · Regañás de panadería artesana sevillana · Fumet de pescado para la base.",
            alergenos: ["Pescado", "Crustáceos", "Huevo", "Gluten", "Mostaza", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el producto local de Málaga que protagoniza esta ensaladilla?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Quisquilla de Motril", correcta: false },
                            { texto: "Gamba blanca de la bahía", correcta: true },
                            { texto: "Langostino de Sanlúcar", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué ingrediente aporta la acidez característica que equilibra la grasa de la mayonesa?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vinagre de Jerez", correcta: false },
                            { texto: "Jugo de piparras encurtidas", correcta: true },
                            { texto: "Zumo de limón natural", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre los acompañamientos y texturas:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se sirve con regañás crujientes", correcta: true },
                            { texto: "La gamba se cocina en exceso para que esté dura", correcta: false },
                            { texto: "Busca un equilibrio entre cremosidad y acidez", correcta: true },
                            { texto: "Es una receta adaptada específicamente para el ME Málaga", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Por qué este plato marca alérgeno de PESCADO?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque la gamba es un pescado", correcta: false },
                            { texto: "Por el uso de fumet, caldos de pescado o trazas en la base de la ensaladilla", correcta: true },
                            { texto: "Es un error, solo lleva crustáceos", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos que contiene la ración (incluyendo las regañás):",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten (Regañás) y Pescado", correcta: true },
                            { texto: "Huevo y Mostaza (Mayonesa/Aderezo)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Crustáceos y Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "puerro-asado-malaga",
            nombre: "Puerro asado lentamente durante horas",
            precio: "16.5€",
            descripcion: "Puerro asado con burrata fresca, tomate seco y praliné de almendras.",
            historia: "Este plato es un ejercicio de paciencia. El puerro se somete a una cocción lenta (confitado o asado a baja temperatura) durante horas, lo que permite que sus azúcares naturales se caramelicen sin quemar la fibra. En la sede de Málaga, se busca un contraste de temperaturas y texturas: el calor del puerro frente a la cremosidad fría de la burrata fresca. El praliné de almendras aporta una nota de fruto seco tostado que redondea el carácter terroso de la verdura.",
            trazabilidad: "Puerros de huerta nacional (Navarra/Castilla-La Mancha) · Burrata de producción artesana italiana · Almendras de la variedad Marcona.",
            alergenos: ["Lácteos", "Frutos de cáscara", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es la técnica principal que define la textura de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fritura en tempura", correcta: false },
                            { texto: "Cocción lenta durante horas para caramelizar azúcares", correcta: true },
                            { texto: "Hervido rápido en agua con sal", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué elemento aporta el contraste cremoso y frío a la base del puerro?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Queso manchego curado", correcta: false },
                            { texto: "Burrata fresca", correcta: true },
                            { texto: "Helado de queso de cabra", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el praliné y los frutos secos:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se elabora con almendras (normalmente Marcona)", correcta: true },
                            { texto: "Aporta una nota tostada y dulce al conjunto", correcta: true },
                            { texto: "Es una salsa picante a base de nueces", correcta: false },
                            { texto: "Es el ingrediente que marca el alérgeno 'Frutos de cáscara'", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: Un cliente alérgico a la proteína de la leche de vaca, ¿puede consumir este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sí, la burrata es de soja", correcta: false },
                            { texto: "No, la burrata es un derivado lácteo", correcta: true },
                            { texto: "Sí, si se le quita el tomate seco", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en esta elaboración:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (Burrata)", correcta: true },
                            { texto: "Frutos de cáscara (Praliné de almendras)", correcta: true },
                            { texto: "Gluten", correcta: false },
                            { texto: "Sulfitos (por el tratamiento del tomate seco)", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "berenjena-umami-malaga",
            nombre: "Berenjena ahumada en parrilla",
            precio: "17.5€",
            descripcion: "Crema de parmesano picante, salsa umami y pan crujiente.",
            historia: "En esta versión, la berenjena se somete a un asado intenso en parrilla hasta que su interior adquiere una textura de mantequilla y un aroma ahumado. La clave del plato es la crema de parmesano (añejado 24 meses) que aporta salinidad y un toque picante que despierta el paladar. Se rocía con una salsa umami (posiblemente a base de reducciones de soja, setas o caldos concentrados) para potenciar el sabor profundo, y se termina con migas de pan crujiente para añadir el contraste mecánico necesario en cada bocado.",
            trazabilidad: "Berenjena de huerta nacional · Queso Parmigiano Reggiano DOP (Italia) · Pan artesano de masa madre para el crujiente.",
            alergenos: ["Lácteos", "Gluten", "Soja", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué componente aporta el matiz de 'quinto sabor' y profundidad a este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El pan crujiente", correcta: false },
                            { texto: "La salsa umami", correcta: true },
                            { texto: "La berenjena cruda", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se describe la base de queso que acompaña a la berenjena?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Crema de queso fresco sin sabor", correcta: false },
                            { texto: "Crema de parmesano con un toque picante", correcta: true },
                            { texto: "Salsa holandesa", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre las texturas y la técnica:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "La berenjena se ahúma en parrilla", correcta: true },
                            { texto: "El pan crujiente aporta el contraste de textura", correcta: true },
                            { texto: "Es un plato dulce de postre", correcta: false },
                            { texto: "Busca un equilibrio entre ahumado, picante y salino", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Es este plato apto para un cliente con celiaquía?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sí, es solo verdura", correcta: false },
                            { texto: "No, contiene pan crujiente (Gluten) y posiblemente soja en la salsa umami", correcta: true },
                            { texto: "Sí, si se le quita el parmesano", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos que debemos tener en cuenta:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (Crema de parmesano)", correcta: true },
                            { texto: "Gluten (Pan crujiente)", correcta: true },
                            { texto: "Soja (frecuente en salsas umami)", correcta: true },
                            { texto: "Pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "alcachofas-carbonara-malaga",
            nombre: "Alcachofas mini confitadas y fritas",
            precio: "18€",
            descripcion: "Carbonara ibérica, pimienta fresca y lascas de queso Payoyo curado.",
            historia: "En esta receta, la alcachofa se trabaja en dos texturas: primero un confitado suave para asegurar un corazón mantecoso y luego una fritura rápida que le otorga un crujiente exterior único. El plato se termina con una interpretación de la carbonara donde el guanciale se sustituye por la grasa del cerdo ibérico de bellota, creando una emulsión profunda y sedosa. El toque final lo aporta el queso Payoyo de Cádiz, un queso de cabra y oveja curado que añade una intensidad salina y picante que eleva el plato por encima de una carbonara tradicional.",
            trazabilidad: "Alcachofa mini de temporada · Queso Payoyo (Grazalema/Villaluenga del Rosario, Cádiz) · Grasa de jamón ibérico de bellota · Pimienta negra de molino.",
            alergenos: ["Lácteos", "Huevo", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué variedad de queso local se utiliza para terminar estas alcachofas en Málaga?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Manchego viejo", correcta: false },
                            { texto: "Queso Payoyo curado", correcta: true },
                            { texto: "Parmesano Reggiano", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la técnica de cocinado de la alcachofa:",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se sirven crudas en carpaccio", correcta: false },
                            { texto: "Se confitan primero y se terminan con una fritura crujiente", correcta: true },
                            { texto: "Son alcachofas solo hervidas", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué ingredientes definen el carácter 'Ibérico' de esta carbonara?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "El uso de grasa o recortes de cerdo ibérico de bellota", correcta: true },
                            { texto: "La sustitución del guanciale por producto nacional", correcta: true },
                            { texto: "El uso de crema de leche espesa", correcta: false },
                            { texto: "La pimienta fresca recién molida", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Por qué este plato contiene el alérgeno HUEVO?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Por el rebozado de la alcachofa", correcta: false },
                            { texto: "Porque la base de la salsa carbonara auténtica se elabora con yema de huevo", correcta: true },
                            { texto: "Es una traza del queso", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (Queso Payoyo)", correcta: true },
                            { texto: "Huevo (Salsa carbonara)", correcta: true },
                            { texto: "Gluten (posibles trazas en fritura)", correcta: false },
                            { texto: "Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "setas-temporada-malaga",
            nombre: "Setas silvestres de temporada con patata cremosa",
            precio: "19,5€",
            descripcion: "Patata cremosa, yema de campo y trufa negra rallada al momento.",
            historia: "Este plato celebra la temporalidad pura. Las setas se saltean a fuego vivo para mantener su textura carnosa y su agua de vegetación. Reposan sobre una base de patata trabajada con mantequilla noisette para lograr una textura de seda. El corazón del plato es una yema de huevo de campo que, al romperse, actúa como salsa ligando todos los elementos. El toque final lo aporta la trufa negra (Tuber Melanosporum), que se ralla frente al cliente para que los aceites esenciales del hongo se liberen con el calor residual del plato.",
            trazabilidad: "Setas silvestres seleccionadas (según temporada) · Huevos de gallinas criadas en libertad (Km 0) · Trufa negra nacional (Sarrion/Soria) · Patata agria de cultivo tradicional.",
            alergenos: ["Huevo", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es la función de la yema de campo en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es un elemento puramente decorativo", correcta: false },
                            { texto: "Actúa como salsa ligante al romperse y mezclarse con las setas y la patata", correcta: true },
                            { texto: "Se sirve cocida y rallada", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se finaliza el plato para potenciar su aroma?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Con un chorro de aceite de trufa sintético", correcta: false },
                            { texto: "Rallando trufa negra natural (Tuber Melanosporum) al momento", correcta: true },
                            { texto: "Con abundante perejil seco", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la base de patata y su textura:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Es una patata cremosa y sedosa", correcta: true },
                            { texto: "Lleva mantequilla o crema (marca alérgeno Lácteo)", correcta: true },
                            { texto: "Son patatas fritas tipo chip", correcta: false },
                            { texto: "Busca un contraste suave con la carnosidad de la seta", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué precaución se debe tener con la yema?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Ninguna, el huevo no es un alérgeno", correcta: false },
                            { texto: "Informar siempre en caso de alergia al huevo, ya que se sirve prácticamente cruda", correcta: true },
                            { texto: "Es apta para veganos", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en esta elaboración:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Huevo (Yema de campo)", correcta: true },
                            { texto: "Lácteos (Mantequilla en la patata)", correcta: true },
                            { texto: "Gluten", correcta: false },
                            { texto: "Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "mejillon-bouchot-sobrasada",
            nombre: "Mejillones Bouchot abiertos en brasa",
            precio: "17.5€",
            descripcion: "Abiertos al fuego con americana picantita de sobrasada ibérica de bellota.",
            historia: "El mejillón Bouchot es una joya de la mitilicultura: pequeño, de color amarillo intenso y sabor concentrado. En Cañitas Málaga, rompemos la tradición de cocerlos al vapor y los abrimos directamente sobre la brasa para que absorban el aroma del sarmiento. El plato se eleva con una salsa americana (base de marisco) infusionada con sobrasada ibérica de bellota, creando un contraste entre el yodo del mar y la grasa picante y ahumada del embutido.",
            trazabilidad: "Mejillón de roca variedad Bouchot (Certificación de origen) · Sobrasada Ibérica de Bellota (Mallorca/Salamanca) · Base de sofrito de galeras y cangrejos para la americana.",
            alergenos: ["Moluscos", "Crustáceos", "Pescado", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué característica principal define al mejillón de la variedad Bouchot?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es un mejillón gigante de Galicia", correcta: false },
                            { texto: "Es un mejillón de tamaño pequeño, muy carnoso y de color intenso", correcta: true },
                            { texto: "Es un mejillón que solo se come crudo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se cocinan estos mejillones para aportarles ese aroma característico?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Hervidos en agua con sal", correcta: false },
                            { texto: "Abiertos directamente en las brasas", correcta: true },
                            { texto: "Al microondas", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la salsa americana de sobrasada:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Utiliza sobrasada ibérica de bellota", correcta: true },
                            { texto: "Tiene un punto picante para estimular el paladar", correcta: true },
                            { texto: "Es una salsa ligera de nata", correcta: false },
                            { texto: "Se elabora a partir de un fondo de marisco", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué alérgeno es el principal protagonista por el producto base?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Gluten", correcta: false },
                            { texto: "Moluscos (por el propio mejillón)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en este plato mar y montaña:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Moluscos (Mejillón)", correcta: true },
                            { texto: "Crustáceos y Pescado (por la salsa americana)", correcta: true },
                            { texto: "Lácteos", correcta: false },
                            { texto: "Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "navajas-buceo-malaga",
            nombre: "Navajas de buceo a la parrilla",
            precio: "19€",
            descripcion: "Escabeche frío de limón asado y ralladura de limas frescas.",
            historia: "La navaja de buceo se captura a mano, una a una, lo que garantiza un producto libre de impurezas y de un calibre superior. En Cañitas Málaga, se pasan brevemente por la parrilla para que la carne se rice y absorba el aroma del fuego. El plato se termina con un escabeche técnico: primero asamos los limones para endulzar sus jugos y luego creamos un escabeche frío que respeta la textura de la navaja. La ralladura de lima fresca al momento aporta los aceites esenciales que disparan el aroma cítrico en la mesa.",
            trazabilidad: "Navaja de buceo (Galicia / Huelva) · Limones de la huerta del Guadalhorce · Limas seleccionadas.",
            alergenos: ["Moluscos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué ventaja principal ofrece la navaja de 'buceo' frente a la de arrastre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es más barata", correcta: false },
                            { texto: "Está libre de arena y tiene una carne más firme al capturarse a mano", correcta: true },
                            { texto: "Se puede comer congelada", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el secreto del escabeche que acompaña a este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es un escabeche de vinagre blanco común", correcta: false },
                            { texto: "Es un escabeche frío basado en limones previamente asados", correcta: true },
                            { texto: "Es una salsa espesa de tomate", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el acabado cítrico del plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lleva ralladura de lima fresca añadida al momento", correcta: true },
                            { texto: "El limón asado aporta una acidez más dulce y compleja", correcta: true },
                            { texto: "Se sirve con gajos de naranja", correcta: false },
                            { texto: "Busca un equilibrio refrescante con el toque de parrilla", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Cuál es el alérgeno principal de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pescado", correcta: false },
                            { texto: "Moluscos", correcta: true },
                            { texto: "Crustáceos", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes según la ficha técnica:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Moluscos (Navaja)", correcta: true },
                            { texto: "Sulfitos (presentes en el escabeche/vinagre)", correcta: true },
                            { texto: "Altramuces", correcta: false },
                            { texto: "Gluten", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "langostinos-mariposa-pollo",
            nombre: "Langostinos del sur abiertos en mariposa",
            precio: "21€",
            descripcion: "Asados a la parrilla con jugo de pollo al ast.",
            historia: "Este plato es un juego de contrastes y recuerdos. El langostino del sur, de carne dulce y firme, se abre en mariposa para exponer la mayor superficie posible al fuego de la parrilla. El toque maestro es el aliño: una reducción de jugo de pollo al ast (asado tradicional) que aporta notas de romero, tomillo, grasa de ave y piel tostada. Es una combinación de 'mar y montaña' que busca el umami más absoluto, uniendo el yodo del marisco con el sabor reconfortante de la cocina de domingo.",
            trazabilidad: "Langostino blanco del sur (Huelva/Sanlúcar/Málaga) · Jugo de pollo asado artesanal · Hierbas mediterráneas.",
            alergenos: ["Crustáceos", "Sulfitos", "Apio"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué significa que los langostinos se abran en 'mariposa'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que se sirven vivos", correcta: false },
                            { texto: "Que se cortan longitudinalmente para que queden planos en la parrilla", correcta: true },
                            { texto: "Que se les quitan las antenas", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el componente del plato que aporta el sabor a 'cocina de recuerdo'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "La salsa de soja", correcta: false },
                            { texto: "El jugo de pollo al ast", correcta: true },
                            { texto: "Un chorro de coñac", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el sabor y la técnica de este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Es una versión de 'mar y montaña'", correcta: true },
                            { texto: "Se asan a la parrilla para buscar notas ahumadas", correcta: true },
                            { texto: "Lleva trozos de carne de pollo por encima", correcta: false },
                            { texto: "El jugo de pollo busca potenciar el umami del marisco", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Cuál es el alérgeno principal que debe conocer el cliente?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pescado", correcta: false },
                            { texto: "Crustáceos (Langostino)", correcta: true },
                            { texto: "Moluscos", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica posibles alérgenos ocultos en el jugo de pollo al ast:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Apio (común en el sofrito del caldo)", correcta: true },
                            { texto: "Sulfitos (del vino de la reducción)", correcta: true },
                            { texto: "Mostaza", correcta: false },
                            { texto: "Crustáceos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "almejas-brasa-amarillo",
            nombre: "Almejas abiertas en brasas",
            precio: "22€",
            descripcion: "Salsita de amarillo manchego-malagueño y aceitito de adobo.",
            historia: "Este plato es el puente perfecto entre la tierra de Javier y Juan y su nueva casa en Málaga. Las almejas se abren al calor de la brasa, capturando el punto justo de humo. La salsa 'amarillo' es una interpretación de los guisos tradicionales de azafrán manchegos, pero refinada con un toque malagueño. El plato se finaliza con un aceite de adobo que evoca los sabores del 'pescaíto' frito local (vinagre, orégano, comino), convirtiendo cada almeja en una explosión de cultura gastronómica cruzada.",
            trazabilidad: "Almeja fina de carril o malagueña según mercado · Azafrán con D.O. Mancha · Aceite de oliva virgen extra infusionado con especias de adobo malagueño.",
            alergenos: ["Moluscos", "Pescado", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué dos culturas gastronómicas se unen en la salsa 'amarillo' de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "La japonesa y la andaluza", correcta: false },
                            { texto: "La manchega (azafrán) y la malagueña", correcta: true },
                            { texto: "La gallega y la vasca", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué sabores evoca el 'aceitito de adobo' que termina el plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sabor a curry indio", correcta: false },
                            { texto: "Sabores de orégano, comino y vinagre típicos del adobo local", correcta: true },
                            { texto: "Sabor a trufa blanca", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la cocción de las almejas:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se abren directamente en la brasa", correcta: true },
                            { texto: "Se abren al vapor de agua", correcta: false },
                            { texto: "Absorben notas ahumadas durante el proceso", correcta: true },
                            { texto: "El jugo que sueltan forma parte de la salsa", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué alérgenos son obligatorios declarar aquí?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Moluscos (Almeja)", correcta: true },
                            { texto: "Pescado (si la base de la salsa lleva fondo de pescado)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Sulfitos (del vinagre del adobo)", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Contiene este plato algún ingrediente que aporte el color amarillo intenso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Colorante alimentario artificial", correcta: false },
                            { texto: "Azafrán de calidad (D.O. Mancha)", correcta: true },
                            { texto: "Mostaza americana", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "gambitas-rojas-ajillo-malaga",
            nombre: "Gambitas rojas al ajillo",
            precio: "24.5€",
            descripcion: "Patatitas chips súper crujientes y huevos fritos al momento con puntilla.",
            historia: "Este plato es una oda al hedonismo. En lugar del ajillo tradicional en cazuela de barro, aquí la gamba roja (famosa por su cabeza dulce y coralina) se convierte en la protagonista de unos huevos rotos de lujo. Las patatas chips se cortan finísimas y se fríen para que mantengan un crujiente extremo que soporte el peso de la yema y el aceite del ajillo. El huevo se fríe a alta temperatura para conseguir esa 'puntilla' dorada que aporta sabor tostado y textura.",
            trazabilidad: "Gamba roja del Mediterráneo (Garrucha / Almería) · Huevos de granja seleccionados · Patata agria de recolección tardía · AOVE infusionado con ajo morado.",
            alergenos: ["Crustáceos", "Huevo", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué elemento aporta el contraste crujiente principal en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan tostado", correcta: false },
                            { texto: "Patatitas chips artesanas súper crujientes", correcta: true },
                            { texto: "Frutos secos", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se preparan los huevos para este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pasados por agua", correcta: false },
                            { texto: "Fritos al momento buscando la característica 'puntilla'", correcta: true },
                            { texto: "En tortilla francesa", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la gamba roja y el ajillo:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se utiliza gamba roja, valorada por su sabor yodado e intenso", correcta: true },
                            { texto: "El ajillo impregna las chips y la yema de huevo", correcta: true },
                            { texto: "La gamba se sirve cruda tipo carpaccio", correcta: false },
                            { texto: "Es una reinterpretación de lujo de los huevos con patatas", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Cuál es el alérgeno principal del marisco en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Moluscos", correcta: false },
                            { texto: "Crustáceos (Gamba roja)", correcta: true },
                            { texto: "Pescado", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Huevo (por el huevo frito)", correcta: true },
                            { texto: "Crustáceos (por la gamba)", correcta: true },
                            { texto: "Gluten", correcta: false },
                            { texto: "Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "calamar-despiece-jabugo",
            nombre: "Calamar de anzuelo en despiece a la brasa",
            precio: "26.5€",
            descripcion: "Meunière de Jabugo, ajito frito y encurtidos.",
            historia: "El calamar de anzuelo (o potera) se pesca de forma individual, lo que garantiza que la piel esté intacta y la carne tersa. Se cocina a la brasa separando sus partes para dar a cada una el punto exacto. La salsa es una reinterpretación de la Meunière clásica: sustituimos la mantequilla tradicional por una grasa de jamón de Jabugo infusionada, que aporta un sabor cárnico y profundo. Los encurtidos y el ajo frito rompen esa densidad, aportando acidez y un crujiente que limpia el paladar.",
            trazabilidad: "Calamar de potera nacional · Jamón de Jabugo (Huelva) D.O.P. · Ajo morado de Las Pedroñeras.",
            alergenos: ["Moluscos", "Lácteos", "Sulfitos", "Pescado"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué significa que el calamar sea de 'anzuelo' o 'potera'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que se pesca con redes masivas", correcta: false },
                            { texto: "Que se captura uno a uno, manteniendo la máxima calidad de su carne", correcta: true },
                            { texto: "Que es un calamar de piscifactoría", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el ingrediente diferencial de la salsa Meunière en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Zumo de naranja", correcta: false },
                            { texto: "Grasa de jamón de Jabugo", correcta: true },
                            { texto: "Vino tinto", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el servicio 'en despiece':",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se busca que el cliente aprecie las distintas texturas del calamar", correcta: true },
                            { texto: "Cada parte del calamar recibe un punto de brasa específico", correcta: true },
                            { texto: "Se sirve el calamar entero y relleno", correcta: false },
                            { texto: "Se acompaña de encurtidos para equilibrar la grasa del Jabugo", correcta: true }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué alérgeno principal presenta el calamar?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Crustáceos", correcta: false },
                            { texto: "Moluscos", correcta: true },
                            { texto: "Gluten", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos que podrían estar presentes en la salsa y acompañamiento:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (base de la Meunière)", correcta: true },
                            { texto: "Sulfitos (por los encurtidos)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Pescado (frecuente en los fondos de salsas marinas)", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "corvina-adobo-malaga",
            nombre: "Corvina Gorda en Adobo a la parrilla",
            precio: "28€",
            descripcion: "Salsa de tomate encominado y tomatitos cherry confitados.",
            historia: "En Cañitas Maite Málaga, reinterpretamos el adobo tradicional malagueño aplicándolo a una pieza de corvina salvaje de gran calibre. En lugar de freírla, la pasamos por la parrilla para respetar la sedosidad de su carne. La base de tomate encominado es un guiño a los guisos populares de la zona, aportando un frescor que equilibra la potencia del adobo.",
            trazabilidad: "Corvina salvaje de lonjas andaluzas (Estrecho) · Tomate de huerta local · Comino natural.",
            alergenos: ["Pescado", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica de cocción define este plato de corvina?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fritura en aceite de oliva", correcta: false },
                            { texto: "Cocción a la brasa/parrilla", correcta: true },
                            { texto: "Esmaltado al horno", correcta: false }
                        ]
                    },
                    {
                        texto: "¿En qué consiste el acompañamiento principal?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Salsa holandesa y espárragos", correcta: false },
                            { texto: "Salsa de tomate encominado y tomatitos cherry confitados", correcta: true },
                            { texto: "Puré de patata trufado", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la procedencia y calidad del producto:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Es una corvina de gran calibre (gorda)", correcta: true },
                            { texto: "Se utiliza corvina salvaje de caladeros andaluces", correcta: true },
                            { texto: "Es pescado de piscifactoría", correcta: false },
                            { texto: "La trazabilidad se centra en el producto del Estrecho", correcta: true }
                        ]
                    },
                    {
                        texto: "Identifica los matices del sabor de este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Toque ahumado de la brasa", correcta: true },
                            { texto: "Aroma especiado del comino", correcta: true },
                            { texto: "Acidez y dulzor del tomate confitado", correcta: true },
                            { texto: "Picante extremo del adobo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué alérgenos debemos advertir al cliente?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Pescado", correcta: true },
                            { texto: "Sulfitos (presentes en el vinagre del adobo)", correcta: true },
                            { texto: "Moluscos", correcta: false },
                            { texto: "Gluten", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "pargo-frito-gazpachuelo",
            nombre: "Pargo del sur entero frito de pellizco",
            precio: "34€",
            descripcion: "Acompañado de crema montada de gazpachuelo verde y jalapeño (aprox. 0,5kg).",
            historia: "Una pieza entera de pargo seleccionada por su tamaño (medio kilo) para asegurar que, al freírla entera, la piel quede extremadamente crujiente mientras el interior se mantiene jugoso. Se denomina 'de pellizco' porque su carne sale en lascas perfectas. El gazpachuelo, un clásico malagueño, se actualiza aquí en versión 'verde' con hierbas frescas y el punto vibrante del jalapeño.",
            trazabilidad: "Pargo rojo salvaje capturado mediante artes de pesca sostenibles en el litoral andaluz · Aceite de oliva virgen extra para la fritura.",
            alergenos: ["Pescado", "Lácteos", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el peso aproximado de la pieza de pargo que se sirve?",
                        tipo: "radio",
                        opciones: [
                            { texto: "250g", correcta: false },
                            { texto: "Alrededor de 0,5kg", correcta: true },
                            { texto: "Más de 1kg", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se presenta el gazpachuelo en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Caldo tradicional caliente", correcta: false },
                            { texto: "Crema montada verde con jalapeño", correcta: true },
                            { texto: "Salsa de tomate fría", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la técnica de fritura y servicio:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se fríe la pieza entera para mantener los jugos", correcta: true },
                            { texto: "El término 'pellizco' hace referencia a la facilidad para separar sus lascas", correcta: true },
                            { texto: "Es un pescado que se sirve exclusivamente hervido", correcta: false },
                            { texto: "El exterior debe quedar con una textura muy crujiente", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué ingredientes definen el perfil de sabor del acompañamiento?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Jalapeño (picante sutil)", correcta: true },
                            { texto: "Gazpachuelo (emulsión)", correcta: true },
                            { texto: "Hierbas verdes (frescor)", correcta: true },
                            { texto: "Trufa negra", correcta: false }
                        ]
                    },
                    {
                        texto: "Atención a alérgenos: ¿Qué contiene el gazpachuelo montado?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Pescado (el propio pargo)", correcta: true },
                            { texto: "Huevo y Lácteos (para la emulsión y textura de la crema)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Gluten", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "lenguado-estero-menier",
            nombre: "Lenguado de estero asado al horno",
            precio: "42€",
            descripcion: "Terminado con meunière tostada/cítrica y alcaparra frita (aprox. 0,6kg).",
            historia: "El lenguado de estero se diferencia por su alimentación natural en los esteros, lo que le confiere una grasa y un sabor más potentes que el lenguado de mar abierto. Se asa al horno entero para preservar su hidratación. La clave está en la técnica de la Meunière: tostamos la mantequilla (beurre noisette) para buscar notas de fruto seco, la equilibramos con cítricos y añadimos el punto crujiente y salino de la alcaparra frita.",
            trazabilidad: "Lenguado de estero de las salinas de Cádiz/Huelva · Mantequilla artesana · Alcaparra de calidad extra.",
            alergenos: ["Pescado", "Lácteos", "Gluten", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué característica hace especial al lenguado de 'estero'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Su carne es más magra y seca", correcta: false },
                            { texto: "Su alimentación natural en esteros le aporta mayor infiltración de grasa y sabor", correcta: true },
                            { texto: "Es un pescado que solo se encuentra en el Mediterráneo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se termina la salsa Meunière en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Con nata y champiñones", correcta: false },
                            { texto: "Con mantequilla tostada, cítricos y alcaparras fritas", correcta: true },
                            { texto: "Con una base de vino tinto y chalotas", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el peso y el servicio del plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "La pieza tiene un peso aproximado de 0,6kg", correcta: true },
                            { texto: "Se sirve asado al horno para mantener la jugosidad", correcta: true },
                            { texto: "Es una ración individual de lomo limpio de 100g", correcta: false },
                            { texto: "La alcaparra frita aporta una textura crujiente al conjunto", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué matices aromáticos buscamos al tostar la mantequilla de la salsa?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aroma a hierbabuena", correcta: false },
                            { texto: "Notas de frutos secos (avellana)", correcta: true },
                            { texto: "Sabor a vainilla", correcta: false }
                        ]
                    },
                    {
                        texto: "Gestión de alérgenos: ¿Por qué marcamos Gluten en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Por la harina utilizada para encamisar el pescado", correcta: true },
                            { texto: "Por los lácteos de la mantequilla", correcta: false },
                            { texto: "Por el propio pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "lubina-sin-trabajo",
            nombre: "Lubina del Atlántico entera a la parrilla 'sin trabajo'",
            precio: "49€",
            descripcion: "Con pil-pil de su propio colágeno y aceite de oliva de perejil (aprox. 0,8kg).",
            historia: "La Lubina del Atlántico, seleccionada por su firmeza y porcentaje de grasa, se cocina entera a la parrilla de encina. El término 'sin trabajo' hace referencia a nuestro servicio de sala y cocina, donde la pieza se desespinas y limpia completamente para que el cliente no encuentre ninguna dificultad. La salsa es un pil-pil emulsionado utilizando los propios jugos y colágeno de la cabeza y espinas de la lubina, potenciado con un aceite de perejil que aporta frescor y color.",
            trazabilidad: "Lubina salvaje del Atlántico Norte · Aceite de oliva virgen extra monovarietal · Perejil fresco de huerta.",
            alergenos: ["Pescado"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué significa el concepto 'sin trabajo' en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que el cliente debe limpiarse el pescado él mismo", correcta: false },
                            { texto: "Que la pieza se sirve limpia de espinas y lista para comer", correcta: true },
                            { texto: "Que es un plato que se cocina muy rápido", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se elabora el pil-pil que acompaña a la lubina?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Con nata y mantequilla", correcta: false },
                            { texto: "Emulsionando el colágeno natural del pescado con aceite", correcta: true },
                            { texto: "Con una base de mayonesa y ajo", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre las características de la pieza:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Tiene un peso aproximado de 0,8kg", correcta: true },
                            { texto: "Procede del Atlántico, lo que garantiza una carne firme", correcta: true },
                            { texto: "Se cocina en fritura profunda", correcta: false },
                            { texto: "Se utiliza aceite de perejil para aportar notas herbáceas", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué técnica de cocción principal se utiliza?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vapor", correcta: false },
                            { texto: "Parrilla", correcta: true },
                            { texto: "Sal", correcta: false }
                        ]
                    },
                    {
                        texto: "Respecto a los alérgenos, ¿cuál es el único obligatorio a declarar según la ficha técnica?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Pescado", correcta: true },
                            { texto: "Moluscos", correcta: false },
                            { texto: "Gluten", correcta: false },
                            { texto: "Crustáceos", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "pollito-coquelette-cazuela",
            nombre: "Pollito Coquelette a la cazuela",
            precio: "26€",
            descripcion: "Con verduritas mini, papitas baby rustidas y juguito de asado.",
            historia: "El Coquelette es un pollo joven de pequeño tamaño (picantón), apreciado por tener una carne mucho más tierna, fina y con menos grasa que un pollo adulto. Se cocina a la cazuela para que el ave se ase en sus propios jugos, manteniendo una humedad perfecta. Se acompaña de una guarnición de huerta en formato 'mini' y papas baby que recogen todo el sabor del fondo del asado, terminado con un jugo de carne reducido durante horas.",
            trazabilidad: "Pollito Coquelette de crianza seleccionada · Verduritas de huerta de proximidad · Patata joven de temporada.",
            alergenos: ["Sulfitos", "Lacteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué define principalmente a un pollito 'Coquelette'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que es un pollo de corral de gran tamaño", correcta: false },
                            { texto: "Que es un ave joven de pequeño calibre con carne muy tierna", correcta: true },
                            { texto: "Que es un tipo de ave de caza silvestre", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se elabora la guarnición de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Verduritas mini y papitas baby rustidas", correcta: true },
                            { texto: "Puré de patata y ensalada mixta", correcta: false },
                            { texto: "Arroz blanco y pimientos fritos", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la técnica de cocción y el acabado:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se cocina a la cazuela para preservar jugosidad", correcta: true },
                            { texto: "Se termina con un jugo de asado concentrado", correcta: true },
                            { texto: "Es un plato que se sirve exclusivamente frío", correcta: false },
                            { texto: "El proceso de rustido de las patatas busca una textura exterior firme", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Por qué el jugo de asado es clave en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque ayuda a que el pollo no parezca pequeño", correcta: false },
                            { texto: "Porque aporta la potencia de sabor y el brillo de la reducción", correcta: true },
                            { texto: "Porque es una salsa picante", correcta: false }
                        ]
                    },
                    {
                        texto: "Gestión de alérgenos: ¿Qué debemos tener en cuenta en las reducciones de jugos de carne?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "La presencia de sulfitos por el uso de vino en la elaboración del jugo", correcta: true },
                            { texto: "Que el pollo es apto para dietas sin pescado", correcta: true },
                            { texto: "Que no contiene mariscos", correcta: true },
                            { texto: "Que los lácteos podrían estar presentes si se termina con mantequilla (consultar ficha)", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "falda-cordero-crujiente",
            nombre: "Falda de cordero crujiente y melosa",
            precio: "26€",
            descripcion: "Con jugo reducido, aceite de hierbabuena y berros de agua.",
            historia: "La falda es un corte con una infiltración de grasa excepcional que, cocinada a baja temperatura durante horas, adquiere una textura melosa que se deshace en la boca. El toque final en plancha o salamandra le otorga ese exterior crujiente tan característico. La hierbabuena aporta el frescor necesario para limpiar la grasa del cordero, mientras que los berros de agua suman una nota picante y herbácea que equilibra el plato.",
            trazabilidad: "Cordero lechal nacional de pastoreo · Hierbabuena fresca de cultivo local · Berros de agua seleccionados.",
            alergenos: ["Sulfitos", "Gluten"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué dos texturas definen la preparación de este corte de cordero?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Seca y fibrosa", correcta: false },
                            { texto: "Crujiente por fuera y melosa por dentro", correcta: true },
                            { texto: "Exclusivamente hervida", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es la función principal del aceite de hierbabuena en el plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aportar picante", correcta: false },
                            { texto: "Aportar frescor para equilibrar la grasa del cordero", correcta: true },
                            { texto: "Espesar el jugo de asado", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el acompañamiento y el equilibrio de sabores:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Los berros de agua aportan una nota herbácea y ligeramente picante", correcta: true },
                            { texto: "El jugo reducido aporta potencia y profundidad de sabor", correcta: true },
                            { texto: "Se acompaña de puré de manzana dulce", correcta: false },
                            { texto: "La técnica busca el aprovechamiento de la grasa infiltrada de la falda", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué corte del cordero estamos utilizando?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Paletilla", correcta: false },
                            { texto: "Falda", correcta: true },
                            { texto: "Solomillo", correcta: false }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Qué alérgeno suele estar presente en los jugos de carne reducidos?",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Sulfitos (por el uso de vino para desglasar y reducir)", correcta: true },
                            { texto: "Pescado", correcta: false },
                            { texto: "Gluten (en caso de usar harinas para ligar, aunque aquí es por reducción)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "molleja-ternera-fricando",
            nombre: "Molleja de ternera de leche",
            precio: "26.5€",
            descripcion: "Con parmentier de patata ahumada y fricandó de setas silvestres.",
            historia: "La molleja de corazón es la más valorada por su textura. La cocinamos primero a baja temperatura y la terminamos a fuego fuerte para lograr un contraste radical. Se acompaña de un parmentier (puré fino y sedoso) con un toque de humo de encina y un fricandó de setas, una técnica catalana de guiso de setas que aporta un umami profundo y otoñal al conjunto.",
            trazabilidad: "Molleja de ternera de leche nacional · Patata agria seleccionada · Setas silvestres de temporada (boletus, angula de monte, etc.).",
            alergenos: ["Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de molleja se utiliza por su calidad superior en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Molleja de garganta", correcta: false },
                            { texto: "Molleja de corazón (ternera de leche)", correcta: true },
                            { texto: "Molleja de cordero", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué técnica de la cocina catalana se aplica a las setas?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Confitado", correcta: false },
                            { texto: "Fricandó (guiso tradicional)", correcta: true },
                            { texto: "Escabeche", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la guarnición de patata:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Es un parmentier de textura sedosa", correcta: true },
                            { texto: "Tiene un matiz ahumado", correcta: true },
                            { texto: "Son patatas fritas en gajos", correcta: false },
                            { texto: "Se elabora con patata agria seleccionada", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué textura debemos destacar al explicar la molleja al cliente?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Textura firme y fibrosa", correcta: false },
                            { texto: "Exterior crujiente e interior muy tierno y cremoso", correcta: true },
                            { texto: "Textura elástica", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los elementos que aportan el sabor 'umami' al plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Las setas silvestres", correcta: true },
                            { texto: "El jugo del fricandó", correcta: true },
                            { texto: "El toque ahumado de la patata", correcta: true },
                            { texto: "El frescor de la menta", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "tomahawk-cerdo-iberico",
            nombre: "Tomahawk de cerdo ibérico a la parrilla",
            precio: "34€",
            descripcion: "Con salsa gravy de mantequilla tostada y alcaparras fritas.",
            historia: "El corte Tomahawk, que incluye el hueso de la costilla totalmente limpio, permite que la carne se cocine de forma más uniforme y mantenga toda su infiltración grasa. Al ser cerdo ibérico, la jugosidad es máxima. Lo acompañamos de una salsa gravy donde sustituimos la base tradicional por una 'beurre noisette' (mantequilla tostada) que aporta notas de avellana, terminando con alcaparras fritas que explotan en la boca aportando un contraste ácido y crujiente.",
            trazabilidad: "Cerdo ibérico de bellota nacional · Mantequilla artesana · Alcaparras seleccionadas.",
            alergenos: ["Lácteos", "Sulfitos", "Gluten"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué característica visual define el corte 'Tomahawk'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que es un lomo sin grasa", correcta: false },
                            { texto: "El hueso de la costilla largo y limpio que acompaña a la carne", correcta: true },
                            { texto: "Que se sirve en trozos pequeños", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué matiz de sabor aporta la mantequilla tostada (beurre noisette) a la salsa?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Notas dulces a vainilla", correcta: false },
                            { texto: "Notas tostadas que recuerdan a la avellana", correcta: true },
                            { texto: "Sabor picante", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la técnica y acompañamiento:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se utiliza cerdo ibérico por su gran infiltración grasa", correcta: true },
                            { texto: "La cocción principal es a la parrilla de encina", correcta: true },
                            { texto: "Las alcaparras se sirven crudas", correcta: false },
                            { texto: "El conjunto busca un equilibrio entre la grasa y la acidez de la alcaparra", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Por qué el hueso es importante en este tipo de cortes?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Solo por estética", correcta: false },
                            { texto: "Ayuda a la transmisión del calor y protege la jugosidad de la carne", correcta: true },
                            { texto: "Indica que es un animal joven", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los ingredientes que forman la base de este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Cerdo Ibérico", correcta: true },
                            { texto: "Mantequilla tostada", correcta: true },
                            { texto: "Alcaparras fritas", correcta: true },
                            { texto: "Pimientos del padrón", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "sorbete-mango-albahaca",
            nombre: "Sorbete de mango malagueño y albahaca fresca",
            precio: "9€",
            descripcion: "Sorbete artesano de mango de la Axarquía con infusión de albahaca fresca.",
            historia: "En este postre rendimos homenaje al producto de nuestra tierra. El mango malagueño, cultivado en el clima tropical de la Axarquía, destaca por su dulzor natural y su textura sin hebras. Lo transformamos en un sorbete ligero y lo acompañamos de albahaca fresca, que aporta una nota cítrica y balsámica, rompiendo la densidad del mango y ofreciendo un final de boca muy limpio.",
            trazabilidad: "Mango de la Axarquía (Málaga) · Albahaca fresca de huerta local.",
            alergenos: ["unknown"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿De qué zona de Málaga procede principalmente el mango que utilizamos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Serranía de Ronda", correcta: false },
                            { texto: "La Axarquía", correcta: true },
                            { texto: "Valle del Guadalhorce", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué función cumple la albahaca en este postre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aportar dulzor extra", correcta: false },
                            { texto: "Aportar un matiz herbáceo y refrescante", correcta: true },
                            { texto: "Darle un color rojo al sorbete", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre las propiedades del mango malagueño:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Es famoso por su sabor intenso y dulzor equilibrado", correcta: true },
                            { texto: "Es un producto de proximidad (kilómetro 0)", correcta: true },
                            { texto: "Es una fruta de clima continental frío", correcta: false },
                            { texto: "Su textura en punto óptimo es sedosa", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué diferencia principal hay entre un sorbete y un helado cremoso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El sorbete no tiene base láctea (leche/nata)", correcta: true },
                            { texto: "El sorbete se sirve caliente", correcta: false },
                            { texto: "El helado no lleva azúcar", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los elementos clave de este postre:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Mango de calidad extra", correcta: true },
                            { texto: "Albahaca fresca", correcta: true },
                            { texto: "Notas tropicales", correcta: true },
                            { texto: "Chocolate amargo", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "flan-oveja-canitas",
            nombre: "Flan de nata fresca de oveja de Cañitas",
            precio: "9,5€",
            descripcion: "Con chantilly de vainilla y lima rallada.",
            historia: "Este flan es una de las señas de identidad de nuestra casa. Se elabora con nata fresca de oveja, mucho más rica en grasa y matices que la de vaca, lo que le confiere una textura untuosa casi de crema. Se cocina a baja temperatura para que no tenga 'ojos' y sea perfectamente liso. Lo acompañamos de un chantilly ligero de vainilla natural y ralladura de lima para aportar un contraste cítrico y fresco que limpie el paladar.",
            trazabilidad: "Nata fresca de oveja de pequeños productores nacionales · Vainilla Bourbon · Lima fresca.",
            alergenos: ["Lácteos", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué ingrediente hace que este flan sea más cremoso y potente que uno tradicional?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El uso de leche desnatada", correcta: false },
                            { texto: "La nata fresca de oveja por su alto contenido graso", correcta: true },
                            { texto: "El uso de gelatina", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se consigue la textura sedosa y sin burbujas (ojos) en el flan?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Batiendo mucho la mezcla", correcta: false },
                            { texto: "Cocinándolo a baja temperatura de forma controlada", correcta: true },
                            { texto: "Congelándolo después de hornear", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre los acompañamientos del postre:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "El chantilly está infusionado con vainilla", correcta: true },
                            { texto: "La lima rallada aporta frescor y rompe la grasa", correcta: true },
                            { texto: "Se sirve con una bola de helado de fresa", correcta: false },
                            { texto: "El conjunto busca un equilibrio entre lácteo, dulce y cítrico", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de vainilla se utiliza habitualmente en nuestra alta repostería?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aroma artificial", correcta: false },
                            { texto: "Vainilla natural (vainas)", correcta: true },
                            { texto: "Canela en polvo", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (nata)", correcta: true },
                            { texto: "Huevo (base del flan)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: false },
                            { texto: "Pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "texturas-cacao-px",
            nombre: "Cacao de texturas",
            precio: "9.5€",
            descripcion: "Con Pedro Ximénez y Shichimi picantito.",
            historia: "Este postre es una exploración del cacao en diferentes estados (cremoso, crujiente, bizcocho) para mostrar su versatilidad. La profundidad la aporta una reducción de Pedro Ximénez, que suma notas de pasas y regaliz. El toque disruptivo es el Shichimi Togarashi (mezcla de especias japonesa), que aporta un picante sutil y cítrico que potencia el sabor del chocolate y alarga el postre en boca.",
            trazabilidad: "Cacao de origen (mínimo 70%) · Vino D.O.P. Montilla-Moriles (Pedro Ximénez) · Mezcla Shichimi artesanal.",
            alergenos: ["Lácteos", "Gluten", "Huevo", "Sésamo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué aporta el Shichimi Togarashi a este postre de chocolate?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Solo color rojo", correcta: false },
                            { texto: "Un toque picante y especiado que potencia el cacao", correcta: true },
                            { texto: "Sabor a vainilla", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de vino se utiliza para la reducción que acompaña al cacao?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vino blanco seco", correcta: false },
                            { texto: "Pedro Ximénez (PX)", correcta: true },
                            { texto: "Cava", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre las texturas de este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se presentan diferentes formas y estados del cacao", correcta: true },
                            { texto: "El objetivo es que el cliente experimente varios contrastes en boca", correcta: true },
                            { texto: "Es un postre plano y de una sola textura", correcta: false },
                            { texto: "Combina cremosidad con elementos crujientes", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué notas de sabor aporta el Pedro Ximénez al conjunto?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Notas de frutas frescas como la manzana", correcta: false },
                            { texto: "Notas de pasas, higos y melaza", correcta: true },
                            { texto: "Notas amargas de café", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica ingredientes que podrían estar presentes en el Shichimi (atención alérgenos):",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Sésamo (alérgeno común en esta mezcla)", correcta: true },
                            { texto: "Chile o guindilla", correcta: true },
                            { texto: "Piel de mandarina o cítricos", correcta: true },
                            { texto: "Pescado azul", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "tarta-queso-limon",
            nombre: "Tarta de queso cremosa y suave",
            precio: "10€",
            descripcion: "Con galletitas crujientes de limón.",
            historia: "Nuestra tarta de queso se aleja de las versiones compactas; buscamos un corazón extremadamente cremoso que casi se funda al corte. Utilizamos una mezcla de quesos que equilibra la potencia del lácteo con la suavidad de la nata fresca. Para romper la hegemonía del queso, la acompañamos de galletitas artesanas con un toque intenso de limón, que aportan el crujiente necesario y la acidez para limpiar el paladar entre bocado y bocado.",
            trazabilidad: "Selección de quesos nacionales · Nata de alta montaña · Limones de la huerta malagueña.",
            alergenos: ["Lácteos", "Huevo", "Gluten"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cómo describirías la textura principal de esta tarta de queso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Seca y esponjosa tipo bizcocho", correcta: false },
                            { texto: "Extremadamente cremosa y suave", correcta: true },
                            { texto: "Compacta y densa", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué elemento aporta el contraste de textura y acidez al plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Una mermelada de fresa", correcta: false },
                            { texto: "Galletitas crujientes de limón", correcta: true },
                            { texto: "Salsa de chocolate", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la elaboración de la tarta:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Se busca un equilibrio entre distintos tipos de queso", correcta: true },
                            { texto: "El horneado es preciso para mantener el centro fundente", correcta: true },
                            { texto: "Se sirve congelada", correcta: false },
                            { texto: "Es una receta de estilo tradicional con un toque moderno en sala", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Cuál es el objetivo de utilizar limón en la galleta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Hacer que la tarta sea más dulce", correcta: false },
                            { texto: "Aportar una nota cítrica que equilibre la grasa del queso", correcta: true },
                            { texto: "Cambiar el color del postre", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos que el equipo debe comunicar:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (queso y nata)", correcta: true },
                            { texto: "Gluten (en la galleta)", correcta: true },
                            { texto: "Huevo (en la base de la tarta)", correcta: true },
                            { texto: "Pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "souffle-gianduja-cacao",
            nombre: "Soufflé líquido de gianduja y cacao",
            precio: "12€",
            descripcion: "Con nata fresca montada (para 2 personas).",
            historia: "El término 'soufflé líquido' hace referencia a un postre que se hornea al momento para conseguir una capa exterior firme y un corazón completamente fundente de gianduja (chocolate con pasta de avellana). Se sirve caliente para que la mezcla de cacao y frutos secos potencie sus aromas. Se acompaña de nata fresca montada al momento, sin apenas azúcar, para que el contraste térmico y de texturas sea el protagonista.",
            trazabilidad: "Chocolate de origen seleccionado · Avellana del Piamonte (Gianduja) · Nata fresca de granja.",
            alergenos: ["Lácteos", "Frutos de cáscara", "Huevo", "Gluten"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué ingrediente define el sabor principal de la Gianduja?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Chocolate blanco y coco", correcta: false },
                            { texto: "Mezcla de chocolate y pasta de avellana", correcta: true },
                            { texto: "Cacao puro y licor de naranja", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se presenta la nata en este postre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Nata fresca montada", correcta: true },
                            { texto: "Helado de nata", correcta: false },
                            { texto: "Crema inglesa caliente", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre la preparación y el servicio:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Es un postre diseñado para compartir (2 pax)", correcta: true },
                            { texto: "Se hornea al momento para mantener el centro líquido", correcta: true },
                            { texto: "Se sirve frío para apreciar el chocolate", correcta: false },
                            { texto: "Busca un contraste térmico entre el soufflé caliente y la nata", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Cuál es la característica principal de un soufflé 'líquido'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que se sirve en un vaso como una bebida", correcta: false },
                            { texto: "Que el interior fluye al romper la primera capa", correcta: true },
                            { texto: "Que lleva mucho licor", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes debido a la Gianduja y la base del postre:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Frutos de cáscara (avellanas)", correcta: true },
                            { texto: "Lácteos", correcta: true },
                            { texto: "Huevo", correcta: true },
                            { texto: "Pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "brioche-mantequilla-crema",
            nombre: "Brioche de mantequilla",
            precio: "13€",
            descripcion: "Con crema inglesa y helado de mantequilla (para 2 personas).",
            historia: "Este postre es un viaje a la pastelería más reconfortante. Utilizamos un pan brioche artesano con un alto porcentaje de mantequilla que se tuesta al momento para caramelizar sus azúcares exteriores. Se acompaña de una crema inglesa clásica, sedosa y con aroma a vainilla, y un helado de mantequilla que potencia el sabor lácteo del conjunto. Es un postre de contrastes térmicos y texturas aéreas diseñado para compartir.",
            trazabilidad: "Brioche artesano de masa madre · Mantequilla de alta calidad · Vainilla natural para la crema.",
            alergenos: ["Lácteos", "Gluten", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el hilo conductor de sabor en este postre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El chocolate amargo", correcta: false },
                            { texto: "La mantequilla en distintas texturas", correcta: true },
                            { texto: "Las frutas del bosque", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de crema acompaña al brioche?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Crema pastelera densa", correcta: false },
                            { texto: "Crema inglesa sedosa y ligera", correcta: true },
                            { texto: "Crema de queso", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el servicio y formato del postre:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Está pensado para ser compartido por 2 personas", correcta: true },
                            { texto: "El brioche se tuesta para caramelizar el exterior", correcta: true },
                            { texto: "Se sirve totalmente frío", correcta: false },
                            { texto: "Combina un helado artesano de mantequilla", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué aporta la crema inglesa al conjunto?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Crujiente", correcta: false },
                            { texto: "Humedad, suavidad y aroma de vainilla", correcta: true },
                            { texto: "Un toque salado", correcta: false }
                        ]
                    },
                    {
                        texto: "Identifica los alérgenos presentes en los ingredientes del brioche y la crema:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Lácteos (mantequilla, leche, nata)", correcta: true },
                            { texto: "Gluten (harina del brioche)", correcta: true },
                            { texto: "Huevo (en la masa y en la crema inglesa)", correcta: true },
                            { texto: "Altramuces", correcta: false }
                        ]
                    }
                ]
            }
        }
    ],
    ene: [
        {
            id: "croqueta",
            nombre: "La Mejor Croqueta del Mundo 2021",
            precio: "7.5€",
            descripcion: "Bechamel ultrafina de leche de oveja y jamón Joselito.",
            historia: "Esta croqueta marcó un antes y un después en la historia de Cañitas Maite al ganar el campeonato en Madrid Fusión 2021. El secreto reside en el equilibrio térmico: una bechamel que se trabaja casi al límite de su fluidez, utilizando leche de oveja que aporta una potencia grasa y elegante. El rebozado es de panko japonés para asegurar un crujiente seco y nada aceitoso. Se corona con una lámina de jamón Joselito y una 'palomita' de tocino para realzar el umami del cerdo ibérico.",
            trazabilidad: "Jamón Joselito (Guijuelo) · Leche de oveja de productores de Castilla-La Mancha.",
            alergenos: ["Gluten", "Lácteos", "Huevo", "Sulfitos (E-X)"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿En qué congreso fue premiada esta croqueta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "San Sebastian Gastronomika", correcta: false },
                            { texto: "Madrid Fusión 2021", correcta: true },
                            { texto: "Fitur", correcta: false }
                        ]
                    },
                    {
                        texto: "Selecciona los ingredientes clave que definen su sabor y textura:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Leche de oveja", correcta: true },
                            { texto: "Jamón Joselito", correcta: true },
                            { texto: "Panko japonés", correcta: true },
                            { texto: "Leche de vaca central", correcta: false }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Es apta para celíacos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sí, es sin gluten", correcta: false },
                            { texto: "No, contiene Gluten (Panko y harina)", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué significa el código E-X presente en sus alérgenos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Presencia de frutos de cáscara", correcta: false },
                            { texto: "Dióxido de azufre y Sulfitos", correcta: true },
                            { texto: "Derivados del altramuz", correcta: false }
                        ]
                    }
                ]
            }
        },

        {
            id: "homenaje-cochino-ene",
            nombre: "Homenaje crujiente al cochino ibérico",
            precio: "8.5€",
            descripcion: "Corte de piel de cerdo ibérico técnica 'suflada'.",
            historia: "Este plato es la declaración de intenciones de Cañitas Maite al llegar a Málaga. Representa la evolución de la matanza tradicional de Albacete mediante una técnica de vanguardia extrema. Se utiliza exclusivamente la piel de cerdos ibéricos seleccionados de la Dehesa de Extremadura (Joselito). La piel se somete a un proceso de deshidratación y posterior fritura a alta temperatura para lograr el 'suflado', creando una estructura aérea que cruje al primer contacto, liberando una emulsión de los propios jugos del cerdo y matices ahumados. Es, literalmente, concentrar toda la potencia de un asado ibérico en un solo bocado crujiente.",
            trazabilidad: "Cerdo Ibérico de bellota Joselito (Extremadura).",
            alergenos: ["Gluten", "Sulfitos", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué proveedor de prestigio suministra la materia prima para este bocado?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Caserío Montanera", correcta: false },
                            { texto: "Joselito", correcta: true },
                            { texto: "Sánchez Romero Carvajal", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el proceso técnico para lograr esa textura aérea?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Confitado en grasa de pato", correcta: false },
                            { texto: "Deshidratación y fritura a alta temperatura (suflado)", correcta: true },
                            { texto: "Maceración en soja y posterior horneado", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué matices debe destacar el camarero al describir el sabor final?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sabor dulce y cítrico", correcta: false },
                            { texto: "Potencia de matanza y matices ahumados", correcta: true },
                            { texto: "Suavidad de hierbas aromáticas", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bunuelo-trufa-ene",
            nombre: "Buñuelo trufado de queso de cabra",
            precio: "9.5€",
            descripcion: "Esfera crujiente de queso de cabra fundido con esencia de trufa negra.",
            historia: "Este bocado es un prodigio de la ingeniería culinaria de Javier Sanz y Juan Sahuquillo. Se diseña para ser una 'bomba' de sabor que estalla en el paladar. La base es un queso de cabra artesano de la Sierra de Alcaraz, elegido por su acidez equilibrada, que se infusiona durante horas con Trufa Negra (Tuber Melanosporum). El exterior se reboza en una mezcla técnica que incluye sésamo y frutos secos para aportar un matiz tostado y una textura terrosa que replica visualmente a una trufa recién sacada de la tierra. Es fundamental advertir al cliente que debe comerse de un solo bocado para disfrutar de la explosión del corazón fluido.",
            trazabilidad: "Queso de cabra artesano (Albacete) · Trufa negra de invierno · Mix de frutos secos seleccionados.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Sésamo", "Frutos de cáscara"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué recomendación es vital darle al cliente antes de que lo pruebe?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que lo corte por la mitad para ver el relleno", correcta: false },
                            { texto: "Que lo coma de un solo bocado (corazón fluido)", correcta: true },
                            { texto: "Que lo acompañe con pan", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué variedad de trufa se utiliza para infusionar el queso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Trufa blanca de verano", correcta: false },
                            { texto: "Trufa negra (Tuber Melanosporum)", correcta: true },
                            { texto: "Esencia sintética de trufa", correcta: false }
                        ]
                    },
                    {
                        texto: "Selecciona los alérgenos críticos de este plato según el manual:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Sésamo", correcta: true },
                            { texto: "Frutos de cáscara", correcta: true },
                            { texto: "Pescado", correcta: false },
                            { texto: "Huevo", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "bravas-milhojas-ene",
            nombre: "Patatas Bravas versión Milhojas",
            precio: "9.5€",
            descripcion: "Lingote de patata agria laminada, confitada y frita, con alioli de ajo asado y brava ahumada.",
            historia: "Inspiradas en la técnica francesa del 'Pavé', nuestras bravas son un trabajo de pura artesanía. Cada lingote está formado por decenas de láminas finísimas de patata agria de Albacete, seleccionada por su equilibrio entre cremosidad y resistencia. Tras un proceso de confitado lento, se fríen para lograr un exterior ultra crujiente donde las láminas se separan ligeramente. Se acompañan de un alioli sedoso y una salsa brava cuya profundidad de sabor proviene de un toque de soja y pimentón ahumado, fusionando la tradición manchega con matices contemporáneos.",
            trazabilidad: "Patata agria de Albacete · Aceite de oliva virgen extra · Salsa brava artesanal.",
            alergenos: ["Gluten", "Huevo", "Sulfitos", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el secreto de la textura interna de esta patata?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se utiliza puré de patata congelado", correcta: false },
                            { texto: "Laminado milimétrico y confitado a baja temperatura", correcta: true },
                            { texto: "Es una patata asada al horno", correcta: false }
                        ]
                    },
                    {
                        texto: "Selecciona los alérgenos presentes en este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Gluten", correcta: true },
                            { texto: "Soja", correcta: true },
                            { texto: "Lácteos", correcta: false },
                            { texto: "Huevo", correcta: true }
                        ]
                    },
                    {
                        texto: "¿De dónde procede la variedad de patata agria seleccionada?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Málaga", correcta: false },
                            { texto: "Albacete", correcta: true },
                            { texto: "Galicia", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "ceviche-roca-ene",
            nombre: "Ceviche de pescado de roca",
            precio: "11.5€",
            descripcion: "Pescado de lonja marinado en leche de tigre cítrica con contrastes de frutos secos y soja.",
            historia: "Este plato rinde homenaje al producto de las costas malagueñas pero bajo la mirada de Cañitas Maite. Se utiliza pescado de roca de máxima frescura, cuya carne firme es ideal para el marinado corto en una leche de tigre que, a diferencia de la tradicional, incorpora soja para aportar profundidad y color. Los frutos secos añaden un crujiente inesperado que rompe la textura sedosa del pescado. Es una propuesta vibrante que limpia el paladar y aporta notas salinas y cítricas muy marcadas.",
            trazabilidad: "Pescado de roca de lonja local (Málaga) · Cítricos seleccionados · Base de soja fermentada.",
            alergenos: ["Gluten", "Huevo", "Pescado", "Frutos secos", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Por qué se elige 'pescado de roca' para este ceviche?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque es el más barato de la lonja", correcta: false },
                            { texto: "Por su carne firme, ideal para el marinado", correcta: true },
                            { texto: "Porque se cocina a altas temperaturas", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué ingrediente diferencia nuestra leche de tigre de la clásica peruana?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vinagre de Jerez", correcta: false },
                            { texto: "Soja (aporta profundidad y umami)", correcta: true },
                            { texto: "Leche de coco", correcta: false }
                        ]
                    },
                    {
                        texto: "Selecciona los alérgenos presentes en este plato:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Pescado", correcta: true },
                            { texto: "Frutos secos", correcta: true },
                            { texto: "Soja", correcta: true },
                            { texto: "Moluscos", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "cogollo-cesar-ene",
            nombre: "Cogollo César de pollo escabechado",
            precio: "12€",
            descripcion: "Corazón de cogollo a la brasa con pollo en escabeche tradicional, salsa César artesana y frutos secos.",
            historia: "En Cañitas Maite reinterpretamos la ensalada más famosa del mundo uniendo el Mediterráneo con la tradición de Albacete. En lugar de pollo asado común, utilizamos un pollo escabechado siguiendo la receta de las matanzas manchegas, aportando una acidez elegante. El cogollo se pasa brevemente por la brasa para obtener notas ahumadas sin perder su textura crujiente. La salsa se emulsiona con anchoas de primera calidad y se termina con una lluvia de frutos secos que sustituyen al clásico 'crouton', aportando un sabor más noble.",
            trazabilidad: "Cogollos de huerta nacional · Pollo de corral escabechado en casa · Anchoas del Cantábrico.",
            alergenos: ["Soja", "Pescado", "Frutos secos", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica se aplica al cogollo antes de servirlo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se sirve crudo y frío", correcta: false },
                            { texto: "Se marca a la brasa (notas ahumadas)", correcta: true },
                            { texto: "Se hierve ligeramente", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se prepara el pollo en esta versión de la ensalada?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pollo frito crujiente", correcta: false },
                            { texto: "Pollo en escabeche tradicional", correcta: true },
                            { texto: "Pollo a la plancha", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué el plato contiene el alérgeno 'Pescado'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque lleva trozos de atún", correcta: false },
                            { texto: "Por las anchoas de la salsa César artesana", correcta: true },
                            { texto: "Por una decoración de huevas", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "oreja-cochinillo-ene",
            nombre: "Oreja de cochinillo confitada y frita",
            precio: "12€",
            descripcion: "Oreja de cochinillo seleccionada, cocinada a baja temperatura y terminada con un toque crujiente.",
            historia: "Este plato es un tributo a la casquería fina. Seleccionamos orejas de cochinillo por su delicadeza y las confitamos en su propia grasa durante horas hasta que el colágeno se vuelve pura mantequilla. Posteriormente, se fríen a alta temperatura para conseguir esa capa exterior que estalla en la boca. Es un bocado que juega con la dualidad: la fuerza de la tradición manchega y la elegancia de la técnica de vanguardia. Un imprescindible para los amantes de las texturas intensas.",
            trazabilidad: "Cochinillo segoviano de origen certificado · Aceite de oliva virgen extra.",
            alergenos: ["Gluten", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el proceso de cocción previo a la fritura?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Hervido rápido en agua", correcta: false },
                            { texto: "Confitado lento a baja temperatura", correcta: true },
                            { texto: "Maceración en vinagre", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué contraste de texturas define a este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Blanda y gomosa", correcta: false },
                            { texto: "Interior meloso y exterior muy crujiente", correcta: true },
                            { texto: "Totalmente seca y dura", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bollito-atun-fuentes-ene",
            nombre: "Bollito preñado de atún rojo Fuentes",
            precio: "13€",
            descripcion: "Brioche artesano relleno de tartar de atún rojo Fuentes marinado y toques cítricos.",
            historia: "Este plato eleva el concepto popular del 'bollito preñado' a la categoría de joya gastronómica. El protagonista absoluto es el Atún Rojo Fuentes, pescado mediante la técnica del almadraba y seleccionado por su infiltración grasa. El atún se pica a cuchillo y se aliña con una base de soja y matices cítricos que realzan su sabor sin enmascararlo. Se sirve dentro de un bollito de pan brioche tierno, creando un contraste espectacular entre la esponjosidad del pan y la untuosidad del atún rojo. Es, sin duda, un bocado de puro lujo asiático con alma nacional.",
            trazabilidad: "Atún Rojo de almadraba (Ricardo Fuentes, Cartagena) · Pan brioche artesano.",
            alergenos: ["Gluten", "Soja", "Sulfitos", "Pescado"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué proveedor suministra el atún rojo de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Balfegó", correcta: false },
                            { texto: "Fuentes (Atún de Almadraba)", correcta: true },
                            { texto: "Atún de lonja local", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se prepara el atún antes de introducirlo en el bollo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se cocina a la plancha muy hecho", correcta: false },
                            { texto: "Se pica a cuchillo y se marina (tipo tartar)", correcta: true },
                            { texto: "Se sirve en conserva de aceite", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de pan se utiliza para este bocado?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan de cristal", correcta: false },
                            { texto: "Pan Brioche tierno", correcta: true },
                            { texto: "Pan de barra tradicional", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bocata-calamares-ene",
            nombre: "Nuestra versión del bocata de calamares",
            precio: "14€",
            descripcion: "Interpretación de vanguardia del clásico madrileño con calamar de potera y alioli cítrico.",
            historia: "Este plato es un juego visual y gustativo. Partimos del concepto del bocadillo madrileño pero lo refinamos al máximo. Utilizamos calamar de potera, cuya carne es mucho más dulce y delicada, cortado en finísimas tiras o 'tallarines'. El pan se trabaja de forma artesanal para que sea una lámina crujiente que casi desaparece en la boca, dejando todo el protagonismo al calamar y a una emulsión ligera que aporta frescura y acidez. Es un bocado elegante que dignifica la cultura del 'finger food'.",
            trazabilidad: "Calamar de potera nacional · Pan artesano de larga fermentación · Cítricos del Guadalhorce.",
            alergenos: ["Gluten", "Sulfitos", "Lácteos", "Pescado", "Huevo", "Moluscos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de calamar se utiliza por su calidad superior?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Calamar congelado", correcta: false },
                            { texto: "Calamar de potera (pesca artesanal)", correcta: true },
                            { texto: "Anillas de calamar común", correcta: false }
                        ]
                    },
                    {
                        texto: "Además de 'Moluscos', ¿qué otro alérgeno marino contiene y por qué?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Crustáceos por el decorado", correcta: false },
                            { texto: "Pescado (por la base de la emulsión o caldo)", correcta: true },
                            { texto: "Altramuces", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el objetivo de esta 'versión' frente al bocata clásico?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que sea más grande y pesado", correcta: false },
                            { texto: "Lograr un bocado fino, crujiente y elegante", correcta: true },
                            { texto: "Servirlo en plato de cuchara", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "saam-alita-langostino-ene",
            nombre: "Saam de alita de pollo glaseada y langostino",
            precio: "16€",
            descripcion: "Bocado coreano en hoja de lechuga con alita deshuesada, langostino y glaseado umami.",
            historia: "El Saam representa la cocina viajera de Javier y Juan. Es un bocado diseñado para comerse con las manos, donde una hoja de lechuga fresca envuelve una alita de pollo que ha sido previamente deshuesada y confitada hasta quedar extremadamente tierna. Se acompaña con un langostino de costa y se baña en un glaseado intenso de estilo oriental. El resultado es una explosión de contrastes: el frío de la lechuga frente al calor del pollo, y el crujiente vegetal frente a la melosidad del glaseado.",
            trazabilidad: "Alitas de pollo de corral · Langostino de costa · Salsa de ostras artesanal.",
            alergenos: ["Gluten", "Huevo", "Moluscos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cómo debe sugerir el camarero que se coma este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Con cuchillo y tenedor", correcta: false },
                            { texto: "Con las manos, envolviéndolo en la hoja de lechuga (Saam)", correcta: true },
                            { texto: "Troceándolo todo en un bol", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué técnica se aplica a la alita de pollo para que sea un bocado fino?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se sirve con hueso para chupar", correcta: false },
                            { texto: "Se deshuesa totalmente y se glasea", correcta: true },
                            { texto: "Se sirve picada tipo hamburguesa", correcta: false }
                        ]
                    },
                    {
                        texto: "¿De dónde proviene el alérgeno 'Moluscos' en este plato de pollo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "De la propia carne del pollo", correcta: false },
                            { texto: "De la salsa de ostras utilizada en el glaseado", correcta: true },
                            { texto: "De una decoración de mejillones", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bikini-pastrami-ene",
            nombre: "Bikini hojaldrado de pastrami ahumado",
            precio: "14€",
            descripcion: "Sándwich de hojaldre artesano con pastrami curado, queso fundido y mostaza antigua.",
            historia: "Nuestra versión del 'Bikini' es un homenaje a la charcutería fina y a la pastelería salada. En lugar de pan convencional, utilizamos un hojaldre de mantequilla que se prensa y se tuesta hasta quedar extremadamente crujiente. Lo rellenamos con pastrami ahumado de alta calidad, que aporta notas de pimienta y humo, y lo fundimos con una selección de quesos que le dan untuosidad. El toque final de la mostaza antigua limpia el paladar y realza los matices de la carne curada.",
            trazabilidad: "Pastrami artesano de ternera seleccionada · Hojaldre de mantequilla · Mostaza en grano.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Mostaza", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué sustituye al pan de molde en nuestra versión del Bikini?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan de cristal", correcta: false },
                            { texto: "Hojaldre de mantequilla artesano", correcta: true },
                            { texto: "Pan integral", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué es el Pastrami que protagoniza el relleno?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Jamón cocido de cerdo", correcta: false },
                            { texto: "Carne de ternera curada, especiada y ahumada", correcta: true },
                            { texto: "Lomo de cerdo a la plancha", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué ingrediente aporta el toque de acidez necesario para equilibrar el plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Mostaza antigua (en grano)", correcta: true },
                            { texto: "Ketchup casero", correcta: false },
                            { texto: "Mermelada de higos", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "donut-rabo-toro-ene",
            nombre: "Donut de guiso de rabo de toro y parmesano",
            precio: "16€",
            descripcion: "Donut artesano relleno de rabo de toro estofado tradicional con lluvia de parmesano de 24 meses.",
            historia: "Este plato juega con la memoria visual del comensal. Lo que parece un dulce es, en realidad, un bocado salado de una intensidad arrolladora. El rabo de toro se estofa a fuego lento siguiendo la receta tradicional manchega, con su bresa de verduras y vino tinto, hasta que la carne se desprende sola del hueso. Con ese guiso súper concentrado rellenamos un donut de masa brioche que se termina con una montaña de queso parmesano rallado al momento. Es el equilibrio perfecto entre la cocina de la abuela y la vanguardia más atrevida.",
            trazabilidad: "Rabo de vaca seleccionada · Queso Parmigiano Reggiano 24 meses · Masa artesana.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de guiso encontramos en el interior del donut?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Carne picada con tomate", correcta: false },
                            { texto: "Estofado tradicional de rabo de toro (12h de cocción)", correcta: true },
                            { texto: "Pato confitado", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué aporta el queso parmesano a este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Solo decoración", correcta: false },
                            { texto: "El punto justo de sal y potencia umami", correcta: true },
                            { texto: "Un sabor dulce", correcta: false }
                        ]
                    },
                    {
                        texto: "Seguridad Alimentaria: ¿Contiene vino el guiso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, solo agua", correcta: false },
                            { texto: "Sí, de ahí el alérgeno Sulfitos por la reducción de vino tinto", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "primer-beso-ene",
            nombre: "Tu primer beso de vainilla y fresa",
            precio: "6.5€",
            descripcion: "Texturas cremosas de vainilla Bourbon combinadas con la frescura ácida de las fresas naturales.",
            historia: "Este postre es una oda a la sencillez y a la memoria gustativa. Busca recrear esa sensación dulce y fresca de los sabores de la infancia. Utilizamos vainilla Bourbon, reconocida por su aroma floral e intenso, para crear una base sedosa que se rompe con la intensidad de un coulis artesano de fresas rojas. El toque de frutos de cáscara aporta un contraste crujiente que redondea la experiencia. Es un final ligero, elegante y muy romántico para culminar la experiencia en Eñe.",
            trazabilidad: "Vainilla Bourbon de Madagascar · Fresas de temporada · Frutos secos seleccionados.",
            alergenos: ["Lácteos", "Pescado", "Frutos de cáscara"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de vainilla se utiliza para este postre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vainilla sintética", correcta: false },
                            { texto: "Vainilla Bourbon de Madagascar", correcta: true },
                            { texto: "Vainilla de Tahití", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué aparece el pescado como alérgeno en este dulce?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque lleva trozos de pescado", correcta: false },
                            { texto: "Por el uso de gelatina de origen ictícola (cola de pescado)", correcta: true },
                            { texto: "Es un error del menú", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el perfil de sabor predominante en 'Tu primer beso'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Amargo y salado", correcta: false },
                            { texto: "Dulce, floral y con la acidez de la fruta", correcta: true },
                            { texto: "Picante y cítrico", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "canickers-ene",
            nombre: "Cañickers: helado de tres chocolates",
            precio: "7.5€",
            descripcion: "Nuestra versión de la famosa barrita: capas de tres chocolates, caramelo salado y cacahuetes.",
            historia: "El Cañickers es el postre más gamberro de nuestra carta. Es una reinterpretación de alta pastelería de la barrita Snickers. Jugamos con tres intensidades de chocolate para dar complejidad, un toffee de caramelo salado que potencia el sabor y un praliné de frutos secos que aporta el crujiente característico. Es un postre intenso, cremoso y pensado para los amantes del chocolate que buscan un final divertido y contundente.",
            trazabilidad: "Cacao de origen seleccionado · Frutos secos nacionales · Caramelo artesano.",
            alergenos: ["Gluten", "Lácteos", "Pescado", "Soja", "Frutos de cáscara"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿En qué famosa barrita de chocolate se inspira este postre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Mars", correcta: false },
                            { texto: "Snickers (de ahí el nombre Cañickers)", correcta: true },
                            { texto: "Kit-Kat", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué elemento aporta el contraste 'salado' en este postre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sal gorda por encima", correcta: false },
                            { texto: "Caramelo salado (Toffee)", correcta: true },
                            { texto: "El queso del helado", correcta: false }
                        ]
                    },
                    {
                        texto: "Selecciona los alérgenos presentes en el Cañickers:",
                        tipo: "checkbox",
                        opciones: [
                            { texto: "Pescado (gelatina)", correcta: true },
                            { texto: "Frutos de cáscara", correcta: true },
                            { texto: "Soja", correcta: true },
                            { texto: "Mostaza", correcta: false }
                        ]
                    }
                ]
            }
        }
    ],
    pool: [
        {
            id: "test-fuegos-artificiales",
            nombre: "🚀 TEST DE FUEGOS ARTIFICIALES",
            precio: "GRATIS",
            descripcion: "Este es un plato de prueba para ver el efecto visual de aprobación.",
            historia: "En Cañitas Maite celebramos el éxito. Este plato no existe en carta, solo sirve para que el equipo vea qué ocurre cuando se convierte en un experto certificado.",
            trazabilidad: "Código fuente de Cañitas Maite.",
            alergenos: ["Ninguno"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Quieres ver los fuegos artificiales?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No", correcta: false },
                            { texto: "¡SÍ, POR FAVOR!", correcta: true }
                        ]
                    }
                ]
            }
        }
    ],
    menus: [
        {
            id: "menu-torta-aceite",
            nombre: "Torta de aceite y al-i-olí de ajos asados",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Cortesía crujiente de pan tradicional con emulsión cremosa de ajos asados y AOVE.",
            historia: "Este primer bocado es un homenaje a las raíces de Albacete y Valencia. Se trata de una torta de pan artesana, extremadamente fina y crocante, que destaca por un interior arreado y suave. El secreto reside en el ritual de servicio: al terminar la torta, se remoja generosamente en un Aceite de Oliva Virgen Extra que aporta notas intensas, herbáceas y frescas, perfectamente alineado con unos cristales de sal en escamas para potenciar el sabor del cereal.",
            trazabilidad: "Pan artesano de la zona de Albacete · AOVE de recolección temprana · Ajo morado asado.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cómo se define la textura del interior de nuestra torta de aceite?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Compacta y densa", correcta: false },
                            { texto: "Arreada y suave", correcta: true },
                            { texto: "Húmeda y elástica", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué raíces geográficas homenajea este primer bocado del menú?",
                        tipo: "radio",
                        opciones: [
                            { texto: "La tradición puramente madrileña", correcta: false },
                            { texto: "Las raíces de Albacete y Valencia", correcta: true },
                            { texto: "Exclusivamente la huerta murciana", correcta: false }
                        ]
                    },
                    {
                        texto: "Desde el punto de vista de trazabilidad, ¿qué tipo de ajo protagoniza nuestra emulsión?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Ajo tierno de cultivo hidropónico", correcta: false },
                            { texto: "Ajo morado asado", correcta: true },
                            { texto: "Ajo negro fermentado", correcta: false }
                        ]
                    },
                    {
                        texto: "SEGURIDAD ALIMENTARIA: ¿Por qué es crítico identificar este plato para un cliente con alergia al huevo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque la torta se fríe en aceite de huevo", correcta: false },
                            { texto: "Porque el al-i-olí es una emulsión que utiliza yema para lograr su textura cremosa", correcta: true },
                            { texto: "No contiene huevo, es solo ajo y aceite", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué elemento se añade al final para aportar notas herbáceas e intensidad?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Mantequilla de oveja", correcta: false },
                            { texto: "Aceite de Oliva Virgen Extra y sal en escamas", correcta: true },
                            { texto: "Reducción de vinagre de Jerez", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-aperitivos-dia",
            nombre: "Aperitivos de bienvenida según el día",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Selección de 2 bocados cambiantes basados en el producto de mercado y temporada.",
            historia: "Este pase representa el dinamismo de Cañitas Maite. No hay una receta fija porque mandan las estaciones: desde un mini-buñuelo de temporada hasta una pequeña emulsión de verduras locales. Es la forma en que el equipo demuestra que el menú está vivo y conectado con el producto diario.",
            trazabilidad: "Producto de km0 · Selección diaria de lonja y huerta local.",
            alergenos: ["Gluten", "Pescado", "Moluscos", "Sulfitos", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Por qué los aperitivos de bienvenida no aparecen con un nombre fijo en la formación?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque dependen estrictamente del producto de mercado y la temporada", correcta: true },
                            { texto: "Porque no son importantes en el menú", correcta: false },
                            { texto: "Porque se deciden al azar sin criterio", correcta: false }
                        ]
                    },
                    {
                        texto: "Ante un cliente con alergias graves, ¿qué debe hacer el equipo en este pase?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Servir lo de siempre porque suelen ser bocados pequeños", correcta: false },
                            { texto: "Consultar siempre los 2 bocados del día con cocina para asegurar la seguridad alimentaria", correcta: true },
                            { texto: "No servir nada en este paso", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-croqueta",
            nombre: "La Mejor Croqueta del Mundo 2021",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Bechamel ultrafina de leche de oveja y jamón Joselito.",
            historia: "En el contexto del menú degustación, esta croqueta se sirve como un pase individual diseñado para mostrar la técnica de la bechamel al límite de su fluidez. El uso de leche de oveja, mucho más grasa que la de vaca, es lo que permite esa textura casi líquida sin perder estructura. Se finaliza con una lámina de Joselito que se funde con el calor residual del bocado.",
            trazabilidad: "Jamón Joselito (Guijuelo) · Leche de oveja de Castilla-La Mancha.",
            alergenos: ["Gluten", "Lácteos", "Huevo", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "Dentro de un menú degustación, ¿cuál es la principal dificultad técnica de esta croqueta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Conseguir que el jamón no se queme", correcta: false },
                            { texto: "Mantener la bechamel al límite de la fluidez sin que se rompa el rebozado", correcta: true },
                            { texto: "Que el panko sepa a pan tradicional", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué recomendación de consumo es esencial dar al cliente en este pase del menú?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Comerla de un solo bocado o con cuidado por su interior casi líquido", correcta: true },
                            { texto: "Trocearla bien antes de comer", correcta: false },
                            { texto: "Esperar 10 minutos a que se enfríe totalmente", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué aporta la leche de oveja a diferencia de la de vaca en esta receta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Un color mucho más oscuro", correcta: false },
                            { texto: "Una mayor potencia grasa y una textura más sedosa y elegante", correcta: true },
                            { texto: "Menos calorías al plato", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-ensaladilla",
            nombre: "Ensaladilla de gamba blanca malagueña al ajillo",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Base cremosa de patata y ventresca con tartar de gamba blanca malagueña y aceite al ajillo.",
            historia: "Es uno de los platos que mejor conecta Albacete con el Mediterráneo. La base es una ensaladilla clásica muy cremosa, pero el protagonismo lo tiene el tartar de gamba blanca de la bahía de Málaga que la corona. El momento clave es el servicio: se termina en mesa vertiendo un aceite infusionado al ajillo (estilo 'gamba al ajillo' tradicional) que cocina ligeramente el marisco y desprende un aroma irresistible.",
            trazabilidad: "Gamba blanca de la bahía de Málaga · Patata nueva · Aceite de oliva virgen.",
            alergenos: ["Crustáceos", "Huevo", "Pescado", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el gesto de servicio que hace única a esta ensaladilla en mesa?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se ralla trufa fresca por encima", correcta: false },
                            { texto: "Se vierte un aceite al ajillo caliente sobre el tartar de gamba", correcta: true },
                            { texto: "Se mezcla con un tenedor de plata", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de marisco protagoniza este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Gamba roja de Denia", correcta: false },
                            { texto: "Gamba blanca malagueña", correcta: true },
                            { texto: "Quisquilla de Santa Pola", correcta: false }
                        ]
                    },
                    {
                        texto: "SEGURIDAD ALIMENTARIA: ¿A qué grupo de alérgenos pertenece la gamba blanca?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Moluscos", correcta: false },
                            { texto: "Crustáceos", correcta: true },
                            { texto: "Pescado blanco", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-setas-patata",
            nombre: "Setas silvestres con patata cremosa y yema",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Selección de setas de temporada sobre base de patata cremosa y yema de huevo de corral.",
            historia: "Este plato del Menú Hits busca el confort absoluto. A diferencia de otras versiones, aquí las setas silvestres se asientan sobre una base de patata trabajada hasta conseguir una textura sedosa y cremosa (estilo puré Robuchon). La yema de huevo actúa como nexo de unión, aportando riqueza y una textura aterciopelada que envuelve el sabor umami de los hongos. Es un bocado que representa el lado más amable y meloso de la cocina de Javier y Juan.",
            trazabilidad: "Setas silvestres de temporada · Patata agria de Albacete · Huevos de corral.",
            alergenos: ["Huevos", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "Según la descripción del Menú Hits, ¿qué elemento acompaña a las setas y la yema?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Arroz meloso", correcta: false },
                            { texto: "Patata cremosa", correcta: true },
                            { texto: "Pasta fresca", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué característica define la textura de este plato al mezclar sus ingredientes?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es una textura crujiente y seca", correcta: false },
                            { texto: "Es una textura sedosa, melosa y envolvente", correcta: true },
                            { texto: "Es una textura puramente líquida", correcta: false }
                        ]
                    },
                    {
                        texto: "SEGURIDAD ALIMENTARIA: ¿Contiene este plato alérgenos de origen lácteo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, es 100% vegano", correcta: false },
                            { texto: "Sí, la 'patata cremosa' suele elaborarse con mantequilla o lácteos para lograr su textura", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-mejillon-sobrasada",
            nombre: "Mejillón de roca con sobrasada de bellota",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Mejillón de roca seleccionado con emulsión de sobrasada ibérica de bellota y un toque cítrico.",
            historia: "Este bocado es un ejemplo radical del 'Mar y Montaña' que define a Javier Sanz y Juan Sahuquillo. Se utiliza mejillón de roca por su sabor intenso yodado, que se equilibra con la grasa elegante de una sobrasada de bellota de máxima calidad. La técnica consiste en fundir la sobrasada para crear una emulsión que napa el mejillón, rematando con un toque de frescura para limpiar el paladar. Es un bocado de contraste: la potencia de la matanza frente a la frescura del mar.",
            trazabilidad: "Mejillón de roca de lonja · Sobrasada artesana de cerdo ibérico de bellota.",
            alergenos: ["Moluscos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué concepto gastronómico define la unión del mejillón y la sobrasada?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Cocina de vanguardia molecular", correcta: false },
                            { texto: "Mar y Montaña (fusión de producto marino y cárnico)", correcta: true },
                            { texto: "Cocina puramente marinera", correcta: false }
                        ]
                    },
                    {
                        texto: "Según la trazabilidad del plato, ¿qué tipo de sobrasada se utiliza?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sobrasada comercial de supermercado", correcta: false },
                            { texto: "Sobrasada artesana de cerdo ibérico de bellota", correcta: true },
                            { texto: "Sobrasada picante de Mallorca", correcta: false }
                        ]
                    },
                    {
                        texto: "SEGURIDAD ALIMENTARIA: ¿Cuál es el alérgeno principal de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pescado", correcta: false },
                            { texto: "Moluscos", correcta: true },
                            { texto: "Crustáceos", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-langostino-brasas",
            nombre: "Langostino en brasas con jugo de pollo asado",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Langostino de costa seleccionado, asado a la brasa y terminado con reducción de jugo de pollo asado.",
            historia: "Este plato es una de las combinaciones más atrevidas y celebradas de Javier y Juan. El langostino se cocina brevemente sobre las brasas de encina para mantener su textura tersa y su sabor marino intacto. El contraste surge al bañarlo con un jugo de pollo asado tradicional, densamente reducido, que aporta notas tostadas y cárnicas. El resultado es un bocado donde el yodo del mar y el umami del asado se funden en una armonía perfecta.",
            trazabilidad: "Langostino de costa nacional · Pollo de corral para el fondo de asado.",
            alergenos: ["Crustáceos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el método de cocinado que define la textura del langostino en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fritura en tempura", correcta: false },
                            { texto: "Asado directo a la brasa", correcta: true },
                            { texto: "Cocción al vapor de agua de mar", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de fondo se utiliza para crear el contraste 'Mar y Montaña'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fumet de pescado blanco", correcta: false },
                            { texto: "Reducción de jugo de pollo asado", correcta: true },
                            { texto: "Salsa de soja y miel", correcta: false }
                        ]
                    },
                    {
                        texto: "SEGURIDAD ALIMENTARIA: ¿A qué grupo de alérgenos pertenece el langostino?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Moluscos", correcta: false },
                            { texto: "Crustáceos", correcta: true },
                            { texto: "Pescado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-lubina-estero",
            nombre: "Lubina de estero a la parrilla y su pil-pil",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Lubina de estero asada a la brasa, servida con una emulsión de su propio colágeno (pil-pil).",
            historia: "La lubina de estero es un producto de una calidad excepcional, criada en un entorno natural que le otorga una grasa infiltrada única. En Cañitas Maite se trata con el máximo respeto: se asila a la parrilla abierta para conseguir una piel crujiente y un corazón jugoso. El plato se termina con un pil-pil elaborado con los jugos y el colágeno del propio pescado, demostrando que no hace falta más que técnica y producto para alcanzar la excelencia.",
            trazabilidad: "Lubina de estero de proximidad (Andalucía) · Aceite de oliva virgen extra.",
            alergenos: ["Pescado"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica se utiliza para elaborar la salsa (pil-pil) que acompaña a la lubina?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Una reducción de nata y vino blanco", correcta: false },
                            { texto: "Emulsión del propio colágeno del pescado con aceite de oliva", correcta: true },
                            { texto: "Una salsa de tomate y pimientos", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el punto clave del cocinado de la lubina en este menú?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Cocción lenta al horno de vapor", correcta: false },
                            { texto: "Asado a la parrilla para potenciar la piel crujiente y el aroma a brasa", correcta: true },
                            { texto: "Fritura en abundante aceite", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-txuleta-vasca",
            nombre: "Txuleta vasca asada en parrilla abierta",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Corte premium de txuleta vasca, asada con técnica de parrilla abierta y sal de escamas.",
            historia: "La txuleta representa el culto al fuego de Cañitas Maite. Se seleccionan piezas con una maduración óptima para garantizar ternura y profundidad de sabor. Se asa en parrilla abierta, una técnica que exige un control absoluto de las temperaturas y las alturas del fuego de encina, permitiendo que la grasa exterior se caramelice y perfume toda la pieza sin perder sus jugos naturales.",
            trazabilidad: "Vacuno mayor seleccionado · Sal de Salinas de Añana.",
            alergenos: ["Sin alérgenos comunes directos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de parrilla se especifica en el Menú Hits para el asado de la txuleta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Parrilla abierta (control directo del fuego y la altura)", correcta: true },
                            { texto: "Horno Josper cerrado", correcta: false },
                            { texto: "Plancha eléctrica", correcta: false }
                        ]
                    },
                    {
                        texto: "En el servicio de este plato, ¿cuál es el papel del camarero?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Cortar la carne en dados pequeños", correcta: false },
                            { texto: "Informar sobre el punto de maduración y la procedencia de la pieza", correcta: true },
                            { texto: "Salsear la carne con salsa barbacoa", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "menu-flan-nata",
            nombre: "El flan de nata de Cañitas Maite",
            precio: "Classics: 45€ \u00A0\u00A0|\u00A0\u00A0 Hits: 55€",
            descripcion: "Flan artesano elaborado con nata fresca y yemas, de textura cremosa y sedosa.",
            historia: "El flan de nata es ya una leyenda de la casa. Es un postre que apuesta por la sencillez extrema ejecutada a la perfección. No lleva leche, solo nata de alto contenido graso y yemas de huevo de corral, lo que le confiere una cremosidad que se deshace en la boca. Se hornea a baja temperatura para evitar que 'hierva' y asegurar que no tenga poros, resultando en una estructura lisa y brillante.",
            trazabilidad: "Nata fresca de ganadería seleccionada · Yemas de huevos de corral.",
            alergenos: ["Huevos", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el secreto de la textura ultra-cremosa de este flan?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El uso de gelatina neutra", correcta: false },
                            { texto: "El uso exclusivo de nata (sin leche) y yemas de huevo", correcta: true },
                            { texto: "Que se cocina en microondas", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué el flan de Cañitas Maite no tiene 'ojos' o poros en su interior?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque se bate mucho la mezcla", correcta: false },
                            { texto: "Por una cocción controlada a baja temperatura que evita la ebullición", correcta: true },
                            { texto: "Porque se congela antes de servir", correcta: false }
                        ]
                    }
                ]
            }
        }
    ],
    room: [
        /* --- BOCATERÍA FINA --- */
        {
            id: "bikini-room",
            nombre: "Bikini mixto trufado de jamón cocido y queso Comté 24 meses fundido",
            precio: "17€",
            descripcion: "Sándwich de corte fino con jamón cocido premium, queso Comté de alta maduración y aroma de trufa negra.",
            historia: "En Cañitas Maite, un bocado clásico se transforma mediante la selección de proveedores excepcionales. El uso del Queso Comté con 24 meses de maduración (AOC) marca la diferencia: un queso de leche cruda de vaca de las montañas del Jura (Francia), que al fundirse libera notas de mantequilla tostada y avellana. La trufa negra aporta esa dimensión sensorial que caracteriza la cocina de Javier y Juan.",
            trazabilidad: "Queso Comté 24 meses (AOC Francia) · Jamón cocido selección extra · Mantequilla artesana para el tostado.",
            alergenos: ["Gluten", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de leche se utiliza para elaborar el queso Comté del bikini?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Leche pasteurizada de cabra", correcta: false },
                            { texto: "Leche cruda de vaca", correcta: true },
                            { texto: "Leche de oveja merina", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué se especifica que el Comté tiene 24 meses de maduración?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque es el tiempo mínimo legal", correcta: false },
                            { texto: "Porque aporta notas de frutos secos y una mayor complejidad de sabor", correcta: true },
                            { texto: "Para que el queso no se funda tanto", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué región francesa es la cuna del queso Comté AOC?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Normandía", correcta: false },
                            { texto: "El macizo del Jura", correcta: true },
                            { texto: "Provenza", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se debe describir el perfil de sabor de este bikini al cliente?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Suave y convencional como un mixto normal", correcta: false },
                            { texto: "Intenso, con notas de mantequilla tostada, frutos secos y aroma terroso de trufa", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "sandwich-club-room",
            nombre: "Sandwich club versión Cañitas con huevo campero frito al momento y bacon crujiente",
            precio: "19€",
            descripcion: "Sándwich de tres pisos con pollo, huevo campero frito, bacon artesano crujiente, lechuga, tomate y mayonesa.",
            historia: "El Sandwich Club es un icono mundial del Room Service, pero en Cañitas Maite lo tratamos como un plato de alta cocina. La clave absoluta es el punto del huevo: usamos huevos camperos que se fríen justo antes de que el carro salga hacia la habitación, asegurando que la yema llegue fluida para bañar el resto de ingredientes. El bacon se cocina a baja temperatura y se termina a alta para que sea una lámina de cristal crujiente, no una tira de grasa.",
            trazabilidad: "Huevos camperos de granja nacional · Pan brioche de molde artesano · Bacon ahumado de selección.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Mostaza", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el factor crítico de servicio en nuestro Sandwich Club?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que el pan esté muy tostado", correcta: false },
                            { texto: "Que el huevo sea campero y se fría al momento para que la yema llegue fluida", correcta: true },
                            { texto: "Que lleve mucha mayonesa", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se describe la técnica utilizada en nuestro bacon?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Frito en abundante aceite", correcta: false },
                            { texto: "Cocinado para lograr una textura de 'cristal' crujiente", correcta: true },
                            { texto: "Hervido previamente", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de pan se utiliza como estructura del sándwich?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan de cristal", correcta: false },
                            { texto: "Pan brioche de molde artesano", correcta: true },
                            { texto: "Pan integral de semillas", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué es importante mencionar al cliente que el huevo es campero?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Por una cuestión puramente estética", correcta: false },
                            { texto: "Porque garantiza mayor calidad, sabor y una yema de color más intenso debido a la alimentación de la gallina", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "roll-brioche-room",
            nombre: "Roll brioche de salmón ahumado, aguacate malagueño y crema fresca de queso",
            precio: "21€",
            descripcion: "Pan brioche artesano relleno de finas láminas de salmón ahumado, aguacate de la Axarquía y una base de crema fresca acidulada.",
            historia: "Este plato es un tributo a la frescura del Mediterráneo. El brioche, con un alto contenido en mantequilla, se tuesta ligeramente para que contraste con la temperatura del salmón y el aguacate. La importancia del origen es clave: el aguacate proviene de la Axarquía malagueña, donde el microclima permite obtener una fruta con una textura mantecosa excepcional que se funde con la crema fresca de queso.",
            trazabilidad: "Aguacate de la Axarquía (Málaga) · Salmón ahumado de selección superior · Brioche artesano de mantequilla.",
            alergenos: ["Gluten", "Pescado", "Lácteos", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué característica define al aguacate de la Axarquía utilizado en este roll?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Su textura fibrosa y ácida", correcta: false },
                            { texto: "Su textura mantecosa y alto contenido en aceites naturales", correcta: true },
                            { texto: "Que es un producto de importación", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se prepara el pan brioche antes de montar el plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se sirve frío directamente", correcta: false },
                            { texto: "Se tuesta ligeramente para contrastar con el relleno frío", correcta: true },
                            { texto: "Se humedece en leche", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué función cumple la crema fresca de queso en el conjunto?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aportar un toque picante", correcta: false },
                            { texto: "Aportar acidez y cremosidad para equilibrar la grasa del salmón y el aguacate", correcta: true },
                            { texto: "Actuar como espesante", correcta: false }
                        ]
                    },
                    {
                        texto: "¿De qué región de Málaga procede nuestro proveedor de aguacates?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Antequera", correcta: false },
                            { texto: "La Axarquía", correcta: true },
                            { texto: "Serranía de Ronda", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "burger-lyo-room",
            nombre: "Burger de vaca gallega madurada 120 días de Cárnicas Lyo, papada ibérica y yema",
            precio: "24€",
            descripcion: "Carne de vaca vieja seleccionada con 4 meses de maduración, acompañada de papada ibérica para aportar jugosidad y yema de huevo campero.",
            historia: "Cárnicas Lyo (León) es mundialmente reconocida por seleccionar las mejores vacas de España y llevar las maduraciones al límite. Para Cañitas Maite, seleccionan piezas con 120 días de maduración, un punto donde la carne desarrolla notas de frutos secos, queso azul y una intensidad animal inigualable. La papada ibérica se añade para equilibrar la estructura de la carne madurada, que tiende a ser más magra, aportando una grasa infiltrada que se funde con la yema campera.",
            trazabilidad: "Vaca Gallega con 120 días de maduración (Cárnicas Lyo, León) · Papada de cerdo ibérico puro · Yema de huevo campero de granja.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Soja", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué hace única a la carne de Cárnicas Lyo seleccionada para esta burger?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que es carne de ternera joven y suave", correcta: false },
                            { texto: "Su maduración de 120 días que concentra sabores a frutos secos y notas animales intensas", correcta: true },
                            { texto: "Que se pica muy fina para que no tenga sabor", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué se añade papada ibérica a la mezcla de la carne?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Para que la burger pese más", correcta: false },
                            { texto: "Para aportar la grasa necesaria y jugosidad que equilibre la carne madurada", correcta: true },
                            { texto: "Para sustituir a la sal", correcta: false }
                        ]
                    },
                    {
                        texto: "¿De qué región de España proviene el proveedor Cárnicas Lyo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Galicia", correcta: false },
                            { texto: "León", correcta: true },
                            { texto: "Madrid", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué función cumple la yema de huevo en este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es meramente decorativa", correcta: false },
                            { texto: "Actúa como un hilo conductor de sabor, aportando cremosidad y untuosidad al conjunto", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Cuál es la procedencia de la vaca utilizada?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vaca Gallega", correcta: true },
                            { texto: "Vaca de importación europea", correcta: false }
                        ]
                    }
                ]
            }
        },

        /* --- PRINCIPALES CLÁSICOS --- */
        {
            id: "cesar-payoyo-room",
            nombre: "Ensalada césar de lechuga viva y queso Payoyo extra curado",
            precio: "24€",
            descripcion: "Hojas de lechuga viva, salsa césar artesana con anchoas del Cantábrico, croutones de pan brioche y lascas de queso Payoyo de la Sierra de Cádiz.",
            historia: "Nuestra ensalada césar huye de los ingredientes industriales. Utilizamos 'lechuga viva', que llega a la cocina con su raíz hidropónica, garantizando un crujiente máximo que aguanta perfectamente el servicio en habitación. El toque maestro es la sustitución del parmesano por Queso Payoyo (Grazalema/Ubrique), un queso de cabra y oveja premiado internacionalmente que aporta una salinidad y elegancia únicas a la salsa artesana.",
            trazabilidad: "Queso Payoyo (Sierra de Grazalema, Cádiz) · Lechuga viva de cultivo hidropónico · Anchoas del Cantábrico para la salsa.",
            alergenos: ["Gluten", "Pescado", "Lácteos", "Huevo", "Mostaza"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué diferencia a la 'lechuga viva' de una lechuga convencional?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que se sirve con la raíz para garantizar máximo frescor y textura crujiente", correcta: true },
                            { texto: "Que es de color azul", correcta: false },
                            { texto: "Que solo se cultiva en invierno", correcta: false }
                        ]
                    },
                    {
                        texto: "¿De dónde proviene el queso Payoyo extra curado?",
                        tipo: "radio",
                        opciones: [
                            { texto: "De los Alpes franceses", correcta: false },
                            { texto: "De la Sierra de Grazalema y Ubrique (Cádiz)", correcta: true },
                            { texto: "De la Mancha", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Con qué tipo de leche se elabora el queso Payoyo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Únicamente leche de vaca", correcta: false },
                            { texto: "Leche de cabra Payoya y oveja Merina de Grazalema", correcta: true },
                            { texto: "Leche de búfala", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué ingrediente premium aporta el sabor Umami a nuestra salsa césar artesana?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Salsa de soja", correcta: false },
                            { texto: "Anchoas del Cantábrico", correcta: true },
                            { texto: "Extracto de carne", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se elaboran los croutones de esta ensalada?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Son de pan industrial", correcta: false },
                            { texto: "Se elaboran a mano con pan brioche artesano para mayor delicadeza", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "pasta-pesto-room",
            nombre: "Pasta fresca con pesto de piñones y tomate seco",
            precio: "26€",
            descripcion: "Pasta de trigo duro elaborada artesanalmente, ligada con un pesto de albahaca fresca, piñones nacionales y tomates secos hidratados en AOVE.",
            historia: "La pasta fresca es uno de los pilares de la cocina reconfortante en el Room Service de Cañitas Maite. Nuestra pasta se elabora diariamente para garantizar una textura elástica que absorba perfectamente la salsa. El pesto se diferencia por el uso exclusivo de piñones nacionales; a diferencia del piñón de importación, el nuestro es más graso y aromático, lo que proporciona una untuosidad natural sin necesidad de añadir excesiva grasa externa. El tomate seco aporta el contrapunto de acidez y dulzor necesario para equilibrar el conjunto.",
            trazabilidad: "Piñones nacionales de selección · Pasta elaborada a diario en obrador artesano · Tomate seco de origen nacional.",
            alergenos: ["Gluten", "Lácteos", "Frutos de cáscara"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué diferencia principal aporta el piñón nacional a nuestro pesto?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es más barato que el de importación", correcta: false },
                            { texto: "Es más graso y aromático, aportando una untuosidad superior", correcta: true },
                            { texto: "Que es de color rojo", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Con qué frecuencia se elabora la pasta para este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Se compra pasta seca industrial", correcta: false },
                            { texto: "Se elabora diariamente en el obrador para asegurar frescura y textura", correcta: true },
                            { texto: "Se prepara una vez al mes y se congela", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué ingrediente se utiliza para dar el contrapunto de acidez y dulzor?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vinagre balsámico", correcta: false },
                            { texto: "Tomate seco hidratado en AOVE", correcta: true },
                            { texto: "Limón exprimido", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué es importante la frescura de la pasta en el servicio a habitaciones?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque tarda menos en cocinarse", correcta: false },
                            { texto: "Porque mantiene mejor la textura 'al dente' durante el transporte", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "corvina-tomate-room",
            nombre: "Corvina con salsa de tomate a la brasa y cherrys confitados",
            precio: "32€",
            descripcion: "Lomo de corvina asado en su punto, acompañado de una salsa de tomates trabajada a la brasa y tomates cherry confitados.",
            historia: "En este plato, Javier y Juan trasladan la esencia de su parrilla a la habitación. La corvina, un pescado blanco de carne firme y sabor delicado, se cocina respetando su jugosidad. El elemento diferenciador es la salsa: los tomates no se guisan de forma convencional, sino que se asan directamente sobre las brasas para extraer notas ahumadas y dulces que potencian el sabor marino del pescado. Los cherrys confitados aportan explosiones de sabor dulce que equilibran la potencia de la brasa.",
            trazabilidad: "Corvina fresca de lonja · Tomate de huerta nacional · Aceite de Oliva Virgen Extra selección.",
            alergenos: ["Pescado"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica de Cañitas Maite define el sabor de la salsa de este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El hervido tradicional", correcta: false },
                            { texto: "El asado de los tomates directamente a la brasa", correcta: true },
                            { texto: "La fritura a alta temperatura", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se describe la textura y sabor de la corvina?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Carne blanda y sabor muy fuerte", correcta: false },
                            { texto: "Carne firme, blanca y de sabor delicado", correcta: true },
                            { texto: "Pescado azul muy graso", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué función tienen los tomates cherry confitados en el plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Aportar notas dulces que equilibran el ahumado de la brasa", correcta: true },
                            { texto: "Sustituir a la guarnición de patata", correcta: false },
                            { texto: "Aportar picante", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué se elige la corvina para la carta de Room Service?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque es el único pescado disponible", correcta: false },
                            { texto: "Por su capacidad para mantener una textura óptima y jugosa durante el traslado", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "solomillo-vaca-room",
            nombre: "Solomillo de vaca madurada con salsa española y patatas chips artesanas",
            precio: "36€",
            descripcion: "Corte noble de solomillo de vaca con maduración controlada, servido con una reducción de salsa española tradicional y patatas chips caseras.",
            historia: "El solomillo en Cañitas Maite representa el respeto por el recetario clásico ejecutado con precisión técnica. Seleccionamos lomos de vaca nacional con una maduración corta que potencia el sabor sin perder la terneza extrema que busca el cliente de Room Service. La salsa española es el alma del plato: se elabora mediante una reducción lenta de huesos asados y hortalizas durante más de 48 horas hasta obtener un glaseado brillante y profundo. Se acompaña de patatas chips que cortamos y freímos nosotros mismos para garantizar un crujiente auténtico.",
            trazabilidad: "Vaca seleccionada nacional · Patata agria de cultivo nacional · Reducción artesana de 48h.",
            alergenos: ["Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el tiempo de reducción aproximado de nuestra salsa española?",
                        tipo: "radio",
                        opciones: [
                            { texto: "2 horas", correcta: false },
                            { texto: "Más de 48 horas para lograr un glaseado profundo", correcta: true },
                            { texto: "Es una salsa instantánea", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué caracteriza al solomillo seleccionado para este plato?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que es carne de importación congelada", correcta: false },
                            { texto: "Es vaca nacional con maduración controlada para equilibrar sabor y terneza", correcta: true },
                            { texto: "Que se sirve siempre muy hecho", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de patata se utiliza para las chips artesanas?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Patata agria, ideal para frituras por su bajo contenido en azúcar", correcta: true },
                            { texto: "Patata cocida", correcta: false },
                            { texto: "Chips de bolsa industrial", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cómo se debe describir la salsa española al cliente?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Una salsa ligera y líquida", correcta: false },
                            { texto: "Una reducción artesana de gran intensidad, brillante y con mucho cuerpo", correcta: true }
                        ]
                    }
                ]
            }
        },

        /* --- DULCES HECHOS EN CASA --- */
        {
            id: "helado-artesano-room",
            nombre: "Helado artesano de mango malagueño o de chocolate",
            precio: "7€",
            descripcion: "Helados cremosos de elaboración propia utilizando fruta de temporada de Málaga o cacao puro de origen.",
            historia: "En Cañitas Maite los postres no son un complemento, son el cierre de la experiencia. Nuestro helado de mango se elabora con fruta en su punto óptimo de madurez proveniente de la Axarquía (Málaga), aprovechando su dulzor natural y su textura sedosa. El de chocolate se trabaja con una selección de cacaos de origen que aseguran un sabor profundo y equilibrado, alejándose de los helados industriales excesivamente azucarados.",
            trazabilidad: "Mango de la Axarquía (Málaga) · Cacao de origen seleccionado · Elaboración propia en obrador.",
            alergenos: ["Lácteos", "Huevo", "Frutos de cáscara (puede contener trazas)"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué procedencia tiene el mango utilizado en nuestro helado?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Importación de Brasil", correcta: false },
                            { texto: "Cultivo local de la Axarquía (Málaga)", correcta: true },
                            { texto: "Mango de Canarias", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué caracteriza a la elaboración de nuestros helados?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Que son industriales de marca externa", correcta: false },
                            { texto: "Que son de elaboración propia en nuestro obrador artesano", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Por qué el helado de mango de Cañitas Maite tiene ese sabor tan intenso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Por el uso de saborizantes artificiales", correcta: false },
                            { texto: "Por el uso de fruta de proximidad en su punto óptimo de maduración", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Cuál es la base del helado de chocolate?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Cacao de origen con sabor profundo y equilibrado", correcta: true },
                            { texto: "Sirope de chocolate comercial", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "tarta-queso-room",
            nombre: "Tarta de queso suave y cremosa hecha en casa",
            precio: "14€",
            descripcion: "Tarta artesana horneada diariamente, caracterizada por un interior extremadamente cremoso y un sabor equilibrado a queso premium.",
            historia: "La tarta de queso es el emblema dulce de Cañitas Maite. Javier Sanz y Juan Sahuquillo han perfeccionado esta receta buscando la temperatura de horneado exacta para que el exterior quede sutilmente tostado y el interior mantenga una textura casi líquida (suave y cremosa). Se utiliza una mezcla de quesos que aportan personalidad sin saturar el paladar, siendo el postre más solicitado por los clientes que buscan la esencia del restaurante en su habitación.",
            trazabilidad: "Mezcla de quesos premium seleccionados · Huevos de granja · Elaboración propia en el día.",
            alergenos: ["Gluten", "Huevo", "Lácteos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué adjetivos definen oficialmente nuestra tarta de queso en carta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fuerte y compacta", correcta: false },
                            { texto: "Suave y cremosa", correcta: true },
                            { texto: "Fría y gelatinosa", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el secreto de la textura de esta tarta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "El uso de espesantes artificiales", correcta: false },
                            { texto: "Un control preciso de la temperatura de horneado para mantener el interior fluido", correcta: true },
                            { texto: "Servirla directamente del congelador", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué es importante destacar que está 'hecha en casa'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque garantiza que no es un producto industrial y que se hornea diariamente en el obrador", correcta: true },
                            { texto: "Porque así tarda más en servirse", correcta: false }
                        ]
                    }
                ]
            }
        },
        /* --- KIDS / INFANTIL --- */
        {
            id: "croqueta-kids-room",
            nombre: "La mejor croqueta del mundo 2021 (2 unidades)",
            precio: "12€",
            descripcion: "Nuestra croqueta premiada de jamón ibérico, ahora en ración adaptada para los más pequeños.",
            historia: "Es el plato estrella de Cañitas Maite, ganadora del premio a la mejor croqueta en Madrid Fusión 2021. Se caracteriza por su bechamel líquida y un sabor intenso a jamón ibérico de bellota.",
            trazabilidad: "Jamón Ibérico de Bellota 100% · Leche fresca de vaca · Mantequilla artesana.",
            alergenos: ["Gluten", "Lácteos", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el ingrediente principal que da sabor a nuestra croqueta premiada?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Jamón cocido extra", correcta: false },
                            { texto: "Jamón Ibérico de Bellota 100%", correcta: true },
                            { texto: "Mezcla de embutidos ibéricos", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Qué alérgenos principales contiene la croqueta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Solo Gluten", correcta: false },
                            { texto: "Gluten, Lácteos y Huevo", correcta: true },
                            { texto: "Frutos de cáscara y Gluten", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Por qué decimos que nuestra bechamel es especial?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque es muy espesa para que no se rompa", correcta: false },
                            { texto: "Porque es una bechamel líquida, técnica que nos dio el premio en 2021", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de leche se utiliza en su elaboración?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Leche en polvo concentrada", correcta: false },
                            { texto: "Leche fresca de vaca", correcta: true },
                            { texto: "Bebida vegetal de soja", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "sandwich-club-kids",
            nombre: "Sandwich Club de pollo versión Cañitas",
            precio: "19.5€",
            descripcion: "Sándwich clásico de pollo acompañado de patatas o ensalada.",
            historia: "Una versión adaptada del club clásico, utilizando pechuga de pollo de alta calidad y pensado para un servicio rápido y reconfortante.",
            trazabilidad: "Pechuga de pollo seleccionada · Pan de molde artesano · *Acompañado de patatas o ensalada.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Mostaza"],
            quiz: {
                preguntas: [
                    {
                        texto: "Al tomar la comanda del Sandwich Club Kids, ¿qué pregunta es obligatoria?",
                        tipo: "radio",
                        opciones: [
                            { texto: "¿Lo quiere con o sin queso?", correcta: false },
                            { texto: "¿Prefiere guarnición de patatas fritas o ensalada?", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Contiene este sándwich algún alérgeno de la familia de las salsas?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, ninguno", correcta: false },
                            { texto: "Sí, puede contener Mostaza y Huevo por la mayonesa", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué tipo de pan se utiliza en la versión Kids?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Pan de cristal muy duro", correcta: false },
                            { texto: "Pan de molde artesano, más tierno para los niños", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Cómo se cocina el pollo del Sandwich Club?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Es pechuga seleccionada cocinada a la plancha/asada", correcta: true },
                            { texto: "Es pollo frito rebozado", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "pasta-tomate-kids",
            nombre: "Pasta fresca con tomate",
            precio: "16€",
            descripcion: "Pasta fresca elaborada artesanalmente con salsa de tomate natural.",
            historia: "Pasta de trigo duro con nuestra salsa de tomate casera, un plato sencillo pero con producto de primera calidad.",
            trazabilidad: "Pasta fresca artesana · Tomate natural de huerta.",
            alergenos: ["Gluten", "Lácteos (opcional si lleva queso)"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Por qué destacamos que la pasta es 'fresca'?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Porque se sirve fría", correcta: false },
                            { texto: "Porque es artesana de trigo duro, con mejor textura que la seca industrial", correcta: true }
                        ]
                    },
                    {
                        texto: "Si un niño tiene intolerancia severa al gluten, ¿puede comer esta pasta?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Sí, porque es artesana", correcta: false },
                            { texto: "No, la pasta fresca de trigo duro contiene Gluten", correcta: true }
                        ]
                    },
                    {
                        texto: "¿Qué lleva nuestra salsa de tomate casera?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Tomate natural de huerta y AOVE", correcta: true },
                            { texto: "Ketchup y especias", correcta: false }
                        ]
                    },
                    {
                        texto: "Sobre el queso en la pasta: ¿qué debemos saber?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Siempre va mezclado dentro de la salsa", correcta: false },
                            { texto: "Se puede añadir queso premium rallado, lo que suma el alérgeno Lácteos", correcta: true }
                        ]
                    }
                ]
            }
        }
    ]
};
export const examenes = {
    desayunos: [
        // PRECIOS Y OPERATIVA
        {
            texto: "¿Cuál es el suplemento si un cliente ME elige DOS platos de la carta de selección?",
            opciones: ["8€", "12€", "14€", "20€"],
            correcta: 2
        },
        {
            texto: "¿Cuál es el suplemento si el cliente solo desea UNA opción de la carta selección?",
            opciones: ["5€", "8€", "10€", "Es gratis"],
            correcta: 1
        },
        // HUEVOS AL MOMENTO
        {
            texto: "¿Qué técnica define el borde crujiente de la clara en nuestros huevos fritos?",
            opciones: ["Escalfado", "Puntilla", "Baveuse", "Sous-vide"],
            correcta: 1
        },
        {
            texto: "¿Qué variedad de patata usamos en los Huevos Rotos por su resistencia a la fritura?",
            opciones: ["Patata Nueva", "Patata Agria", "Patata Kennebec", "Boniato"],
            correcta: 1
        },
        {
            texto: "¿De qué marca es la papada ibérica que acompaña a los huevos fritos?",
            opciones: ["Cinco Jotas", "Joselito", "Sánchez Romero", "Arturo Sánchez"],
            correcta: 1
        },
        {
            texto: "¿Qué mezcla de leches lleva el Queso Payoyo de nuestra Omelette?",
            opciones: ["Vaca y Cabra", "Cabra Payoya y Oveja Merina", "Solo Oveja", "Cabra y Búfala"],
            correcta: 1
        },
        {
            texto: "¿En qué zona de España se produce el Queso Payoyo?",
            opciones: ["Sierra de Madrid", "Sierra de Grazalema (Cádiz)", "Pirineos", "Sierra Nevada"],
            correcta: 1
        },
        {
            texto: "¿Cómo llamamos en Cañitas a nuestros huevos Benedictinos?",
            opciones: ["Benedictinos Clásicos", "Benedictinos Malagueños", "Benedictinos Royal", "Benedictinos de la Casa"],
            correcta: 1
        },
        {
            texto: "¿Qué punto de cocción buscamos en el interior de la Omelette?",
            opciones: ["Muy cuajada", "Baveuse (cremosa/líquida)", "Seca", "Tipo tortilla de patata"],
            correcta: 1
        },
        // BOCATERÍA FINA
        {
            texto: "¿Qué base tradicional se usa para la opción vegetal estilo Capresse?",
            opciones: ["Pan de molde", "Torta de Aceite artesana", "Focaccia", "Mollete"],
            correcta: 1
        },
        {
            texto: "¿De dónde procede el aguacate de nuestro Roll de Salmón?",
            opciones: ["México", "La Axarquía (Málaga)", "Israel", "Canarias"],
            correcta: 1
        },
        {
            texto: "¿Qué queso francés de 12 meses de curación lleva el Bikini Trufado?",
            opciones: ["Brie", "Comté", "Camembert", "Roquefort"],
            correcta: 1
        },
        {
            texto: "¿De qué parte del cerdo procede la Coppa Joselito del Mollete Máximo?",
            opciones: ["Pata trasera", "Parte superior del lomo (cabecero)", "Costillar", "Carrillera"],
            correcta: 1
        },
        {
            texto: "¿Qué grasa se usa para tostar el Bikini Trufado en sartén?",
            opciones: ["Aceite de coco", "Mantequilla", "Manteca de color", "Aceite de palma"],
            correcta: 1
        },
        // DULCES AL MOMENTO
        {
            texto: "¿Con qué acompañamos nuestros Churritos fritos?",
            opciones: ["Mermelada", "Chocolate caliente de alto % de cacao", "Dulce de leche", "Nata"],
            correcta: 1
        },
        {
            texto: "¿Qué queso le da personalidad a nuestra Tarta de Queso cremosa?",
            opciones: ["Queso Crema industrial", "Queso Payoyo", "Queso de Burgos", "Queso Idiazábal"],
            correcta: 1
        },
        {
            texto: "¿Cuánto tiempo se infusiona el brioche de nuestra Torrija?",
            opciones: ["1 hora", "12 horas", "24 horas", "No se infusiona"],
            correcta: 2
        },
        {
            texto: "¿Qué técnica se usa para terminar la Torrija en lugar de freírla?",
            opciones: ["Hervido", "Caramelizado con mantequilla y azúcar", "Horneado seco", "Microondas"],
            correcta: 1
        },
        {
            texto: "¿Qué fruto seco acompaña a la Torta de Inés Rosales dulce?",
            opciones: ["Almendra", "Pistacho (crema y tostado)", "Nuez", "Cacahuete"],
            correcta: 1
        },
        // SEGURIDAD ALIMENTARIA
        {
            texto: "¿Cuál de estos platos es apto para VEGETARIANOS (VEG)?",
            opciones: ["Mollete de Coppa", "Torta de Aceite estilo Capresse", "Roll de Salmón", "Benedictinos"],
            correcta: 1
        }
    ],
    ene: [
        {
            texto: "¿En qué congreso ganó la croqueta de Cañitas Maite el premio a la mejor del mundo?",
            opciones: ["Madrid Fusión 2021", "San Sebastián Gastronomika", "Fitur"],
            correcta: 0
        },
        {
            texto: "¿Qué técnica de cocina define al 'Homenaje al cochino'?",
            opciones: [
                "Confitado en aceite",
                "Deshidratación y fritura (suflado)",
                "Asado al horno de leña"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué recomendación de servicio es vital para el Buñuelo de Queso de Cabra?",
            opciones: [
                "Comer de un solo bocado",
                "Cortar por la mitad",
                "Acompañar con pan"
            ],
            correcta: 0
        },
        {
            texto: "¿Cuál es el proveedor principal de los ibéricos (Jamón y Piel)?",
            opciones: ["5 Jotas", "Sánchez Romero Carvajal", "Joselito"],
            correcta: 2
        },
        {
            texto: "¿De qué tipo de leche es la bechamel de nuestra croqueta?",
            opciones: ["Vaca", "Oveja", "Cabra"],
            correcta: 1
        },
        {
            texto: "¿Cuál es el gesto de servicio en la Ensaladilla de Gamba Blanca?",
            opciones: [
                "Rallar trufa",
                "Mezclar con nitrógeno",
                "Verter aceite al ajillo caliente"
            ],
            correcta: 2
        },
        {
            texto: "¿Qué ingrediente especial lleva nuestra Leche de Tigre en el Ceviche?",
            opciones: ["Soja", "Leche de coco", "Vinagre de Jerez"],
            correcta: 0
        },
        {
            texto: "En el Donut de Rabo de Toro, ¿por qué hay alérgeno de SULFITOS?",
            opciones: [
                "Por la masa del donut",
                "Por la reducción de vino tinto del guiso",
                "Por el queso"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de patata se usa para las Bravas Milhojas?",
            opciones: [
                "Patata Agria de Albacete",
                "Patata Nueva de Málaga",
                "Patata Gallega"
            ],
            correcta: 0
        },
        {
            texto: "¿Cómo se prepara el atún rojo Fuentes para el Bollito Preñado?",
            opciones: [
                "A la plancha",
                "Picado a cuchillo (Tartar)",
                "Guisado"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué sustituye al pan de molde en nuestro Bikini de Pastrami?",
            opciones: [
                "Pan de cristal",
                "Hojaldre de mantequilla",
                "Pan brioche"
            ],
            correcta: 1
        },
        {
            texto: "En el Saam de Alita, ¿de dónde viene el alérgeno MOLUSCOS?",
            opciones: [
                "Del langostino",
                "De la lechuga",
                "De la salsa de ostras del glaseado"
            ],
            correcta: 2
        },
        {
            texto: "¿Por qué el flan de nata no tiene poros o 'ojos'?",
            opciones: [
                "Porque lleva gelatina",
                "Por la cocción controlada a baja temperatura",
                "Porque se bate mucho"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué pescado protagoniza el plato principal del Menú Hits?",
            opciones: ["Lubina de estero", "Bacalao Giraldo", "Rodaballo"],
            correcta: 0
        },
        {
            texto: "¿Qué ingrediente se ralla sobre el Donut de Rabo de Toro?",
            opciones: ["Trufa", "Parmesano 24 meses", "Lima"],
            correcta: 1
        },
        {
            texto: "¿Qué técnica se le da al Cogollo César antes de servirlo?",
            opciones: [
                "Se hierve",
                "Se marca a la brasa",
                "Se sirve crudo"
            ],
            correcta: 1
        },
        {
            texto: "¿Cuál es el alérgeno principal del Mejillón de Roca?",
            opciones: ["Pescado", "Moluscos", "Crustáceos"],
            correcta: 1
        },
        {
            texto: "¿Cómo se debe comer el Saam de Alita?",
            opciones: [
                "Con cubiertos",
                "Con las manos (envolviendo la lechuga)",
                "Troceado en un bol"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de vainilla se usa en el postre 'Primer Beso'?",
            opciones: [
                "Vainilla Bourbon",
                "Vainilla de Tahití",
                "Aroma artificial"
            ],
            correcta: 0
        },
        {
            texto: "¿Qué madera alimenta nuestra brasa?",
            opciones: ["Pino", "Encina", "Eucalipto"],
            correcta: 1
        }
    ],
    menus: [
        {
            texto: "¿En qué congreso ganó la croqueta de Cañitas Maite el premio a la mejor del mundo?",
            opciones: ["Madrid Fusión", "San Sebastián Gastronomika", "Fitur"],
            correcta: 0
        },
        {
            texto: "¿Qué representa la Torta de Aceite en la historia de Javier y Juan?",
            opciones: [
                "Un postre tradicional de Málaga",
                "Sus raíces y la unión de Albacete y Valencia",
                "Un plato creado para el Room Service"
            ],
            correcta: 1
        },
        {
            texto: "El 'Homenaje al cochino' utiliza una técnica de piel suflada. ¿En qué consiste?",
            opciones: [
                "En un hervido prolongado",
                "En deshidratación y una fritura a alta temperatura",
                "En un confitado en grasa de pato"
            ],
            correcta: 1
        },
        {
            texto: "¿Quién es el proveedor de los productos ibéricos (jamón y sobrasada) del menú?",
            opciones: ["5 Jotas", "Joselito", "Sánchez Romero Carvajal"],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de leche hace única a la bechamel de la croqueta ganadora?",
            opciones: [
                "Leche de vaca frisona",
                "Leche de cabra malagueña",
                "Leche de oveja de una ganadería de Albacete"
            ],
            correcta: 2
        },
        {
            texto: "¿Cuál es el gesto de servicio clave en la Ensaladilla de Gamba Blanca?",
            opciones: [
                "Se termina en mesa vertiendo aceite al ajillo caliente",
                "Se ralla trufa negra en directo",
                "Se mezcla con nitrógeno líquido"
            ],
            correcta: 0
        },
        {
            texto: "¿De dónde proviene la Gamba Blanca que se sirve en este menú?",
            opciones: [
                "De la Bahía de Málaga",
                "De las lonjas de Huelva",
                "De Santa Pola"
            ],
            correcta: 0
        },
        {
            texto: "En el plato de 'Setas silvestres con patata cremosa', ¿qué elemento emulsiona el conjunto?",
            opciones: [
                "Una salsa bechamel",
                "La yema de huevo de corral",
                "Un fondo de verduras"
            ],
            correcta: 1
        },
        {
            texto: "El 'Mejillón de roca con sobrasada de bellota' es un ejemplo de:",
            opciones: [
                "Cocina mediterránea clásica",
                "Concepto Mar y Montaña",
                "Entrante vegano"
            ],
            correcta: 1
        },
        {
            texto: "¿Con qué se acompaña el Langostino de costa para potenciar el sabor a asado?",
            opciones: [
                "Con una reducción de jugo de pollo asado",
                "Con una salsa romesco",
                "Con puré de castañas"
            ],
            correcta: 0
        },
        {
            texto: "SEGURIDAD ALIMENTARIA: ¿Cuál es el alérgeno principal del Mejillón de Roca?",
            opciones: ["Pescado", "Crustáceos", "Moluscos"],
            correcta: 2
        },
        {
            texto: "SEGURIDAD ALIMENTARIA: ¿Cuál es el alérgeno principal del Langostino?",
            opciones: ["Moluscos", "Crustáceos", "Pescado"],
            correcta: 1
        },
        {
            texto: "¿Qué técnica de asado define a la Txuleta Vasca en Cañitas Maite?",
            opciones: [
                "Horno Josper cerrado",
                "Parrilla abierta con carbón de encina",
                "Plancha de hierro fundido"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué pescado protagoniza el plato principal del Menú Hits?",
            opciones: [
                "Bacalao Giraldo",
                "Lubina de estero",
                "Rodaballo salvaje"
            ],
            correcta: 1
        },
        {
            texto: "¿Cómo se elabora el pil-pil que acompaña a la lubina?",
            opciones: [
                "Con nata y ajo",
                "Emulsionando el colágeno del pescado con aceite",
                "Con una base de tomate"
            ],
            correcta: 1
        },
        {
            texto: "¿Por qué el Flan de Nata de Cañitas Maite no tiene 'ojos' o poros?",
            opciones: [
                "Porque se bate mucho",
                "Por su cocción controlada a baja temperatura",
                "Porque lleva gelatina"
            ],
            correcta: 1
        },
        {
            texto: "¿Cuál es el ingrediente principal del flan (sustituyendo a la leche)?",
            opciones: [
                "Leche condensada",
                "Nata fresca con alto contenido graso",
                "Queso crema"
            ],
            correcta: 1
        },
        {
            texto: "Si un cliente es alérgico a los LÁCTEOS, ¿qué plato NO puede tomar?",
            opciones: [
                "La croqueta y el flan",
                "El mejillón de roca",
                "La lubina al pil-pil"
            ],
            correcta: 0
        },
        {
            texto: "¿Qué se debe advertir al cliente sobre la croqueta al servirla?",
            opciones: [
                "Que es picante",
                "Que es extremadamente fluida y debe tener cuidado al morder",
                "Que lleva trazas de frutos secos"
            ],
            correcta: 1
        },
        {
            texto: "¿Qué madera se utiliza preferentemente para la brasa en Cañitas Maite?",
            opciones: ["Pino", "Encina", "Eucalipto"],
            correcta: 1
        }
    ],
    roomService: [
        /* --- BLOQUE: PRODUCTO Y TRAZABILIDAD --- */
        {
            texto: "¿De qué región francesa proviene el Queso Comté de 24 meses de nuestro Bikini?",
            opciones: ["Normandía", "El macizo del Jura", "Provenza"],
            correcta: 1
        },
        {
            texto: "¿Qué proveedor suministra la carne de la Burger madurada 120 días?",
            opciones: ["Cárnicas Lyo (León)", "Discarlux (Madrid)", "Ganaderos locales"],
            correcta: 0
        },
        {
            texto: "El Queso Payoyo de la Ensalada César es una mezcla de leches de:",
            opciones: ["Vaca y Oveja", "Cabra Payoya y Oveja Merina", "Solo Cabra"],
            correcta: 1
        },
        {
            texto: "¿De dónde procede el aguacate del Roll Brioche?",
            opciones: ["Importación de Perú", "La Axarquía malagueña", "Canarias"],
            correcta: 1
        },
        {
            texto: "¿Por qué utilizamos piñones nacionales en nuestra pasta?",
            opciones: ["Por marketing", "Porque son más grasos y aromáticos que los de importación", "Porque son más pequeños"],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de leche se utiliza para la bechamel de nuestra croqueta?",
            opciones: ["Vaca", "Oveja", "Cabra"],
            correcta: 1
        },
        /* --- BLOQUE: TÉCNICA Y CALIDAD --- */
        {
            texto: "¿Cuál es el factor crítico para que el Sandwich Club llegue perfecto?",
            opciones: ["Que el pan esté frío", "Que el huevo campero se fría al momento para que la yema llegue fluida", "Que lleve mucha salsa"],
            correcta: 1
        },
        {
            texto: "¿Cómo se consigue el toque ahumado de la salsa de la Corvina?",
            opciones: ["Con humo líquido", "Asando los tomates directamente a la brasa", "Con pimentón"],
            correcta: 1
        },
        {
            texto: "¿Cuánto tiempo de reducción lleva la salsa española del Solomillo?",
            opciones: ["12 horas", "24 horas", "Más de 48 horas"],
            correcta: 2
        },
        {
            texto: "¿Qué técnica asegura que la lechuga de la César esté crujiente tras el transporte?",
            opciones: ["Uso de 'lechuga viva' con su raíz hidropónica hasta el último momento", "Se mete en hielo", "Se sirve sin aliñar"],
            correcta: 0
        },
        {
            texto: "¿Cuál es el secreto de la textura de nuestra Tarta de Queso?",
            opciones: ["Interior fluido y exterior tostado por control exacto de horneado", "Uso de gelatina", "Mucha harina"],
            correcta: 0
        },
        {
            texto: "¿Qué tipo de pan se utiliza en el Bikini Mixto Trufado?",
            opciones: ["Pan de molde industrial", "Pan brioche artesano", "Pan de cristal"],
            correcta: 1
        },
        /* --- BLOQUE: ALÉRGENOS (CRÍTICO) --- */
        {
            texto: "Si un cliente es alérgico a los FRUTOS DE CÁSCARA, ¿qué plato NO puede tomar?",
            opciones: ["La Burger", "La Pasta al pesto (por el piñón)", "El Bikini"],
            correcta: 1
        },
        {
            texto: "En el Donut de Rabo de Toro o el Bikini, ¿por qué hay SULFITOS?",
            opciones: ["Por el queso", "Por la reducción de vino tinto o el jamón trufado", "Por el pan"],
            correcta: 1
        },
        {
            texto: "¿Es apta la Tarta de Queso para un cliente celíaco?",
            opciones: ["Sí", "No, contiene Gluten", "Depende del día"],
            correcta: 1
        },
        {
            texto: "¿Qué alérgeno debemos vigilar en la mayonesa del Sandwich Club?",
            opciones: ["Solo Huevo", "Huevo y Mostaza", "Pescado"],
            correcta: 1
        },
        {
            texto: "Si un cliente tiene intolerancia a los LÁCTEOS, ¿qué plato de niños lleva queso opcional?",
            opciones: ["Croquetas", "Pasta fresca con tomate", "Sandwich Club"],
            correcta: 1
        },
        /* --- BLOQUE: OPERATIVA Y SERVICIO --- */
        {
            texto: "¿En qué congreso ganó la croqueta de Cañitas Maite el premio en 2021?",
            opciones: ["Madrid Fusión", "San Sebastián Gastronomika", "Fitur"],
            correcta: 0
        },
        {
            texto: "¿Qué guarnición puede elegir un niño para su Sandwich Club?",
            opciones: ["Solo patatas", "Patatas fritas o ensalada", "Arroz"],
            correcta: 1
        },
        {
            texto: "¿Cuántas unidades de croquetas lleva la ración de Kids?",
            opciones: ["1 unidad", "2 unidades", "4 unidades"],
            correcta: 1
        },
        {
            texto: "¿Qué madera alimenta nuestra brasa en Cañitas Maite?",
            opciones: ["Pino", "Encina", "Eucalipto"],
            correcta: 1
        },
        {
            texto: "Si un cliente pide el Solomillo 'muy hecho', ¿qué advertimos?",
            opciones: ["Que perderá la jugosidad y matices de la maduración", "Que tardará una hora", "Que no tenemos fuego"],
            correcta: 0
        },
        {
            texto: "¿Cuál es el gesto de servicio más importante antes de salir hacia la habitación?",
            opciones: ["Correr por el pasillo", "Revisar que cubiertos y pan acompañen correctamente al plato", "Llevar la cuenta abierta"],
            correcta: 1
        },
        {
            texto: "¿Qué representa la Torta de Aceite en nuestra historia?",
            opciones: ["Un postre cualquiera", "Nuestras raíces y la unión de Albacete y Valencia", "Solo un adorno"],
            correcta: 1
        },
        {
            texto: "¿Cómo se define la bechamel de nuestra croqueta premiada?",
            opciones: ["Densa", "Líquida y fundente", "Cojonuda pero compacta"],
            correcta: 1
        }
    ],
    restaurante: [
        /* --- BLOQUE: PRODUCTO Y TRAZABILIDAD --- */
        {
            texto: "¿De qué zona de Málaga procede el mango de nuestro sorbete?",
            opciones: ["Valle del Guadalhorce", "La Axarquía", "Serranía de Ronda"],
            correcta: 1
        },
        {
            texto: "¿Qué característica define a la Lubina del Atlántico en nuestra parrilla?",
            opciones: ["Es de piscifactoría", "Es una pieza salvaje de aproximadamente 0,8kg", "Es un pescado de roca pequeño"],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de cordero utilizamos para nuestra falda crujiente?",
            opciones: ["Cordero lechal nacional de pastoreo", "Cordero recental", "Cordero importado"],
            correcta: 0
        },
        {
            texto: "El Pargo del sur que servimos en adobo es de calibre:",
            opciones: ["Pequeño (200g)", "Gordo (aprox. 0,5kg)", "Gigante (más de 2kg)"],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de setas acompañan a la Molleja de ternera?",
            opciones: ["Champiñones", "Setas silvestres de temporada", "Setas de cultivo"],
            correcta: 1
        },
        {
            texto: "¿Qué tipo de patata usamos para el parmentier ahumado?",
            opciones: ["Patata nueva", "Patata agria seleccionada", "Patata cocida de bote"],
            correcta: 1
        },
        {
            texto: "La Corvina gorda se prepara con un adobo de estilo:",
            opciones: ["Clásico gaditano", "Adobo malagueño con un toque de comino y pimentón", "Oriental"],
            correcta: 1
        },

        /* --- BLOQUE: TÉCNICA Y CALIDAD --- */
        {
            texto: "¿Qué técnica aplicamos a las setas de la Molleja?",
            opciones: ["Fritura", "Fricandó (guiso tradicional)", "Escabeche"],
            correcta: 1
        },
        {
            texto: "¿Cuál es el componente principal del pil-pil de la Lubina?",
            opciones: ["Nata y ajos", "El propio colágeno del pescado y aceite de oliva", "Mantequilla"],
            correcta: 1
        },
        {
            texto: "¿Cómo se termina el Tomahawk de Cerdo Ibérico?",
            opciones: ["Al horno", "A la parrilla con salsa gravy de mantequilla tostada", "Frito"],
            correcta: 1
        },
        {
            texto: "¿Qué proceso sigue el Soufflé de Gianduja?",
            opciones: ["Se sirve frío", "Se hornea al momento para mantener el centro líquido", "Es una mousse"],
            correcta: 1
        },
        {
            texto: "¿Qué técnica asegura la textura de la Falda de Cordero?",
            opciones: ["Cocción rápida a fuego fuerte", "Baja temperatura prolongada y acabado crujiente", "Solo plancha"],
            correcta: 1
        },
        {
            texto: "¿Qué ingrediente de lujo completa la Meunière de nuestro Lenguado?",
            opciones: ["Trufa negra", "Dados de Jamón Ibérico de Bellota", "Caviar"],
            correcta: 1
        },
        {
            texto: "¿Cómo se presenta el Pargo del sur para facilitar el consumo?",
            opciones: ["En filetes", "Frito 'de pellizco' (en trozos fáciles de coger)", "Entero a la sal"],
            correcta: 1
        },

        /* --- BLOQUE: ALÉRGENOS (CRÍTICO) --- */
        {
            texto: "Un cliente alérgico a los FRUTOS DE CÁSCARA no puede tomar:",
            opciones: ["El Flan de oveja", "El Soufflé de Gianduja (lleva avellana)", "La Lubina"],
            correcta: 1
        },
        {
            texto: "¿Qué alérgenos contiene el Flan de nata de oveja?",
            opciones: ["Solo lácteos", "Lácteos y Huevo", "Gluten"],
            correcta: 1
        },
        {
            texto: "¿Contiene Gluten el Brioche de mantequilla?",
            opciones: ["No", "Sí, en la masa del pan", "Solo si lleva salsa"],
            correcta: 1
        },
        {
            texto: "En el Cacao de Texturas, ¿qué debemos vigilar por el Shichimi?",
            opciones: ["El sésamo", "El gluten", "El marisco"],
            correcta: 0
        },

        /* --- BLOQUE: OPERATIVA Y SERVICIO --- */
        {
            texto: "¿Qué significa el término 'Sin Trabajo' al vender la Lubina?",
            opciones: ["Que el cliente debe limpiarla", "Que se sirve desespinada y limpia desde cocina", "Que no lleva guarnición"],
            correcta: 1
        },
        {
            texto: "¿Para cuántas personas están diseñados el Brioche y el Soufflé?",
            opciones: ["Individual", "Para compartir entre 2 personas", "Para toda la mesa"],
            correcta: 1
        },
        {
            texto: "¿Qué aporta la lima rallada al Flan de Oveja?",
            opciones: ["Color", "Equilibrio cítrico para cortar la grasa de la nata de oveja", "Amargor"],
            correcta: 1
        },
        {
            texto: "¿Por qué es importante el aceite de albahaca en el sorbete de mango?",
            opciones: ["Para que brille", "Para aportar un contraste herbáceo y frescor", "Para que no se derrita"],
            correcta: 1
        },
        {
            texto: "¿Qué aporta el Shichimi al postre de Cacao?",
            opciones: ["Dulzor", "Un final picante y cítrico que alarga el sabor", "Textura crujiente"],
            correcta: 1
        },
        {
            texto: "¿Cuál es el factor crítico en el servicio del Pollito Coquelette?",
            opciones: ["Que llegue frío", "Que el jugo de asado se vierta caliente para mantener la jugosidad", "Que se sirva sin cubiertos"],
            correcta: 1
        },
        {
            texto: "En el postre de Texturas de Cacao, el vino utilizado es:",
            opciones: ["Fino", "Pedro Ximénez (de Jerez)", "Moscato de Canadá"],
            correcta: 1
        }
    ],
    pool: [
        {
            texto: "¿Está el equipo de Cañitas Maite listo para el éxito?",
            opciones: ["No", "Estamos listos", "¡SIEMPRE LISTOS!"],
            correcta: 2
        }
    ]
};
