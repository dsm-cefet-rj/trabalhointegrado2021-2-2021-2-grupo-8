import { configureStore } from '@reduxjs/toolkit'
import loggedUserReducer from './loggedUserSlice'
import tarefasReducer from './tarefasSlice'
import equipesReducer from './equipesSlice'
import usuariosReducer from './usuariosSlice'
import eventosReducer from './eventosSlice'

export default configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    tarefas: tarefasReducer,
    equipes: equipesReducer,
    usuarios: usuariosReducer,
    eventos: eventosReducer
  },
})
