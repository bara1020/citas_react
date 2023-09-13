
import Header from "./components/header"
import Form from "./components/Form"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerPacientes = () => {
      console.log(localStorage.getItem('pacientes'))
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes') )
      setPacientes(pacientesLocalStorage)
    }
    obtenerPacientes()
  }, [])

  useEffect(() => {
    console.log('pacientes', pacientes);
    if (pacientes.length > 0) 
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
     <Header
     />
     <div className="mt-12 md:flex">
      <Form 
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}

      />
      <ListadoPacientes 
      setPaciente={setPaciente}
      pacientes={pacientes}
      eliminarPaciente={eliminarPaciente}
      />
     </div>
    </div>
  )
}

export default App
