<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p(data-aos="fade-right") Esta primera unidad del curso de Bioética, globalización y economía, está enfocada en que el estudiante comprenda los principios de la bioética y su relevancia en la toma de decisiones profesionales en diversos campos, dentro del contexto de la globalización, en donde el estudiante podrá conocer a fondo, el impacto y la trascendencia de la bioética en los diferentes escenarios.

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right") La bioética como área de estudio esencial en un mundo cada vez más interconectado de la ciencia, la tecnología y la economía, ofrece soluciones a los dilemas éticos que surgen de los avances globales. La primera unidad, Fundamentos de la bioética en el contexto global, servirá como base para comprender los principios básicos de esta disciplina, tales como: justicia, autonomía, beneficencia y no maleficencia, así como el impacto de la globalización en los dilemas éticos contemporáneos y la bioética y su relación con la sostenibilidad, la equidad social y los derechos humanos.
        p(data-aos="fade-right") Estos principios éticos no se limitan a la investigación médica y científica, sino que también se extienden a campos como la economía y la política, donde la globalización presenta nuevos desafíos y oportunidades para promover la equidad, la sostenibilidad y los derechos humanos.  
      .col-lg-5
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mt-4.mt-lg-0

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left") Al aplicar este conocimiento a sus áreas de especialización, pueden aplicarlo para resolver problemas difíciles, con una sólida perspectiva ética.

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Esta área de formación es relevante para los desafíos éticos que enfrenta en su profesión, como abordar la equidad en la atención médica, la sostenibilidad en las políticas públicas o los dilemas éticos relacionados con la tecnología moderna.
          
          p(data-aos="fade-left") Se examinarán escenarios y se discutirá la aplicación de principios éticos a situaciones específicas, en un contexto globalizado. 

      .row.mb-5
        .col-lg-7
          p(data-aos="fade-right") La unidad se divide en tres grandes subtemas: 

          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Principios fundamentales de bioética.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Globalización y sus implicaciones.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Bioética, sostenibilidad, equidad social y derechos humanos. 
   
          p(data-aos="fade-right") Para fomentar el pensamiento crítico y la aplicación práctica de los conceptos vistos, se llevarán a cabo actividades a lo largo del curso. 

          p(data-aos="fade-right") Se espera la participación en discusión, mediante un foro, así como también la contemplación reflexiva de los temas planteados. 

        .col-lg-5
          figure
            img(src="@/assets/curso/intro/4.png", data-aos="zoom-in").mt-4.mt-lg-0

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bg-color-2.py-4.px-5
            p(data-aos="fade-right").mb-0 La bioética no es un requisito previo para la comprensión temática contemplada en esta unidad, pero requiere un compromiso con el aprendizaje y un interés de abordar los temas propuestos, con una mentalidad crítica y abierta.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
