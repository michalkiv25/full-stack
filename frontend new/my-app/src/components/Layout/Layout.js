import React from 'react';
import PropTypes from 'prop-types';


import Empty from './templates/Empty';
import DefaultLayout from './templates/Default';


const renderTemplate = (template,header,addRow) => {
  let output;

  switch (template) {
    case 'empty':
      output = <Empty />;
      break;

    default:
      output = <DefaultLayout header={header} />;
      break;
  }

  return output;
}

const Layout = (props) => {
  const {
    template,
    header,
  } = props;

  return renderTemplate(template,header);
}


Layout.propTypes= {
    template: PropTypes.oneOf([
    'empty',
    'default',
  ]),
}

Layout.defaultProps = {
  template: 'default'
};

export default Layout;
