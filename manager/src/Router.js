import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          titleStyle={styles.titleStyle}
          initial
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          titleStyle={styles.titleStyle}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  titleStyle: {
    flex: 1,
    textAlign: 'center'
  }
};

export default RouterComponent;
