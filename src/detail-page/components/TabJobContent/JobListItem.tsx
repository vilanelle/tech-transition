import React from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Job } from '../../../data/Jobs';

const JobListElement = styled('li')`
  display: flex;
  max-width: 100%;
  margin: ${props => props.theme.spacing(2)}px;
  box-shadow: 6px 6px 12px -2px rgba(161,152,161,0.71);
  list-style-type: none;
`;

const JobListContent = styled('div')`
  padding-bottom: ${props => props.theme.spacing(2)}px;
`;

const JobListButton = styled(Button)`
  width: 180px;
`;
const JobListColorElement = styled('div')`
  width: 6px;
  background: ${props => props.theme.palette.secondary.main};
  margin-right: ${props => props.theme.spacing(2)}px;
`;

interface Props {
  job: Job;
}

export const JobListItem: React.FC<Props> = ({ job }) => {
  return (

    <JobListElement key={job.id}>
      <JobListColorElement> </JobListColorElement>
      <JobListContent>
        <h4>{job.company} {job.title} </h4>
        <Typography variant="body2" color="textSecondary">{job.description.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 200)}...</Typography>
      </JobListContent>
      <JobListButton color="secondary" href={job.url}>See More</JobListButton>
    </JobListElement>

  );
};
