import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import eventsSheet from '../../data/dbEvents.json'
import App from '../../App'
import { useState } from 'react'
import actionsEventos from '../actions/eventos'


let initialEvents = []

const fetchEventos = createAsyncThunk('eventos/fetchEventos', async()=>{
    return await(await fetch('http://localhost:3004/eventos')).json();
})

// const [eventos, setEventos] = useState({
//     name: "",
//     idEvent: "",
//     idTeam:"",
//     dataInicio:"",
//     horaInicio:"",
//     dataFim:"",
//     horaFim:"",
//     descricao: "",
//     importancia:"",
//     tipo:""
// });





const eventosSlice = createSlice({
   name: 'eventos',
   initialState: initialEvents,
   reducers: {
       addEvento: (state, action) => actionsEventos(state,action.payload)
   } 
});