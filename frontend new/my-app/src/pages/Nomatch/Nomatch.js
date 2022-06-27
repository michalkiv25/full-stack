import React from 'react';
import E from "./Nomatch.style";

function Nomatch() {
  return (
    <E.root>
        <E.info>
            <h1>404</h1>
            <h2>מצטערים</h2>
            <p>הדף המבוקש אינו נמצא</p>
            <a href='/'> בחזרה לדף הראשי</a>
        </E.info>
    </E.root>
  )
}

export default Nomatch