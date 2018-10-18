import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class ListItem extends Component {

  onRowPress(employee) {
    console.log(employee);
    Actions.employeeEdit({ employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress(this.props.employee)} >
        <View>
          <CardSection>
            <Text style={styles.titleStyle} >
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
