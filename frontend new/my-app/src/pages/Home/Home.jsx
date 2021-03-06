import React from 'react';
import E from './Home.style';

function Home() {
  return (
    <E.Root>
      <p>
        I created a project in which I experimented with frameWork react and node.js
        Using a MongoDB database.
        I combined client-react designs from:
      </p>
      <E.Ul>
        <li> bootstrap </li>
        <li> style component  </li>
        <li> css </li>
      </E.Ul>
      <p>I have used many react libraries:</p>
      <E.Ul>
        <li> CSSTransition </li>
        <li> toastify </li>
        <li> useForm </li>
        <li> PropTypes</li>
        <li> react-router-dom V6</li>
        <li> toast </li>
      </E.Ul>
    </E.Root>
  )
}

export default Home