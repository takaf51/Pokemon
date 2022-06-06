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
    <div className='mx-auto bg-[#55E6] w-[340px] my-4 h-[650px] p-1 flex flex-col justify-between items-center'>
      <div>
        <h1 className='text-center my-2 text-lg font-semibold'>Pokedex by React</h1>
        {pokeList && <Select pokeList={pokeList} onSelect={selectHandler} curIndex={curIndex}/>}
        {pokemon && <Card pokemon={pokemon}/>}
      </div>
      <div className='flex w-full'>
        <Button isActive={0 < curIndex} command={prev}>Previouse</Button>
        <Button isActive={pokeList.length ? pokeList.length - 1 > curIndex : false} command={next}>Next</Button>
      </div>
    </div>
	);
}

