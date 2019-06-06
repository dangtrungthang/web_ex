import React, { Component } from 'react';
import {Link,Route,Router } from "react-router-dom";


class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      navSelected:'home'
    }
  }
  
  render() {
   const {navSelected}=this.state;
    return (
      <div classname="App">
        <div className="nav wrapper">
          <div className="menu" id="mainmenu">
            <ul className="menuc">
              <li ClassName="actived"><Link to="/">Trang chủ</Link></li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 100 }}><Link to="/gioi-thieu" style={{ paddingRight: 15 }}>Giới thiệu</Link>
              </li>
              <li className="gach"><a /></li>
              
              <li className style={{ zIndex: 99 }}><a href="/trien-lam" style={{ paddingRight: 15 }} className>Danh sách triễn lãm</a>
                <ul className="sub-menu" style={{ top: 53, visibility: 'visible', display: 'none', left: 0, width: 240 }}>
                  <li><Link to="/trien-lam" >Trong nước</Link></li>
                  <li><Link to="/trien-lam/nuoc-ngoai" >Nước ngoài</Link></li>
                  
                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 98 }}><a href="/vn/tham-quan-trien-lam" style={{ paddingRight: 15 }} className>Lịch triễn lãm</a>
                
              </li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 97 }}><a href="/dich-vu" style={{ paddingRight: 15 }}>Sản phẩm & dịch vụ</a>
                <ul className="sub-menu" style={{ top: 53, display: 'none', visibility: 'visible' }}>
                  <li className><a href="/dich-vu/in-the">Dịch vụ in thẻ</a></li>
                  
                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className><a href="/lien-he">Liên hệ</a></li>
              <div className="clear" />
            </ul>
            <div className="clear" />
          </div>
        </div>
      </div>

    );
  }
}

export default NavComponent;