import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const boards = [
  {
    state: "denial",
    title: "Denial"
  },
  {
    state: "acceptance",
    title: "Acceptance"
  },

]

function App() {
  const [ cards, setCards ] = useState([
    { 
      id: 1,
      state: "denial",
      title: "I am rich"
    },
    { 
      id: 2,
      state: "acceptance",
      title: "I am happy"
    },
    { 
      id: 3,
      state: "denial",
      title: "I am smart"
    },
    { 
      id: 4,
      state: "denial",
      title: "I am successful"
    },
  ]);



  //boards

  /**
   * boards have a state
   * cards match that state get sorted into boards
   */
  //cards
  

  const setState = (id, state) => {
    console.log("id, state :", id, state)
    const droppedCard = cards.find((rec) => rec.id === id);
    setCards([
      ...cards.filter((rec) => rec.id !== id),
      { ...droppedCard, state },
      // { ...droppedCard, status:state },
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {boards.map(board => (
        <>
          <Board
            key={board.state}
            {...board}
            cards={cards.filter(card => card.state === board.state)}
            afterDropHandler={setState}
          />
          <br />
        </>
      ))}
    </DndProvider>
  );
}

export default App;
