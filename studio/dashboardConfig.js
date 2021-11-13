export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '618f6c8853d3bb84bbec22ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4o15z5ti',
                  apiId: '803fb16f-b7d9-46fe-a67c-a39fc6a6eefc'
                },
                {
                  buildHookId: '618f6c89edf7c887254f1095',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4tzg86h7',
                  apiId: '122e53fd-98bd-45ea-ac0d-84063af8ad9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soboutlook/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4tzg86h7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
