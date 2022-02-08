import {Get} from "@tsed/schema"
import {Controller} from "@tsed/di"
import {QueryParams} from "@tsed/platform-params"

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
  @Get('/')
  message(@QueryParams() query: any): string {
    return item.name + ' --- ' + JSON.stringify(query)
  }
}