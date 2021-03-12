import * as React from 'react';
import { Button } from '@material-ui/core';
import { Job } from '../../../data/ITProfessions';

const FetchJobElement = (props: { job: Job }) => {
  const { job } = props;
  return (
    <div>
      <h4>{job.company} {job.title} </h4>
      <p>{job.description}</p>
      <Button variant="contained" href={job.url}>See More</Button>
    </div>
  );
};

export default FetchJobElement;
