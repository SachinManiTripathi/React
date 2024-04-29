import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
const initialState = {
    name: "Sachin",
    class:"10B"
}

const [state,setState] = useState(initialState);

const updateState = (newState) => {
    setState(newState);
}

    return(
        <NoteContext.Provider value={{state,updateState}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;