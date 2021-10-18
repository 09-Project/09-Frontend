import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './SearchPage.scss';
import MainPage from '../MainPage/MainPage';
import GoodsContainer from '../../Components/GoodsContainer/GoodsContainer';
import axios from 'axios';
function SearchPage(props){
  function useQuery(){
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const isResult =  query.get("keyword");
    const [resultCount,setResultCount] = useState(0);
    useEffect(()=>{
      axios.get(`http://3.36.26.221:8080/post/search?keyword=${isResult}`).then(res => {
        setResultCount(res.data.length)
      });
    },[isResult])
  return(
      <section className="searchPage">
          {resultCount <= 0 ?
          <section className="emptyPage">
              <div className="isNull">
                <i><img src="" alt="" /></i>
                <p>검색 결과가 없습니다</p>
              </div>
              <div className="tips">
                  <p>다른 검색어(유사어)로 검색해 보시기 바랍니다.</p>
                  <p>단어의 철자가 정확한지 확인해 주시기 바랍니다.</p>
                  <p>일반적으로 많이 사용하는 검색어로 다시 검색해 주시기 바랍니다.</p>
              </div>
          </section> : 
          <section className="searchResult">
              <GoodsContainer isResult={isResult} />
          </section>
        }
      </section> 
  );
}
export default SearchPage;