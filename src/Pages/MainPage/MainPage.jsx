import React, { useState } from 'react';
import './MainPage.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';
import { useLocation } from 'react-router';
import Banner from '../../assets/images/banner_09.jpg'
function MainPage(props){
  const location = useLocation();
  const isSearchResult = location.pathname.includes('search');
  const {RecomendGoddsArr,myWishList} = props;
  const [pagenationStartIndex, setPagenationStartIndex] = useState(1);
  const [page, setPage] = useState(1);
  const onClickSelectBtn = (nextPageIndex) => {
    setPage(nextPageIndex);
  }

  const onClickPrevBtns = () => {
    setPagenationStartIndex(Math.max(pagenationStartIndex - 1, 1));
  }
  
  const onClickNextBtns = () => {
    setPagenationStartIndex(pagenationStartIndex + 1);
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

                  {
                    Array(5).fill(void 0).map(
                      (item, index) => {
                        const targetPage = pagenationStartIndex + index;
                        
                        return (
                          <li onClick={()=>onClickSelectBtn(targetPage)} className={"eachBtn " +  (page === targetPage ? 'selected' : 'isNotSelected')}>{targetPage}</li>     
                        )
                      }
                    )
                  }
                  <li onClick={onClickNextBtns} className="eachBtn arrow">{">"}</li>
                </ul>
          </section>
      </div>
  );
}
export default MainPage;