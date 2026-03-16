const schemeData = [
  {
    title: '1. Civilizaciones hidráulicas',
    points: [
      'Las primeras grandes civilizaciones urbanas surgieron cerca de grandes ríos.',
      'Mesopotamia creció junto a los ríos Tigris y Éufrates.',
      'Egipto creció junto al río Nilo.'
    ]
  },
  {
    title: '2. La escritura',
    points: [
      'La escritura apareció para controlar cosechas, ganado e impuestos.',
      'En Mesopotamia la escritura fue cuneiforme.',
      'En Egipto la escritura fue jeroglífica.'
    ]
  },
  {
    title: '3. Mesopotamia',
    points: [
      'Las ciudades‑Estado controlaban un territorio y sus aldeas.',
      'Los reyes gobernaban los centros políticos, religiosos y económicos.',
      'Se desarrollaron los imperios sumerio, babilónico, asirio y persa.'
    ]
  },
  {
    title: '4. Arte mesopotámico',
    points: [
      'El arte servía a los poderosos: reyes y dioses.',
      'El templo principal era el zigurat.',
      'Se usaban arcos, bóvedas, relieves y esculturas idealizadas.'
    ]
  },
  {
    title: '5. Egipto',
    points: [
      'Alto y Bajo Egipto se unificaron con el rey Narmer.',
      'Narmer fue el primer faraón.',
      'Egipto estuvo gobernado por faraones durante más de 2500 años.'
    ]
  },
  {
    title: '6. Sociedad egipcia',
    points: [
      'La sociedad egipcia era jerarquizada.',
      'Había grupos privilegiados y no privilegiados.',
      'Las mujeres egipcias tenían muchos derechos para su época.'
    ]
  },
  {
    title: '7. Religión y momificación',
    points: [
      'La religión egipcia era politeísta.',
      'Los egipcios creían en la vida después de la muerte.',
      'Por eso practicaban la momificación y colocaban objetos en la tumba.'
    ]
  },
  {
    title: '8. Arte egipcio',
    points: [
      'La arquitectura era de piedra y de gran tamaño.',
      'Los edificios más importantes eran tumbas y templos.',
      'La escultura y la pintura eran rígidas, frontales e idealizadas.'
    ]
  }
];

