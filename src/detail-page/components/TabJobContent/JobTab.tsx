import * as React from 'react';
import styled from 'styled-components';
import { Button, CircularProgress, Input } from '@material-ui/core';
import JobListItem from './JobListItem';
import useFetchJobs from './useFetchJobs';
import Job from '../../../data/Jobs';
import hiringPicture from '../../../icons/hiring.svg';

const SearchInput = styled(Input)`
  width: 250px;
  height: 35px;
  border: 1px #CFCFCF solid;
  margin: ${props => props.theme.spacing(5)}px 0 ${props => props.theme.spacing(1.5)}px ${props => props.theme.spacing(1.5)}px ;
  padding-left: 0 ${props => props.theme.spacing(1.5)}px 
`;

const SearchButton = styled(Button)`
  width: 100px;
  margin: ${props => props.theme.spacing(1.5)}px;
  display: block;
  color: white;
`;

const HiringImage = styled('object')`
  width: 250px;
  float: right;
  margin: 0 ${props => props.theme.spacing(10)}px ${props => props.theme.spacing(10)}px 0;
`;

const SearchSpinner = styled('div')`
  margin: ${props => props.theme.spacing(5)}px auto;
  width: 50%;
`;

const JobTab: React.FC = () => {
  const [role, setRole] = React.useState('');
  const [city, setCity] = React.useState('');
  const URL = `https://cors.bridged.cc/https://jobs.github.com/positions.json?title=${role}&location=${city}`;
  const { jobPosts, isFetching } = useFetchJobs(URL);
  const handleChangeRole = React.useCallback(e => setRole(e.target.value), []);
  const handleChangeCity = React.useCallback(e => setCity(e.target.value), []);

  return (
    <>
      <SearchInput type="search" placeholder="Job title" value={role} disableUnderline onChange={handleChangeRole} />
      <SearchInput placeholder="City" disableUnderline value={city} onChange={handleChangeCity} />
      <SearchButton color="secondary" variant="contained" onClick={useFetchJobs(URL)}>Search</SearchButton>
      <HiringImage data={hiringPicture} />
      {isFetching ? <SearchSpinner><CircularProgress /></SearchSpinner> : null}
      <ul>
        {jobPosts.map((job: Job) => <JobListItem job={job} key={job.id} />)}
      </ul>
    </>
  );
};

export default JobTab;
