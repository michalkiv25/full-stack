import React from 'react';
import E from './Header.style';

const Header = (props) => {

  return (
    <E.Root {...props}>
        <h2>{props.header}</h2>
    </E.Root>
  )
}



export default Header;