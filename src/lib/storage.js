export const saveTasks = (tasks) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const loadTasks = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  }
  return [];
};