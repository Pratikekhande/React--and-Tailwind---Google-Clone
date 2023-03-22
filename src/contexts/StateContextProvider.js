import React, {createContext, useContext, useState} from 'react';
const stateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({children}) => {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url ) => {

        setLoading(true);

        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
            //    ' X-User-Agent': 'desktop',
            //    'X-Proxy-Location':' EU',
            //     'X-Rapidapi-Key': '8ff61150b3mshfd8deb9ba177bfdp1033b3jsnd03f4f66e952',
            //   'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            //   'x-rapidapi-key':' 8ff61150b3mshfd8deb9ba177bfdp1033b3jsnd03f4f66e952',

            'X-User-Agent': 'desktop',
            'X-Proxy-Location':'EU',
             'X-Rapidapi-Key': '8ff61150b3mshfd8deb9ba177bfdp1033b3jsnd03f4f66e952',
             'X-Rapidapi-Host':'google-search3.p.rapidapi.com'
            },
          });

        const data = await res.json();

        setResults(data);
        setLoading(false);

    };

    return (
        <stateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
          {children}
        </stateContext.Provider>
      );
}

export const useStateContext = () => useContext(stateContext);
