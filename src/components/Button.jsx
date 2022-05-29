import React from 'react'

const Button = props => {
  const {children, command, isActive} = props;
  const style = isActive ? 'm-1 py-2 bg-blue-700 rounded-[0.4rem] flex-[1_1_50%] text-white' : 'm-1 py-2 bg-blue-400 rounded-[0.4rem] flex-[1_1_50%] text-white';
  return <button className={style} onClick={command}>{children}</button>
}

export default Button;