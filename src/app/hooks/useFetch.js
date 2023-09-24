import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Weather in Athens';
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        if (data.cod >= 400) {
          setError('Something went wrong...');
        }
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError('Something went wrong...');
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
