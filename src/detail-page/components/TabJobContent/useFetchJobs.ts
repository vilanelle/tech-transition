import React, { useState, useEffect } from 'react';
import { Job } from '../../../data/Jobs';

export const useFetchJobs = (url: string) => {
  const [isFetching, setIsFetching] = useState(false);
  const [jobPosts, setJobPosts] = useState<Job[]>([]);
  const [emptySearchMessage, setEmptySearchMessage] = useState('');

  useEffect(() => {
    if (!url) return;
    setJobPosts([]);
    const fetchData = async () => {
      setIsFetching(true);
      const response = await fetch(url);
      const data = await response.json();
      setJobPosts(data);
      setIsFetching(false);
      jobPosts.length > 0 ? setEmptySearchMessage('') : setEmptySearchMessage('No job offers found.');
    };
    fetchData();
  }, [url]);

  return { isFetching, jobPosts, emptySearchMessage };
};
