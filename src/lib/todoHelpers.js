export const addTodo = (list, item) => [...list, item];
// can be list.concat(item);

export const generateId = () => Math.floor(Math.random()*100000);