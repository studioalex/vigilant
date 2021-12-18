/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
 module.exports = {
  lang: 'en-US',
  title: 'OUI',
  description: 'A lightweight Vue 3 component library',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/alexandervu/one-ui',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/'
      },
      {
        text: 'Theme',
        link: '/theme'
      },
      {
        text: 'Variables',
        link: '/variables',
        children: [],
      },
      {
        text: 'Components',
        children: getComponents(),
      },
    ],
  },
}

function getComponents() {
  return [
    { text: 'Box', link: '/guide/box/box' }
  ]
}
