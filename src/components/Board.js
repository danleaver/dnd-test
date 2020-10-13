import React from 'react';
import DraggableCard from './DraggableCard';
import useBoard from '../hooks/useBoard';

const Board = (props) => {
  const { isActive, drop, collapsed, setCollapsed } = useBoard(props);

  return (
    <div
      ref={drop}
      style={{ 
        opacity: isActive ? 0.5 : 1, 
        backgroundColor: "#FAF9FF", 
        padding: "1rem",
        height: "500px"
        // whiteSpace: "initial",
        // flexShrink: "0",
        // textOverflow: "ellipsis",
      }}
    >
      <div style={{textAlign: "center"}}>
        <strong>
          {props.title}  
        </strong>        
      </div>
      {props.cards.map(card => (
        <>
          <div style={{height: "1rem"}}></div>
          <DraggableCard key={card.id} {...card}/>
        </>
      ))}
    </div>     
  )
}

export default Board