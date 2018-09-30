// an API that returns a player object
import React from 'react';
import MediaCardComponent from '../style-components/MediaCardComponent';
import { Grid, Typography } from '@material-ui/core';

const images = [
  {
    number: '1',
    name: 'moe',
    img: 'https://i.kym-cdn.com/photos/images/original/000/923/467/0f7.gif'
  },
  {
    number: '2',
    name: 'bart',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiob5nR93CgwOwYsrQ6ck5WSWNGPMfM2ACw5FqnQfr7h7GlbTr'
  },
  {
    number: '3',
    name: 'homer',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PFhbIAqAGtSbVHjNXUlqbKuNz4X8QhCOvDMmQU_DRltBvymKWA'
  },
  {
    number: '4',
    name: 'burns',
    img:
      'https://louispeake.files.wordpress.com/2011/05/205777_165957916796173_165754846816480_387085_2721473_n1.jpg'
  }
];

const linkToGoBackTo = '/roster';

export const Player = props => {
  const player = images.find(i => i.number === props.match.params.number);
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <Typography variant="display1" gutterBottom>
        Here's the one you were looking for !
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        wrap="nowrap"
        spacing={16}
      >
        <MediaCardComponent subject={player} linkToGoBackTo={linkToGoBackTo}/>
      </Grid>
    </div>
  );
};
