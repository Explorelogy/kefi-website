exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allDataJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retriving data", data.errors)
    return
  }

  const dataTemplate = require.resolve("./src/template/template.js")

  data.data.allDataJson.edges.forEach(edge => {
    createPage({
      path: `/events/${edge.node.slug}/`,
      component: dataTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
