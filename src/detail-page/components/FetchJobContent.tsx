import { Button } from '@material-ui/core';
import * as React from 'react';

const FetchJobContent: React.FC = () => {
  const [data, setData] = React.useState([]);
  const callback = React.useCallback(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python')
      .then((response) => response.json())
      .then((jobs) => setData(
        jobs.map((job: any) => ({
          title: job.title,
        }
        )),
      ));
    console.log(data);
  }, [data]);

  return (
    <>
      <Button variant="contained" onClick={callback}>click</Button>
    </>
  );
};

export default FetchJobContent;
