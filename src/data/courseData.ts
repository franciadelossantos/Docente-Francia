import { CourseModule, LegalLaw, RoleplayCase, QuizQuestion, ChecklistItem, TruthLieRound } from '../types';

export const TEACHER_DATA = {
  name: 'Licda. Francia De Los Santos Díaz',
  academicTitle: 'Abogada & Especialista Previsional',
  university: 'Universidad Central del Este (UCE)',
  position: 'Especialista en la Dirección General de Jubilaciones y Pensiones a Cargo del Estado (DGJP)',
  secondaryField: 'Asesoría y Ventas de Inmobiliarios',
  institutionTraining: 'Facilitadora Certificada INFOTEP',
  phone: '829-712-1483',
  phoneFormatted: '(829) 712-1483',
  email: 'franciadelossantos2@gmail.com',
  youtube: 'canaltevbien',
  youtubeUrl: 'https://youtube.com/@canaltevbien',
  originalPdfPath: '/assets/aistudio/DIA-_INFO-_PROFESORA_RAFAELA_002__d7dbcaee.pdf',
  images: {
    heroSeniors: '/src/assets/images/hero_dominican_seniors_1793393475090.jpg',
    classroomSeniors: '/src/assets/images/classroom_seniors_training_1793393476321.jpg',
    retiredCouple: '/src/assets/images/retired_couple_dignity_1793393476210.jpg',
    legalJustice: '/src/assets/images/legal_previsional_justice_1793393477354.jpg',
  },
  courseDates: '24 de octubre al 12 de diciembre de 2026',
  courseSchedule: 'Sábados de 8:00 AM a 4:00 PM (60 horas formativas)',
  courseTarget: 'Afiliados mayores de 60 años con 20 o más años de cotización al Sistema de Reparto, personal docente y administrativo, orientadores y ciudadanos interesados en hacer valer sus derechos.',
  pedagogicalTechnique: 'Juegos de roles, estudio guiado de casos reales, dinámicas reflexivas y evaluación mediante cuestionario y lista de cotejo.',
  generalGoal: 'Defender los derechos previsionales de los afiliados al Sistema de Reparto de la República Dominicana, aplicando el marco normativo de la Ley 87-01, la Ley 379-81 y la jurisprudencia constitucional, para garantizar el cálculo correcto, la restitución y el otorgamiento oportuno de sus pensiones frente a las instituciones administradoras.',
};

export const CLASSROOM_RULES = [
  {
    title: 'Puntualidad rigurosa',
    desc: 'El respeto al tiempo de los demás es el cimiento de la dignidad profesional y del aprovechamiento docente.',
  },
  {
    title: 'Manejo responsable del celular',
    desc: 'Mantenemos los dispositivos en silencio o vibración para mantener la inmersión y la escucha activa en cada tema.',
  },
  {
    title: 'Orden parlamentario',
    desc: 'Pedir la palabra, escuchar sin interrumpir y debatir con cortesía jurídica los diferentes criterios.',
  },
  {
    title: 'Respeto mutuo y solidaridad',
    desc: 'Tratamos las consultas y casos personales de cada compañero con confidencialidad, empatía y fraternidad.',
  },
];

export const INSPIRING_QUOTES = [
  {
    quote: '«No te rindas, por favor no cedas, aunque el frío queme, aunque el miedo muerda... aún hay vida en tus sueños.»',
    author: 'Mario Benedetti',
    context: 'Mensaje de aliento para quienes llevan años reclamando una pensión justa frente a la burocracia.',
  },
  {
    quote: '«Alguien inteligente aprende de la experiencia de los demás.»',
    author: 'Voltaire',
    context: 'Fundamento del aprendizaje en comunidad y del estudio guiado de casos precedentes.',
  },
  {
    quote: '‘El éxito llega cuando decides dar el primer paso.’',
    author: 'Proverbio Docente',
    context: 'La decisión informada de revisar el historial laboral y dar inicio al trámite de traspaso o jubilación.',
  },
];

