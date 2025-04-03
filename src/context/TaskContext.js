'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { loadTasks , saveTasks } from '@/src/lib/storage'
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    if (isMounted) {
      saveTasks(tasks);
    }
  }, [tasks, isMounted]);

  const addTask = (task) => {
    setTasks(prev => [
      ...prev,
      {
        ...task,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const updateTask = (id, updates) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, filter, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};