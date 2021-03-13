import * as React from 'react';
import { Button } from '@material-ui/core';
import { Job } from '../../../data/ITProfessions';

const FetchJobElement = (props: { job: Job }) => {
  const { job } = props;

  return (
    <li key={job.id}>
      <h4>{job.company} {job.title} </h4>
      {job.description}
      <Button variant="contained" href={job.url}>See More</Button>
    </li>
  );
};

export default FetchJobElement;