const activities = [
  {
    title: 'Ríos principales',
    tag: 'Mapa mental',
    keywords: 'mesopotamia egipto rios tigris eufrates nilo',
    summary: [
      'Mesopotamia se sitúa entre dos grandes ríos.',
      'Los ríos se llaman Tigris y Éufrates.',
      'Egipto se desarrolla junto al río Nilo.'
    ],
    activity: 'Completa el mapa mental. Mesopotamia → ríos principales: ____ y ____. Egipto → río principal: ____.',
    answer: 'Tigris, Éufrates y Nilo.'
  },
  {
    title: 'Civilizaciones hidráulicas',
    tag: 'Completar',
    keywords: 'civilizaciones hidraulicas agua agricultura rios',
    summary: [
      'Las primeras civilizaciones surgieron cerca del agua.',
      'Los grandes ríos daban agua para la agricultura.',
      'La agricultura favoreció el crecimiento de las ciudades.'
    ],
    activity: 'Completa. Las civilizaciones hidráulicas surgieron cerca de grandes ____.',
    answer: 'Ríos.'
  },
  {
    title: 'Escritura en Mesopotamia y Egipto',
    tag: 'Une con flechas',
    keywords: 'escritura cuneiforme jeroglifica escribas',
    summary: [
      'Mesopotamia inventó la escritura cuneiforme.',
      'Egipto usó la escritura jeroglífica.',
      'Los escribas eran especialistas de la escritura.'
    ],
    activity: 'Une. Cuneiforme → ______. Jeroglífica → ______. Escriba → ______.',
    answer: 'Cuneiforme → Mesopotamia. Jeroglífica → Egipto. Escriba → especialista de la escritura.'
  },
  {
    title: 'Para qué se inventó la escritura',
    tag: 'Redacción guiada',
    keywords: 'cosechas ganado impuestos escritura',
    summary: [
      'Los primeros escritos controlaban cosechas.',
      'Los primeros escritos controlaban ganado.',
      'Los primeros escritos controlaban impuestos.'
    ],
    activity: 'Explica con estas palabras: escritura, cosechas, ganado, impuestos.',
    answer: 'La escritura se inventó para controlar las cosechas, el ganado y los impuestos.'
  },
  {
    title: 'Ciudad‑Estado',
    tag: 'Definición',
    keywords: 'ciudad estado territorio aldeas cultivo',
    summary: [
      'En Mesopotamia surgieron ciudades‑Estado.',
      'Cada ciudad controlaba aldeas y tierras de cultivo.',
      'Cada ciudad tenía poder sobre un territorio amplio.'
    ],
    activity: 'Completa. Una ciudad‑Estado era una ciudad que controlaba un amplio ______.',
    answer: 'Territorio.'
  },
  {
    title: 'Funciones de la ciudad',
    tag: 'Verdadero / falso',
    keywords: 'politicos religiosos economicos centros',
    summary: [
      'Las ciudades eran centros políticos.',
      'Las ciudades eran centros religiosos.',
      'Las ciudades eran centros económicos.'
    ],
    activity: 'Marca V o F. Las ciudades mesopotámicas solo tenían función militar.',
    answer: 'Falso.'
  },
  {
    title: 'Grupos de la sociedad mesopotámica',
    tag: 'Clasificar',
    keywords: 'sacerdotes funcionarios soldados mercaderes campesinos esclavos',
    summary: [
      'Los sacerdotes cuidaban el templo.',
      'Los funcionarios administraban la ciudad.',
      'Los soldados formaban el ejército.'
    ],
    activity: 'Relaciona cada grupo con su función: sacerdotes, funcionarios, soldados.',
    answer: 'Sacerdotes → templo. Funcionarios → administración. Soldados → ejército.'
  },
  {
    title: 'Imperios de Mesopotamia',
    tag: 'Ordenar',
    keywords: 'sumerio babilonico asirio persa',
    summary: [
      'En Mesopotamia se desarrollaron cuatro grandes imperios.',
      'Primero apareció el imperio sumerio.',
      'Después aparecieron los imperios babilónico, asirio y persa.'
    ],
    activity: 'Ordena del más antiguo al más reciente: persa, sumerio, asirio, babilónico.',
    answer: 'Sumerio, babilónico, asirio, persa.'
  },
  {
    title: 'Finalidad del arte mesopotámico',
    tag: 'Tipo test',
    keywords: 'arte mesopotamico poderosos reyes dioses',
    summary: [
      'El arte mesopotámico estaba al servicio de los poderosos.',
      'El arte contaba hazañas de los reyes.',
      'El arte rendía culto a los dioses.'
    ],
    activity: 'Responde. ¿A quién servía el arte mesopotámico?',
    answer: 'A los reyes y a los dioses.'
  },
  {
    title: 'El zigurat',
    tag: 'Completar',
    keywords: 'zigurat templo plataformas escalinatas adobe',
    summary: [
      'El templo principal se llamaba zigurat.',
      'El zigurat se organizaba en plataformas con escalinatas.',
      'El zigurat se construía con ladrillos de adobe.'
    ],
    activity: 'Completa. El templo mesopotámico se llama ______.',
    answer: 'Zigurat.'
  },
  {
    title: 'Arco y bóveda',
    tag: 'Une con flechas',
    keywords: 'arco boveda arquitectura mesopotamica',
    summary: [
      'La arquitectura mesopotámica usaba arco.',
      'La arquitectura mesopotámica usaba bóveda.',
      'Estos elementos aparecían en sus edificios.'
    ],
    activity: 'Une. Arquitectura mesopotámica → arco y bóveda.',
    answer: 'La relación correcta es arquitectura mesopotámica → arco y bóveda.'
  },
  {
    title: 'Escultura mesopotámica',
    tag: 'Definir',
    keywords: 'escultura idealizada orantes lammasu',
    summary: [
      'La escultura mesopotámica era idealizada.',
      'Destacan las estatuas orantes.',
      'También destacan los lammasu o toros alados.'
    ],
    activity: 'Completa. La escultura mesopotámica muestra figuras ______.',
    answer: 'Idealizadas.'
  },
  {
    title: 'Unificación de Egipto',
    tag: 'Completar',
    keywords: 'alto bajo egipto narmer faraon',
    summary: [
      'Egipto tenía dos regiones.',
      'Las regiones eran Alto Egipto y Bajo Egipto.',
      'Narmer unificó ambas regiones.'
    ],
    activity: 'Completa. El rey ______ unificó Alto y Bajo Egipto.',
    answer: 'Narmer.'
  },
  {
    title: 'El faraón',
    tag: 'Mapa mental',
    keywords: 'faraon rey egipto',
    summary: [
      'Egipto tuvo un rey.',
      'El rey de Egipto se llamaba faraón.',
      'Los faraones gobernaron durante mucho tiempo.'
    ],
    activity: 'Completa el mapa mental. Egipto → rey: ______.',
    answer: 'Faraón.'
  },
  {
    title: 'Sociedad egipcia',
    tag: 'Verdadero / falso',
    keywords: 'sociedad egipcia jerarquizada privilegiados',
    summary: [
      'La sociedad egipcia era jerarquizada.',
      'Había grupos privilegiados.',
      'Había grupos no privilegiados.'
    ],
    activity: 'Marca V o F. La sociedad egipcia era igual para todos.',
    answer: 'Falso.'
  },
  {
    title: 'Derechos de las mujeres egipcias',
    tag: 'Redacción guiada',
    keywords: 'mujeres egipcias bienes negocios divorcio herencia',
    summary: [
      'Las mujeres egipcias podían poseer bienes.',
      'Las mujeres egipcias podían ejercer el comercio.',
      'Las mujeres egipcias podían divorciarse.'
    ],
    activity: 'Explica con estas palabras: bienes, comercio, marido, divorcio.',
    answer: 'Las mujeres egipcias podían poseer bienes, ejercer el comercio, escoger marido y divorciarse.'
  },
  {
    title: 'Religión politeísta',
    tag: 'Tipo test',
    keywords: 'religion politeista dioses egipto',
    summary: [
      'La religión egipcia era politeísta.',
      'Los egipcios adoraban muchos dioses.',
      'Había cientos de dioses y diosas.'
    ],
    activity: 'Responde. ¿La religión egipcia era monoteísta o politeísta?',
    answer: 'Politeísta.'
  },
  {
    title: 'Aspecto de los dioses egipcios',
    tag: 'Completar',
    keywords: 'cuerpo humano cabeza animal',
    summary: [
      'Muchos dioses egipcios tenían cuerpo humano.',
      'Muchos dioses egipcios tenían cabeza de animal.',
      'Cada dios tenía funciones distintas.'
    ],
    activity: 'Completa. Los dioses egipcios se representaban con cuerpo humano y cabeza de ______.',
    answer: 'Animal.'
  },
  {
    title: 'Vida después de la muerte',
    tag: 'Verdadero / falso',
    keywords: 'vida despues muerte momificacion',
    summary: [
      'Los egipcios creían en la vida después de la muerte.',
      'Por eso practicaban la momificación.',
      'La tumba preparaba la otra vida.'
    ],
    activity: 'Marca V o F. Los egipcios no creían en la otra vida.',
    answer: 'Falso.'
  },
  {
    title: 'Momificación',
    tag: 'Completar',
    keywords: 'momificacion conservar cuerpo',
    summary: [
      'La momificación conservaba el cuerpo.',
      'El cuerpo se preparaba para la otra vida.',
      'La momia se colocaba en una tumba.'
    ],
    activity: 'Completa. Los egipcios practicaban la ______.',
    answer: 'Momificación.'
  },
  {
    title: 'Objetos de la tumba',
    tag: 'Clasificar',
    keywords: 'joyas ceramicas herramientas sarcofago',
    summary: [
      'Los egipcios ponían objetos en la tumba.',
      'Los objetos podían ser joyas, cerámicas y herramientas.',
      'Los objetos ayudaban al difunto en la otra vida.'
    ],
    activity: 'Escribe tres objetos que podían entrar en la tumba.',
    answer: 'Por ejemplo: joyas, cerámicas y herramientas.'
  },
  {
    title: 'Tipos de tumbas',
    tag: 'Mapa mental',
    keywords: 'mastaba piramide hipogeo',
    summary: [
      'Los egipcios construyeron varios tipos de tumbas.',
      'Las tumbas podían ser mastabas.',
      'Las tumbas podían ser pirámides o hipogeos.'
    ],
    activity: 'Completa el esquema. Tumbas egipcias → ______, ______ y ______.',
    answer: 'Mastaba, pirámide e hipogeo.'
  },
  {
    title: 'Arquitectura egipcia',
    tag: 'Completar',
    keywords: 'piedra grandes dimensiones templos tumbas',
    summary: [
      'La arquitectura egipcia estaba hecha en piedra.',
      'La arquitectura egipcia tenía enormes dimensiones.',
      'Los edificios principales eran tumbas y templos.'
    ],
    activity: 'Completa. La arquitectura egipcia estaba hecha en ______.',
    answer: 'Piedra.'
  },
  {
    title: 'Templos egipcios',
    tag: 'Une con flechas',
    keywords: 'karnak luxor abu simbel templos',
    summary: [
      'Los templos eran la casa de los dioses.',
      'Los templos tenían grandes dimensiones.',
      'Karnak, Luxor y Abu Simbel son ejemplos.'
    ],
    activity: 'Relaciona. Karnak, Luxor y Abu Simbel → ______.',
    answer: 'Templos egipcios.'
  },
  {
    title: 'Escultura egipcia',
    tag: 'Definición',
    keywords: 'rigidas frontales brazos pegados frontalidad',
    summary: [
      'La escultura egipcia representaba dioses y faraones.',
      'Las figuras eran rígidas y frontales.',
      'Los brazos aparecían pegados al cuerpo.'
    ],
    activity: 'Completa. La escultura egipcia sigue la ley de la ______.',
    answer: 'Frontalidad.'
  },
  {
    title: 'Pintura egipcia',
    tag: 'Verdadero / falso',
    keywords: 'perfil frente ojos cuerpo pinturas',
    summary: [
      'La pintura decoraba templos y tumbas.',
      'La cara, los pies y los brazos aparecían de perfil.',
      'El cuerpo y los ojos aparecían de frente.'
    ],
    activity: 'Marca V o F. En la pintura egipcia todo el cuerpo se pintaba de perfil.',
    answer: 'Falso.'
  },
  {
    title: 'Tamaño y categoría social',
    tag: 'Completar',
    keywords: 'tamano categoria social pintura escultura',
    summary: [
      'El arte egipcio era idealizado.',
      'El tamaño de la figura dependía de la categoría social.',
      'Las personas más importantes aparecían más grandes.'
    ],
    activity: 'Completa. En el arte egipcio, el tamaño depende de la ______ social.',
    answer: 'Categoría.'
  },
  {
    title: 'Vocabulario básico',
    tag: 'Glosario',
    keywords: 'faraon zigurat jeroglificos politeismo',
    summary: [
      'Faraón es el rey de Egipto.',
      'Zigurat es el templo mesopotámico.',
      'Jeroglíficos es la escritura egipcia.'
    ],
    activity: 'Escribe una definición breve de faraón, zigurat y jeroglíficos.',
    answer: 'Faraón: rey de Egipto. Zigurat: templo mesopotámico. Jeroglíficos: escritura egipcia.'
  },
  {
    title: 'Compara Mesopotamia y Egipto',
    tag: 'Dos columnas',
    keywords: 'comparar mesopotamia egipto',
    summary: [
      'Mesopotamia se relaciona con Tigris y Éufrates.',
      'Egipto se relaciona con el Nilo.',
      'Cada civilización tuvo su propia escritura y sus propios edificios.'
    ],
    activity: 'Escribe dos diferencias entre Mesopotamia y Egipto.',
    answer: 'Ejemplo: Mesopotamia estaba entre Tigris y Éufrates y Egipto junto al Nilo. Mesopotamia usó escritura cuneiforme y Egipto escritura jeroglífica.'
  },
  {
    title: 'Resumen final',
    tag: 'Síntesis',
    keywords: 'resumen final esquema examen',
    summary: [
      'Mesopotamia y Egipto fueron civilizaciones hidráulicas.',
      'Ambas desarrollaron escritura, religión y arte.',
      'Ambas organizaron sociedades complejas cerca de grandes ríos.'
    ],
    activity: 'Escribe un resumen de tres frases sobre el tema.',
    answer: 'Respuesta abierta. Debe mencionar ríos, escritura y organización política o religiosa.'
  }
];

