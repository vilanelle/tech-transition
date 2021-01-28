import React from 'react';
import { Route } from 'react-router-dom';

interface ITProffesion {
  proffesion: string;
  path: string;
}

export const ITRoleRouter: React.FC<ITProffesion> = ({ proffesion, path }) => (
  <Route exact path={path} key={proffesion}>
    <p>Works {proffesion}</p>
  </Route>
);
