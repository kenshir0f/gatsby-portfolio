const path = require('path')
const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`)
const mdx = require(`gatsby-plugin-mdx/utils/mdx`)

exports.createPages = async ({graphql, actions}, themeOptions) => {

  const {data} = await graphql(`
    {
      allMdx {
        nodes {
          fileAbsolutePath
          rawBody
          parent {
            ... on File {
              relativeDirectory
              name
            }
          }
        }
      }
    }
  `)

  return Promise.all(
    data.allMdx.nodes.map(async node => {
      const pagePath = path
        .join(
          node.parent.relativeDirectory,
          node.parent.name === 'index' ? '/' : node.parent.name,
        )
        .replace(/\\/g, '/')

      const code = await mdx(node.rawBody)
      const {frontmatter} = extractExports(code)

      actions.createPage({
        path: pagePath,
        component: node.fileAbsolutePath,
        context: {
          frontmatter,
        },
      })
    }),
  )
}
