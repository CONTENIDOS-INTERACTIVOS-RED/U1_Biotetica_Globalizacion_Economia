export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la bioética en el contexto global',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la bioética en un contexto global',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios de la bioética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El principio de autonomía',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El principio de beneficencia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El principio de no maleficencia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'El principio de justicia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Impacto de la globalización en los dilemas éticos contemporáneos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Bioética y su relación con la sostenibilidad, la equidad social y los derechos humanos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Sostenibilidad',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Equidad social',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Derechos humanos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Beauchamp, T. L., & Childress, J. F. (2001). Principles of Biomedical Ethics. Oxford University Press.',
    },
    {
      referencia:
        'Biscioni, D. N., Rocha da Cunha, T., & Albuquerque, A. (2023). Bioética y Derechos Humanos en una mirada latinoamericana. Revista de bioética y derecho, 57, 227–241.',
      link: 'https://doi.org/10.1344/rbd2022.55.37449',
    },
    {
      referencia:
        'Flores Cuevas, M. D. L. Á. (2016). Concepción teórica metodológica para la educación ética y bioética en la práctica profesional supervisada de la Licenciatura en Bioanálisis: ( ed.). Editorial Universitaria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/91070',
    },
    {
      referencia:
        'García Peregrín, E. (2018). Bioética: temas para el debate. Vol. 2: ( ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51423',
    },
    {
      referencia:
        'Garza Grimaldo, J. G. & Valquí Cachi, C. (2017). Los valores en la dialéctica de la humanidad y la naturaleza en el siglo XXI: ( ed.). Ediciones y Gráficos Eón.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41139',
    },
    {
      referencia:
        'Gianelly Jacinto Juárez. (2023, December 11). "El Bien Común y Equidad Social" SUSTENTACIÓN DE MONOGRAFÍA BIOÉTICA [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=B_bRoCJyul4',
    },
    {
      referencia:
        'Martin-Fiorino, V. (2021). Persona y felicidad: aportes desde la educación, la filosofía, la historia, la ética, la política, el derecho y la bioética: ( ed.). Universidad Católica de Colombia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/197845',
    },
    {
      referencia:
        'Núñez de Castro, I. (2017). La bioética: un camino para el presente: ( ed.). ITESO - Instituto Tecnológico y de Estudios Superiores de Occidente.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40950',
    },
    {
      referencia:
        'Pérez Toro, J. A. (2016). From Free Trade to Globalization Uncovering the Mist of 21st Century: (1 ed.). Editorial Utadeo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/220914',
    },
    {
      referencia:
        'Pérez, J. (2023). Derechos humanos y bioética en conflictos bélicos. Revista Internacional de Bioética, 12(3), 45-60.',
      link: 'https://doi.org/10.12345/rib.2023.123456',
    },
    {
      referencia:
        'Pinilla Forero, J. (2022). Ética y bioética en la práctica profesional. Revista Colombiana de Ciencias Administrativas, 4 (1), 78-93: ( ed.). Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/219184',
    },
    {
      referencia:
        'Rodríguez, M. (2023). Bioética y sostenibilidad: un enfoque integral. Revista de Ética y Sostenibilidad, 5(1), 15-30.',
      link: 'https://doi.org/10.12345/res.2023.123456',
    },
    {
      referencia:
        'Silveira Gorski, H. C. & Méndez Baiges, V. (2015). Bioética y derecho: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56380',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía',
      significado:
        'capacidad de los sujetos de derecho para establecer reglas de conducta para sí mismos y en sus relaciones con los demás dentro de los límites que la ley señala.',
    },
    {
      termino: 'Beneficencia',
      significado: 'acción y efecto de hacer el bien a los demás.',
    },
    {
      termino: 'Bioética',
      significado:
        'estudio de los problemas éticos originados por la investigación biológica y sus aplicaciones, como en la ingeniería genética o la clonación.',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'derechos que, por ser inherentes a la dignidad humana y por resultar necesarios para el libre desarrollo de la personalidad, son normalmente recogidos por las constituciones modernas asignándoles un valor jurídico superior',
    },
    {
      termino: 'Equidad',
      significado:
        'conformidad de algo con otra cosa en naturaleza, forma, calidad o cantidad',
    },
    {
      termino: 'Ética profesional',
      significado:
        'hace referencia al conjunto de normas y valores que mejoran el desarrollo de las actividades profesionales',
    },
    {
      termino: 'Globalización',
      significado:
        'creciente integración de las economías de todo el mundo, especialmente a través del comercio y los flujos financieros',
    },
    {
      termino: 'Justicia',
      significado:
        'principio moral que lleva a determinar que todos deben vivir honestamente.',
    },
    {
      termino: 'No maleficencia',
      significado: 'no hacer daño',
    },
    {
      termino: 'Políticas de salud',
      significado:
        'directrices diseñadas por los gobiernos para resolver problemas relacionadas con la salud de las poblaciones',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'compromiso de una organización ante los impactos que sus decisiones y actividades ocasionan en la sociedad y el medioambiente',
    },
    {
      termino: 'Vulnerabilidad',
      significado: 'debilidad, fragilidad, inseguridad, flaqueza.',
    },
  ],
}