const quizData = [
  ['Civilizaciones hidráulicas', '¿Qué significa “hidráulicas” en este tema?', ['Relacionado con el agua', 'Relacionado con el fuego', 'Relacionado con la montaña'], 0],
  ['Civilizaciones hidráulicas', '¿Dónde surgieron las primeras grandes civilizaciones urbanas?', ['Cerca de grandes ríos', 'En islas volcánicas', 'En regiones polares'], 0],
  ['Civilizaciones hidráulicas', '¿Qué zona del Oriente Próximo aparece en el tema?', ['Creciente Fértil', 'Península Ibérica', 'Europa del Norte'], 0],
  ['Civilizaciones hidráulicas', '¿Qué ríos se relacionan con Mesopotamia?', ['Tigris y Éufrates', 'Nilo y Danubio', 'Ebro y Guadalquivir'], 0],
  ['Civilizaciones hidráulicas', '¿Qué río se relaciona con Egipto?', ['Nilo', 'Tigris', 'Éufrates'], 0],
  ['Civilizaciones hidráulicas', '¿Qué permitió la agricultura de los grandes ríos?', ['El surgimiento de civilizaciones urbanas', 'La desaparición de las ciudades', 'El fin del comercio'], 0],
  ['Civilizaciones hidráulicas', '¿Desde cuándo surgieron estas civilizaciones?', ['Desde el IV milenio a.C.', 'Desde el siglo XXI', 'Desde el año 1492'], 0],
  ['Civilizaciones hidráulicas', 'Mesopotamia y Egipto fueron...', ['Civilizaciones hidráulicas', 'Civilizaciones marítimas', 'Civilizaciones nómadas'], 0],
  ['Civilizaciones hidráulicas', 'El río aportaba sobre todo...', ['Agua para la agricultura', 'Carbón para la industria', 'Hierro para las armas'], 0],
  ['Civilizaciones hidráulicas', 'La tierra cercana a los ríos era...', ['Fértil', 'Helada', 'Estéril por completo'], 0],

  ['Escritura', '¿Dónde comenzó la historia con la aparición de la escritura?', ['En Mesopotamia y Egipto', 'En Grecia y Roma', 'En América y Oceanía'], 0],
  ['Escritura', '¿Cómo se llama la escritura de Mesopotamia?', ['Cuneiforme', 'Jeroglífica', 'Alfabética'], 0],
  ['Escritura', '¿Cómo se llama la escritura de Egipto?', ['Jeroglífica', 'Cuneiforme', 'Latina'], 0],
  ['Escritura', '¿Para qué servían los primeros escritos?', ['Para controlar cosechas, ganado e impuestos', 'Para hacer novelas', 'Para dibujar mapas del tiempo'], 0],
  ['Escritura', '¿Qué grupo surgió porque la escritura era difícil?', ['Los escribas', 'Los pastores', 'Los navegantes'], 0],
  ['Escritura', 'Los documentos escritos ayudaron a...', ['Preservar la memoria de los pueblos', 'Borrar la memoria colectiva', 'Eliminar el comercio'], 0],
  ['Escritura', '¿Sobre qué soporte podían aparecer jeroglíficos?', ['Piedra, paredes y papiros', 'Solo cristal', 'Solo metal'], 0],
  ['Escritura', 'La escritura cuneiforme apareció hacia...', ['3300 a.C.', '800 d.C.', '2020 d.C.'], 0],
  ['Escritura', 'La escritura jeroglífica apareció hacia...', ['3150 a.C.', '1200 d.C.', '500 d.C.'], 0],
  ['Escritura', 'El escriba era...', ['Un especialista de la escritura', 'Un rey egipcio', 'Un soldado asirio'], 0],

  ['Mesopotamia', '¿Qué era una ciudad‑Estado?', ['Una ciudad que controlaba un amplio territorio', 'Una ciudad sin campos', 'Una aldea pequeña sin poder'], 0],
  ['Mesopotamia', 'Las ciudades mesopotámicas eran centros...', ['Políticos, religiosos y económicos', 'Solo deportivos', 'Solo agrícolas'], 0],
  ['Mesopotamia', '¿Quién gobernaba las ciudades?', ['Reyes', 'Navegantes', 'Artistas'], 0],
  ['Mesopotamia', '¿Qué cuidaban los sacerdotes?', ['El templo', 'La muralla romana', 'Las naves'], 0],
  ['Mesopotamia', '¿Qué hacían los funcionarios?', ['Administraban la ciudad y controlaban cosechas y comercio', 'Solo tocaban música', 'Pintaban tumbas'], 0],
  ['Mesopotamia', '¿Qué formaban los soldados?', ['El ejército', 'El clero', 'La escuela'], 0],
  ['Mesopotamia', '¿Cuál fue el primer gran imperio mencionado?', ['Sumerio', 'Persa', 'Romano'], 0],
  ['Mesopotamia', '¿Hacia cuándo se sitúa el imperio babilónico?', ['Hacia 1800 a.C.', 'Hacia 1800 d.C.', 'Hacia 18 a.C.'], 0],
  ['Mesopotamia', '¿Qué imperio aparece hacia el 1300 a.C.?', ['Asirio', 'Persa', 'Egipcio'], 0],
  ['Mesopotamia', '¿Qué imperio aparece hacia el siglo VI a.C.?', ['Persa', 'Sumerio', 'Babilónico'], 0],

  ['Arte mesopotámico', 'El arte mesopotámico estaba al servicio de...', ['Los poderosos', 'Los turistas', 'Los niños'], 0],
  ['Arte mesopotámico', '¿Qué contaba este arte?', ['Las hazañas de los reyes', 'Solo escenas marinas', 'Solo paisajes vacíos'], 0],
  ['Arte mesopotámico', '¿Qué edificio principal recibía el nombre de zigurat?', ['Templo', 'Palacio romano', 'Mercado'], 0],
  ['Arte mesopotámico', '¿Con qué material se construían los zigurats?', ['Ladrillos de adobe', 'Mármol blanco', 'Acero'], 0],
  ['Arte mesopotámico', '¿Por qué se han conservado mal los zigurats?', ['Porque se construían con materiales pobres', 'Porque estaban bajo el mar', 'Porque eran de hielo'], 0],
  ['Arte mesopotámico', '¿Qué elementos se usaban en la arquitectura?', ['Arcos y bóvedas', 'Rascacielos y ascensores', 'Cúpulas de vidrio'], 0],
  ['Arte mesopotámico', '¿Cómo se organizaban los zigurats?', ['En plataformas con escalinatas', 'En cuevas bajo tierra', 'En torres de metal'], 0],
  ['Arte mesopotámico', '¿Dónde se situaba el templo del zigurat?', ['En la última plataforma', 'En el sótano', 'En una isla cercana'], 0],
  ['Arte mesopotámico', 'La escultura mesopotámica aparece...', ['Idealizada', 'Fotográfica', 'Invisible'], 0],
  ['Arte mesopotámico', '¿Qué esculturas destacan?', ['Estatuas orantes y lammasu', 'Solo retratos modernos', 'Solo caballos'], 0],

  ['Egipto', '¿Qué dos regiones tenía Egipto?', ['Alto y Bajo Egipto', 'Norte y Sur de América', 'Este y Oeste de Asia'], 0],
  ['Egipto', '¿Quién unificó las tierras de Egipto?', ['Narmer', 'Hammurabi', 'Ciro'], 0],
  ['Egipto', 'Narmer fue el primer...', ['Faraón de Egipto', 'Escriba de Egipto', 'Mercader de Egipto'], 0],
  ['Egipto', '¿Durante cuánto tiempo aproximado estuvo gobernado Egipto por faraones?', ['Más de 2500 años', '20 años', '50 años'], 0],
  ['Egipto', 'El rey de Egipto se llamaba...', ['Faraón', 'Cónsul', 'Emperador persa'], 0],
  ['Egipto', '¿Qué elemento natural fue esencial para Egipto?', ['El Nilo', 'El mar Cantábrico', 'El río Rin'], 0],
  ['Egipto', 'Egipto se desarrolló junto a...', ['Un gran río', 'Una gran cordillera', 'Un volcán activo'], 0],
  ['Egipto', '¿Qué civilización aparece vinculada a Narmer?', ['Egipto', 'Asiria', 'Persia'], 0],
  ['Egipto', 'La unificación de Egipto juntó...', ['Dos regiones', 'Siete continentes', 'Dos océanos'], 0],
  ['Egipto', 'Narmer unificó Egipto hacia...', ['3000 a.C.', '3000 d.C.', '1492'], 0],

  ['Sociedad egipcia', 'La sociedad egipcia era...', ['Jerarquizada', 'Totalmente igualitaria', 'Nómada'], 0],
  ['Sociedad egipcia', '¿Qué dos grandes grupos aparecen en el tema?', ['Privilegiados y no privilegiados', 'Marineros y pilotos', 'Poetas y músicos'], 0],
  ['Sociedad egipcia', 'Las mujeres egipcias podían...', ['Poseer bienes', 'Votar en internet', 'Usar trenes'], 0],
  ['Sociedad egipcia', 'Las mujeres egipcias podían ejercer...', ['El comercio', 'La aviación moderna', 'La informática'], 0],
  ['Sociedad egipcia', 'Las mujeres egipcias podían escoger...', ['Marido', 'Provincia', 'Imperio'], 0],
  ['Sociedad egipcia', 'Las mujeres egipcias podían...', ['Divorciarse', 'Construir satélites', 'Dirigir submarinos'], 0],
  ['Sociedad egipcia', 'La herencia para las mujeres era...', ['En igualdad de condiciones', 'Siempre menor', 'Inexistente'], 0],
  ['Sociedad egipcia', 'La familia tenía una importancia...', ['Grande', 'Nula', 'Secundaria'], 0],
  ['Sociedad egipcia', 'Los niños y niñas eran considerados...', ['Una bendición de los dioses', 'Una carga del Estado', 'Ciudadanos romanos'], 0],
  ['Sociedad egipcia', 'La justicia para hombres y mujeres era...', ['La misma', 'Siempre diferente', 'Solo oral'], 0],

  ['Religión egipcia', 'La religión egipcia era...', ['Politeísta', 'Monoteísta', 'Atea'], 0],
  ['Religión egipcia', '¿Cuántos dioses y diosas había aproximadamente?', ['Unos 700', 'Solo 7', 'Más de 7000 en el texto'], 0],
  ['Religión egipcia', 'Los dioses egipcios solían tener...', ['Cuerpo humano y cabeza de animal', 'Cuerpo de pez y ruedas', 'Solo forma geométrica'], 0],
  ['Religión egipcia', 'Cada dios tenía...', ['Responsabilidades diferentes', 'La misma tarea', 'Ninguna función'], 0],
  ['Religión egipcia', '¿Qué era importante respecto a los dioses?', ['Cuidarlos y no enfadarlos', 'Ignorarlos', 'Esconderlos'], 0],
  ['Religión egipcia', 'Los egipcios creían en la vida...', ['Después de la muerte', 'Antes del nacimiento solamente', 'Solo en los sueños'], 0],
  ['Religión egipcia', 'Por esa creencia practicaban...', ['La momificación', 'El teatro', 'La navegación oceánica'], 0],
  ['Religión egipcia', 'Además del sarcófago, en la tumba colocaban...', ['Objetos para la otra vida', 'Bicicletas modernas', 'Solo ropa deportiva'], 0],
  ['Religión egipcia', 'En las tumbas hacían dibujos grandes para...', ['Contar la vida del difunto', 'Enseñar química', 'Representar mapas de tren'], 0],
  ['Religión egipcia', 'También colocaban esculturas de...', ['Esclavos o animales domésticos', 'Astronautas', 'Futbolistas'], 0],

  ['Tumbas', '¿Qué tres tipos de tumbas aparecen en el tema?', ['Mastaba, pirámide e hipogeo', 'Torre, castillo y puente', 'Cueva, iglú y cabaña'], 0],
  ['Tumbas', '¿Dónde se colocaban el difunto y sus objetos?', ['En una tumba', 'En un estadio', 'En un mercado'], 0],
  ['Tumbas', 'La pirámide es un tipo de...', ['Tumba egipcia', 'Templo mesopotámico', 'Puente romano'], 0],
  ['Tumbas', 'La mastaba es un tipo de...', ['Tumba egipcia', 'Escritura egipcia', 'Dios egipcio'], 0],
  ['Tumbas', 'El hipogeo es un tipo de...', ['Tumba egipcia', 'Río mesopotámico', 'Ley religiosa'], 0],
  ['Tumbas', 'La tumba se relaciona con...', ['La vida después de la muerte', 'La pesca de altura', 'Los juegos olímpicos'], 0],
  ['Tumbas', '¿Qué llevaban los egipcios a la tumba?', ['Objetos útiles para el difunto', 'Motores eléctricos', 'Solamente pan'], 0],
  ['Tumbas', 'La momia se colocaba en...', ['Un sarcófago', 'Un carro', 'Un templo zigurat'], 0],
  ['Tumbas', 'Las tumbas importantes también tenían...', ['Pinturas y esculturas', 'Semáforos', 'Pantallas de cine'], 0],
  ['Tumbas', 'La tumba preparaba al difunto para...', ['La otra vida', 'Una carrera deportiva', 'Una travesía marina'], 0],

  ['Arte egipcio', 'La arquitectura egipcia estaba hecha en...', ['Piedra', 'Hielo', 'Plástico'], 0],
  ['Arte egipcio', 'La arquitectura egipcia era de...', ['Enormes dimensiones', 'Tamaño muy pequeño', 'Uso temporal'], 0],
  ['Arte egipcio', 'Los edificios más importantes eran...', ['Tumbas y templos', 'Solo mercados', 'Solo casas campesinas'], 0],
  ['Arte egipcio', '¿Qué eran los templos para los egipcios?', ['El hogar de los dioses', 'Escuelas militares', 'Puertos comerciales'], 0],
  ['Arte egipcio', '¿Qué templo se menciona como ejemplo?', ['Karnak', 'Partenón', 'Coliseo'], 0],
  ['Arte egipcio', 'La escultura egipcia representaba sobre todo...', ['Dioses y faraones', 'Campesinos anónimos modernos', 'Barcos de vapor'], 0],
  ['Arte egipcio', 'Las figuras escultóricas eran...', ['Rígidas y frontales', 'En movimiento libre total', 'Abstractas y geométricas'], 0],
  ['Arte egipcio', '¿Cómo aparecían los brazos en la escultura?', ['Pegados al cuerpo', 'Abiertos en cruz', 'Ocultos bajo la mesa'], 0],
  ['Arte egipcio', 'La ley citada en la escultura es la de...', ['La frontalidad', 'La gravedad', 'La velocidad'], 0],
  ['Arte egipcio', 'La escultura idealizaba a las figuras según...', ['Su categoría social', 'Su velocidad', 'Su edad exacta'], 0],

  ['Pintura egipcia', 'La pintura decoraba...', ['Templos y tumbas', 'Solo barcos', 'Solo jardines'], 0],
  ['Pintura egipcia', 'En la pintura, la cara se mostraba de...', ['Perfil', 'Espaldas', 'Frente siempre'], 0],
  ['Pintura egipcia', 'En la pintura, el cuerpo se mostraba de...', ['Frente', 'Perfil siempre', 'Lado oculto'], 0],
  ['Pintura egipcia', 'Los ojos en la pintura aparecían de...', ['Frente', 'Perfil', 'Espaldas'], 0],
  ['Pintura egipcia', 'La pintura mostraba actitud...', ['Rígida y con escaso movimiento', 'Muy dinámica y moderna', 'Completamente abstracta'], 0],
  ['Pintura egipcia', 'La pintura egipcia era...', ['Idealizada', 'Fotográfica', 'Desordenada'], 0],
  ['Pintura egipcia', 'El tamaño de las figuras dependía de...', ['La categoría social', 'La estación del año', 'El clima del día'], 0],
  ['Pintura egipcia', 'Los pies en la pintura aparecían de...', ['Perfil', 'Frente', 'Espaldas'], 0],
  ['Pintura egipcia', 'Los brazos en la pintura aparecían de...', ['Perfil', 'Frente', 'Espaldas'], 0],
  ['Pintura egipcia', 'La pintura egipcia se usaba para...', ['Decorar y representar', 'Construir puentes', 'Cocinar alimentos'], 0],
];

