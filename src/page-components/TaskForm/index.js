import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '../../helper/Button';
import styles from './styles.module.css';

const initialData = {
  content: '',
  dueDate: new Date().toISOString().substring(0, 10),
  category: 'Added',
};

const TaskForm = ({ onAddTask=()=>{} }) => {
  const [taskData, setTaskData] = useState(initialData);

  const handleChange = (key) => (e) => {
    setTaskData((data) => ({ ...data, [key]: e.target.value.trim() }));
  };

  const handleAddClick = () => {
    if (taskData.content === '' || taskData.dueDate === '') return;
    onAddTask({ ...taskData, id: nanoid() });
    setTaskData(initialData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
          TASK MANAGER
      </div>
      <div className={styles.sub_container}>
        <div className={styles.content_section}> 
            <input
            type="text"
            placeholder="Add a new task"
            value={taskData.content}
            onChange={handleChange('content')}
            className={styles.input_container}
            />
            <input
              type="date"
              value={taskData.dueDate}
              onChange={handleChange('dueDate')}
              className={styles.input_container}
            />
        </div>
        <Button $primary={true} onClick={handleAddClick} >
          Add
        </Button>
    </div>
    </div>
  );
};

export default TaskForm;
