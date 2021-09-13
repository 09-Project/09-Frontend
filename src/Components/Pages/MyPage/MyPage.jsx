import React from 'react';
import './MyPage.scss';
import GoodsBox from '../../GoodsBox/GoodsBox';
import WishProductBox from '../../WishProductBox/WishProductBox';

function MyPage(props){
    const {myProductArr,myWishList} = props;
    const writerObj ={
        name : '추혜연',
        goodsCount : 2,
        wishCount : 13,
        introduce : '아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지'
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
                    <li className="modifyProfile"><a href="">프로필 수정</a></li>
                </ul>
            </section>
            <ul className="myProductlists">
                <li className="productList">
                    <h3>상품 {writerObj.goodsCount}</h3>
                    <div className="list">
                        <GoodsBox value={myProductArr} mypage={true}/>
                    </div>
                </li>
                <li className="wishList">
                    <h3>찜한 상품 {writerObj.wishCount}</h3>
                    <div className="list">
                        <WishProductBox value={myWishList} />
                    </div>
                </li>
            </ul>
          </div>
      </section>
  );
}
export default MyPage;