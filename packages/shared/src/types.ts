import { Static, Type } from '@sinclair/typebox'

export const Todo = Type.Object({
  name: Type.String(),
  text: Type.String(),
  comment: Type.String(),
})

export type ITodo = Static<typeof Todo>