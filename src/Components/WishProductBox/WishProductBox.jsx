import React from 'react';
import './WishProductBox.scss';

function WishProductBox(props){
    const {value,setMyWishList} = props;
    const changeStatus = (e) => {
        console.log(e.target.value);
        const valueArr = value[e.target.value];
        const nextObj = {
            ...valueArr,
            [e.target.name] : true
        }
        console.log(nextObj)
        setMyWishList([nextObj])
    }
  return(
      <section className="wishProductBox">
          {value.map((value,key)=>
            <div className="eachBox">
                <div className="WishProductImg"><img src={value.img} alt="IMG" /></div>
                <label htmlFor={key}  className="checkBoxDiv" onClick={changeStatus}>
                    <input type="checkbox" name="status" value={key} id={key} />
                    <span className="checkmark" ></span>
                </label>
                <p>{value.title}</p>
            </div>
            )}
      </section>
  );
}
export default WishProductBox;