import React from 'react';
import Draggable from 'react-draggable';

function ReactDraggable() {
    let bee = [1, 2, 3]

    function handleDrag(e, data) {
        console.log('當前位置', data.x, data.y);
    }
    function handleStop(e, data) {
        console.log('end', data.x, data.y);
    }

    return (<>
        {bee.map((val) => {
            return(
            <Draggable onDrag={handleDrag} onStop={handleStop} bounds={{ left: 0, top: 0, right: 500, bottom: 500 }}>
                <div style={{
                    padding: '20px',
                    backgroundColor: 'lightblue',
                    border: '1px solid #333',
                    borderRadius: '5px',
                    cursor: 'move'
                }}>{val}</div>
            </Draggable>)
        })}
        <button>新增</button>

    </>)
}

export default ReactDraggable
