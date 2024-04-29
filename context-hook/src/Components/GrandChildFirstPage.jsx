import React, { useContext} from 'react';
import noteContext from '../Context/notes/noteContext';

function GrandChildFirstPage() {
    const a = useContext(noteContext);

    const {updateState} = useContext(noteContext);

    const handleClick = () =>{
        updateState({
            name:"Saurabh",
            class:"9b"
        })
    }

  return (
    <div>
    <h1>GrandChildFirstPage</h1>
    <h2>This is passing something from parent to GrandChild like {a.state.name} who studies in class {a.state.class}</h2>
    <button onClick={handleClick}>Click Here</button>
    </div>
    )
}

export default GrandChildFirstPage;