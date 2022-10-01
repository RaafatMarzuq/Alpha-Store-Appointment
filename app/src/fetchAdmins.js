import  { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching(){
    const [admin, setAdmin] = useState([])
    useEffect( ()=> {
        axios.get( 'http://localhost:3001/admins')
        .then(res => {
            console.log(res.data)
            setAdmin(res.data)
        }).catch( err => {
            console.log(err)
        })
    } , [])
    return admin
}

export default DataFetching
