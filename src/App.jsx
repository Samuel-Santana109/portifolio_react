
import { NavBar } from './componentes/NavBar/NavBar'
import { Header } from './componentes/Header/Header'
import { SectionProjetos } from './section/SectionProjetos/SectionProjetos.jsx'
import {SobreMim} from './section/SobreMim/SobreMim'
import { Oportunidades } from './section/Oportunidades/Oportunidades'
import { Habilidade } from './section/Habilidades/Habilidades'
import { Footer } from './componentes/Footer/Footer'

//import { BarraDeProgresso } from './Animaçoes/window-scroll-progress/progress'

import './App.scss'
import { motion } from "framer-motion";


function App() {

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
   >
    <NavBar />
  

    <Header /> 
    <SobreMim /> 
    <Oportunidades />
    <Habilidade />
    <SectionProjetos />
    <Footer />
  </motion.div>
  )
} 

export default App
