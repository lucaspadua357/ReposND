import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header'
import { Hero2 } from './components/Hero'
import { Card } from './components/Card'
import { Testimonials } from './components/Testimoinals'
import { Process } from './components/Process'
import { Idea } from './components/Idea'
import { Footer } from './components/Footer'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero2 />
    <Process />
    <Card />
    <Testimonials />
    <Idea />
    <Footer />
  </StrictMode>,
)
