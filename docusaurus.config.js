/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Reactgram',
  tagline: 'Learn React by building an instagram clone from scratch',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'brunojppb', // Usually your GitHub org/user name.
  projectName: 'Reactgram', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Reactgram',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
