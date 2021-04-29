import * as React from 'react';
import styled from 'styled-components';
import { Button, CircularProgress, Input } from '@material-ui/core';
import { JobListItem } from './JobListItem';
import { useFetchJobs } from './useFetchJobs';
import { Job } from '../../../data/Jobs';
import hiringPicture from '../../../icons/hiring.svg';

const SearchInput = styled(Input)`
  width: 250px;
  height: 35px;
  border: 1px #CFCFCF solid;
  margin: ${props => props.theme.spacing(5)}px 0 ${props => props.theme.spacing(1.5)}px ${props => props.theme.spacing(1.5)}px;
  padding-left: ${props => props.theme.spacing(1.5)}px;
`;

const SearchButton = styled(Button)`
  width: 100px;
  margin: ${props => props.theme.spacing(1.5)}px;
  display: block;
  color: white;
`;

const HiringImage = styled('img')`
  width: 250px;
  float: right;
  margin-right: ${props => props.theme.spacing(2)}px;
`;

const SearchSpinner = styled('div')`
  margin: ${props => props.theme.spacing(5)}px auto;
  width: 50%;
`;

const JobList = styled('ul')`
  padding:0;
`;
const JobTab: React.FC = () => {
  const [role, setRole] = React.useState('');
  const [city, setCity] = React.useState('');
  const [url, setUrl] = React.useState('');
  const handleChangeRole = React.useCallback(e => setRole(e.target.value), []);
  const handleChangeCity = React.useCallback(e => setCity(e.target.value), []);
  const { jobPosts, isFetching } = useFetchJobs(url);

  const handleSearch = () => {
    setUrl(`https://cors.bridged.cc/https://jobs.github.com/positions.json?description=${role}&location=${city}`);
  };
  return (
    <>
      <SearchInput
        type="search"
        placeholder="Job title"
        value={role}
        disableUnderline
        onChange={handleChangeRole}
        onKeyPress={
          ev => {
            /* eslint-disable no-unused-expressions */
            ev.key === 'Enter' ? handleSearch() : null;
          }
        }
      />
      <SearchInput
        placeholder="City"
        disableUnderline
        value={city}
        onChange={handleChangeCity}
        onKeyPress={ev => {
          /* eslint-disable no-unused-expressions */
          ev.key === 'Enter' ? handleSearch() : null;
        }}
      />
      <SearchButton
        color="secondary"
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </SearchButton>
      {jobPosts.length > 0 ? null : <HiringImage src={hiringPicture} />}
      { isFetching ? <SearchSpinner><CircularProgress /></SearchSpinner> : null}
      <JobList>
        {jobPosts.map((job: Job) => <JobListItem job={job} key={job.id} />)}
      </JobList>
    </>
  );
};

export default JobTab;
