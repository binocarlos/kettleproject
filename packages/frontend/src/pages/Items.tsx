import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import ItemList from '../components/ItemList'

const Items: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
          }}
        >
          <Typography
            variant="h4"
          >
            items
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Items