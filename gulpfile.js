var gulp = require('gulp'),
    perfTool = require('devbridge-perf-tool'),
    SITE_PAGES = [
      '/',
      '/seguro-auto',
      '/seguro-auto/seguro-uber',
      '/seguro-auto/carros-antigos',
      '/seguro-auto/seguro-taxi',
      '/seguro-moto',
      '/seguro-residencial',
      '/seguro-de-acidentes-pessoais',
      '/seguro-viagem',
      '/seguro-celular',
      '/seguro-camera-fotografica',
      '/seguro-filmadora',
      '/seguro-notebook',
      '/seguro-tablet',
      '/porto-seguro-conecta',
      '/siggo-sascar',
      '/consorcio-carro',
      '/consorcio-imobiliario',
      '/blog',
      '/blog/transporte-sp-tecnologia/',
      '/quem-somos',
      '/central-de-ajuda'
    ];

gulp.task('perf-tool', function () {
  perfTool.performance({
    siteURL: 'https://www.bidu.com.br',
    sitePages: SITE_PAGES
  });
});

gulp.task('default', ['perf-tool']);
