import { useContext } from "react"
import VotacionContext from "../../context/VotacionContext"

export default function TotalVotos() {
    const { sum } = useContext(VotacionContext)

    return (
        <>
            <h3>Total de Votos {sum}</h3>       
        </>
    )
}