export const LEGAL_LAWS: LegalLaw[] = [
  {
    code: 'Constitución Dominicana',
    title: 'Constitución de la República Dominicana (Artículo 60)',
    year: 2015,
    importance: 'Consagra la Seguridad Social como un derecho fundamental irrenunciable e imprescriptible.',
    coreArticle: 'Art. 60: El Estado estimulará el desarrollo de la seguridad social para asegurar a toda persona el goce efectivo del derecho a la salud, asistencia alimentaria y protección en la vejez, viudez y orfandad.',
    scope: 'Garantía Constitucional Máxima',
  },
  {
    code: 'Ley No. 379-81',
    title: 'Ley sobre Jubilaciones y Pensiones Civiles del Estado Dominicano',
    year: 1981,
    importance: 'Regula el régimen de reparto público administrado hoy por la DGJP. Establece la escala porcentual de retiro por antigüedad.',
    coreArticle: 'Establece pensiones ordinarias de vejez para servidores públicos con 20 años o más de servicio a cargo del fondo común del Estado.',
    scope: 'Pilar del Sistema de Reparto Estatal',
  },
  {
    code: 'Ley No. 87-01',
    title: 'Ley General del Sistema Dominicano de Seguridad Social (SDSS)',
    year: 2001,
    importance: 'Crea el Sistema Dominicano de Seguridad Social, estableciendo la convivencia entre el Sistema de Reparto y las Cuentas de Capitalización Individual (CCI/AFP).',
    coreArticle: 'Artículos 35 a 61: Marco previsional, creación de la SIPEN, DIDA, TSS y derechos de los afiliados de reparto y capitalización.',
    scope: 'Estatuto Orgánico de Seguridad Social',
  },
  {
    code: 'Ley No. 1896-48',
    title: 'Ley de Seguros Sociales de la República Dominicana',
    year: 1948,
    importance: 'Creación de la Caja de Seguros Sociales, convertida en el histórico Instituto Dominicano de Seguros Sociales (IDSS).',
    coreArticle: 'Fundamento histórico del seguro de vejez, invalidez y muerte para la clase trabajadora dominicana.',
    scope: 'Pilar Histórico / Afiliados IDSS',
  },
  {
    code: 'Resolución CNSS 289-03',
    title: 'Resolución sobre Traspaso de CCI al Sistema de Reparto Estatal',
    year: 2003,
    importance: 'Crea la Comisión Interinstitucional Evaluadora para restituir al Sistema de Reparto a los afiliados que pertenecían al régimen de la Ley 379-81 y fueron indebidamente inscritos en AFP.',
    coreArticle: 'Integración: Con voz y voto: SIPEN y DIDA. Con voz consultiva: DGJP y ADAF.',
    scope: 'Norma de Restitución y Traspaso',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'modulo-1',
    number: 'Módulo I',
    title: 'Historia, Génesis y Composición de la Seguridad Social Dominicana',
    hours: 15,
    description: 'Estudio de la evolución histórica desde el siglo XIX hasta la reforma de la Ley 87-01, conociendo las raíces y la arquitectura institucional del SDSS.',
    topics: [
      'Antecedente fundacional: Ley 79 de 1846 (primera pensión militar en RD a los inválidos de la gesta patriótica o 60 años y 40 años de servicio).',
      'Evolución en el siglo XX: Ley 1896 de 1948 y creación de la Caja de Seguros Sociales / IDSS.',
      'Definición de Sistema de Reparto: Régimen de beneficio definido donde los aportes activos financian las pensiones actuales en un fondo común solidario.',
      'Diferencias críticas con el Sistema de Capitalización Individual (CCI): Cuentas individuales administradas por AFP vs. Fondo común solidario del Estado.',
      'Estructura del SDSS: CNSS como órgano rector, TSS en recaudo, DIDA en defensa con voz y voto, SIPEN en supervisión de pensiones, SISALRIL e IDOPPRIL.',
    ],
    legalBasis: ['Ley 79 de 1846', 'Ley 1896-48', 'Ley 87-01', 'Art. 60 Constitución RD'],
    docentNote: '«Entender la historia nos da la fuerza para defender la pensión: no es un regalo del gobierno, sino un derecho adquirido tras décadas de aporte honesto a la Patria.»',
    slidesRef: 'Diapositivas 6, 23, 27, 28 y 30',
  },
  {
    id: 'modulo-2',
    number: 'Módulo II',
    title: 'Derechos y Beneficios de los Afiliados al Sistema de Reparto',
    hours: 30,
    description: 'Análisis detallado de la clasificación de afiliados, prestaciones garantizadas con cargo al Fondo y a DORA, y causales de suspensión o pérdida.',
    topics: [
      'Clasificación de los afiliados: 1) Afiliados cotizantes activos, 2) Afiliados no cotizantes (en espera o con derechos consolidados), y 3) Afiliados pensionados.',
      'Beneficios con cargo directo al Fondo: Pensión ordinaria por antigüedad en el servicio (vejez) y pensión de sobrevivencia a derechohabientes del pensionado.',
      'Beneficios con cargo a DORA (Discapacidad, Orfandad y Riesgos): Pensión por discapacidad de origen común (no laboral) y pensión de sobrevivencia de cotizante activo.',
      'Escala de antigüedad de la Ley 379-81: De 20 a 30+ años de servicio público y porcentajes correspondientes sobre el promedio salarial.',
      'Causales legales de suspensión o pérdida de beneficios: incompatibilidades con reingreso al sector público y salvaguarda de los derechos adquiridos.',
    ],
    legalBasis: ['Ley 379-81', 'Ley 87-01 (Título II)', 'Jurisprudencia del Tribunal Constitucional'],
    docentNote: '«Muchos servidores públicos ignoran que tienen derecho al 60%, 70% u 80% de su salario. Conocer la Ley 379-81 es el escudo que protege su vejez y la de su familia.»',
    slidesRef: 'Diapositivas 10, 43, 44 y 45',
  },
  {
    id: 'modulo-3',
    number: 'Módulo III',
    title: 'Procedimientos y Traspasos de Capitalización Individual a Reparto',
    hours: 15,
    description: 'La ruta legal e institucional para ejercer el derecho al retorno al Sistema de Reparto Estatal ante la Comisión Evaluadora Interinstitucional.',
    topics: [
      'Resolución CNSS No. 289-03: Marco de evaluación y corrección del error de afiliación obligatoria o inducida a las AFP.',
      'Comisión Interinstitucional Evaluadora: Con voz y voto: SIPEN y DIDA; con voz: DGJP y ADAF.',
      'Paso 1 ante la DIDA: Suscripción obligatoria del Formulario de Recepción y Entendimiento de Información.',
      'Paso 2 ante la DGJP: Presentación formal con original del formulario y copia de cédula para llenar la solicitud formal de traspaso.',
      'Paso 3 ante la AFP: Notificación, radicación del formulario y posterior firma del contrato de desafiliación una vez aprobado el dictamen.',
      'Revisión y subsanación de inconsistencias en el historial de cotizaciones de la TSS y Contraloría General.',
    ],
    legalBasis: ['Resolución CNSS 289-03', 'Circulares Técnicas SIPEN', 'Reglamento de Traspasos DIDA'],
    docentNote: '«El procedimiento requiere rigurosidad documental. Un formulario mal llenado o la falta de una certificación de antigüedad puede retrasar un año la pensión que le corresponde por justicia.»',
    slidesRef: 'Diapositivas 29, 31 y 45',
  },
];

