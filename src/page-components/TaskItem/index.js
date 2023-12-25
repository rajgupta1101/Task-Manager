import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './styles.module.css';

const TaskItem = ({ task={}, index='' }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div className={styles.card_container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.container}>
            <div className={styles.task_heading}>
              {task.content}
            </div>
            <div className={styles.due_date}>
              <span style={{color:'red'}}>
                Due Date :
              </span>
               {task.dueDate}
            </div>
          </div>
         
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
