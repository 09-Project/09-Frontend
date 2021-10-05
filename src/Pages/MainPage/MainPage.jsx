import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';
import { useLocation } from 'react-router';
import Banner from '../../assets/images/banner_09.jpg'
function MainPage(props){
  const location = useLocation();
  const isSearchResult = location.pathname.includes('search');
  const {RecomendGoddsArr,myWishList} = props;
  const [selected,setSelected] = useState([true,false,false,false,false]);
  const onClickSelectBtn = (e) => {
    const nextArr = [false,false,false,false,false];
    nextArr[e] = true;
    setSelected(nextArr);
  }

  const [btnNum,setBtnNum] = useState([1,2,3,4,5]);
  const onClickPrevBtns = () => {
    if(btnNum[0] > 1){
      const nextArr = [btnNum[0]-1,btnNum[1]-1,btnNum[2]-1,btnNum[3]-1,btnNum[4]-1];
      setBtnNum(nextArr);
    }
  }
  
  const onClickNextBtns = () => {
    const nextArr = [btnNum[0]+1,btnNum[1]+1,btnNum[2]+1,btnNum[3]+1,btnNum[4]+1];
    setBtnNum(nextArr);
  }
  const {isResult} = props;
  return(
      <div className="MainPage">
          {isSearchResult ? 
          <div className=""></div> : 
          <img className="AD" src={Banner}/>
          }
          <div className="RecommendedGoodsContainer">
            <p className={"RecomendedGoods"}>{isSearchResult ? <div className="RecomendedGoods" style={{margin:'0px'}}><p style={{fontSize:'40px',color:'#4A55B5',fontWeight:'bold'}}>"{isResult}"</p>&nbsp;검색결과</div>:"추천 상품"}</p>
            <section className="RecomendedGoodsBox">
              {RecomendGoddsArr.map((line)=>
                  <GoodsBox value={line} mypage={false}/>
              )}
            </section>
          </div>
          <section className="changeRecommendedPageSection">
                <ul className="changeBtns">
                  <li onClick={onClickPrevBtns} className="eachBtn arrow">{"<"}</li>
                  <li onClick={()=>onClickSelectBtn(0)} className={ selected[0] ? "selected eachBtn" : "eachBtn isNotSelected"}>{btnNum[0]}</li>
                  <li onClick={()=>onClickSelectBtn(1)} className={ selected[1] ? "selected eachBtn" : "eachBtn isNotSelected"}>{btnNum[1]}</li>
                  <li onClick={()=>onClickSelectBtn(2)} className={ selected[2] ? "selected eachBtn" : "eachBtn isNotSelected"}>{btnNum[2]}</li>
                  <li onClick={()=>onClickSelectBtn(3)} className={ selected[3] ? "selected eachBtn" : "eachBtn isNotSelected"}>{btnNum[3]}</li>
                  <li onClick={()=>onClickSelectBtn(4)} className={ selected[4] ? "selected eachBtn" : "eachBtn isNotSelected"}>{btnNum[4]}</li>
                  <li onClick={onClickNextBtns} className="eachBtn arrow">{">"}</li>
                </ul>
          </section>
      </div>
  );
}
export default MainPage;