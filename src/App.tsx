import React from "react"
// import './App.css';
// import {Task, Todolist} from './ToDoList';
// import {v1} from 'uuid';
// import {InputCustom} from './common';
// import {ButtonAppBar} from './common';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import {
//     addTodolist,
//     changeFilter,
//     changeTitleTodolist,
//     removeTodolist,
//     todolistsSlice,
//     TodolistsReducerActionType
// } from "./state/todolists-reducer";
// import {
//     addTask,
//     changeToggleTaskAC,
//     removeTask,
//     tasksReducer,
//     TasksReducerActionType,
//     updateTask
// } from "./state/task-reducer";
//
// export type FilterValues = 'All' | 'all' | 'Active' | 'Completed';
// export type Todolist = {
//     id: string
//     title: string
//     filter: FilterValues
// }
//
// export type TasksState = {
//     [key: string]: Task[]
// }
//
// export function App() {
//     let todolistID1 = v1();
//     let todolistID2 = v1();
//
//     let [todolist, dispatchTodolist] = useReducer<Reducer<Todolist[], TodolistsReducerActionType>>(todolistsSlice, [
//         {id: todolistID1, title: 'What to learn', filter: 'all'},
//         {id: todolistID2, title: 'What to buy', filter: 'all'}
//     ])
//
//     let [tasks, dispatchTasks] = useReducer<Reducer<TasksState, TasksReducerActionType>>(tasksReducer, {
//         [todolistID1]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: v1(), title: 'ReactJS', isDone: false},
//             {id: v1(), title: 'Rest API', isDone: false},
//             {id: v1(), title: 'GraphQL', isDone: false},
//         ],
//         [todolistID2]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: v1(), title: 'ReactJS', isDone: false},
//             {id: v1(), title: 'Rest API', isDone: false},
//             {id: v1(), title: 'GraphQL', isDone: false},
//         ]
//     });
//
//     const addTodolist = (title: string) => {
//         const action = addTodolist(title)
//         dispatchTodolist(action)
//         dispatchTasks(action)
//     }
//
//     const updateTodolist = (todolistId: string, newTitleTodo: string) => {
//         dispatchTodolist(changeTitleTodolist(todolistId, newTitleTodo))
//     }
//
//     const removeTodolist = (todolistID: string) => {
//         const action = removeTodolist(todolistID)
//         dispatchTodolist(action)
//         dispatchTasks(action)
//     }
//
//     function changeFilter(todolistID: string, value: FilterValues) {
//         dispatchTodolist(changeFilter(todolistID, value))
//     }
//
//     const addTask = (todolistID: string, valueTitle: string) => {
//         dispatchTasks(addTask(todolistID, valueTitle))
//     }
//
//     const updateTask = (todolistId: string, taskId: string, newTitle: string) => {
//         dispatchTasks(updateTask(todolistId, taskId, newTitle))
//     }
//
//     function removeTask(todolistId: string, taskId: string) {
//         dispatchTasks(removeTask(todolistId, taskId))
//     }
//
//     const toggleCheckBox = (todolistID: string, taskID: string, checked: boolean) => {
//         dispatchTasks(changeToggleTaskAC(todolistID, taskID, checked))
//     }
//
//
//     return (
//       <div className="App">
//           <ButtonAppBar/>
//
//           <Container fixed>
//               <Grid container style={{padding: '20px'}}>
//                   <InputCustom callBack={addTodolist}/>
//               </Grid>
//               <Grid container spacing={4}>
//                   {
//                       todolist.map(t => {
//                           const filteredTasks = () => {
//                               let tasksForTodolist;
//                               switch (t.filter) {
//                                   case 'Active':
//                                       return tasksForTodolist = tasks[t.id].filter(t => !t.isDone);
//                                   case 'Completed':
//                                       return tasksForTodolist = tasks[t.id].filter(t => t.isDone);
//                                   default:
//                                       return tasksForTodolist = tasks[t.id];
//                               }
//                           }
//
//                           return (
//                             <Grid item>
//
//                                 <Paper style={{padding: '10px'}}>
//                                     <Todolist key={t.id}
//                                               todolistId={t.id}
//                                               title={t.title}
//                                               tasks={filteredTasks()}
//                                               removeTask={removeTask}
//                                               removeTodolist={removeTodolist}
//                                               changeFilter={changeFilter}
//                                               addTask={addTask}
//                                               toggleCheckBox={toggleCheckBox}
//                                               activeFilter={t.filter}
//                                               updateTask={updateTask}
//                                               updateTodolist={updateTodolist}
//                                     />
//                                 </Paper>
//                             </Grid>
//                           )
//                       })}
//               </Grid>
//           </Container>
//       </div>
//     )
// }
//