const schemeGrid = document.getElementById('schemeGrid');
const activitiesGrid = document.getElementById('activitiesGrid');
const activitySearch = document.getElementById('activitySearch');
const expandAll = document.getElementById('expandAll');
const collapseAll = document.getElementById('collapseAll');
const quizCard = document.getElementById('quizCard');
const quizCounter = document.getElementById('quizCounter');
const quizCategory = document.getElementById('quizCategory');
const prevQuestion = document.getElementById('prevQuestion');
const nextQuestion = document.getElementById('nextQuestion');
const submitQuiz = document.getElementById('submitQuiz');
const resetQuiz = document.getElementById('resetQuiz');
const quizResult = document.getElementById('quizResult');

function renderScheme() {
  schemeGrid.innerHTML = schemeData.map(item => `
    <article class="scheme-card card">
      <h3>${item.title}</h3>
      <ul>${item.points.map(point => `<li>${point}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildInteractivePrompt(item, index) {
  const safeText = escapeHtml(item.activity);
  const hasBlanks = /_{3,}/.test(item.activity);

  if (hasBlanks) {
    let count = 0;
    const htmlWithInputs = safeText.replace(/_{3,}/g, () => {
      count += 1;
      return `<input class="inline-input" type="text" aria-label="Respuesta ${count} de la actividad ${index + 1}" placeholder="Escribe aquí">`;
    });
    return `
      <div class="interactive-zone">${htmlWithInputs}</div>
      <div class="activity-tools">
        <button class="btn btn--soft clear-response" type="button">Borrar respuesta</button>
      </div>
    `;
  }

  if (item.tag.toLowerCase().includes('verdadero')) {
    return `
      <div class="interactive-zone">
        <span class="response-label">Marca tu respuesta:</span>
        <label class="choice-chip"><input type="radio" name="vf-${index}" value="V"> <span>V</span></label>
        <label class="choice-chip"><input type="radio" name="vf-${index}" value="F"> <span>F</span></label>
      </div>
    `;
  }

  if (item.tag.toLowerCase().includes('tipo test')) {
    return `
      <div class="interactive-zone">
        <label class="response-label" for="open-${index}">Escribe tu respuesta:</label>
        <input id="open-${index}" class="full-input" type="text" placeholder="Escribe aquí">
      </div>
    `;
  }

  return `
    <div class="interactive-zone">
      <label class="response-label" for="open-${index}">Escribe tu respuesta:</label>
      <textarea id="open-${index}" class="response-textarea" rows="3" placeholder="Escribe aquí"></textarea>
      <div class="activity-tools">
        <button class="btn btn--soft clear-response" type="button">Borrar respuesta</button>
      </div>
    </div>
  `;
}

function activityTemplate(item, index) {
  return `
    <article class="activity-card card" data-keywords="${item.keywords}">
      <div class="activity-card__head">
        <div>
          <h3>${index + 1}. ${item.title}</h3>
        </div>
        <span class="badge">${item.tag}</span>
      </div>
      <div class="activity-card__body">
        <section class="summary-box">
          <h4>Mini‑resumen previo</h4>
          ${item.summary.map(p => `<p>${p}</p>`).join('')}
        </section>
        <section class="activity-box">
          <h4>Actividad</h4>
          ${buildInteractivePrompt(item, index)}
        </section>
        <button class="btn btn--ghost toggle-answer" type="button">Mostrar solución</button>
        <section class="answer-box" hidden>
          <h4>Solución orientativa</h4>
          <p>${item.answer}</p>
        </section>
      </div>
    </article>
  `;
}

function renderActivities(list = activities) {
  activitiesGrid.innerHTML = list.map(activityTemplate).join('');
  bindActivityToggles();
}

function bindActivityToggles() {
  document.querySelectorAll('.toggle-answer').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isHidden = answer.hasAttribute('hidden');
      if (isHidden) {
        answer.removeAttribute('hidden');
        button.textContent = 'Ocultar solución';
      } else {
        answer.setAttribute('hidden', '');
        button.textContent = 'Mostrar solución';
      }
    });
  });

  document.querySelectorAll('.clear-response').forEach(button => {
    button.addEventListener('click', () => {
      const box = button.closest('.interactive-zone');
      box.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
      box.querySelectorAll('textarea').forEach(area => area.value = '');
      box.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    });
  });
}

