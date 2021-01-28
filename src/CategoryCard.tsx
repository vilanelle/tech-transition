import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, IconButton, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    maxWidth: 500,
    margin: '10px auto',
  },
}));

type CardProps = {
  title: string;
  description: string;
  avatarSrc: string;
};

export const CategoryCard: React.FC<CardProps> = ({
  title,
  description,
  avatarSrc,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={description}
        action={(
          <IconButton>
            <Avatar
              aria-label="avatar"
              src={avatarSrc}
              onClick={() => {
                alert('onClick action placeholder');
              }}
            />
          </IconButton>
        )}
      />
    </Card>
  );
};
