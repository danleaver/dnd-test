import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Header from './components/Header';

const boards = [
  {
    state: "denial",
    title: "Denial"
  },
  {
    state: "anger",
    title: "Anger"
  },  
  {
    state: "bargaining",
    title: "Bargaining"
  },  
  {
    state: "depression",
    title: "Depression"
  },
  {
    state: "acceptance",
    title: "Acceptance"
  },

]
const colors = [
  "#CDF5E2",
  "#CDCCF5",
  "#F5CCE0",
  "#F4F5CC"
]

const cardColor = () => colors[Math.floor(Math.random() * colors.length)]

function App() {
  const [ cards, setCards ] = useState([
    { 
      id: 1,
      state: "denial",
      title: "I am going bald",
      color: cardColor()
    },
    { 
      id: 2,
      state: "acceptance",
      title: "I am in debt",
      color: cardColor()
    },
    { 
      id: 3,
      state: "denial",
      title: "I am a terrible golfer",
      color: cardColor(),
    },
    { 
      id: 4,
      state: "denial",
      title: "I am an avid procrastinator",
      color: cardColor(),
    },
  ]);


  const setState = (id, state) => {
    const droppedCard = cards.find((rec) => rec.id === id);
    setCards([
      ...cards.filter((rec) => rec.id !== id),
      { ...droppedCard, state },
    ]);
  };

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <div style={{display: "flex", padding: "1rem"}}>
          {boards.map(board => (
            <div style={{padding: "1rem", width: "200px", flexShrink: "0"}}>
              <Board
                key={board.state}
                {...board}
                cards={cards.filter(card => card.state === board.state)}
                afterDropHandler={setState}
              />
            </div>
          ))}
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
