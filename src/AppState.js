import React, {useContext, useReducer} from 'react'


// INITIAL STATE

const initialState = {
    url: "http://localhost:3000",
    token: null,
    username: null
}

// REDUCER

const reducer = (state, action) => {
    console.log(action)
    let newState;
    switch(action.type){

        case "auth": 
            newState = {...state, ...action.payload};
            return newState;
            break;

            // case "login":
                 
            // fetch(state.url + "/login/", {
            //     mode: 'no-cors',
            //     method: "post",
            //     headers: {
            //         "Content-Type" : "application/json"
            //     },
            //     body: JSON.stringify(action.payload)
            // })
            // .then((response) => response.json())
            // .then((user) => {
            //     return {
            //         ...state,
            //         token: user.token,
            //         user: user

            //     }
            // }) 
            // break;  

        default:
            return state;
            break;
    }
}

// APP CONTEXT

const AppContext = React.createContext(null);

// AppState

export const AppState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
}

// hook

export const useAppState = () => {
    return React.useContext(AppContext)
}

