import React from 'react';
import './WishProductBox.scss';

function WishProductBox(props){
    const {value,setMyWishList,} = props;
    const changeStatus = (checked,id) => {
        value[id].status = checked
        if(checked){
            setMyWishList([...value])
        }
        console.log(value,"asd");
    }
        return(
        <section className="wishProductBox">
          {value.map((value,key)=>
            <div className="eachBox">
                <div className="WishProductImg"><img src={value.img} alt="IMG" /></div>
                {console.log(value.status,key+1)}
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