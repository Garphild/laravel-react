import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

class Application extends PureComponent {
  render() {
    return (
      <div>
        Application test
      </div>
    );
  }
}

Application.propTypes = {};

export default observer(Application);
