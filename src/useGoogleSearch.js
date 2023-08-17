import React, { useEffect, useState } from 'react';
import API_KEY from './Keys';
const CONTEXT_KEY = "37c3e61e75d7c4c93";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.google.com/customsearch/v1?key=${API_KEY}&cs=${CONTEXT_KEY}&q=${term}`)
        }
    }, [term])
}