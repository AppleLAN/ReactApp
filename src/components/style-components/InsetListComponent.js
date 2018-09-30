import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function InsetList(props) {
  const { classes, items } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {items.map(p => (
          <ListItem key={p.number} component={Link} to={`/roster/${p.number}`} button>
            <ListItemText inset primary={p.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsetList);
