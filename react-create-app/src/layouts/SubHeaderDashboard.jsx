import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Switch, Route, Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  subHeader: {
    position: 'relative',
    top: '64px',
    width: '100%'
  },
  subHeaderFormGroup: {
    display: 'flex',
    backgroundColor: '#fff'
  },
  wrapper: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  labelContainer: {
    paddingLeft: '6px',
    paddingRight: '6px'
  },
  label: {
    fontSize: '0.9rem',
    textTransform: 'capitalize'
  },
  labelIcon: {
    minHeight: '48px'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    paddingLeft: '30px',
    paddingRight: '30px'
  },
  selectEmpty: {}
});

class SubHeaderDashboard extends React.Component {
  state = {
    sn: 'FWF60E4Q16025515'
  };
  handleChange = (event, value) => {
    this.props.history.push(this.props.root + value);
  };
  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, history, routes, tabs } = this.props;
    const switchRoutes = (
      <Switch>
        {routes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    );
    const value =
      _.split(history.location.pathname, '/')[3] !== undefined
        ? _.split(history.location.pathname, '/')[3]
        : _.camelCase(tabs[0].label);

    const select = (
      <FormControl className={classes.formControl}>
        <Select
          value={this.state.sn}
          onChange={this.handleSelectChange}
          name="sn"
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={'FWF60E4Q16025515'}>FWF60E4Q16025515</MenuItem>
        </Select>
      </FormControl>
    );

    const header = (
      <div className={classes.subHeaderFormGroup}>
        {select}
        <Tabs
          value={value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          {tabs.map((prop, key) => {
            return (
              <Tab
                icon={prop.icon}
                label={prop.label}
                value={_.camelCase(prop.label)}
                classes={{
                  wrapper: classes.wrapper,
                  labelContainer: classes.labelContainer,
                  label: classes.label,
                  labelIcon: classes.labelIcon
                }}
                key={key}
              />
            );
          })}
        </Tabs>
      </div>
    );

    return (
      <div className={classes.subHeader}>
        {header}
        {switchRoutes}
      </div>
    );
  }
}

SubHeaderDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  root: PropTypes.string.isRequired,
  routes: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired
};

export default withStyles(styles)(SubHeaderDashboard);
