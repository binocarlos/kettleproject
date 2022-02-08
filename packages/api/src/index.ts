import { Type } from '@sinclair/typebox'
import Fastify from 'fastify'

import {
  Todo,
  ITodo,
} from '@projectkettle/shared/src/types'

import {
  mountPath,
} from './settings'

let items: ITodo[] = []

const server = Fastify({ logger: true })

server.get<{
  Querystring: {
    fruit: string,
  },
  Reply: ITodo[],
}>(mountPath('/items'), {
  schema: {
    response: {
      200: Type.Array(Todo),
    }
  }
}, async (req, res) => {
  const { fruit } = req.query
  return items
})

server.post<{
  Body: ITodo,
  Reply: ITodo,
}>(mountPath('/items'), {
  schema: {
    body: Todo,
    response: {
      201: Todo,
    }
  }
}, async (req, res) => {
  items = items.concat([req.body])
  return req.body
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