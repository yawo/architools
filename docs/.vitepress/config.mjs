import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Architools Wiki',
  description: 'A curated collection of tools, frameworks, and infrastructure for AI engineering and architecture.',

  base: '/architools/',
  // Source wiki files live at repo root; pre-hooks rsync them into docs/

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  sitemap: {
    hostname: 'https://yawo.github.io'
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Tools',
        items: [
          { text: 'All Tools', link: '/tooling/tools' },
          { text: 'Agent Runtimes', link: '/tooling/tools#agent-runtimes--frameworks' },
          { text: 'AI Coding', link: '/tooling/tools#ai-coding-assistants--harnesses' },
          { text: 'Databases', link: '/tooling/tools#databases--vector-stores' },
          { text: 'RAG & Graphs', link: '/tooling/tools#rag--knowledge-graphs' },
          { text: 'Developer Tools', link: '/tooling/tools#developer-tools--cli' },
        ]
      },
      { text: 'Log', link: '/log' },
    ],

    sidebar: {
      '/tooling/': [
        {
          text: 'Tooling Reference',
          items: [
            { text: 'All Categories', link: '/tooling/tools' },
            { text: '', link: '' },
            { text: '— Details —', link: '' },
            { text: 'DeerFlow', link: '/tooling/deer-flow' },
            { text: 'Leaf', link: '/tooling/developer-utilities/leaf' },
            { text: 'Medusa', link: '/tooling/medusa' },
            { text: 'MikeRust', link: '/tooling/mikerust' },
            { text: 'Milvus', link: '/tooling/milvus' },
            { text: 'RAGFlow', link: '/tooling/ragflow' },
            { text: 'ZeroClaw', link: '/tooling/zeroclaw' },
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    outline: {
      level: [2, 3]
    },

    lastUpdated: {
      text: 'Last updated'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yawo/architools' }
    ],

    footer: {
      message: 'Maintained with Yeda — Karpathy LLM Wiki paradigm.',
      copyright: '© 2026 Architools'
    }
  },

  markdown: {
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    }
  }
})