activitySearch.addEventListener('input', (event) => {
  const q = event.target.value.trim().toLowerCase();
  if (!q) return renderActivities();
  const filtered = activities.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.tag.toLowerCase().includes(q) ||
    item.keywords.toLowerCase().includes(q) ||
    item.summary.join(' ').toLowerCase().includes(q) ||
    item.activity.toLowerCase().includes(q)
  );
  renderActivities(filtered);
});

expandAll.addEventListener('click', () => {
  document.querySelectorAll('.answer-box').forEach(box => box.removeAttribute('hidden'));
  document.querySelectorAll('.toggle-answer').forEach(btn => btn.textContent = 'Ocultar solución');
});
collapseAll.addEventListener('click', () => {
  document.querySelectorAll('.answer-box').forEach(box => box.setAttribute('hidden', ''));
  document.querySelectorAll('.toggle-answer').forEach(btn => btn.textContent = 'Mostrar solución');
});

let currentQuestion = 0;
const userAnswers = new Array(quizData.length).fill(null);
let quizChecked = false;

function renderQuestion() {
  const [category, question, options, correct] = quizData[currentQuestion];
  quizCounter.textContent = `Pregunta ${currentQuestion + 1} de ${quizData.length}`;
  quizCategory.textContent = category;

  quizCard.innerHTML = `
    <h3>${question}</h3>
    <div class="options">
      ${options.map((option, index) => {
        let extraClass = '';
        if (quizChecked) {
          if (index === correct) extraClass = 'correct';
          else if (userAnswers[currentQuestion] === index && index !== correct) extraClass = 'wrong';
        }
        return `
          <label class="option ${extraClass}">
            <input type="radio" name="quiz-option" value="${index}" ${userAnswers[currentQuestion] === index ? 'checked' : ''} ${quizChecked ? 'disabled' : ''}>
            <span><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</span>
          </label>
        `;
      }).join('')}
    </div>
  `;

  quizCard.querySelectorAll('input[name="quiz-option"]').forEach(input => {
    input.addEventListener('change', (e) => {
      userAnswers[currentQuestion] = Number(e.target.value);
    });
  });

  prevQuestion.disabled = currentQuestion === 0;
  nextQuestion.disabled = currentQuestion === quizData.length - 1;
}

prevQuestion.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});

nextQuestion.addEventListener('click', () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  }
});

submitQuiz.addEventListener('click', () => {
  quizChecked = true;
  let score = 0;
  quizData.forEach(([, , , correct], index) => {
    if (userAnswers[index] === correct) score += 1;
  });
  const unanswered = userAnswers.filter(v => v === null).length;
  quizResult.textContent = `Resultado: ${score} / ${quizData.length}. Sin responder: ${unanswered}.`;
  renderQuestion();
});

resetQuiz.addEventListener('click', () => {
  userAnswers.fill(null);
  quizChecked = false;
  currentQuestion = 0;
  quizResult.textContent = '';
  renderQuestion();
});

renderScheme();
renderActivities();
renderQuestion();
