import React from 'react';
import './MainPage.scss';
import GoodsBox from '../../GoodsBox/GoodsBox';

function MainPage(props){
  const {RecomendGoddsArr} = props;
  console.log(RecomendGoddsArr);
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