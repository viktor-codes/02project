import colorNames from "colornames";

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form 
        onSubmit={(e) => e.preventDefault}
        className="flex flex-col"
    >
      <label 
      className="hidden"
      
      >Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        value={colorValue}
        onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        className="w-96 h-10 border-2 border-black rounded mt-2 shadow-2xl"
      />
      <button
        className="w-96 h-10 border-2 border-black rounded mt-2 shadow-2xl"
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  );
}

export default Input
