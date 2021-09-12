import React from 'react';
import './MyPage.scss';

function MyPage(){
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
            <section className="myProducts">
                
            </section>
          </div>
      </section>
  );
}
export default MyPage;