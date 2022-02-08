import { Static, Type } from '@sinclair/typebox'

export const Thing = Type.Object({
  name: Type.String(),
  amount: Type.Number(),
})

export type IThing = Static<typeof Thing>