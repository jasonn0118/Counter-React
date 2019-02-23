import React from 'react';


const Button =({children,ClickHandler})=>
<div>
  <button onClick={ClickHandler}>{children}</button>
</div>

export default Button;