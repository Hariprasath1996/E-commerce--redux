
import React from "react";

const ProductCard = (props) => {
    return (
        <div className="pro-card-box m-2 flex justify-center flex-col ">
            <div className="pro-list p-4 text-center leading-8  m-4  w-60 shadow-2xl rounded-2xl ">
                <h1 className="pro-head text-stone-800 font-serif font-bold ... text-md ">{props.name}</h1>
                <img className="pro-image rounded-2xl p-2 flex relative left-1.5 " height={150} width={180} src={props.image} alt={props.name} />
                <h3 className="pro-price p-2  text-stone-600  font-serif font-bold ... text-md   ">Price Rs. {props.price}</h3>
                <h4 className="mb-2">Discount : {props.Discount}%</h4>
                <h4 className="mb-2" > Rating : {props.Rating}</h4>
                <div> {props.stock > 0 ? <button className="add-btn p-2 bg-green-600 hover:bg-green-800 ... rounded text-md text-gray-100 font-bold ">Available</button> :
                    <button className="add-btn p-2 rounded text-md text-red-400 font-bold hover:bg-red-600 ... hover:text-white  ">Out Of Stock</button>
                }
                </div>
            </div>
        </div>
    );
}
export default ProductCard;