import React from 'react';
import './MyPage.scss';

function MyPage(props){
  return(
      <section className="myPage">
          <div className="GoodsInfo">
              <img src="" alt="" className="goodsImg" />
              <section className="GoodsDetails">
                  <h1 className="goodsTitle">마라탕 공동구매</h1>
                  <div className="Price"><p className="goodsPrice">15000</p><p className="won">원</p></div>
              </section>
          </div>
      </section>
  );
}
export default MyPage;