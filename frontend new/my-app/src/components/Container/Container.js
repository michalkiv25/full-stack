import React from 'react';
import E from './Container.style';

const Container = (props) => {
  const {
    children,
  } = props;

  return (
    <E.Root>
      {children}
    </E.Root>
  )
}

export default Container;
