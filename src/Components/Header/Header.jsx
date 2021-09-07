import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Header(){
    const [loginStatus,setLoginStatus] = useState(false);
  return(
      <section className="HeaderSection">
        <div className="HeaderDiv">
            <div className="HeaderTop"><div className="loginStatus">{loginStatus ? <p>로그아웃</p> : <p>로그인/회원가입</p>}</div></div>
            <div className="HeaderNavBar">
                <div className="HeaderNavBarLeft">
                    <i className="09Logo"><img src="" alt="Logo" /></i>
                    <div className="HeaderInputDiv">
                        <input id="searchInput" type="text" placeholder="상품명을 입력하세요" /><label htmlFor="searchInput"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></label>
                    </div>
                </div>
                <nav className="HeaderNavBarRight">
                    <ul className="nav">
                        <li><i><img src="" alt=""/></i><p>게시물 올리기</p></li>
                        <li className="leftLine"><i><img src="" alt="" /></i><p>마이페이지</p></li>
                        <li className="leftLine"><i><img src="" alt="" /></i><p>찜한 상품</p></li>
                    </ul>
                </nav>
            </div>
        </div>
      </section>
  );
}
export default Header;