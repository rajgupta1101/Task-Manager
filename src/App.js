import React, { useState, useEffect } from 'react';
import TaskCategory from './page-components/TaskCategory';
import TaskForm from './page-components/TaskForm';
import styled from 'styled-components';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import storage from './utils/storage';

const Category = {
  ADDED: 'Added',
  STARTED: 'Started',
  COMPLETED: 'Completed',
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const categories = Object.values((Category || {}));

  useEffect(() => {
    storage.get('tasks').then((tasks) => setTasks(tasks || []));
  }, []);

  useEffect(() => {
    storage.set('tasks', tasks);
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDragEnd = ({ source, destination, draggableId }) => {
    if (!destination || source?.droppableId === destination?.droppableId) return;
    setTasks((tasks) =>
      (tasks || []).map((task) =>
        task?.id === draggableId
          ? { ...task, category: destination?.droppableId }
          : task
      )
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TaskForm categories={categories} onAddTask={handleAddTask} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Container>
          {(categories || []).map((category) => (
            <TaskCategory
              key={category}
              category={category}
              tasks={(tasks || []).filter(({ category: cat }) => cat === category)}
            />
          ))}
        </Container>
      </DragDropContext>
    </div>
  );
};

export default App;

const Container = styled.div`
  background: #e1e5e8;
  flex-grow: 1;
  display: flex;
`;
