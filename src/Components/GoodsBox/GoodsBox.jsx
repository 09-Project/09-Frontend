import React from 'react';
import './GoodsBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function GoodsBox(props){
    const {value,mypage} = props;
  return(
      <div className={mypage  ?  "myPageProduct" : "goodsComponent"}>
          {value.map((list)=>
            <Link to="/product" className="GoodsBoxEachBox">
                <div className="GoodsImg">
                    <img src={value.img} alt="IMG" />
                </div>
                <div className="GoodsInfo">
                    <p className="goodsTitle">{list.title}</p>
                    <p className="goodsPrice"><p>{list.price}</p><div className="won">원</div></p>
                    <div className="typeOfGoods">
                        <p className="typeWord">{list.type}</p>
                    </div>
                </div>
                <div className="GoodsLocation">
                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i><p>{list.location}</p>
                    <i style={{marginLeft:"auto",marginRight:"15px"}}><FontAwesomeIcon icon={faHeart}/></i>
                </div>
            </Link>
          )}
      </div>
  );
}
export default GoodsBox;