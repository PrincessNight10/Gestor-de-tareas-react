import './ItemTask.css';

export const ItemTask = ({ idTask, content, titleTask }) => {
  return (
    <li id={idTask}>
      <div>
        
      </div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
    </li>
  );
};
