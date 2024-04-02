import { useState, useEffect } from "react";
import axios from "axios";

//import RAPID_API_KEY from '.env'
//const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    const options = {
        method: 'GET',
        url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
        headers: {
            'X-RapidAPI-Key': '14949fecd6msh1119f45ab802f9cp1f50d5jsn594a741aa285',
            'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com'
            //'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
        },
        params: {
            ...query
        },
    };
    

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.results); //.results to make it purely an array of shoe objects
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;