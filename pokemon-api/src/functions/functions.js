
    // numeri di pokemon
export const pokemonId = (id) => {
    if(id < 10){
      return `000${id}`
    }else if(id < 100){
      return `00${id}`
    }else if(id < 1000){
      return `0${id}`
    }else{
      return id
    }
  }

  // iniziale maiuscola e spazio tra i nomi
export const Capitalize = (pokemonName) => {
    const array = []
    const splitName = pokemonName.split('-')
    splitName.map((word)=>{
      const firstLetter = word.slice(0, 1);
      const firstLetterCap = firstLetter.toUpperCase();
      const newPokemonName = firstLetterCap+word.slice(1)
      array.push(newPokemonName)
    })
    const finalName = array.join(' ')

    return finalName
  }