export const SDSS_ENTITIES = [
  {
    sigla: 'CNSS',
    nombre: 'Consejo Nacional de Seguridad Social',
    rol: 'Órgano Rector y Superior',
    descripcion: 'Diseña y aprueba las políticas de seguridad social, resoluciones normativas y directrices de protección al trabajador dominicano.',
    status: 'Rectoría / Normativo',
  },
  {
    sigla: 'DIDA',
    nombre: 'Dirección de Información y Defensa de los Afiliados',
    rol: 'Defensoría del Usuario',
    descripcion: 'Asiste a los afiliados, tramita quejas, promueve la restitución al reparto y tiene VOZ Y VOTO en la Comisión Evaluadora de Traspasos.',
    status: 'Voz y Voto en Traspasos',
  },
  {
    sigla: 'DGJP',
    nombre: 'Dirección General de Jubilaciones y Pensiones',
    rol: 'Administradora del Reparto Estatal',
    descripcion: 'Adscrita al Ministerio de Hacienda, gestiona y liquida las pensiones civiles del Estado Dominicano bajo la Ley 379-81. Participa con VOZ en la Comisión.',
    status: 'Administrador del Reparto',
  },
  {
    sigla: 'SIPEN',
    nombre: 'Superintendencia de Pensiones',
    rol: 'Supervisor Técnico Previsional',
    descripcion: 'Supervisa las entidades previsionales, emite resoluciones complementarias y tiene VOZ Y VOTO en la Comisión Evaluadora de Traspasos.',
    status: 'Voz y Voto en Traspasos',
  },
  {
    sigla: 'TSS',
    nombre: 'Tesorería de la Seguridad Social',
    rol: 'Recaudo y Distribución de Aportes',
    descripcion: 'Lleva el registro único de cotizantes dominicanos, recauda las contribuciones y dispersa a los diferentes seguros.',
    status: 'Operador Financiero',
  },
  {
    sigla: 'IDOPPRIL & SISALRIL',
    nombre: 'Riesgos Laborales y Seguro Familiar de Salud',
    rol: 'Protección Integral y Contingencias',
    descripcion: 'Entidades hermanas que cubren las contingencias de salud y accidentes laborales en el esquema integral del SDSS.',
    status: 'Coberturas Asociadas',
  },
];

