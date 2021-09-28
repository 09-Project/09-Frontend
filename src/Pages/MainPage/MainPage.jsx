import React, { useState } from 'react';
import './MainPage.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';

function MainPage(props){
  const {RecomendGoddsArr,myWishList} = props;
  const [selected,setSelected] = useState([true,false,false,false,false]);
  const onClickSelectBtn = (e) => {
    const nextArr = [false,false,false,false,false];
    nextArr[e] = true;
    setSelected(nextArr);
  }
  return(
      <div className="MainPage">
          <div className="AD"></div>
          <div className="RecommendedGoodsContainer">
            <p className="RecomendedGoods">추천 상품</p>
            <section className="RecomendedGoodsBox">
              {RecomendGoddsArr.map((line)=>
                <div className="goodsEachLine"> 
                  <GoodsBox value={line} mypage={false}/>
                </div>
              )}
            </section>
          </div>
          <section className="changeRecommendedPageSection">
                <ul className="changeBtns">
                  <li className="eachBtn arrow">{"<"}</li>
                  <li onClick={()=>onClickSelectBtn(0)} className={ selected[0] ? "selected eachBtn" : "eachBtn isNotSelected"}>1</li>
                  <li onClick={()=>onClickSelectBtn(1)} className={ selected[1] ? "selected eachBtn" : "eachBtn isNotSelected"}>2</li>
                  <li onClick={()=>onClickSelectBtn(2)} className={ selected[2] ? "selected eachBtn" : "eachBtn isNotSelected"}>3</li>
                  <li onClick={()=>onClickSelectBtn(3)} className={ selected[3] ? "selected eachBtn" : "eachBtn isNotSelected"}>4</li>
                  <li onClick={()=>onClickSelectBtn(4)} className={ selected[4] ? "selected eachBtn" : "eachBtn isNotSelected"}>5</li>
                  <li className="eachBtn arrow">{">"}</li>
                </ul>
          </section>
      </div>
  );
}
export default MainPage;