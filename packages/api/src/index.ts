import {
  Thing,
} from '@projectkettle/shared/src/types'

import {
  MESSAGE,
} from '@projectkettle/shared/src/constants'

const item: Thing = {
  name: MESSAGE ? true : 10,
}

setInterval(() => {
  console.log(MESSAGE)
  console.dir(item)
}, 1000)