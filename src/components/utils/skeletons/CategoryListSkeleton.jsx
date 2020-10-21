import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 130,
    height: 30,
  },
});

export default function CategoryListSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Array(15)
        .fill()
        .map((item, index) => (
          <Skeleton animation='wave' key={index} style={{ margin: '15px 0' }} />
        ))}
    </div>
  );
}
