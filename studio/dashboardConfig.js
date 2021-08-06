export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610d3cd98e155ccc2afb1b1c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vgnegavn',
                  apiId: 'a40f63cb-227e-4d4e-b573-79923f34d6ce'
                },
                {
                  buildHookId: '610d3cd94f319fcde9fce85e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v5mziwee',
                  apiId: 'c33294fc-6b3a-44f3-bf4f-f3b40cf827cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aross164/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v5mziwee.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
