// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const milSimSidebar = require.resolve('./sidebarsMilSim.js')


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Black Star Gaming',
  tagline: 'Deutsche Multigaming Community',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blackstar-gaming.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nikolai-Ahlhelm', // Usually your GitHub org/user name.
  projectName: 'blackstar-gaming', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nikolai-Ahlhelm/blackstar-gaming/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nikolai-Ahlhelm/blackstar-gaming/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'milsim',
        path: 'milsim',
        routeBasePath: 'milsim',
        sidebarPath: require.resolve('./sidebarsMilSim.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Black Star Gaming',
        logo: {
          alt: "BSG Logo :( - Report me, I'm broken",
          src: 'https://raw.githubusercontent.com/Nikolai-Ahlhelm/blackstar-gaming/main/static/img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: '🎮 Projekte',
            position: 'left',
            items: [
              {type: 'docSidebar', docsPluginId: 'milsim', sidebarId: 'milsimSidebar', label: '🪖 MilSim',},
              {to: '/docs/scp_sl', label: '🔬 SCP: Secret Laboratory'},
              {to: '/docs/category/%EF%B8%8F-minecraft-1', label: '⛏️ Modded Minecraft'},
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: '🌍 Wiki',
          },
          {to: '/blog', label: '📰 Blog', position: 'left'},
          {
            type: 'docSidebar',
            docsPluginId: 'milsim',
            sidebarId: 'milsimSidebar',
            position: 'left',
            label: '🪖 MilSim',
          },
          {
            label: '♾️ Status',
            position: 'right',
            href: 'https://stats.uptimerobot.com/m2vnJhpzlL',
          },
          {
            label: '🎮 Discord',
            position: 'right',
            href: 'http://dc.blackstar-gaming.de',
          },
          {
            label: '🎧 Teamspeak',
            position: 'right',
            href: 'ts3server://ts.blackstar-gaming.de?port=9987',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Discord',
                href: 'http://discord.blackstar-gaming.de',
              },
              {
                label: 'Teamspeak',
                href: 'ts3server://ts.blackstar-gaming.de?port=9987',
              },
              {
                label: 'Twitter',
                href: 'http://twitter.blackstar-gaming.de',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Black Star Gaming Community. </br> Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
