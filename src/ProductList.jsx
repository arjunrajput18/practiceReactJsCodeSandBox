export const ProductList = ({ productDetails, headerEmployee }) => {
  const isRed = (workExperience) => {
    if (workExperience > 5) {
      return "solid 3px red";
    }
    return "";
  };
  return (
    <>
      <h1>{headerEmployee}</h1>
      {productDetails.map(({ name, workExperience }) => (
        <div key={workExperience} style={{ border: isRed(workExperience) }}>
          {name} {workExperience}
        </div>
      ))}
    </>
  );
};
