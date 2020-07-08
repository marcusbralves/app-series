import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Generos = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios
        .get('/api/genres')
        .then(res =>{
            setdata(res.data.data);
        });
    }, []);
    return (
        <div>
        <h1>Generos</h1>
        <pre>{JSON.stringify(data)}</pre>
        </div>
    )
  }

  export default Generos;