import { useState } from 'react';
import { useRouter } from 'next/router';

function Search() {

  const [name, setName] = useState('');

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: name,
    }
    
    console.log(data.name)

    router.push({pathname: "/prediction", query: data})

  }

  return (
    <div>
        <form
        className="flex justify-center">
            <input 
              className="mx-5 px-5 rounded-2xl bg-black opacity-75 border-2 font-bold text-2xl text-center" 
              type="text" 
              id="player_name" 
              name="player_name" 
              value={name}
              onChange={(e)=> setName(e.target.value)}
              required/>
            <button
              onClick={handleSubmit}
              type="submit" 
              className="mx-5 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-green-600 hover:to-green-900 transition-all 
              font-bold">Submit
            </button>
        </form>   
    </div>
  )
}

export default Search
