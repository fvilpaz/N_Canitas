export const menuData = {
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
    restaurant: [],
    pool: [],
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
    ]
};
