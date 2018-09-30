import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import InsetListComponent from '../style-components/InsetListComponent';

const roster = [
  { number: 1, name: 'Name 1' },
  { number: 2, name: 'Name 2' },
  { number: 3, name: 'Name 3' },
  { number: 4, name: 'Name 4' }
];

export const FullRoster = () => (
  <div>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      wrap="nowrap"
      spacing={16}
    >
      <Grid item>
        <Typography variant="display1" gutterBottom>
          Select one person!
        </Typography>
      </Grid>
      <Grid item>
        <InsetListComponent items={roster} />
      </Grid>
    </Grid>
  </div>
);
