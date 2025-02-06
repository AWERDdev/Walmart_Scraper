import PropTypes from "prop-types"

function Result({ Item_Image, Item_name, wasPrice, currentPrice, discount }) {
  return (
    <div className="container bg-white h-auto w-[65vw] box-shadow-lg rounded-md pr-5 pl-5 pb-5 ">
      <div className="title">
        <h1 className="text-[1.5rem] mt-3 ml-3">Results</h1>
      </div>
      <div className="Result-content grid md:flex">
        <div className="Item-Image">
          <img 
          src={Item_Image}
           alt="Product Image"
           className="w-[20vw] h-auto mt-5 min-w-[200px]" 
           />
          </div>
          <div className="content mt-10">
          <div className="Item-Name ml-5">Product:{Item_name}</div>
        <div className="Item-prices grid gap-5 mt-10 ml-5 md:flex  ">
          <div className="wasPrice">Was Price: {wasPrice}</div>
          <div className="currentPrice">Current Price: {currentPrice}</div>
          <div className="discount">Discounted Price: {discount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  Item_name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null, undefined])
  ]),
  Item_Image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null, undefined])
  ]),
  wasPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null, undefined])
  ]),
  currentPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null, undefined])
  ]),
  discount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null, undefined])
  ])
};

export default Result;
