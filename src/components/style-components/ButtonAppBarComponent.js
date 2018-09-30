import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  state = {
    anchorEl: null,
    menuItems: null
  };

  constructor(props) {
    super(props);
    this.state.props = props;
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const classes = styles;

    return (
      <div style={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-owns={anchorEl ? 'simple-menu' : null}
              style={classes.menuButton}
              aria-haspopup="true"
              color="inherit"
              aria-label="Menu"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {this.state.props.menuItems.map((item, i) => (
                <MenuItem
                  component={Link}
                  to={{ pathname: item.link }}
                  onClick={this.handleClose}
                  key={i}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
            <div style={classes.grow} />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
