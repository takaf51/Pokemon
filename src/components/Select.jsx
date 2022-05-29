import React from 'react'

const Select = props => {
  const {pokeList, onSelect, curIndex} = props;
  const content = pokeList.map((p,index) => <option key={index}  value={index} {...(index === curIndex ? { selected: 1 } : {})}>{`${index + 1}: ${p.name}`}</option>)
  return (
    <select className='w-full mb-2 border-1 rounded-md h-[50px] text-[22px]' onChange={e => onSelect.call(null, e.target.value)}>
      {content}
    </select>
  );
}

export default Select;