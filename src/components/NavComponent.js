import React, { Component } from 'react';
import {Link } from "react-router-dom";
class NavComponent extends Component {
  render() {
    return (
      <div classname="App">
        <div className="nav wrapper">
          <div className="menu" id="mainmenu">
            <ul className="menuc">
              <li className="active"><Link to="/">Trang chủ</Link></li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 100 }}><Link to="/gioi-thieu" style={{ paddingRight: 15 }}>Giới thiệu</Link>
              </li>
              <li className="gach"><a /></li>
              {/*<li class= ""><a href="/vn/forexhibitors">FOREXHIBITORS</a>
				
					                    	<ul class="sub-menu">
						<li class= ""><a href="/vn/brochure">Brochure</a>
						
										<ul class='sub-menu'>
										
																													<li class= ""><a href="/vn/brochure#tab0">VietAd Hà Nội</a></li>
																			<li class= ""><a href="/vn/brochure#tab1">VietAd Hồ Chí Minh</a></li>
																			</ul>
					
					
						</li>
                  	                            	<li><a href="/vn/forexhibitors/so-do/25">Sơ đồ</a></li>
                                                  	<li><a href="/vn/forexhibitors/bieu-gia-gian-hang/35">Biểu giá gian hàng</a></li>
                                                  	<li><a href="/vn/forexhibitors/qui-dinh-tham-gia/26">Qui định Tham gia</a></li>
                                                  	<li><a href="/vn/forexhibitors/bao-cao-trien-lam/40">Báo cáo Triển lãm</a></li>
                      							<li class= ""><a href="/vn/dang-ky-gian-hang-online">Đăng ký Gian hàng Online</a></li>
							<li class= ""><a href="/vn/doanh-nghiep-tham-gia">Doanh nghiệp tham gia</a></li>
							<li class= ""><a href="/vn/dich-vu">Dịch vụ</a></li>
                  </ul>
				
				</li>*/}
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