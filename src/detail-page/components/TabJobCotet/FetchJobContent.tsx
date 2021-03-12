import { Button, CircularProgress, Input } from '@material-ui/core';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Job } from '../../../data/ITProfessions';
import FetchJobElement from './FetchJobElement';

const FetchJobContent: React.FC = () => {
  const [data, setData] = React.useState([]);
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
        setData(
          jobs.map((job: Job) => ({
            company: job.company,
            title: job.title,
            description: job.description,
            url: job.url,
          }
          )),
        );
        setFetching(false);
      }).catch(() => {
        <Redirect to="/404" />;
      });
    console.log(data);
  }, [role, city, data]);

  return (
    <>
      <Input placeholder="Job title" value={role} onChange={handleChangeRole} />
      <Input placeholder="City" value={city} onChange={handleChangeCity} />
      <Button variant="contained" onClick={handleChangeJobs}>Search</Button>
      {fetching ? <CircularProgress /> : null}
      {data.map((job) => <FetchJobElement job={job} />)}
    </>
  );
};

export default FetchJobContent;
