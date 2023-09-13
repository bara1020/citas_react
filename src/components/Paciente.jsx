import { useEffect } from "react"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente')

        if (respuesta) {
            eliminarPaciente(id)
        }

    }

    // cuando esta vacio es cuando el componente esté listo
    useEffect(() => {
        // por ejemplo llamar a una api
    }, [])

  return (
    <div className='mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Nombre:
            <span className='font-normal normal-case'> {nombre}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Propietario:
            <span className='font-normal normal-case'> {propietario}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Email:
            <span className='font-normal normal-case'> {email}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Fecha alta:
            <span className='font-normal normal-case'> {fecha}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Sintomas:
            <span className='font-normal normal-case'> {sintomas}</span>
        </p>

        <div className="flex justify-between mt-5">
            <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 rounded-md text-white font-bold uppercase hover:bg-indigo-700"
            onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button 
            type="button"
            className="py-2 px-10 bg-red-600 rounded-md text-white font-bold uppercase hover:bg-red-700"
            onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
