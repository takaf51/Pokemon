import React from 'react'
import usePokemon from './hooks/usePokemon';
import Select from './components/Select';
import Card from './components/Card';
import Button from './components/Button';


export const App = () => {
  const [pokeList, pokemon, curIndex, next, prev, setPokemonByIndex] = usePokemon();
  const selectHandler = index => {
    setPokemonByIndex(index);
  }
  
	return (
	  <div className='bg-[#55E6] w-[300px] my-4 h-[680px] p-1'>
      <div className='flex flex-col justify-between items-center h-full'>
        <div>
          {pokeList && <Select pokeList={pokeList} onSelect={selectHandler} curIndex={curIndex}/>}
          {pokemon && <Card pokemon={pokemon}/>}
        </div>
        <div className='flex w-full'>
          <Button isActive={0 < curIndex} command={prev}>Previouse</Button>
          <Button isActive={pokeList.length ? pokeList.length - 1 > curIndex : false} command={next}>Next</Button>
        </div>
      </div>
    </div>
	);
}

