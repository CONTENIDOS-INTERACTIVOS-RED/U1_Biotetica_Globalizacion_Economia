<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(subTitulo="SÍNTESIS")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-up").mb-5 La Unidad 1: Fundamentos de la bioética en el contexto global, introduce los principios esenciales de la bioética y su relevancia en un mundo interconectado. Esta unidad explora conceptos clave como la justicia, la autonomía, la beneficencia y la no maleficencia, enmarcados en el impacto de la globalización, los dilemas éticos contemporáneos y su relación con la sostenibilidad, la equidad social y los derechos humanos. Proporciona una base teórica sólida para reflexionar sobre los desafíos éticos que surgen de los avances científicos, tecnológicos y económicos, promoviendo una comprensión integral que capacite a los estudiantes para aplicar estos principios en su práctica profesional y en la construcción de un futuro ético y sostenible.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure.bg-color-sintesis.p-5.brounded
          img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
    

</template>
<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import Footer from '../../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
