import React,{useState} from 'react';
import './GoodsBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function GoodsBox(props){
    const {value,mypage} = props;
    const [isFinish,setIsFinish] = useState(value.completed !== "IN_PROGRESS");
    const thisProductLink = '/product?post_id='+value.id;
  return(
      <div className={mypage  ?  "myPageProduct" : "goodsComponent"}>
          {/* {console.log(value)} */}
            <Link to={thisProductLink} className="GoodsBoxEachBox">
                <div className="GoodsImg">
                    <div className="goodsMainImg" style={{backgroundImage : `url(${value.image})`}} alt="IMG" />
                    {isFinish ? <div className="termination">종료</div> : ''}
                </div>
                <div className="GoodsInfo">
                    <p className="goodsTitle">{value.title}</p>
                    <p className="goodsPrice">{value.purpose !== "DONATION" ? <div><p>{value.price}</p><div className="won">원</div></div>:<div className="donation">무료나눔</div>}</p>
                    <div className={mypage ?"typeOfGoods myPagetypeofGoods" :"typeOfGoods mainPagetypeOfGoods"}>
                        <p className="typeWord">{value.purpose !== "DONATION" ? "공동구매" : "기부"}</p>
                    </div>
                </div>
            </Link>
                <div className="GoodsLocation">
                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i><p>{value.transaction_region}</p>
                    <i style={{marginLeft:"auto",marginRight:"15px"}}><FontAwesomeIcon icon={faHeart}/></i>
                </div>
      </div>
  );
}
export default GoodsBox;