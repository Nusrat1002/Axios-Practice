import { useEffect, useState } from "react";
import api from "../apiConfig";


export const useFetch = ( endpoint, options = {} )=>{
    const [data, setData ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [errors, setErrors ] = useState(true);

    useEffect(()=> {
        const fetchApi = async () => {
          try{
            const response = await api.get(endpoint, {
                ...options,
            });
            setData(response.data);
        } catch(error){
            setErrors(error);
        } finally {
            setLoading(false);
        }
    };
    fetchApi();
    }, [endpoint, options]);
    return {
        data, loading, errors
    };
};