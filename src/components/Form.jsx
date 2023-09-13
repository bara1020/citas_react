import {useState, useEffect} from 'react'
import Error from './Error'


const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {

   const [nombre, setNombre] = useState('')
   const [propietario, setPropietario] = useState('')
   const [email, setEmail] = useState('')
   const [fecha, setFecha] = useState('')
   const [sintomas, setSintomas] = useState('')
   const [error, setError] = useState(false)
   

   // cuando un state cambia se ejecuta el useEffect
   useEffect(() => {
         if(paciente){
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setSintomas(paciente.sintomas)
         }
    }, [paciente])

/*
    // cuando esta vacio es cuando el componente esté listo
    useEffect(() => {
        // por ejemplo llamar a una api
    }, [])

*/
   const handleSubmit = (e) => {
        e.preventDefault()
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return
        } 
        
        setError(false)

        const pacienteTemp = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id) {
            pacienteTemp.id = paciente.id   
            const pacientesActualizados = pacientes.map(pacienteState => {
                return pacienteState.id === paciente.id ? pacienteTemp : pacienteState
            })

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            pacienteTemp.id = generarId()
            setPacientes([...pacientes, pacienteTemp])
        }

       resetForm()

    }

    const generarId = () => {
        const random =  Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha

    }

    const resetForm = () => {
        setEmail('')
        setFecha('')
        setNombre('')
        setPropietario('')
        setSintomas('')
    }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añadir Pacientes y
        <span className='text-indigo-600 font-bold'> Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
      <div className='mb-5'>
            <label 
            htmlFor='mascota'
            className='block text-grey-700 uppercase font-bold'>
                Nombre Mascota
                </label>
            <input
            id='mascota'
            className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            type="text" 
            placeholder='Nombre de la mascota' 
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div className='mb-5'>
            <label 
            htmlFor='propietario'
            className='block text-grey-700 uppercase font-bold'>
                Nombre Propietario
                </label>
            <input
            id='propietario'
            className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            type="text" 
            placeholder='Nombre del propietario'
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)} />
        </div>
        <div className='mb-5'>
            <label 
            htmlFor='email'
            className='block text-grey-700 uppercase font-bold'>
                 Email
                </label>
            <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            type="email" 
            placeholder='Email contacto propietario'
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='mb-5'>
            <label 
            htmlFor='alta'
            className='block text-grey-700 uppercase font-bold'>
                 Alta
                </label>
            <input
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            type="date" 
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
           />
        </div>
        <div className='mb-5'>
            <label 
            htmlFor='sintomas'
            className='block text-grey-700 uppercase font-bold'>
                 Sintomas
                </label>
                <textarea 
                 className='border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'

                name="sintomas" id="sintomas" cols="30" rows="5"
                placeholder='Describe los sintomas'
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)}>

                </textarea>
        </div>

        <input type="submit"
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition duration-500 ease-in-out cursor-pointer'
         value={paciente.id ? 'Editar paciente':'Agregar paciente'} />
      </form>
    </div>
  )
}

export default Form
