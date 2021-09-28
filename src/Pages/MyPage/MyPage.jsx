import React, { useState } from 'react';
import './MyPage.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';
import WishProductBox from '../../Components/WishProductBox/WishProductBox';
import { Link } from 'react-router-dom';

function MyPage(props){
    const {myProductArr,myWishList,setMyWishList,setMyProductArr} = props;
    const writerObj ={
        name : '추혜연',
        goodsCount : myProductArr.length,
        wishCount : myWishList.length,
        introduce : '아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지',
        wirterHistory : 12
    }
    const [selectedTypeBox,setSelectedTypeBox] = useState([true,false,false]);
    const changeSelectedType = (e) => {
        const nextArr = [false,false,false];
        nextArr[e] = true;
        setSelectedTypeBox(nextArr);
    }
  return(
      <section className="MyPage">
          <div className="MyPageContents">  
            <h1 className="Title">마이페이지</h1>
            <section className="myInfo">
                <img src="" alt="" />
                <ul className="myIntoduce">
                    <li className="wirterName">{writerObj.name}</li>
                    <li className="wirterActivity">
                        <p className="goodsCount">상품 {writerObj.goodsCount}</p><div className="line"/><p className="wishCount">찜 {writerObj.wishCount}</p>
                    </li>
                    <li className="introduceMyself">{writerObj.introduce}</li>
                    <li className="modifyProfile"><Link to="/rectify">프로필 수정</Link></li>
                </ul>
            </section>
            <ul className="myProductlists">
                <li className="productList">
                    <ul className="selectOption">
                        <li onClick={()=>{changeSelectedType(0)}}>상품 {writerObj.goodsCount}{selectedTypeBox[0] ? <div className="seletingBorder"/> : ''}</li>
                        <li onClick={()=>{changeSelectedType(1)}}>찜한상품 {myWishList.length}{selectedTypeBox[1] ? <div className="seletingBorder"/> : ''}</li>
                        <li onClick={()=>{changeSelectedType(2)}}>거래내역 {writerObj.wirterHistory}{selectedTypeBox[2] ? <div className="seletingBorder"/> : ''}</li></ul>
                    <div className="list">
                        <GoodsBox value={myProductArr} mypage={true}/>
                    </div>
                </li>
            </ul>
          </div>
      </section>
  );
}
export default MyPage;