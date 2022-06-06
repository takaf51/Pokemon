import {useState, useEffect, useCallback} from 'react';

const usePokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getPokemonList();
  },[])

  const getContent = async (reqString, apply) => {
    try{
      const res = await fetch(reqString);
      if(!res.ok) throw new Error(res.status || "Something wrong while accessing pokemon data");
      const data = await res.json();
      apply(data);
    } catch (err) {
      console.error(err);
    }
  }

  const getPokemonList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
    const updateList = data => {
      setPokeList(data.results);
      updatePokemon(0);
    };
    getContent(url, updateList);
  }

  const updatePokemon = i => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${parseInt(i) + 1}`;
    const updata = (i, data) => {
      const description = data.flavor_text_entries.filter(ent => ent.language.name ==='en')[0].flavor_text.replace(/[\n\f]/g, '');
      setPokemon({name: data.name, description, imgURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${parseInt(i) + 1}.svg`});
    }
    getContent(url, updata.bind(null, i));
  }

  const next = () => {
    if(pokeList.length - 2 < index) return;
      updatePokemon(parseInt(index) + 1);
      setIndex(prev => prev + 1);
  }
  const prev = () => {
    if(index < 1) return;
    updatePokemon(parseInt(index) - 1);
    setIndex(prev => prev - 1);
    
  }
  const setPokemonByIndex = i => {
    if(i < 0 || pokeList.length -1 < i) return;
    updatePokemon(parseInt(i));
    setIndex(parseInt(i));
  }
  
  return [pokeList, pokemon, index, next, prev, setPokemonByIndex];
}

export default usePokemon;

