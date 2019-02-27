import React from 'react';

const todoList = (props) => {
    return props.items.map((item, index)=>(
    <li key={index}>
            <span  className={props.isStrike(index)? 'strikethrough': ''}
            onClick={()=>props.strike(index)}>
                {item}
            </span>
            <button onClick={() =>props.remove (index)}> - </button>
     </li>
)

)
}
export default todoList;