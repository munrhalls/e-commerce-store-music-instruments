const fastify = require('fastify')({ logger: true })
const path = require('path')
const fs = require('fs').promises

const DIST_FOLDER = path.join(
  __dirname,
  'dist/e-commerce-store-musical-instruments'
)
const PORT = process.env.PORT || 3000

fastify.register(require('fastify-static'), {
  root: DIST_FOLDER,
  wildcard: false // Disable wildcard to manually handle routes below
})

fastify.get('*', async (req, reply) => {
  try {
    const indexPath = path.join(DIST_FOLDER, 'index.html')
    const content = await fs.readFile(indexPath, 'utf8')
    reply.type('text/html').send(content)
  } catch (err) {
    reply.status(500).send('Server Error')
  }
})

fastify.listen(PORT, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server running at ${address}`)
})
