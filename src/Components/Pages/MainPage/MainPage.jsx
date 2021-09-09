import React from 'react';
import './MainPage.scss';
import GoodsBox from '../../GoodsBox/GoodsBox';

function MainPage(){
  const RecomendGoddsArr = [
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매1",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매2",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매3",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매4",
        price : '10000',
        img : '',
        location : '여기'
      }
    ],
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매5",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매6",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매7",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매8",
        price : '10000',
        img : '',
        location : '여기'
      }
    ],
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매9",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매10",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매11",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매12",
        price : '10000',
        img : '',
        location : '여기'
      }
    ],
    [
      {
        type:"공동구매",
        title:"마라탕 공동구매13",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매14",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매15",
        price : '10000',
        img : '',
        location : '여기'
      },
      {
        type:"공동구매",
        title:"마라탕 공동구매16",
        price : '10000',
        img : '',
        location : '여기'
      }
    ]
  ]
  return(
      <div className="MainPage">
          <div className="AD"></div>
          <div className="RecommendedGoodsContainer">
            <p className="RecomendedGoods">추천 상품</p>
            <section className="RecomendedGoodsBox">
              {RecomendGoddsArr.map((line)=>
                <div className="goodsEachLine"> 
                  <GoodsBox value={line}/>
                </div>
              )}
            </section>
          </div>
      </div>
  );
}
export default MainPage;