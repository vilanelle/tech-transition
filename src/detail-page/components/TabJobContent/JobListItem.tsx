import React from 'react';
import { Button } from '@material-ui/core';
import Job from '../../../data/Jobs';

interface Props {
  job: Job;
}

const JobListItem: React.FC<Props> = ({ job }) => {
  return (
    <li key={job.id}>
      <h4>{job.company} {job.title} </h4>
      {job.description}
      <Button variant="contained" href={job.url}>See More</Button>
    </li>
  );
};

export default JobListItem;
