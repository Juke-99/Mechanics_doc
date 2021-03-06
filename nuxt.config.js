export default {
  head: {
    titileTemplate: '%s - Mechanics',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',  content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        defer: true,
        src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js',
        integrity: 'sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4',
        crossorigin: 'anonymous'
      },
      {
        defer: true,
        src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js',
        integrity: 'sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa',
        crossorigin: 'anonymous',
        onload: 'renderMathInElement(document.body);'
      }
    ],
    style: [
      {
        cssText: 'html, body { padding: 0; margin: 0; }',
        type: 'text/css'
      }
    ]
  }
}