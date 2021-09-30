import React from 'react';
import './Footer.scss';
import Symbol from '../../assets/symbol_black.png';
function Footer(){
  const memberArr = [
    {
      name : '강석현',
      devlopType : 'Front-end'
    },
    {
      name : '김범진',
      devlopType : 'Back-end'
    },
    {
      name : '임세현',
      devlopType : 'Android'
    },
    {
      name : '김기영',
      devlopType : 'iOS'
    },
    {
      name : '추혜연',
      devlopType : 'Design'
    }
  ]
  return(
      <section className="Footer">
          <div className="DeveloperInFooter">
            <div className="developTypeContainer">
            {memberArr.map((list,index)=>
              <div key={index} className="developerInfoEachBox">
                <p className="developType">{list.devlopType}</p>
                <p className="develpoerName">{list.name}</p>
              </div>
              )}
              </div>
          </div>
          <section className="oraginationInfo">
              <div className="contents">
                <p className="site09">공동구매 사이트</p>
                <p className="project09">2021 Project 09</p>
                <img src={Symbol} alt="" />
              </div>
          </section>
      </section>
  );
}
export default Footer;