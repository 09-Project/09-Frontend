import React,{useState} from 'react';
import './GoodsBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function GoodsBox(props){
    const {value,mypage} = props;
    const [isFinish,setIsFinish] = useState(true);
  return(
      <div className={mypage  ?  "myPageProduct" : "goodsComponent"}>
            <Link to="/product" className="GoodsBoxEachBox">
                <div className="GoodsImg">
                    <img src={value.img} alt="IMG" />
                    {isFinish ? <div className="termination">종료</div> : ''}
                </div>
                <div className="GoodsInfo">
                    <p className="goodsTitle">{value.title}</p>
                    <p className="goodsPrice"><p>{value.price}</p><div className="won">원</div></p>
                    <div className={mypage ?"typeOfGoods myPagetypeofGoods" :"typeOfGoods mainPagetypeOfGoods"}>
                        <p className="typeWord">{value.type}</p>
                    </div>
                </div>
            </Link>
                <div className="GoodsLocation">
                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i><p>{value.location}</p>
                    <i style={{marginLeft:"auto",marginRight:"15px"}}><FontAwesomeIcon icon={faHeart}/></i>
                </div>
      </div>
  );
}
export default GoodsBox;