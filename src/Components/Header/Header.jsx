import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faPlusSquare,faUserAlt,faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom';
import {useLocation} from 'react-router';
import logo from '../../assets/images/logo_09.png'
import symbol from '../../assets/images/Symbol.png';
import { setCookie } from '../../cookie';
function Header(props){
    const {loginStatus,onclickModalOnOff,setSelectedTypeBox,setLoginStatus} = props;
    const location = useLocation();
    const isEmpty = location.pathname.includes('search');
    const history = useHistory();
    const onKeyPressEnter = (e) => {
        if(e.key == 'Enter' && e.target.value.length > 0) onSubmit(e.target.value);
    }
    const onSubmit = (e) => {
        history.push(`/search?keyword=${e}`);
    }
    const onClickLogout = () => {
        setLoginStatus(false);
        setCookie('myToken','');
    }
  return(
      <section className="HeaderSection">
        <div className="HeaderDiv">
            <div className="HeaderTop"><div className="loginStatus">{loginStatus ? <p onClick={onClickLogout}>로그아웃</p> : <div style={{display:'flex'}}><p onClick={onclickModalOnOff}>로그인</p> / <Link to="/signup"><p>회원가입</p></Link></div>}</div></div>
            <div className="HeaderNavBar" style={isEmpty ? {border:'none'} : {}}>
                <div className="HeaderNavBarLeft">
                    <Link to="/" className="Logo09"><i><img className="symbol" src={symbol} alt="" /><img className="logo" src={logo} alt="Logo" /></i></Link>
                    <div className="HeaderInputDiv">
                        <input onKeyPress={onKeyPressEnter} id="searchInput" type="text" placeholder="상품명을 입력하세요" /><label htmlFor="searchInput" ><FontAwesomeIcon className="searchIcon" icon={faSearch}/></label>
                    </div>
                </div>
                <nav className="HeaderNavBarRight">
                    <ul className="nav">
                        <Link to="/upload"><li className="upload"><i><FontAwesomeIcon className="headerIcon"  icon={faPlusSquare}/></i><p>게시물 올리기</p></li></Link>
                        <li className="leftLine"><i><FontAwesomeIcon className="headerIcon" icon={faUserAlt}/></i><Link to="/mypage"><p>마이페이지</p></Link></li>
                        <Link to="/mypage" onClick={()=>{setSelectedTypeBox([false,true,false])}}><li className="leftLine"><i><FontAwesomeIcon className="headerIcon" icon={faHeart}/></i><p>찜한 상품</p></li></Link>
                    </ul>
                </nav>
            </div>
        </div>

      </section>
  );
}
export default Header;