<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Impacto de la globalización en los dilemas éticos contemporáneos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-right") La globalización, como fenómeno transformador, ha incrementado la interdependencia económica, política y social entre las naciones, redefiniendo las dinámicas éticas a nivel mundial. A continuación, en el PDF Impacto de la globalización en los dilemas éticos contemporáneos , se examina cómo la interacción global plantea nuevos dilemas éticos en áreas clave como la salud, los derechos humanos y el medio ambiente, exigiendo una reconfiguración de los principios bioéticos tradicionales. A través de ejemplos concretos y análisis crítico, se invita al lector a reflexionar sobre los desafíos éticos que emergen en un mundo interconectado, destacando la importancia de la bioética como disciplina esencial para promover la justicia, la equidad y la sostenibilidad en un contexto globalizado.

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> Impacto de la globalización en los dilemas éticos contemporáneos 

      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mt-4.mt-lg-0
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
