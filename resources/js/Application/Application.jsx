import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { ToastContainer } from 'react-toastify';

class Application extends PureComponent {
  render() {
    return (
      <div>
        Application test
        <ToastContainer />
      </div>
    );
  }
}

Application.propTypes = {};

export default observer(Application);
