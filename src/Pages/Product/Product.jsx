import React,{useEffect, useState} from 'react';
import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faLink,faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import { API_HOST } from '../../constant/api';
import { Link } from 'react-router-dom';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Product(){
    const [otherProduct,setOhterProduct] = useState([]);
    const location = useLocation()
    useEffect(()=>{
        axios.get(API_HOST+'/post/other').then(res=>setOhterProduct(res.data)); 
    },[])
    useEffect(()=>{
        console.log(otherProduct);
    },[otherProduct])
    const [productContent,setProductContent] = useState('');
    let query = useQuery();
    const post_id = query.get('post_id')
    useEffect(()=>{
        axios.get(API_HOST+'/post/'+post_id).then(res=>setProductContent(res.data));
    },[location.search]);
    return(
        <section className="Product">
          <div className="GoodsInfo">
              <a href={productContent.image}><div style={{backgroundImage:`url(${productContent.image})`}} alt="" className="goodsImg" /></a>
              <ul className="GoodsDetails">
                    <li className="goodsTitle">{productContent.title}</li>
                    <li className="Price"><p className="goodsPrice"></p>{productContent.price}<p className="won">원</p></li>
                    <li className="line"></li>
                    <li className="heartCount"><FontAwesomeIcon icon={faHeart} className="iconInDetail"/><p>{productContent.get_likes}</p></li>
                    <li className="chattingLink"><FontAwesomeIcon icon={faLink}  className="iconInDetail"/><a href={productContent.open_chat_link}>{productContent.open_chat_link}</a></li>
                    <li className="wirter"><FontAwesomeIcon icon={faUser}className="iconInDetail"/><p>{productContent.member_name}</p></li>
                    <li className="removeProduct"><button>삭제</button></li>
              </ul>
          </div>
              <section className="productInformations">
                  <ul className="introduceType"><li><p className="productIntroduce">상품설명</p></li><li><p className="wirterInfo">판매자 정보</p></li></ul>
                  <div className="contents">
                      <p className="introduceContent">
                        {productContent.content}
                    </p>
                <section className="wirterInfoContents">
                    <div className="profile">
                        <div className="profileTop">
                            <img src="" alt="" />
                            <div className="details">
                                <p className="Writername">{productContent.member_name}</p>
                                <div><p className="productCount">상품 {productContent.posts_count}</p><p className="Wish">찜 {productContent.every_like_counts}</p></div>
                                <button>페이지 방문</button>
                            </div>
                        </div>
                        <p className="shortIntroduce">
                            {productContent.member_introduction}
                        </p>
                    </div>
                </section>
                </div>
            </section>
            <section className="RecommendOtherProduct">
                <p className="showOtherProduct">다른 상품 보기</p>
                <div className="ProductLists">
                    {otherProduct.map((li)=>
                        <Link to={`/product?post_id=${li.id}`} className="eachList">
                            <img src={li.image} alt="" />
                            <p>{li.title}</p>
                        </Link>
                    )}
                </div>
            </section>
      </section>
  );
}
export default Product;