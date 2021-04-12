import React, { useState, useEffect } from 'react';
import Job from '../../../data/Jobs';

const useFetchJobs = (url: string) => {
  const [isFetching, setIsFetching] = useState(false);
  const [jobPosts, setJobPosts] = useState<Job[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(url);
        const data = await response.json();
        setJobPosts(
          data.map((job: Job) => ({
            company: job.company,
            title: job.title,
            description: job.description,
            url: job.url,
            id: job.id,
          }
          )),
        );
        setIsFetching(false);
      } catch (error) {
        setErrorMessage(error);
      }

      fetchData();
    };
  }, [url]);

  return { isFetching, jobPosts, errorMessage };
};

export default useFetchJobs;
