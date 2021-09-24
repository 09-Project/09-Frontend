import React,{useState,useCallback} from 'react';
import './SignUp.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function SignUp(){
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
      axios.post('http://3.19.60.23:8080/auth/join',{
        name : nickName,
        username : id,
        password : makepassword
      },{headers:postHeader})
      .then(function(respose){
        console.log(respose);
        // setNickName('')
        setPassword({
          makepassword : '',
          verifyPassword : ''
        })
      })
      .error(function(){
        alert("오류");
      })
    } else {
      alert("오류");
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
            <i><img src="" alt="" /></i>
          </div>
          <div className="joinUs">JOIN US</div>
          <div className="signUpInputContainer">
            <p className="introduceInput">기본 정보 입력</p>
            <div className="inputSection">
              <div className="eachInput"><p>닉네임</p><input onChange={onChangePassword} name="nickName" type="text" value={nickName} /></div>
              <div className="eachInput"><p>아이디</p><input name="makepassword" onChange={onChangePassword} name="id" type="text" value={id} /></div>
              <div className="eachInput">
                <p>비밀번호</p>
                <div>
                  <input name="makepassword" id="input" onChange={onChangePassword} type={checkShow[0] ? "text" : "password"} value={makepassword} />
                  <label onClick={()=>checkShowHide(0)}  htmlFor="input">
                    <FontAwesomeIcon  icon={checkShow[0] ? faEye : faEyeSlash}/></label>
                </div>
              </div>
              <div className="eachInput">
                <p>비밀번호 확인</p>
                <div><input name="verifyPassword" id="check"  onChange={onChangePassword} type={checkShow[1] ? "text" : "password"} value={verifyPassword} />
                  <label  onClick={()=>checkShowHide(1)} htmlFor="check">
                    <FontAwesomeIcon  icon={checkShow[1] ? faEye : faEyeSlash}/>
                  </label></div>
                </div>
            </div>
            <div className="signUpInputSection">
              <button className="submit" onClick={onClickSubmit}>확인</button>
              <Link to="/"><button className="cancle">취소</button></Link>
            </div>
          </div>
        </div>
      </section>
  );
}
export default SignUp;