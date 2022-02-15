import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import {
  ITodo,
} from '@projectkettle/shared/src/types'

const ItemList: React.FC<{
  data: ITodo[],
}> = ({
  data,
}) => {
  return (
    <List component="nav">
      {
        data.map((item, i) => (
          <ListItemButton
            key={ i }
            sx={{
              pl: '20px',
            }}
          >
            <ListItemText primary={ item.name } />
          </ListItemButton>
        ))
      }
    </List>
  )
}

export default ItemList