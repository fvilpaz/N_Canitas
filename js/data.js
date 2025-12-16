const menuData = {
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
                    }
                ]
            }
        },
        {
            id: "homenaje-cochino-ene",
            nombre: "Homenaje crujiente al cochino ibérico",
            precio: "8.5€",
            descripcion: "Corte de piel de cerdo ibérico técnica 'suflada'.",
            historia: "Este plato representa la evolución de la matanza tradicional de Albacete mediante una técnica de vanguardia extrema. Se utiliza exclusivamente la piel de cerdos ibéricos seleccionados de la Dehesa de Extremadura (Joselito). La piel se somete a un proceso de deshidratación y posterior fritura a alta temperatura para lograr el 'suflado'.",
            trazabilidad: "Cerdo Ibérico de bellota Joselito (Extremadura).",
            alergenos: ["Gluten", "Sulfitos", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué proveedor de prestigio suministra la materia prima?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Joselito", correcta: true },
                            { texto: "Otros", correcta: false }
                        ]
                    },
                    {
                        texto: "¿Cuál es el proceso técnico para lograr esa textura aérea?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Deshidratación y fritura a alta temperatura (suflado)", correcta: true },
                            { texto: "Horneado suave", correcta: false }
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
            historia: "Este bocado es un prodigio de la ingeniería culinaria de Javier Sanz y Juan Sahuquillo. La base es un queso de cabra artesano de la Sierra de Alcaraz infusionado con Trufa Negra (Tuber Melanosporum).",
            trazabilidad: "Queso de cabra artesano (Albacete) · Trufa negra de invierno.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Sésamo", "Frutos de cáscara"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué recomendación es vital darle al cliente?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Comer de un solo bocado", correcta: true },
                            { texto: "Cortar por la mitad", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bravas-milhojas-ene",
            nombre: "Patatas Bravas versión Milhojas",
            precio: "9.5€",
            descripcion: "Lingote de patata agria laminada, confitada y frita.",
            historia: "Inspiradas en la técnica francesa del 'Pavé', formadas por decenas de láminas finísimas de patata agria de Albacete.",
            trazabilidad: "Patata agria de Albacete.",
            alergenos: ["Gluten", "Huevo", "Sulfitos", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿De dónde procede la patata agria?",
                        tipo: "radio",
                        opciones: [
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
            descripcion: "Pescado de lonja marinado en leche de tigre cítrica.",
            historia: "Homenaje al producto de las costas malagueñas con el toque de Cañitas. Leche de tigre con soja.",
            trazabilidad: "Pescado de roca (Málaga).",
            alergenos: ["Gluten", "Huevo", "Pescado", "Frutos secos", "Soja"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué ingrediente diferencia nuestra leche de tigre?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Soja", correcta: true },
                            { texto: "Leche de coco", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "cogollo-cesar-ene",
            nombre: "Cogollo César de pollo escabechado",
            precio: "12€",
            descripcion: "Corazón de cogollo a la brasa con pollo en escabeche.",
            historia: "Reinterpretación de la ensalada César uniendo el Mediterráneo con la matanza manchega.",
            trazabilidad: "Anchoas del Cantábrico · Pollo de corral.",
            alergenos: ["Soja", "Pescado", "Frutos secos", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué técnica se aplica al cogollo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Brasa (ahumado)", correcta: true },
                            { texto: "Crudo", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "oreja-cochinillo-ene",
            nombre: "Oreja de cochinillo confitada y frita",
            precio: "12€",
            descripcion: "Oreja de cochinillo seleccionada, cocinada a baja temperatura.",
            historia: "Tributo a la casquería fina. Confitadas en su propia grasa y fritas a alta temperatura.",
            trazabilidad: "Cochinillo segoviano.",
            alergenos: ["Gluten", "Huevo"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Cuál es el proceso de cocción previo?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Confitado lento", correcta: true },
                            { texto: "Hervido", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bollito-atun-fuentes-ene",
            nombre: "Bollito preñado de atún rojo Fuentes",
            precio: "13€",
            descripcion: "Brioche artesano relleno de tartar de atún rojo Fuentes.",
            historia: "Atún Rojo Fuentes de almadraba picado a cuchillo dentro de un brioche tierno.",
            trazabilidad: "Atún Ricardo Fuentes (Cartagena).",
            alergenos: ["Gluten", "Soja", "Sulfitos", "Pescado"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué proveedor suministra el atún?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Fuentes", correcta: true },
                            { texto: "Balfegó", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bocata-calamares-ene",
            nombre: "Nuestra versión del bocata de calamares",
            precio: "14€",
            descripcion: "Interpretación de vanguardia con calamar de potera.",
            historia: "Calamar de potera cortado en finísimos tallarines sobre una lámina crujiente de pan.",
            trazabilidad: "Calamar de potera nacional.",
            alergenos: ["Gluten", "Sulfitos", "Lácteos", "Pescado", "Huevo", "Moluscos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué tipo de calamar se utiliza?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Calamar de potera", correcta: true },
                            { texto: "Anillas comunes", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "saam-alita-langostino-ene",
            nombre: "Saam de alita de pollo glaseada y langostino",
            precio: "16€",
            descripcion: "Bocado coreano en hoja de lechuga.",
            historia: "Alita deshuesada, confitada y glaseada para comer con las manos envuelta en lechuga.",
            trazabilidad: "Langostino de costa.",
            alergenos: ["Gluten", "Huevo", "Moluscos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿De dónde proviene el alérgeno Moluscos?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Salsa de ostras del glaseado", correcta: true },
                            { texto: "Del pollo", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "bikini-pastrami-ene",
            nombre: "Bikini hojaldrado de pastrami ahumado",
            precio: "14€",
            descripcion: "Sándwich de hojaldre artesano con pastrami curado.",
            historia: "Hojaldre de mantequilla prensado con pastrami ahumado y mostaza antigua.",
            trazabilidad: "Pastrami artesano de ternera.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Mostaza", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué sustituye al pan de molde?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Hojaldre de mantequilla", correcta: true },
                            { texto: "Pan de cristal", correcta: false }
                        ]
                    }
                ]
            }
        },
        {
            id: "donut-rabo-toro-ene",
            nombre: "Donut de guiso de rabo de toro y parmesano",
            precio: "16€",
            descripcion: "Donut artesano relleno de rabo de toro estofado.",
            historia: "Rabo de toro estofado 12h dentro de un brioche con parmesano de 24 meses.",
            trazabilidad: "Parmesano Reggiano 24 meses.",
            alergenos: ["Gluten", "Huevo", "Lácteos", "Sulfitos"],
            quiz: {
                preguntas: [
                    {
                        texto: "Seguridad Alimentaria: ¿Contiene vino el guiso?",
                        tipo: "radio",
                        opciones: [
                            { texto: "No, solo agua", correcta: false },
                            { texto: "Sí, por eso contiene Sulfitos", correcta: true }
                        ]
                    }
                ]
            }
        },
        {
            id: "primer-beso-ene",
            nombre: "Tu primer beso de vainilla y fresa",
            precio: "6.5€",
            descripcion: "Vainilla Bourbon y frescura de fresas naturales.",
            historia: "Oda a la sencillez. Vainilla de Madagascar con coulis artesano de fresas.",
            trazabilidad: "Vainilla Bourbon de Madagascar.",
            alergenos: ["Lácteos", "Frutos de cáscara"],
            quiz: {
                preguntas: [
                    {
                        texto: "¿Qué vainilla se utiliza?",
                        tipo: "radio",
                        opciones: [
                            { texto: "Vainilla Bourbon", correcta: true },
                            { texto: "Vainilla sintética", correcta: false }
                        ]
                    }
                ]
            }
        }
    ],
    restaurant: [],
    pool: [],
    room: []
};
