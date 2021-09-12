import React from 'react';
import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faLink,faUser } from '@fortawesome/free-solid-svg-icons'

function MyPage(props){
    const objInfo = {
        title : '마라탕 공동구매',
        objPrice : 15000,
        hearts : 4,
        link : 'https://open.kakao.com/o/sjPi6pR',
        writer : '추혜연'
    }
  return(
      <section className="myPage">
          <div className="GoodsInfo">
              <img src="" alt="" className="goodsImg" />
              <ul className="GoodsDetails">
                    <li className="goodsTitle">{objInfo.title}</li>
                    <li className="Price"><p className="goodsPrice"></p>{objInfo.objPrice}<p className="won">원</p></li>
                    <li className="line"></li>
                    <li className="heartCount"><FontAwesomeIcon icon={faHeart} className="iconInDetail"/><p>{objInfo.hearts}</p></li>
                    <li className="chattingLink"><FontAwesomeIcon icon={faLink}  className="iconInDetail"/><a href={objInfo.link}>{objInfo.link}</a></li>
                    <li className="wirter"><FontAwesomeIcon icon={faUser}className="iconInDetail"/><p>{objInfo.writer}</p></li>
              </ul>
          </div>
      </section>
  );
}
export default MyPage;