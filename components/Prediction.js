function Prediction({rating}) {
  return (
    <div className="flex justify-center m-6">
        <h1 className="font-extrabold text-5xl 2xl:text-7xl text-center bg-gradient-to-r 
        from-transparent via-black to-transparent p-5">Predicted overall</h1>
        <h2 className="font-extrabold text-5xl 2xl:text-7xl text-center bg-gradient-to-r 
        from-transparent via-blue-700 to-transparent p-5 px-20">{rating}</h2>
    </div>
  )
}

export default Prediction
