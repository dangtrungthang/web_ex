import React, { Component } from 'react';
import { Link} from "react-router-dom";

const menu = {
  trangchu: false,
  gioithieu: false,
  trienlam: false,
  lich: false,
  dichvu: false,
  lienhe: false
}
class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSelected: 'home',
      ...menu,
      trangchu: true
    }
  }

  toggleMenu = (event, type) => {
    event.stopPropagation();

    this.setState({
      ...menu,
      [type]: true
    });
  }

  render() {
    const { trangchu, gioithieu, trienlam, lich, dichvu, lienhe } = this.state;
    return (
      <div classname="App">
        <div className="nav wrapper">
          <div className="menu" id="mainmenu">
            <ul className="menuc">
              <li className={trangchu ? 'active' : ''}><Link
                onClick={event => this.toggleMenu(event, 'trangchu')}
                to="/">Trang chủ</Link></li>
              <li className="gach"><a /></li>
              <li className={gioithieu ? 'active' : ''} style={{ zIndex: 100 }}><Link to="/gioi-thieu"
                onClick={event => this.toggleMenu(event, 'gioithieu')}
                style={{ paddingRight: 15 }}>Giới thiệu</Link>
              </li>
              <li className="gach"><a /></li>

              <li className={trienlam?'active':''} style={{ zIndex: 99 }}><Link to="/trien-lam" style={{ paddingRight: 15 }}
               
                onClick={event => this.toggleMenu(event, 'trienlam')}
              >Danh sách triễn lãm</Link>
                <ul className="sub-menu" style={{ top: 53, visibility: 'visible', display: 'none', left: 0, width: 240 }}>
                  <li><Link 
                    onClick={event => this.toggleMenu(event, 'trienlam')}
                  to="/trien-lam" >Trong nước</Link></li>
                  <li><Link 
                    onClick={event => this.toggleMenu(event, 'trienlam')}
                  to="/trien-lam/nuoc-ngoai" >Nước ngoài</Link></li>

                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className={lich?'active':''} style={{ zIndex: 98 }}><Link to='/lich' 
              onClick={event=>{this.toggleMenu(event,'lich')}}
              style={{ paddingRight: 15 }} >Lịch triễn lãm</Link>

              </li>
              <li className="gach"><a /></li>
              <li className={dichvu?'active':''} style={{ zIndex: 97 }}><Link to="/dich-vu"
                style={{ paddingRight: 15 }}
                onClick={event=>this.toggleMenu(event,'dichvu')}
              >Sản phẩm & dịch vụ</Link>
                <ul className="sub-menu" style={{ top: 53, display: 'none', visibility: 'visible' }}>
                  <li className><Link 
                    onClick={event=>this.toggleMenu(event,'dichvu')}
                  to="/dich-vu/in-the">Dịch vụ in thẻ</Link></li>

                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className={lienhe?'active':''}
              onClick={event=>this.toggleMenu(event,'lienhe')}><Link to="/lien-he">Liên hệ</Link></li>
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