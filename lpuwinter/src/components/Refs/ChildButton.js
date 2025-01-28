// import React from 'react'

import { forwardRef } from "react";

// function ChildButton({ref,children,onclick}) {
//   return (
//     <div>
//       <button ref={ref} onClick={onclick}>{children}</button>
//     </div>
//   )
// }

// export default ChildButton


const ChildButton = forwardRef((props,ref)=>(
    <button ref={ref} onClick={props.onclick}>{props.children}</button>
))
export default ChildButton