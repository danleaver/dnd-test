import React from 'react';



const Card = (props) => {
  return (
    <div style={{
      width: "1000 px", 
      padding: "0.75rem", 
      // overflow: "hidden",
      // whiteSpace: "nowrap",
      // textOverflow: "ellipsis"
      overflowWrap: "break-word",
      backgroundColor: props.color,
      // backgroundColor: "#fdffd6"
    }}>
      {props.title}
    </div>
  )
/**
 * CDF5E2
 * CDCCF5
 * F5CCE0
 * F4F5CC
 */
}




export default Card