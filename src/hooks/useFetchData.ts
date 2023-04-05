
// ths is hooks only for rest API

import React, { useRef, useState, useEffect } from 'react';

const useFetchData = (url: string) => {
  const cache = useRef<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setIsLoading(false);
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
        }
      }
    };
    fetchData();
  }, [url]);
  return { isLoading, data, error };
};

export default useFetchData;
