import React from 'react';
import './MainPage.scss';
import Banner from '../../assets/images/banner_09.jpg'
import GoodsContainer from '../../Components/GoodsContainer/GoodsContainer';
function MainPage(props){
  const {RecomendGoddsArr,myWishList,setRecomendGoddsArr} = props;
  return(
    <div className="MainPage">
        <div className=""></div>
        <img className="AD" src={Banner}/>
        <GoodsContainer RecomendGoddsArr={RecomendGoddsArr} setRecomendGoddsArr={setRecomendGoddsArr}/>
    </div>
  );
}
export default MainPage;