import React from 'react';
import DraggableCard from './DraggableCard';
import useBoard from '../hooks/useBoard';

const Board = (props) => {
  const { isActive, drop, collapsed, setCollapsed } = useBoard(props);

  return (
    <div
      ref={drop}
      style={{ opacity: isActive ? 0.5 : 1, backgroundColor: "#FAF9FF" }}
    >
      <strong>
        {props.title}  
      </strong>
      {props.cards.map(card => (
        <DraggableCard key={card.id} {...card}/>
        ))}
    </div>     
  )
}

export default Board