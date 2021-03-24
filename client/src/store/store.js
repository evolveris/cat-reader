import React, {createContext, useReducer} from "react";
import Reducer from './reducer'

const initialAppState = {
    fetchingBooks: true,
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialAppState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialAppState);
export default Store;