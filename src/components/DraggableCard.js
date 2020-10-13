import React from 'react';
import useDraggable from '../hooks/useDraggable';
import Card from './Card';


const DraggableCard = (props) => {
  const { opacity, drag } = useDraggable(props.id)

  return (
    <div ref={drag}>
      <Card {...props} opacity={opacity} />
    </div>
  )
}

export default DraggableCard;