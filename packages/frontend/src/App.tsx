import { createTheme, ThemeProvider } from '@mui/material/styles'
import Layout from "./pages/Layout"
import {
  useRoute,
} from './routes'

const mdTheme = createTheme()

export default function App() {
  const route = useRoute()
  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Layout
          route={ route }
        >
          { route.page }
        </Layout>
      </ThemeProvider>
    </div>
    
    
  )
}
