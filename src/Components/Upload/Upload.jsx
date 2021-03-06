import React, { useState } from 'react';
import './Upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { API_HOST } from '../../constant/api';

const CO_BUYING_RADIO_ID = 'co-buying';
const DONATION_RADIO_ID = 'donation';

function Upload(){
    const [selectedRadio,setSelectedRadio] = useState("co-buying");
    const onChangeRadio = (event) => {
        const { id } = event.target;
        setSelectedRadio(id);
    }
    const [postContent,setPostContent] = useState({
        title : '',
        content : '',
        price : '',
        transactionRegion : '',
        openChatLink : '',
        image : '',
    })
    const limitCount = {
        titleLimit : 40,
        contentLimit : 500
    }
    const {titleLimit,contentLimit} = limitCount;
    const {title,content,price,transactionRegion,openChatLink,image} = postContent;
    const formData = new FormData();
    formData.append('title',title);
    formData.append('content',content);
    formData.append('price',price);
    formData.append('transactionRegion',transactionRegion);
    formData.append('openChatLink',openChatLink);
    formData.append('image',image);
    const onClickPostContentTop = e => {
        if(e.target.name === 'title' && e.target.value.length <= titleLimit || e.target.name === 'content' && e.target.value.length <= contentLimit){
            setPostContent({
                ...postContent,
                [e.target.name] : e.target.value
            })
        }
    }
    const onClickPostContentBottom = e => {
        setPostContent({
            ...postContent,
            [e.target.name] : e.target.value
        })
    }
    const onChangeImg = (e) => {
        console.log(typeof(e.target.value))
        setPostContent({
            ...postContent,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitPost = () => {
        axios.post(API_HOST + '/post',formData).then(res=>{})
        console.log(postContent)
    }
  return(
      <section className="uploadPage">
          <div className="introducing"><h1>????????? ?????????</h1><p>*??? ?????????????????????</p></div>
          <section className="selectPostOption">
            <label><div><input type="radio" onChange={onChangeRadio} name="typeCheckbox" id={CO_BUYING_RADIO_ID} className="checkbox-round" checked={selectedRadio === CO_BUYING_RADIO_ID}  /></div>????????????</label>
            <label><div><input type="radio" onChange={onChangeRadio} name="typeCheckbox" id={DONATION_RADIO_ID} className="checkbox-round" checked={selectedRadio === DONATION_RADIO_ID}/></div>??????</label>
          </section>
          <section className="uploadImgSection">
            <div className="imgCount"><p>?????? ?????????</p><p>(0/1)</p></div>
            <div className="uploadImgs">
                <div className="imgs">
                    <label className="eachImg">
                        <FontAwesomeIcon icon={faCamera} className="img" />
                        <input type="file" name="image" id="" onChange={onChangeImg}/>
                    </label>
                </div>
                <p>- ???????????? ???????????? ??? ?????????????????? ????????? ???????????????.</p>
            </div>
          </section>
          <section className="productInfo">
              <div className="title"><h3>??? ??????*</h3><input name="title" type="text" placeholder="??? ????????? ??????????????????" onChange={onClickPostContentTop} value={title} /><p className="letterCount">({title.length}/{titleLimit})</p></div>
              <div className="introduce"><h3>??? ??????</h3><textarea name="content" placeholder="??? ????????? ??????????????????" onChange={onClickPostContentTop} value={content}/><p>({content.length}/{contentLimit})</p></div>
          </section>
          {selectedRadio === CO_BUYING_RADIO_ID ? 
          <section className="productPrice">
              <div className="price"><h3>??????*</h3><input name="price" onChange={onClickPostContentBottom} type="text" placeholder="????????? ??????????????????" value={price} className="priceInput" /><p>???</p></div>
          </section> : ''
            }
          <section className="productLocation">
              <div className="location"><h3>????????????*</h3><input name="transactionRegion" onChange={onClickPostContentBottom} type="text" placeholder="??????????????? ??????????????????(ex.????????????????????????????????????)" value={transactionRegion} /></div>
          </section>
          <section className="productOpenChatting">
              <div className="openChatting"><h3>????????????*</h3><input name="openChatLink" onChange={onClickPostContentBottom} type="text" value={openChatLink} placeholder="??????????????? ????????? ??????????????????" /></div>
          </section>
          <div className="completion"><button onClick={onSubmitPost}>??????</button></div>
      </section>
  );
}
export default Upload;