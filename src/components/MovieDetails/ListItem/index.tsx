import { ListItemText } from '@material-ui/core';
import React from 'react';

export const ListItem = ({ item, classes }: any) => {
  if (typeof item.value !== 'string' || item.key === 'Poster') return null; 
  
  return (
    <ListItemText className={classes.listItem} primary={item.value} secondary={item.key} />
  );
};
