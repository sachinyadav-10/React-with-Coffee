import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>OOPPSSSSS!!!!!!!</h1>
        <h4>you gotttaaa errorr</h4>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
  );
}

export default Error