export const ROLEPLAY_CASES: RoleplayCase[] = [
  {
    id: 'caso-carmen',
    title: 'Caso 1: La Educadora Trasladada a AFP sin Consentimiento',
    subtitle: 'Docente de 62 años con 24 años de servicio en el Ministerio de Educación (MINERD)',
    situation: 'La Licda. Carmen trabajó 24 años continuos en el sector público. En el año 2003, al promulgarse la Ley 87-01, un promotor la afilió a una AFP privada con la promesa de una cuenta personal. Hoy, a sus 62 años, su AFP le proyecta un retiro programado de RD$11,500 mensuales debido a su saldo acumulado, mientras que bajo la Ley 379-81 (Reparto Estatal) le correspondería el 70% de sus últimos sueldos (más de RD$48,000 mensuales). ¿Cuál es la ruta legal procedente?',
    claimant: {
      name: 'Licda. Carmen Altagracia M.',
      age: 62,
      yearsOfService: 24,
      currentSystem: 'AFP Privada (CCI)',
      institution: 'MINERD / Estado Dominicano',
    },
    options: [
      {
        id: 'opt-a',
        label: 'Aceptar el retiro programado de la AFP porque una vez firmado no hay marcha atrás.',
        isCorrect: false,
        explanation: 'Incorrecto. La jurisprudencia y la Resolución CNSS 289-03 garantizan el derecho de retorno a quienes tenían derechos consolidados o cotizaban al Estado antes de la reforma.',
      },
      {
        id: 'opt-b',
        label: 'Iniciar el Proceso de Traspaso en la DIDA (Formulario de Entendimiento) y luego en la DGJP para calificar ante la Comisión Evaluadora.',
        isCorrect: true,
        explanation: '¡Excelente decisión jurídica! Al tener más de 20 años cotizados y haber iniciado antes del 2003 en el Estado, califica plenamente para traspaso al Sistema de Reparto bajo la Res. 289-03, obteniendo el 70% de pensión.',
      },
      {
        id: 'opt-c',
        label: 'Demandar a la AFP por la vía penal de manera individual y esperar fallo judicial.',
        isCorrect: false,
        explanation: 'Inadecuado. La vía administrativa reglamentaria ante DIDA y DGJP es expedita y vinculante sin necesidad de costosos litigios penales.',
      },
    ],
  },
  {
    id: 'caso-manuel',
    title: 'Caso 2: Antigüedad Incompleta y Alternativas Previsionales',
    subtitle: 'Servidor público de 63 años con 17 años de labor en el MOPC',
    situation: 'Don Manuel cumplió 63 años y tiene 17 años laborando en el Ministerio de Obras Públicas. Solicita su jubilación ordinaria de inmediato, pero la DGJP le comunica que la Ley 379-81 exige un mínimo de 20 años de servicio público para pensión ordinaria de vejez por antigüedad. ¿Qué le orienta la Profesora Francia?',
    claimant: {
      name: 'Manuel E. Rodríguez',
      age: 63,
      yearsOfService: 17,
      currentSystem: 'Reparto Estatal (DGJP)',
      institution: 'Ministerio de Obras Públicas (MOPC)',
    },
    options: [
      {
        id: 'opt-a',
        label: 'Recomendarle completar los 3 años faltantes para alcanzar los 20 años reglamentarios y acceder al 60% legal garantizado.',
        isCorrect: true,
        explanation: '¡Totalmente acertado! Al llegar a los 20 años a los 66 años de edad, Don Manuel consolida su derecho incondicional al 60% de su salario promedio con cargo al fondo del Estado según la Ley 379-81.',
      },
      {
        id: 'opt-b',
        label: 'Retirar todo el dinero en efectivo del fondo de reparto de inmediato.',
        isCorrect: false,
        explanation: 'Incorrecto. El Sistema de Reparto no opera como una alcancía o cuenta personal; es un fondo solidario de beneficio definido.',
      },
      {
        id: 'opt-c',
        label: 'Pedir su desafiliación a una AFP privada para cobrar pensión al día siguiente.',
        isCorrect: false,
        explanation: 'Grave error. En una AFP con solo 17 años y a los 63 años acumularía poco saldo y recibiría una fracción minúscula.',
      },
    ],
  },
  {
    id: 'caso-rosa',
    title: 'Caso 3: Pensión de Sobrevivencia para Cónyuge Supérstite',
    subtitle: 'Viuda de pensionado fallecido que cobraba por la DGJP',
    situation: 'Fallece Don Pedro, quien era pensionado por antigüedad de la DGJP desde hacía 6 años. Su esposa Doña Rosa, con quien estuvo casado por más de 35 años, desconoce si la pensión se extingue o si puede continuar cobrándola. ¿Cuál es la garantía que ampara a los beneficiarios?',
    claimant: {
      name: 'Doña Rosaura Vda. Santana',
      age: 68,
      yearsOfService: 0,
      currentSystem: 'Derechohabiente de Reparto',
      institution: 'DGJP (Pensión de Sobrevivencia)',
    },
    options: [
      {
        id: 'opt-a',
        label: 'La pensión cesa definitivamente con la muerte del titular y el Estado retiene los fondos.',
        isCorrect: false,
        explanation: 'Falso. La pensión de sobrevivencia es un derecho consagrado con cargo al Fondo para el cónyuge e hijos menores/estudiantes según la ley.',
      },
      {
        id: 'opt-b',
        label: 'Solicitar la Pensión de Sobrevivencia con cargo al Fondo ante la DGJP depositando acta de matrimonio, acta de defunción legalizada y documentos de identidad.',
        isCorrect: true,
        explanation: '¡Correcto! La Ley 379-81 y normativas de la DGJP garantizan la sustitución o pensión de sobrevivencia a la cónyuge supérstite legítima, asegurando su sustento económico digno.',
      },
      {
        id: 'opt-c',
        label: 'Esperar a cumplir 75 años para solicitar una pensión solidaria subsidiada.',
        isCorrect: false,
        explanation: 'Incorrecto. La pensión contributiva de sobrevivencia le corresponde de inmediato y no debe postergarse.',
      },
    ],
  },
];

