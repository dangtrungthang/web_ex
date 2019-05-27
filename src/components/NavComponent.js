import React, { Component } from 'react';

class NavComponent extends Component {
  render() {
    return (
      <div classname="App">
        <div className="nav wrapper">
          <div className="menu" id="mainmenu">
            <ul className="menuc">
              <li className="active"><a href="/">Trang chủ</a></li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 100 }}><a href="/vn/gioi-thieu" style={{ paddingRight: 15 }}>Giới thiệu</a>
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
              <li className style={{ zIndex: 99 }}><a href="/vn/tham-gia-trien-lam/brochure/1" style={{ paddingRight: 15 }} className>Tham gia triễn lãm</a>
                <ul className="sub-menu" style={{ top: 53, visibility: 'visible', display: 'none', left: 0, width: 240 }}>
                  <li><a href="/vn/tham-gia-trien-lam/brochure/1">Brochure</a></li>
                  <li><a href="/vn/tham-gia-trien-lam/so-do/2">Sơ đồ</a></li>
                  <li><a href="/vn/tham-gia-trien-lam/quy-dinh-tham-gia/4">Quy định Tham gia</a></li>
                  <li><a href="/vn/tham-gia-trien-lam/bao-cao-trien-lam/5">Báo cáo Triển lãm</a></li>
                  <li className><a href="/vn/dang-ky-gian-hang-online">Đăng ký Gian hàng Online</a></li>
                  <li className><a href="/vn/doanh-nghiep-tham-gia">Doanh nghiệp tham gia</a></li>
                  <li className><a href="/vn/dich-vu">Dịch vụ</a></li>
                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 98 }}><a href="/vn/tham-quan-trien-lam" style={{ paddingRight: 15 }} className>THAM QUAN TRIỂN LÃM</a>
                <ul className="sub-menu" style={{ top: 53, visibility: 'visible', display: 'none', left: 0, width: 240 }}>
                  <li><a href="/vn/tham-quan-trien-lam/dia-diem-to-chuc/21">Địa điểm tổ chức</a></li>
                  <li><a href="/vn/tham-quan-trien-lam/thoi-gian-mo-cua-trien-lam/22">Thời gian mở cửa Triển lãm</a></li>
                  <li className><a href="/vn/dang-ki-tham-quan-online">Đăng kí tham quan online</a></li>
                  <li className><a href="/vn/dich-vu-">Dịch vụ </a></li>
                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className style={{ zIndex: 97 }}><a href="/vn/bao-chi" style={{ paddingRight: 15 }}>Truyền Thông</a>
                <ul className="sub-menu" style={{ top: 53, display: 'none', visibility: 'visible' }}>
                  <li className><a href="/vn/bao-chi">Báo chí</a></li>
                  <li className><a href="/vn/hinh-anh">Hình ảnh</a></li>
                  <li className><a href="/vn/video">Video</a></li>
                </ul>
              </li>
              <li className="gach"><a /></li>
              <li className><a href="/vn/lien-he">Liên hệ</a></li>
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