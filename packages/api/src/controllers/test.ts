import {Get} from "@tsed/schema"
import {Controller} from "@tsed/di"

import {
  Thing,
} from '@projectkettle/shared/src/types'

import {
  MESSAGE,
} from '@projectkettle/shared/src/constants'

const item: Thing = {
  name: MESSAGE,
  amount: 10,
}

@Controller("/test")
export class TestCtrl {
  @Get()
  findAll(): string {
    return item.name
  }
}