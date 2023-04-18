import React, {useCallback} from 'react';
import './App.css';
import {Todolist} from './ToDoList';
import {Input} from './components/Input/Input';
import {ButtonAppBar} from './components/ButtonAppBar/ButtonAppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {addTodolistAC, TodolistType} from "./state/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store/store";

export function AppWithRedux() {
    const todolist = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)
    const dispatch = useDispatch()

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistAC(title))
    }, [dispatch])

    return (
      <div className="App">
          <ButtonAppBar/>

          <Container fixed>
              <Grid container style={{padding: '20px'}}>
                  <Input callBack={addTodolist}/>
              </Grid>
              <Grid container spacing={4}>
                  {
                      todolist.map(t => {
                          return (
                            <Grid item key={t.id}>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist
                                      todolistId={t.id}
                                      title={t.title}
                                      activeFilter={t.filter}
                                    />
                                </Paper>
                            </Grid>
                          )
                      })
                  }
              </Grid>
          </Container>

      </div>
    );
}

