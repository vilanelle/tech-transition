import { Button, CircularProgress, Input } from '@material-ui/core';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Job } from '../../../data/ITProfessions';
import FetchJobElement from './FetchJobElement';
import hiringPicture from '../../../icons/hiring.svg';

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
      <Input placeholder="Job title" value={role} onChange={handleChangeRole} />
      <Input placeholder="City" value={city} onChange={handleChangeCity} />
      <Button variant="contained" onClick={handleChangeJobs}>Search</Button>
      <object data={hiringPicture} width="300" height="300"> </object>
      {fetching ? <CircularProgress /> : null}
      <ul>
        {jobPosts.map((job) => <FetchJobElement job={job} />)}
      </ul>
    </>
  );
};

export default FetchJobContent;
