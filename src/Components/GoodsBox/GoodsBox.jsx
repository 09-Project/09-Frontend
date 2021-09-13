import React from 'react';
import './GoodsBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faHeart } from '@fortawesome/free-solid-svg-icons'

function GoodsBox(props){
    const {value,mypage} = props;
  return(
      <div className={mypage ?  "myPageProduct" : "goodsComponent"}>
          {value.map((list)=>
            <div className="GoodsBoxEachBox">
                <div className="GoodsImg">
                    <img src={value.img} alt="IMG" />
                    <div className="typeOfGoods">
                        <div className="typeCircle"></div>
                        <p className="typeWord">{list.type}</p>
                    </div>
                </div>
                <div className="GoodsInfo">
                    <p className="goodsTitle">{list.title}</p>
                    <p className="goodsPrice"><p>{list.price}</p><div className="won">원</div></p>
                </div>
                <div className="GoodsLocation">
                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i><p>{list.location}</p>
                    <i style={{marginLeft:"auto",marginRight:"15px"}}><FontAwesomeIcon icon={faHeart}/></i>
                </div>
            </div>
          )}
      </div>
  );
}
export default GoodsBox;