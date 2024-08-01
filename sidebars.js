/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Introcucao: [
    {
      type: 'category',
      label: 'Introdução',
      link: {
        type: 'doc',
        id: 'introducao',
      },
      items: [],
      },
      {
        type: 'category',
      label: 'Módulos',
      link: {
        type: 'doc',
        id: 'modulos/modulos',
      },
      collapsed: true,
      items:  [
        {
          type: 'category',
          label: 'Conceitos',
          link: {
            type: 'doc',
            id: 'modulos/conceitos/conceitos',
          },
          collapsed: true,
          items: [
            "modulos/conceitos/estrategia/estrategia",
            "modulos/conceitos/tipos/tipos",
          ]
        },
      ],
    },
  ],
};

module.exports = sidebars;
