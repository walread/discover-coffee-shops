export default function Banner(props) {
  function handleClick() {
    console.log('Banner button')
  }

  return (
    <div className="m4">
      <h1 className="text-5xl font-extrabold tracking-tight">
        <span className="text-yellow-300">Coffee</span>
        <span className="text-yellow-900">Connoisseur</span>
      </h1>
      <p className="m-3 text-2xl text-gray-500">
        Discover your local coffee shops!
      </p>
      <button
        onClick={handleClick}
        className="bor cursor-pointer bg-slate-600 py-4 px-10 text-lg text-gray-50 hover:bg-slate-400"
      >
        {props.buttonText}
      </button>
    </div>
  )
}
