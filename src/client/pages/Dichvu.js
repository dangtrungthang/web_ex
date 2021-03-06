import React, { Component } from 'react';
import { BrowserRouter as Switch, Link, Route, Redirect, withRouter } from 'react-router-dom'
import renderHTML from 'react-render-html';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {database} from '../../databases/firebase';
const menu = {
  gioithieu: false,
  dangky: false
}
class Dichvu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...menu,
      gioithieu: true,
      hoten:'',
      sdt:'',
      email:'',
      tencty:'',
      fax:'',
      diachi:''
    }
  }

  toggleMenu = (event, type) => {
    event.stopPropagation();

    this.setState({
      ...menu,
      [type]: true
    });
  }
  submit(){
    const data={
      hoten:this.state.hoten,
      tencty:this.state.tencty,
      sdt:this.state.sdt,
      email:this.state.email,
      fax:this.state.fax,
      diachi:this.state.diachi
    }
    this.setState({
      hoten:'',
      sdt:'',
      email:'',
      tencty:'',
      fax:'',
      diachi:''
    })
    database.child('/baogiadichvu').push(data).then(()=>{
      alert('Gửi thành công');
    }).catch(()=>{
      alert('Có lỗi xảy ra vui lòng thử lại')
    })
  }
  renderContent() {
    switch (this.state.gioithieu) {
      case true:
        return (
          <div>
            {renderHTML(`<div class="main wrapper">
<div class="container">
<div class="mcon">
<p>&nbsp;</p>
</div>
<div class="content-left">
<div class="news_detail_content c">
<div id="jsn-breadcrumbs">
<div id="jsn-pos-breadcrumbs" class="">
<p>&nbsp;</p>
</div>
</div>
<div id="jsn-mainbody-content" class=" jsn-hasmainbody">
<div id="jsn-mainbody">
<div class="item-pagejsn-demo-page">
<div class="jsn-article-toolbar">&nbsp;</div>
<p><a title="Dịch vụ in thẻ tại Hội chợ Triển l&atilde;m" href="http://www.tradepro.vn/vi/dich-vu/dich-vu-in-the-tham-quan-trien-lam" rel="alternate"><img src="http://www.tradepro.vn/images/banners/dich-vu-in-the-tham-quan-hoi-cho-trien-lam.jpg" alt="Dịch vụ in thẻ tại Hội chợ Triển l&atilde;m" width="870" height="530" /></a></p>
<hr />
<p><strong><a title="Quản l&yacute; th&ocirc;ng tin kh&aacute;ch tham quan, in thẻ tại hội chợ triển l&atilde;m" href="http://www.tradepro.vn/vi/dich-vu/dich-vu-in-the-tham-quan-trien-lam" rel="alternate">DỊCH VỤ IN THẺ TẠI HỘI CHỢ TRIỂN L&Atilde;M</a></strong></p>
<p>Hướng dẫn, quản l&yacute; th&ocirc;ng tin v&agrave; in thẻ cho kh&aacute;ch tham quan; In thẻ đơn vị triển l&atilde;m, ban tổ chức, Vip, b&aacute;o ch&iacute;, gi&agrave;n dựng, thẻ dịch vụ..; Tổng hợp, thống k&ecirc; lượng kh&aacute;ch tham quan v&agrave; b&aacute;o c&aacute;o trong ng&agrave;y; Tư vấn, triển khai giải ph&aacute;p đăng k&yacute; tham quan trực tuyến..</p>
<hr />
<p><strong>TẠI SAO N&Ecirc;N LỰA CHỌN CH&Uacute;NG T&Ocirc;I?<br /></strong></p>
<p>- Ch&uacute;ng t&ocirc;i l&agrave; c&ocirc;ng ty đầu ti&ecirc;n của Việt Nam chủ động nghi&ecirc;n cứu, x&acirc;y dựng v&agrave; ph&aacute;t triển hệ thống in thẻ d&agrave;nh cho kh&aacute;ch tham quan tại Hội chợ, Triển l&atilde;m v&agrave; những sự kiện thương mại quốc tế.</p>
<p>- Với kinh nghiệm triển khai dịch vụ in thẻ cho tr&ecirc;n 40 sự kiện lớn, ch&uacute;ng t&ocirc;i lu&ocirc;n nhận được những đ&aacute;nh gi&aacute; cao về t&iacute;nh chuy&ecirc;n nghiệp, tinh thần tr&aacute;ch nhiệm, tốc độ v&agrave; sự ổn định của hệ thống.</p>
<p>- Đội ngũ nh&acirc;n sự được lựa chọn v&agrave; đ&agrave;o tạo kỹ lưỡng, th&ocirc;ng thạo về ngoại ngữ, am hiểu về sự kiện v&agrave; thực hiện c&ocirc;ng việc một c&aacute;ch linh hoạt.</p>
<p>- Phần mềm quản l&yacute; v&agrave; in ấn th&ocirc;ng minh, dễ thao t&aacute;c v&agrave; sử dụng. Với khả năng hoạt động độc lập kh&ocirc;ng phụ thuộc v&agrave;o m&aacute;y chủ, mạng internet; kết hợp d&agrave;n m&aacute;y in chuy&ecirc;n dụng tốc độ cao, ch&uacute;ng t&ocirc;i cam kết về sự vận h&agrave;nh ổn định cũng như tốc độ của to&agrave;n bộ hệ thống.</p>
<p>- Mẫu thẻ in đa dạng về m&agrave;u sắc, chất liệu v&agrave; k&iacute;ch thước, thẻ in m&agrave;u hai mặt gi&uacute;p tăng cường khả nặng nhận diện v&agrave; hiển thị th&ocirc;ng tin.</p>
<p>- Chi ph&iacute; triển khai dịch vụ hợp l&yacute;, linh hoạt với nhiều sự lựa chọn. Hỗ trợ truyền th&ocirc;ng sự kiện v&agrave; gửi email marketing tr&ecirc;n hệ thống website, Fanpage của TradePro.Vn.</p>
<hr />
<p><strong>NHỮNG DỰ &Aacute;N Đ&Atilde; THỰC HIỆN:<br /></strong></p>
<p><img src="http://www.tradepro.vn/images/a_img/dich_vu_in_the.jpg" alt="" /></p>
<hr />
<p>&nbsp;</p>
<p><strong>MỘT SỐ H&Igrave;NH ẢNH:</strong></p>
<p><img src="http://www.tradepro.vn/images/a_img/dich_vu_in_the_tradepro_vn.jpg" alt="Dịch vụ in thẻ tham quan tại Hội chợ Triển l&atilde;m" width="822" height="552" /></p>
<hr />
<p>&nbsp;</p>
<p><strong>SƠ ĐỒ TRIỂN KHAI IN THẺ KH&Aacute;CH THAM QUAN:</strong></p>
<p><strong><img src="http://www.tradepro.vn/images/a_img/mo-hinh-in-the-tham-quan-trien-lam.jpg" alt="" /></strong></p>
<hr />
<p>&nbsp;</p>
<p><strong>SƠ ĐỒ THỰC HIỆN IN THẺ ĐƠN VỊ TRIỂN L&Atilde;M:<br /></strong></p>
<p><strong><img src="http://www.tradepro.vn/images/a_img/mo-hinh-in-the-don-vi-trien-lam.jpg" alt="" /></strong></p>
</div>
</div>
</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="content-right">&nbsp;</div>
<div class="clear">&nbsp;</div>
</div>
</div>
<div class="footer-widget wrapper">
<div class="row">
<div class="cot1">
<h2>&nbsp;</h2>
</div>
</div>
</div>`)}
          </div>
        )
        break;
      case false:
        return(
          <Form>
            <FormGroup>
              <Label>Họ và tên</Label>
              <Input type="text" value={this.state.title} onChange={e => {
                        this.setState({ hoten: e.target.value });
                    }}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Tên công ty & tổ chức</Label>
              <Input type="text" value={this.state.title} onChange={e => {
                        this.setState({ tencty: e.target.value });
                    }}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Địa chỉ</Label>
              <Input type="text" value={this.state.title} onChange={e => {
                        this.setState({ diachi: e.target.value });
                    }}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Số điện thoại</Label>
              <Input type="text" value={this.state.title} onChange={e => {
                        this.setState({ sdt: e.target.value });
                    }}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Fax</Label>
              <Input type="text" value={this.state.title} onChange={e => {
                        this.setState({ fax: e.target.value });
                    }}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="text" value={this.state.title} onChange={e => {
                        this.setState({ email: e.target.value });
                    }}></Input>
            </FormGroup>
            <Button onClick={()=>this.submit()}>Gửi</Button>
          </Form>
        )
      default:
        break;
    }
  }
  render() {
    const { gioithieu, dangky } = this.state;
    return (
      <div className="main wrapper">
        <div className="container">
          <h1 className="title"> Dịch vụ in thẻ</h1>
          <div className="mcon">
            <ul>
              <li className={gioithieu ? 'active' : ''}><a
                onClick={event => this.toggleMenu(event, 'gioithieu')}><Link>Giới thiệu</Link></a></li>
              <li className={dangky ? 'active' : ''}><a
                onClick={event => this.toggleMenu(event, 'dangky')}
              >Đăng ký nhận báo giá </a></li>
              <div className="clear" />
            </ul>
            <div className="clear" />
          </div>
          <div className="content-left">
            {/* <h2 className="tit2">Đăng ký nhận báo giá</h2> */}
            <div className="news_detail_content c">
              {this.renderContent()}
            </div>
            <div className="clear" />
          </div>
          <div className="content-right">
            <div className="btuong">
              <div className="clear" />
            </div>
            <div className="clear" />			</div>
          <div className="clear" />
        </div>

      </div>

    );
  }
}

export default Dichvu;