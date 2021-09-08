import React from 'react';
import './Footer.scss';

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
      devlopType : 'ios'
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
          <div className="outInfo"></div>
      </section>
  );
}
export default Footer;