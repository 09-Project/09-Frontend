import React,{ useState,useEffect } from 'react';
import './GoodsContainer.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';
import { useHistory, useLocation } from 'react-router';
import { API_HOST } from '../../constant/api';
import axios from 'axios';
function GoodsContainer(props){
  const {isResult} = props;
  const location = useLocation();
  const isSearchResult = location.pathname.includes('search');
  const [pagenationStartIndex, setPagenationStartIndex] = useState(1);
  const [thisPageGoodsArr,setThisPageGoodsArr] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(()=>{
    if(!isSearchResult)axios.get(API_HOST+'/post?page='+(page-1)).then(res => setThisPageGoodsArr(res.data));
    else axios.get(`${API_HOST}/post/search?keyword=${isResult}&page=${page-1}`).then(res=>setThisPageGoodsArr(res.data));
  },[isResult,page])
  const onClickSelectBtn =(nextPageIndex) => {
    setPage(nextPageIndex);
  }
  const onClickPrevBtns = () => {
    setPagenationStartIndex(Math.max(pagenationStartIndex - 1, 1));
  }
  const onClickNextBtns = () => {
    setPagenationStartIndex(pagenationStartIndex + 1);
  }
  return(
      <section className="goodsContainer">
          <div className="RecommendedGoodsContainer">
            <p className={"RecomendedGoods"}>{isSearchResult ? <div className="RecomendedGoods" style={{margin:'0px'}}><p style={{fontSize:'40px',color:'#4A55B5',fontWeight:'bold'}}>"{isResult}"</p>&nbsp;검색결과</div>:"추천 상품"}</p>
            <section className="RecomendedGoodsBox">
              {thisPageGoodsArr.map((line)=>
                <div>
                  <GoodsBox value={line} mypage={false}/>
                </div>
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
      </section>
  );
}
export default GoodsContainer;