import fs from 'fs'
import Fastify, { FastifyRequest, FastifyReply } from 'fastify'

import {
  Thing,
  IThing,
} from '@projectkettle/shared/src/types'

import {
  MESSAGE,
} from '@projectkettle/shared/src/constants'

import {
  mountPath,
} from './settings'

let item: IThing = {
  name: MESSAGE,
  amount: 10,
}

const server = Fastify({ logger: true })

server.get<{
  Querystring: {
    fruit: string,
  },
  Reply: IThing,
}>(mountPath('/item'), {
  schema: {
    response: {
      200: Thing,
    }
  }
}, async (req, res) => {
  const { fruit } = req.query
  return item
})

server.post<{
  Body: IThing,
  Reply: IThing,
}>(mountPath('/item'), {
  schema: {
    body: Thing,
    response: {
      201: Thing,
    }
  }
}, async (req, res) => {
  item = req.body
  return item
})

const start = async () => {
  try {
    await server.listen(8080, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()