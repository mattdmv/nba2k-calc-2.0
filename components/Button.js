function Button({ title }) {
  return (
    <button 
    type="button" 
    className="mx-5 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-green-600 hover:to-green-900
    transition-all font-bold">
              {title}
    </button>
  )
}

export default Button
