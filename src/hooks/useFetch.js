import { useState, useEffect } from 'react';

const useFetch = url => {
    const [ data, setData ]  =useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false); 

  useEffect(()=>{
      document.title = "Weather in Athens";
      setIsLoading(true);
      fetch(url)
      .then(res=>res.json())
      .then( data => { 
        setIsLoading(false)
        if (data.cod>=400){
          setError(data.message);
        }
        setData(data) ;
;
    })
      .catch( error => { setError(error);
        setIsLoading(false);
    })
  },[url])

  return {data, error, isLoading}
}

export default useFetch;