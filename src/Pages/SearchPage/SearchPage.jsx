import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './SearchPage.scss';
import MainPage from '../MainPage/MainPage';
function SearchPage(props){
    const location = useLocation();
    const {RecomendGoddsArr} = props;
    location.pathname = 'search';
    const [resultCount,setResultCount] = useState(1);
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
              <MainPage RecomendGoddsArr={RecomendGoddsArr} />
          </section>
        }
      </section> 
  );
}
export default SearchPage;