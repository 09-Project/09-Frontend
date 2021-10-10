import React, { useState } from 'react';
import './Upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { API_HOST } from '../../constant/api';

const CO_BUYING_RADIO_ID = 'co-buying';
const DONATION_RADIO_ID = 'donation';

function Upload(props){
    const [selectedRadio,setSelectedRadio] = useState("co-buying");
    const [textCount,setTextCount] = useState({
        title : 0,
        titleValue : '',
        introduce : 0,
        introduceValue : ''
    });
    const {title,introduce,titleValue,introduceValue} = textCount;
    const limit = {
        titleLimit : 20,
        introduceLimit : 550
    }
    const {titleLimit,introduceLimit} = limit;
    const onChangeRadio = (event) => {
        const { id } = event.target;

        setSelectedRadio(id);
    }
    const onChangeTextCount = (e) => {
        if((e.target.name === "title" && e.target.value.length <= titleLimit) || (e.target.name === "introduce" && e.target.value.length <= introduceLimit)){
            setTextCount({
                ...textCount,
                [e.target.name] : e.target.value.length,
                [e.target.name+'Value'] : e.target.value
            })
        }
    }
    const [textContent,setTextContent] = useState({
        price : 0,
        location : '',
        openChatting : ''
    })
    const {price,location,openChatting} = textContent;
    const onChangeTextContent = (e) => {
        const nextObj = {
            ...textContent,
            [e.target.name] : e.target.value
        }
        setTextContent(nextObj);
    }
    const onClickSubmit = () => {
        axios.post(API_HOST+'/post',{
            "title" : title,
            "content" : introduce,
            "price" : price,
            "transactionRegion" : location,
            "openChatLink" : openChatting,
            "image" : 'ㅁㄴㅇ'
        })
        .then(function(response){
            console.log(response);
        })
    }
  return(
      <section className="uploadPage">
          <div className="introducing"><h1>게시물 올리기</h1><p>*은 필수항목입니다</p></div>
          <section className="selectPostOption">
            <label><div><input type="radio" onChange={onChangeRadio} name="typeCheckbox" id={CO_BUYING_RADIO_ID} className="checkbox-round" checked={selectedRadio === CO_BUYING_RADIO_ID}  /></div>공동구매</label>
            <label><div><input type="radio" onChange={onChangeRadio} name="typeCheckbox" id={DONATION_RADIO_ID} className="checkbox-round" checked={selectedRadio === DONATION_RADIO_ID}/></div>기부</label>
          </section>
          <section className="uploadImgSection">
            <div className="imgCount"><p>상품 이미지</p><p>(3/4)</p></div>
            <div className="uploadImgs">
                <ul className="imgs">
                    <li className="eachImg"><FontAwesomeIcon className="img" icon={faCamera}/><p>이미지 등록</p></li>
                </ul>
                <p>- 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.</p>
            </div>
          </section>
          <section className="productInfo">
              <div className="title"><h3>글 제목*</h3><input name="title" type="text" placeholder="글 제목을 입력해주세요" onChange={onChangeTextCount} value={titleValue} /><p className="letterCount">({title}/{titleLimit})</p></div>
              <div className="introduce"><h3>글 설명</h3><textarea name="introduce" placeholder="글 설명을 입력해주세요" onChange={onChangeTextCount} value={introduceValue}/><p>({introduce}/{introduceLimit})</p></div>
          </section>
          {selectedRadio === CO_BUYING_RADIO_ID ? 
          <section className="productPrice">
              <div className="price"><h3>가격*</h3><input name="price" onChange={onChangeTextContent} type="text" placeholder="숫자만 입력해주세요" className="priceInput" /><p>원</p></div>
          </section> : ''
            }
          <section className="productLocation">
              <div className="location"><h3>거래지역*</h3><input name="location" onChange={onChangeTextContent} type="text" placeholder="거래지역을 입력해주세요(ex.대덕소프트웨어마이스터고)" /></div>
          </section>
          <section className="productOpenChatting">
              <div className="openChatting"><h3>오픈채팅*</h3><input name="openChatting" onChange={onChangeTextContent} type="text" placeholder="오픈채팅방 링크를 입력해주세요" /></div>
          </section>
          <div className="completion"><button onClick={onClickSubmit}>완료</button></div>
      </section>
  );
}
export default Upload;