import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';

// core components
import Button from 'components/CustomButtons/Button';

import pagesHeaderStyle from 'assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle.jsx';
import pagesRoutes from 'routes/pages';

class PagesHeader extends React.Component {
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  render() {
    const { classes, color } = this.props;
    const appBarClasses = cx({
      [' ' + classes[color]]: color
    });
    const list = (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <NavLink to={'/'} className={classes.navLink}>
            <ListItemIcon className={classes.listItemIcon}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText
              primary={'Dashboard'}
              disableTypography={true}
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
        {pagesRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          const navLink =
            classes.navLink +
            cx({
              [' ' + classes.navLinkActive]: this.activeRoute(prop.path)
            });
          return (
            <ListItem key={key} className={classes.listItem}>
              <NavLink to={prop.path} className={navLink}>
                <ListItemIcon className={classes.listItemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={prop.short}
                  disableTypography={true}
                  className={classes.listItemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              FortiCloud Demo
            </Button>
          </div>
          {list}
        </Toolbar>
      </AppBar>
    );
  }
}

PagesHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
};

export default withStyles(pagesHeaderStyle)(PagesHeader);