export const TRUTH_LIE_ROUNDS: TruthLieRound[] = [
  {
    id: 1,
    statements: [
      {
        id: 's1',
        text: 'En el Sistema de Reparto cada afiliado tiene una libreta con su saldo individual que genera rentabilidad financiera.',
        isTrue: false,
        explanation: '¡Esta es la MENTIRA! Eso corresponde al Sistema de Capitalización Individual (AFP). El Sistema de Reparto es un fondo común solidario donde los aportes pagan las pensiones actuales bajo reglas de antigüedad.',
      },
      {
        id: 's2',
        text: 'La primera ley de pensiones en República Dominicana data de 1846 (Ley 79) y amparaba a militares con 60 años de edad o inválidos de guerra.',
        isTrue: true,
        explanation: '¡Es VERDAD! La Ley 79 de 1846 fue el primer estatuto formal de pensiones de la República Dominicana independiente.',
      },
      {
        id: 's3',
        text: 'La DIDA y la SIPEN tienen voz y voto en la Comisión Evaluadora de Traspasos de CCI a Reparto.',
        isTrue: true,
        explanation: '¡Es VERDAD! Según la Resolución CNSS 289-03, DIDA y SIPEN tienen voz y voto, mientras que la DGJP y ADAF tienen voz consultiva.',
      },
    ],
  },
  {
    id: 2,
    statements: [
      {
        id: 's4',
        text: 'Para obtener una pensión ordinaria de vejez por antigüedad bajo la Ley 379-81 se requiere un mínimo de 20 años de servicio en el Estado.',
        isTrue: true,
        explanation: '¡Es VERDAD! La escala ordinaria de la Ley 379-81 inicia a partir de los 20 años de servicio con el 60% del salario promedio.',
      },
      {
        id: 's5',
        text: 'Si te trasladaste a una AFP, la ley prohíbe de por vida volver al Sistema de Reparto sin importar tus años previos.',
        isTrue: false,
        explanation: '¡Esta es la MENTIRA! Mediante la Resolución CNSS 289-03 los afiliados con derechos amparados en la Ley 379-81 pueden solicitar formalmente su traspaso de retorno.',
      },
      {
        id: 's6',
        text: 'La Pensión por Discapacidad de origen no laboral y la de sobrevivencia de cotizante activo se cubren con cargo a DORA.',
        isTrue: true,
        explanation: '¡Es VERDAD! Estas coberturas contingentes están estructuradas bajo el régimen de Discapacidad y Sobrevivencia (DORA) del sistema.',
      },
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Qué ley dominicana regula actualmente el régimen de jubilaciones y pensiones civiles a cargo del Estado (Sistema de Reparto Estatal)?',
    options: ['Ley No. 16-92 (Código de Trabajo)', 'Ley No. 379-81', 'Ley No. 41-08', 'Ley No. 1896-48'],
    correctIndex: 1,
    feedback: '¡Excelente! La Ley No. 379-81 es el estatuto fundamental que rige el régimen de Reparto Estatal administrado por la DGJP.',
    legalArticle: 'Ley No. 379-81, Artículos 1 y siguientes',
  },
  {
    id: 2,
    question: 'En la Comisión Interinstitucional Evaluadora de Traspasos (Res. CNSS 289-03), ¿cuáles entidades tienen derecho a VOZ Y VOTO?',
    options: [
      'Únicamente las AFP privadas y los bancos',
      'DGJP y ADAF',
      'SIPEN y DIDA',
      'La Tesorería de la Seguridad Social (TSS) exclusivamente',
    ],
    correctIndex: 2,
    feedback: '¡Correcto! La Superintendencia de Pensiones (SIPEN) y la Dirección de Información y Defensa de los Afiliados (DIDA) poseen voz y voto deliberativo.',
    legalArticle: 'Resolución CNSS No. 289-03',
  },
  {
    id: 3,
    question: '¿Cuál es el primer paso obligatorio que debe realizar un afiliado que desea traspasarse de una AFP al Sistema de Reparto?',
    options: [
      'Comparecer ante la DIDA y suscribir el Formulario de Recepción y Entendimiento de Información',
      'Retirar sus fondos en efectivo en la ventanilla de su banco',
      'Publicar un aviso en un periódico de circulación nacional',
      'Suspender inmediatamente sus cotizaciones a la TSS',
    ],
    correctIndex: 0,
    feedback: '¡Muy bien! El trámite inicia ineludiblemente en la DIDA firmando el formulario oficial de recepción e información.',
    legalArticle: 'Procedimiento de Traspaso - Res. 289-03 (Paso 1)',
  },
  {
    id: 4,
    question: 'Bajo la Ley 379-81, ¿cuál es el porcentaje orientativo de pensión por antigüedad para un servidor con 20 años de servicio en el Estado?',
    options: ['25%', '40%', '60%', '100%'],
    correctIndex: 2,
    feedback: '¡Exacto! Con 20 años de servicio y edad requerida, la escala arranca con el 60% del salario promedio, aumentando por quinquenios (25 años = 70%, 30 años = 80%).',
    legalArticle: 'Ley No. 379-81, Escala de Jubilaciones Ordinarias',
  },
  {
    id: 5,
    question: '¿Qué principio constitucional ampara la protección a la vejez y la seguridad social en la República Dominicana?',
    options: [
      'Artículo 60 de la Constitución: Derecho a la Seguridad Social integral',
      'Artículo 14 del Código Civil',
      'Decreto presidencial 101-90',
      'Es un acuerdo voluntario sin respaldo constitucional',
    ],
    correctIndex: 0,
    feedback: '¡Brillante! El Artículo 60 de la Constitución de la República Dominicana consagra la seguridad social como un derecho humano y fundamental del ciudadano.',
    legalArticle: 'Constitución Dominicana, Artículo 60',
  },
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'identidad',
    label: 'Cédula de Identidad y Electoral Vigente',
    detail: 'Original y mínimo 3 copias legibles y ampliadas en anverso y reverso.',
    required: true,
  },
  {
    id: 'chk-2',
    category: 'laboral',
    label: 'Certificación de Cargos y Tiempo de Servicio',
    detail: 'Emitida por la Contraloría General de la República o el Ministerio de Administración Pública (MAP) que demuestre los 20+ años.',
    required: true,
  },
  {
    id: 'chk-3',
    category: 'laboral',
    label: 'Certificaciones Históricas de las Instituciones Empleadoras',
    detail: 'Cartas selladas de cada ministerio o entidad estatal donde laboró (ej. MINERD, Salud Pública, MOPC, IDSS).',
    required: true,
  },
  {
    id: 'chk-4',
    category: 'traspaso',
    label: 'Formulario DIDA de Recepción y Entendimiento',
    detail: 'Firmado en la sede o delegación provincial de la DIDA tras la charla de orientación.',
    required: true,
  },
  {
    id: 'chk-5',
    category: 'traspaso',
    label: 'Formulario de Solicitud de Traspaso DGJP',
    detail: 'Completado y radicado formalmente en la ventanilla única de la Dirección General de Jubilaciones y Pensiones.',
    required: true,
  },
  {
    id: 'chk-6',
    category: 'institucional',
    label: 'Historial de Aportes y Cuenta Individual AFP (Si aplica)',
    detail: 'Último estado de cuenta emitido por la AFP actual con desglose de cuotas y fechas de afiliación.',
    required: false,
  },
  {
    id: 'chk-7',
    category: 'institucional',
    label: 'Acta de Nacimiento Legalizada',
    detail: 'Requerida para cotejar fecha exacta de nacimiento y verificar cumplimiento de la edad reglamentaria.',
    required: true,
  },
];
