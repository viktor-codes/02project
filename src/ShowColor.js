const ShowColor = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section
      className="w-96 h-96 border-2 border-black rounded grid place-content-center shadow-2xl"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "black" : "white",
      }}
    >
      <p className="text-center">{colorValue ? colorValue : "Empty Value"}</p>
      <p className="text-center">{hexValue ? hexValue : null}</p>
    </section>
  );
}


export default ShowColor
