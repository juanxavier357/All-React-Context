import { useContext } from "react"
import VotacionContext from "../../context/VotacionContext"
import candidatos from '../../assets/candidatos'
import './index.scss'

export default function Candidatos() {

    const { increment } = useContext(VotacionContext)

    const handleIncrement = (e) => {
        const { id } = e.target
        increment(id)
    }

    return (
        <>
            <div className='content__candidatos'>
                {candidatos.map((candidato) => (
                    <div key={candidato.id} className='content__candidatos--individual'>
                        <img src={candidato.image} alt={candidato.name} width='100px' height='100px' />
                        <h2>{candidato.name}</h2>
                        <p>{candidato.description}</p>
                        <button id={`count${candidato.id}`} onClick={handleIncrement}>Votar</button>
                    </div>
                ))}
            </div>
        </>
    )
}