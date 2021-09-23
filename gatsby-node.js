const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const dsgPageTemplate = path.resolve(`src/templates/dsg.js`)

  const indices = Array.from({length: 10}, (_, i) => i + 1)

  indices.forEach(index => {
    createPage({
      path: `/dsg/${index}`,
      component: dsgPageTemplate,
      context: {
        index,
      },
      defer: true,
    })
  })
}
