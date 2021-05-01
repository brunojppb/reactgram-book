/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Reactgram',
  tagline: 'Learn React by building an instagram clone from scratch',
  url: 'https://reactgram.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'brunojppb', // Usually your GitHub org/user name.
  projectName: 'Reactgram', // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: 'img/reactgram.jpg',
    ogImage: 'img/reactgram.jpg',
    twitter: true,
    twitterUsername: 'bpaulino0',
    twitterImage: 'img/reactgram.jpg',
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    navbar: {
      title: 'Reactgram',
      hideOnScroll: true,
      logo: {
        alt: 'Reactgram',
        src: 'img/reactgram-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/brunojppb/reactgram-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {
              label: 'Start reading here',
              to: '/book',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Reactgram Book. Created by Bruno Paulino.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'book',
          routeBasePath: 'book',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/brunojppb/reactgram-book/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
