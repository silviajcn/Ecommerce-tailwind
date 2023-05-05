import { createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export const ShoppingCartProvider = ({ children }) => {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.object
}