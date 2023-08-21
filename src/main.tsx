import { createRoot } from 'react-dom/client'

import App from '~/App'
import '~/index.css'

// After
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
