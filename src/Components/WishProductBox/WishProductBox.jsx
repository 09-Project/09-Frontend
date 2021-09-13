import React from 'react';
import './WishProductBox.scss';

function WishProductBox(props){
    const {value} = props;
  return(
      <section className="wishProductBox">
          {value.map((value,key)=>
            <div className="eachBox">
                <div className="WishProductImg"><img src={value.img} alt="IMG" /></div>
                <label htmlFor={key} className="checkBoxDiv">
                    <input type="checkbox" name="" id={key} />
                    <span className="checkmark"></span>
                </label>
                <p>{value.title}</p>
            </div>
            )}
      </section>
  );
}
export default WishProductBox;