import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import eventsSheet from '../data/dbEvents.json'
import App from '../App'
import { useState } from 'react'

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

function addEventosReducer(eventos, novoEvento){
    const lastId = eventsSheet.slice(-1)[0].idEvent;
    // novoEvento.idTeam = equipeAtiva.info.id;
    novoEvento.idEvent = lastId + 1;
    
    return eventos;
}




const eventosSlice = createSlice({
   name: 'eventos',
   initialState: initialEvents,
   reducers: {
       addEvento: (state, action) => addEventosReducer(state,action.payload)
   } 
});