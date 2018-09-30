import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {}
};

function MediaCard(props) {
  const { classes, subject, linkToGoBackTo } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        image={subject.img}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {subject.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={linkToGoBackTo} size="small" variant="contained" color="primary">
          go back !
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
