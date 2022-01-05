import { configureStore } from '@reduxjs/toolkit'
import equipeAtivaReducer  from './equipeAtivaSlice'
import loggedUserReducer from './loggedUserSlice'
import minhasEquipesReducer from './minhasEquipesSlice'
import tarefasReducer from './tarefasSlice'
import equipesReducer from './equipesSlice'
import usuariosReducer from './usuariosSlice'

export default configureStore({
  reducer: {
    minhasEquipes: minhasEquipesReducer,
    equipeAtiva: equipeAtivaReducer,
    loggedUser: loggedUserReducer,
    tarefas: tarefasReducer,
    equipes: equipesReducer,
    usuarios: usuariosReducer
  },
})
