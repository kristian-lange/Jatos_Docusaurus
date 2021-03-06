// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JATOS',
  tagline: 'Just Another Tool for Online Studies',
  url: 'https://jatos-test.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JATOS', // Usually your GitHub org/user name.
  projectName: 'jatos_docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JATOS',
        logo: {
          alt: 'JATOS Logo',
          src: 'img/jatos_logo_color.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/Whats-JATOS',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/Example-Studies',
            label: 'Example Studies',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'overview/Contact-us',
            position: 'left',
            label: 'Contact'
          },
          {type: 'docsVersionDropdown'},
          {
            href: "https://buymeacoffee.com/jatos",
            label: "Buy me a coffee",
            position: "right",
          },
          {
            href: 'https://github.com/JATOS/JATOS/releases/latest',
            label: 'Download',
            position: 'right'
          },
          {
            href: 'http://blog.jatos.org/',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/JATOS/JATOS',
            label: 'GitHub',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/overview/Whats-JATOS',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
