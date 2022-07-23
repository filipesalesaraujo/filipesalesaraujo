import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import ScrollToTop from './components/ScrollToTop'

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <ScrollToTop />
    </BrowserRouter>
  )
}
