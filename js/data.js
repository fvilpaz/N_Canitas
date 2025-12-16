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
    room: []
};
