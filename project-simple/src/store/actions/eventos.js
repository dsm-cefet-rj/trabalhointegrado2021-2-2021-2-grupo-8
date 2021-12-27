import eventsSheet from '../../data/dbEvents.json'

export default function addEventosReducer(eventos, novoEvento){
    const lastId = eventsSheet.slice(-1)[0].idEvent;
    // novoEvento.idTeam = equipeAtiva.info.id;
    novoEvento.idEvent = lastId + 1;
    
    return eventos;
}