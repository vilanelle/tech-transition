import { Button, Input } from '@material-ui/core';
import * as React from 'react';

const FetchJobContent: React.FC = () => {
  const [data, setData] = React.useState([]);
  const [role, setRole] = React.useState('');
  const [city, setCity] = React.useState('');
  const handleChangeRole = React.useCallback((e) => setRole(e.target.value), []);
  const handleChangeCity = React.useCallback((e) => setCity(e.target.value), []);

  const handleChangeJobs = React.useCallback(() => {
    fetch(`https://cors.bridged.cc/https://jobs.github.com/positions.json?title=${role}&location=${city}`)
      .then((response) => response.json())
      .then((jobs) => setData(
        jobs.map((job: any) => ({
          title: job.title,
        }
        )),
      ));
    console.log(data);
  }, [role, city]);

  return (
    <>
      <Input placeholder="Job title" value={role} onChange={handleChangeRole} />
      <Input placeholder="City" value={city} onChange={handleChangeCity} />
      <Button variant="contained" onClick={handleChangeJobs}>click</Button>
    </>
  );
};

export default FetchJobContent;
