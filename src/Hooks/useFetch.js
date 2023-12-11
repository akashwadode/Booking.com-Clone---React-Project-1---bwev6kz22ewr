import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (method,apiUrl,requestOptions) => {
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios({
                    method : method,
                    url : apiUrl,
                    ...requestOptions,
                });

                setData(response.data);
            }catch(error){
                setError(error);
            }  finally{
                setLoading(false);
            } 
        }
        fetchData();
    },[])
    useEffect(()=>{
    },[data])

    return {data,loading,error};
}

export default useFetch