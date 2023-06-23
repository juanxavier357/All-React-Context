import PropTypes from 'prop-types';

// a. Importar el createContext
import { createContext, useState } from 'react'

// b. Crear el contexto
const VotacionContext = createContext()

// d. Crear el componente que provee el contexto
export const VotacionProvider = ({ children }) => {
    const [count, setCount] = useState({
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
    });

    const [valid, setValid] = useState({
        valid1: true,
        valid2: false,
    })

    const voting = {
        count,
        valid,
        increment: (id) => setCount((count) => ({
            ...count,
            [id]: count[id] + 1,
        })),
        sum: Object.values(count).reduce((add, update) => {
            return add + update;
        }, 0),
        filter: (option) => {
            switch (option) {
                case 'porcentaje':
                    setValid({
                        ...valid,
                        valid1: false,
                        valid2: true
                    });
                    break;
                case 'total':
                    setValid({
                        ...valid,
                        valid1: true,
                        valid2: false
                    });
                    break;
                case 'todos':
                    setValid({
                        ...valid,
                        valid1: true,
                        valid2: true
                    });
                    break;
            }
            return valid;
        }
    }

    return (
        <VotacionContext.Provider value={voting}>
            {children}
        </VotacionContext.Provider>
    )
}

// c. Exportar el contexto
export default VotacionContext

VotacionProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

