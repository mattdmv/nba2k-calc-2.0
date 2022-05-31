import { useState } from 'react';

function Search() {

  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: name,
    }

    console.log(data.name)

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = process.env.PREDICT_URL

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Player's predicted NBA2k rating is: ${result.predicted_value}`)

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
