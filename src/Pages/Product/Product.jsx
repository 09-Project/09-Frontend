import React from 'react';
import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faLink,faUser } from '@fortawesome/free-solid-svg-icons'

function Product(props){
    const objInfo = {
        title : '마라탕 공동구매',
        objPrice : 15000,
        hearts : 4,
        link : 'https://open.kakao.com/o/sjPi6pR',
        writer : '추혜연'
    }
  return(
      <section className="Product">
          <div className="GoodsInfo">
              <img src="" alt="" className="goodsImg" />
              <ul className="GoodsDetails">
                    <li className="goodsTitle">{objInfo.title}</li>
                    <li className="Price"><p className="goodsPrice"></p>{objInfo.objPrice}<p className="won">원</p></li>
                    <li className="line"></li>
                    <li className="heartCount"><FontAwesomeIcon icon={faHeart} className="iconInDetail"/><p>{objInfo.hearts}</p></li>
                    <li className="chattingLink"><FontAwesomeIcon icon={faLink}  className="iconInDetail"/><a href={objInfo.link}>{objInfo.link}</a></li>
                    <li className="wirter"><FontAwesomeIcon icon={faUser}className="iconInDetail"/><p>{objInfo.writer}</p></li>
                    <li className="removeProduct"><button>삭제</button></li>
              </ul>
          </div>
              <section className="productInformations">
                  <ul className="introduceType"><li><p className="productIntroduce">상품설명</p></li><li><p className="wirterInfo">판매자 정보</p></li></ul>
                  <div className="contents">
                      <p className="introduceContent">
                        제가 제 뒷자리에 있는 혜령이한테 지금 제일 먹고싶은게 뭐냐고 물어보니까 마라탕이 제일 먹고싶다고 하더
                        라고요 그래서 디자인을 마라탕 공동구매와 마라탕 기부로 채워봤어요!!! 그런데 저는 마라탕보다 지금 그 뭐
                        지 아 허니콤보랑 엽떡이 먹고 싶더라고요 그래서 집가서 먹으려고요!! 제가 제 뒷자리에 있는 혜령이한테 지
                        금 제일 먹고싶은게 뭐냐고 물어보니까 마라탕이 제일 먹고싶다고 하더라고요 그래서 디자인을 마라탕 공동구
                        매와 마라탕 기부로 채워봤어요!!! 그런데 저는 마라탕보다 지금 그 뭐지 아 허니콤보랑 엽떡이 먹고 싶더라고
                        요 그래서 집가서 먹으려고요!! 제가 제 뒷자리에 있는 혜령이한테 지금 제일 먹고싶은게 뭐냐고 물어보니까 
                        마라탕이 제일 먹고싶다고 하더라고요 그래서 디자인을 마라탕 공동구매와 마라탕 기부로 채워봤어요!!! 그런
                        데 저는 마라탕보다 지금 그 뭐지 아 허니콤보랑 엽떡이 먹고 싶더라고요 그래서 집가서 먹으려고요!! 이거까지 
                        쓰면 대충 500 글자 채움 이거까지 쓰면 500 글자
                    </p>
                <section className="wirterInfoContents">
                    <div className="profile">
                        <div className="profileTop">
                            <img src="" alt="" />
                            <div className="details">
                                <p className="Writername">추혜연</p>
                                <div><p className="productCount">상품 2</p><p className="Wish">찜 13</p></div>
                                <button>페이지 방문</button>
                            </div>
                        </div>
                        <p className="shortIntroduce">
                            아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급
                            식 뭐였지 아 배고프다 오늘 급식 뭐였지
                        </p>
                    </div>
                </section>
                </div>
            </section>
      </section>
  );
}
export default Product;