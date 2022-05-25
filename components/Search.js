import Button from "./Button";

function Search() {
  return (
    <div>
        <form 
        className="flex justify-center"
        action="http://0.0.0.0:5000/predict" 
        method="post">
            <input className="mx-5 px-5 rounded-2xl bg-black border-2 font-bold text-2xl
            text-center" 
            type="text" id="first" name="first" required/>
            <Button title="Submit"/>
        </form>   
    </div>
  )
}

export default Search
