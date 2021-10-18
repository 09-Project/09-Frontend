import React from 'react';
import './MainPage.scss';
import GoodsBox from '../../Components/GoodsBox/GoodsBox';
import { useHistory, useLocation } from 'react-router';
import Banner from '../../assets/images/banner_09.jpg'
import { API_HOST } from '../../constant/api';
import axios from 'axios';
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