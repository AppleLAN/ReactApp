import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles = theme => ({
  spacing: 16,
  root: {
    flexGrow: 1
  },
  wrapper: {
    maxWidth: 400
  }
});

export const Home = () => {
  return (
    <div className={styles.root} spacing={16}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        wrap="nowrap"
        spacing={16}
      >
        <Grid item>
          <Typography variant="display3" gutterBottom>
            Welcome to a ReactJs website made by Alan Buscaglia !
          </Typography>
        </Grid>
        <Grid item>
          <video loop autoPlay muted>
            <source src="https://fat.gfycat.com/QuarterlyAbsoluteDromaeosaur.webm" />
          </video>
        </Grid>
      </Grid>
    </div>
  );
};
