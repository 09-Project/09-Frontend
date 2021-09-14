import React from 'react';
import './WishProductBox.scss';

function WishProductBox(props){
    const {value,setMyWishList,} = props;
    const changeStatus = (checked,id) => {
        console.log(value[id].status);
        value[id].status = checked
        if(checked == true){
            value[id].status = true
            setMyWishList([...value])
        } else {
            value[id].status = false
            setMyWishList([...value])
        }
    }
        return(
        <section className="wishProductBox">
          {value.map((value,key)=>
            <div className="eachBox">
                <div className="WishProductImg"><img src={value.img} alt="IMG" /></div>
                <label htmlFor={key}  className="checkBoxDiv" onChange={(e)=>{changeStatus(e.target.checked,key)}}>
                    <input type="checkbox" name="status" value={key} id={key} checked={value.status ? true : false} />
                    <span className="checkmark" ></span>
                </label>
                <p>{value.title}</p>
            </div>
            )}
      </section>
  );
}
export default WishProductBox;