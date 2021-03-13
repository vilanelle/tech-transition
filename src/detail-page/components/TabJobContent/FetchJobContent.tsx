import { Button, CircularProgress, Input } from '@material-ui/core';
import styled from 'styled-components';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Job } from '../../../data/ITProfessions';
import FetchJobElement from './FetchJobElement';
import hiringPicture from '../../../icons/hiring.svg';

const SearchInput = styled(Input)`
width: 250px;
height:35px;
border: 1px #CFCFCF solid;
margin:   ${props => props.theme.spacing(5)}px 0 ${props => props.theme.spacing(1.5)}px ${props => props.theme.spacing(1.5)}px ;
padding-left: 0 ${props => props.theme.spacing(1.5)}px 
`;

const SearchButton = styled(Button)`
width: 100px;
margin:  ${props => props.theme.spacing(1.5)}px;
display:block;
color:white;
`;

const HiringImage = styled('object')`
width: 250px;
float:right;
margin: 0 ${props => props.theme.spacing(10)}px ${props => props.theme.spacing(10)}px 0;
`;
const FetchJobContent: React.FC = () => {
  const [jobPosts, setJobPosts] = React.useState([]);
  const [role, setRole] = React.useState('');
  const [city, setCity] = React.useState('');
  const [fetching, setFetching] = React.useState(false);
  const handleChangeRole = React.useCallback((e) => setRole(e.target.value), []);
  const handleChangeCity = React.useCallback((e) => setCity(e.target.value), []);

  const handleChangeJobs = React.useCallback(() => {
    setFetching(true);
    fetch(`https://cors.bridged.cc/https://jobs.github.com/positions.json?title=${role}&location=${city}`)
      .then((response) => response.json())
      .then((jobs) => {
        setJobPosts(
          jobs.map((job: Job) => ({
            company: job.company,
            title: job.title,
            description: job.description,
            url: job.url,
            key: job.id,
          }
          )),
        );
        setFetching(false);
      }).catch(() => {
        <Redirect to="/404" />;
      });
    console.log(jobPosts);
  }, [role, city, jobPosts]);

  return (
    <>
      <SearchInput type="search" placeholder="Job title" value={role} disableUnderline onChange={handleChangeRole} />
      <SearchInput placeholder="City" disableUnderline value={city} onChange={handleChangeCity} />
      <SearchButton color="secondary" variant="contained" onClick={handleChangeJobs}>Search</SearchButton>
      <HiringImage data={hiringPicture} />
      {fetching ? <CircularProgress /> : null}
      <ul>
        {jobPosts.map((job) => <FetchJobElement job={job} />)}
      </ul>
    </>
  );
};

export default FetchJobContent;
