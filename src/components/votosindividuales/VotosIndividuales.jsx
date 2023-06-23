import { useContext } from 'react'
import VotacionContext from '../../context/VotacionContext'
import './index.scss'

export default function VotosIndividuales() {
  const { count, sum, valid } = useContext(VotacionContext)

  return (
    <>
      <div className='content__votos--individuales'>
        <div>
          <h3>Candidato 1 {(valid.valid1 && `: ${count.count1} votos`)}
            {(valid.valid2 && ` = ${((count.count1 * 100) / sum).toFixed(2)} %`)}</h3>
          <h3>Candidato 2 {(valid.valid1 && `: ${count.count2} votos`)}
            {(valid.valid2 && ` = ${((count.count2 * 100) / sum).toFixed(2)} %`)}</h3>
        </div>
        <div>
          <h3>Candidato 3 {(valid.valid1 && `: ${count.count3} votos`)}
            {(valid.valid2 && ` = ${((count.count3 * 100) / sum).toFixed(2)} %`)}</h3>
          <h3>Candidato 4 {(valid.valid1 && `: ${count.count4} votos`)}
            {(valid.valid2 && ` = ${((count.count4 * 100) / sum).toFixed(2)} %`)}</h3>
        </div>
      </div>
    </>
  )
}