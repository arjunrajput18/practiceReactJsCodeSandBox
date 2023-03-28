export const ProductShow = ({ name, price, id }) => {
  return (
    <>
      <li key={id} style={{ border: "solid 1px black", padding: "3px" }}>
        <p> {name}</p>
        <p>{price}</p>
      </li>
    </>
  );
};
