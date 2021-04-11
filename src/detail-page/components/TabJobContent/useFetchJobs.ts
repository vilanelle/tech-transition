import React, { useState, useEffect } from 'react';
import Job from '../../../data/Jobs';

const useFetchJobs = (url: string) => {
  const [isFetching, setIsFetching] = useState(false);
  const [jobPosts, setJobPosts] = useState<Job[]>([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
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
    };

    fetchData();
  }, [url]);

  return { isFetching, jobPosts };
};

export default useFetchJobs;
