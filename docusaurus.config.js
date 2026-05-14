// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oleh Shynkarenko',
  tagline: 'There are no things that can be said to be in place.',
  favicon: 'img/favicon.svg',

  // Future flags — disabled to use stable webpack bundler
  future: {
    v4: false,
  },

  // Set the production url of your site here
  // Update this to your actual domain if you set up a custom one
  url: 'https://shynkarenko.netlify.app',
  baseUrl: '/',

  organizationName: 'SingingFoot',
  projectName: 'shynkarenko',

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Open Graph / Twitter social card
      image: 'img/portrait.jpg',

      // Global meta tags injected into every page <head>
      metadata: [
        {
          name: 'keywords',
          content: [
            'Олег Шинкаренко',
            'Олег Вікторович Шинкаренко',
            'Oleh Shynkarenko',
            'Oleg Shynkarenko',
            'Ukraine',
            'Україна',
            'українська література',
            'Ukrainian literature',
            'Ukrainian science fiction',
            'Ukrainian novelist',
            'Zaporizhzhia',
            'Запоріжжя',
            'технічний письменник',
            'technical writer',
            'documentary filmmaker',
          ].join(', '),
        },
        { name: 'author', content: 'Oleh Shynkarenko' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Oleh Shynkarenko' },
      ],

      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Oleh Shynkarenko',
        logo: {
          alt: 'Oleh Shynkarenko — shell logo',
          src: 'img/shell-logo.svg',
          width: 77,
          height: 77,
        },
        items: [
          {to: '/about', label: 'About me', position: 'left'},
          {to: '/books', label: 'Books', position: 'left'},
          {to: '/articles', label: 'Articles', position: 'left'},
          {to: '/photos', label: 'Photos', position: 'left'},
          {to: '/videos', label: 'Videos', position: 'left'},
          {to: '/music', label: 'Music', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {label: 'About me', to: '/about'},
              {label: 'Books', to: '/books'},
              {label: 'Articles', to: '/articles'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Photos', to: '/photos'},
              {label: 'Videos', to: '/videos'},
              {label: 'Music', to: '/music'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oleh Shynkarenko`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
