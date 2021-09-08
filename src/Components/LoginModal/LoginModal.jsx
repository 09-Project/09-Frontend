import React from 'react';
import './LoginModal.scss';

function LoginModal(){
  return(
    <section className="loginModal">
    <div className="modalContents">
        <i><img src="" alt="" /></i>
        <p className="modalTitle">공동구매부터 무료나눔까지</p>
        <p className="Login">LOG IN</p>
        <input type="text" placeholder="ID" />
        <input type="text" placeholder="PASSWORD" />
        <div className="saveIdBox">
            <input className="saveId" type="checkbox" /><p>아이디 저장</p>
        </div>
        <div className="buttonBox">
          <button className="LoginBtn">LOGIN</button>
          <button className="SingUpBtn">JOIN US</button>
        </div>
    </div>
</section>
  );
}
export default LoginModal;