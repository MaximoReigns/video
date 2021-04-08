import { useState, useEffect } from 'react';

const useInitialState = (API) =>{
    const [ videos, setVideos ] = useState({
        mylist: [], trends: [], originals: []
    });
    useEffect(()=>{
        fetch(API)//Recibe una API
            .then(response => response.json())// Cuando mi API resuelva la información, yo a esa respuesta
                                              //lo voy a transformar en un objeto que pueda utilizar en mi app.        
            .then(data => setVideos(data))//La información que ya tengo se la enviaré a setVideos
    }, []);
    return videos
};

export default useInitialState;