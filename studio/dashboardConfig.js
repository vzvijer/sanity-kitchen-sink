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
                  buildHookId: '6192668153d3bba5b1ec8041',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v5cj4uae',
                  apiId: '7630c0ab-d4a9-4d3c-9284-78a7be8afcfd'
                },
                {
                  buildHookId: '61926682899a878b8cbd38ca',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6yo6ebji',
                  apiId: '26a6037c-eebc-4b3f-b5e3-844664867955'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vzvijer/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6yo6ebji.netlify.app', category: 'apps'}
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
