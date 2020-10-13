import { useDrag } from "react-dnd";

const useDraggable = (cardId) => {
  const [{ opacity }, drag] = useDrag({
    item: { type: "card", id: cardId },
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.afterDropHandler) {
        console.log("item in USEDRAGGABLE: ", item)
        dropResult.afterDropHandler(item.id, dropResult.state);

        //update cards in database here
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  return { opacity, drag };
};
export default useDraggable;
