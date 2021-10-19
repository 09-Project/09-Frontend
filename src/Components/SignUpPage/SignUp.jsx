import React,{useState,useCallback} from 'react';
import './SignUp.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link,useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo_09.png'
import Symbol from '../../assets/images/Symbol.png';
import { API_HOST } from '../../constant/api';
function SignUp(props){
  function useQuery(){
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const isRectify =  query.get("name");
  const postHeader = {
    'Content-type': 'application/json'
  }
  const [checkShow,setCheckShow] = useState([false,false]);
  const [password,setPassword] = useState({ 
    makepassword : '',
    verifyPassword : '',
    nickName : '',
    id : ''
  })
  const {makepassword,verifyPassword,nickName,id} = password;
  const onChangePassword = useCallback ((e) => {
    console.log("asdsadad")
    setPassword({
      ...password,
      [e.target.name] : e.target.value
    })
  },[password])
  const onClickSubmit = useCallback(() => {
    if(makepassword === verifyPassword){
      if(isRectify) console.log("Asd") // 비번 변경
      else {
        axios.post(API_HOST+'/auth/signup',{
          "name" : nickName,
          "username" : id,
          "password" : makepassword
        })
      }
    }
  },[password,checkShow])

  const checkShowHide = (e) => {
    const ChageArr = [checkShow[0],checkShow[1]];
    ChageArr[e] = !checkShow[e]
    setCheckShow(ChageArr)
  }
  return(
      <section className="SignUpPage">
        <div className="SignUpContainer">
          <div className="empty"></div>
          <div className="logoInSignup">
            <Link to="/"><i><img className="symbol" src={Symbol} alt="" /><img className="logo" src={Logo} alt="" /></i></Link>
          </div>
          {isRectify ? <h1 className="myPage signUpPageTitle">마이페이지</h1> :
          <h1 className="joinUs signUpPageTitle">JOIN US</h1>}
            <div className="signUpInputContainer">
              <p className="introduceInput">{isRectify ? "비밀번호 입력" : "기본 정보 입력"}</p>
              <div className="SignUpBody">
              <div className="inputSection">
                <div className="eachInput"><p>{isRectify ?"기존 비밀번호" : "닉네임"}</p><input onChange={onChangePassword} name="nickName" type="text" value={nickName} /></div>
                {isRectify ? "" :<div className="eachInput"><p>아이디</p><input name="makepassword" onChange={onChangePassword} name="id" type="text" value={id} /></div> }
                <div className="eachInput">
                  <p>{isRectify ? "새 비밀번호" : "비밀번호"}</p>
                  <div>
                    <input name="makepassword" id="input" onChange={onChangePassword} type={checkShow[0] ? "text" : "password"} value={makepassword} />
                    <label onClick={()=>checkShowHide(0)}  htmlFor="input">
                      <FontAwesomeIcon  icon={checkShow[0] ? faEye : faEyeSlash}/></label>
                  </div>
                </div>
                <div className="eachInput">
                  <p>{isRectify ? "새 비밀번호 확인":"비밀번호 확인"}</p>
                  <div><input name="verifyPassword" id="check"  onChange={onChangePassword} type={checkShow[1] ? "text" : "password"} value={verifyPassword} />
                    <label  onClick={()=>checkShowHide(1)} htmlFor="check">
                      <FontAwesomeIcon  icon={checkShow[1] ? faEye : faEyeSlash}/>
                    </label></div>
                  </div>
              </div>
              <section className="banner">

            </section>
            </div>
          </div>
            <div className="Submitbutton">
              <button className="submit" onClick={isRectify ? '':onClickSubmit}>확인</button>
              <Link to="/"><button className="cancle">취소</button></Link>
            </div>
        </div>
      </section>
  );
}
export default SignUp;