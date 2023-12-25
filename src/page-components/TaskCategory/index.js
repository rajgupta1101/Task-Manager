import React from 'react';
import TaskList from '../TaskList';
import styles from './styles.module.css';

const TaskCategory = ({ category='', tasks=[] }) => {
  return (
    <div className={styles[`${category}_container`]}>
      <div className={styles.header}>{category}</div>
      <TaskList category={category} tasks={tasks} />
    </div>
  );
};

export default TaskCategory;

