import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskItem from '../TaskItem';
import styles from './styles.module.css';

const TaskList = ({ category='', tasks=[] }) => {
  return (
    <Droppable droppableId={category}>
      {(provided) => (
        <div className={styles[`${category}_container`]} {...provided.droppableProps} ref={provided.innerRef}>
          {(tasks || []).map((task, index) => (
            <TaskItem key={task.id} index={index} task={task} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
