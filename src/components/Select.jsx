import React from 'react'

const Select = props => {
  const { pokeList, onSelect, curIndex } = props;
  const content = pokeList.map((p, index) => <option key={index} value={index} >{`${index + 1}: ${p.name}`}</option>)
  return (
    <select value={curIndex} className='w-full mb-2 border-1 rounded-md h-[40px] text-[22px]' onChange={e => onSelect.call(null, e.target.value)}>
      {content}
    </select>
  );
}

export default Select;