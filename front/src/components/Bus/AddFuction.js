import axios from 'axios'

export function BusCreate(newBus){
    let apiUrl = 'http://localhost:3000/bus-add'
    return axios.post(apiUrl,newBus,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}


