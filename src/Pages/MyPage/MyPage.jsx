import React from 'react';
import './MyPage.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';
import WishProductBox from '../../Components/WishProductBox/WishProductBox';

function MyPage(props){
    const {myProductArr,myWishList,setMyWishList,setMyProductArr} = props;
    const writerObj ={
        name : '추혜연',
        goodsCount : myProductArr.length,
        wishCount : myWishList.length,
        introduce : '아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지 아 배고프다 오늘 급식 뭐였지'
    }
    const allRemove = () => {
        setMyWishList([])
    }
    const selectRemove = () => {
        const removeArr = myWishList.filter((li)=>li.status !== true);
        console.log(removeArr)
        setMyWishList(removeArr)
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
                    {myWishList.length > 0 ? 
                        <div>
                        <div className="list">
                            <WishProductBox value={myWishList} setMyWishList={setMyWishList} />
                        <div className= "wishListButtons">
                            <button className="allRemove" onClick={allRemove}>전체삭제</button>
                            <button className="selectRemove" onClick={selectRemove}>선택삭제</button>
                        </div>
                        </div>
                    </div> : ''
                    }
                </li>
            </ul>
          </div>
      </section>
  );
}
export default MyPage;