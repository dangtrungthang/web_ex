import React, { Component } from 'react';

class WidgetFooter extends Component {
    render() {
        return (
           <div className="footer-widget wrapper">
  <div className="row">
    <div className="cot1">
      <h2>BẢO HỘ</h2>
      <p style={{marginBottom: 25, fontSize: 14}}>- Bộ văn hóa, Thể thao và Du lịch<br />
        - Bộ Công Thương<br />
        - Bộ Thông tin và Truyền thông</p>
      <h2>TỔ CHỨC</h2>
      <div><a href="/"><img src="http://dongnam.com.vn/images/logo.png" title="Đ�ng Nam" style={{maxWidth: '90%', border: 'solid #eaeaea 0px'}} /></a></div>
    </div>
    <div className="cot2">
      <h2>CHỦ TRÌ</h2>
      <div className="part-right f-right">
        <div className="part-slider all">
          <ul id="j-cycle-1" className="jcycle">
            <li>
              <a target="_blank"><img src="/images/chutri/0.0883270014230447450.958380001422599867w2.png" alt width="143px" height="67px" /></a> 
              <a target="_blank"><img src="/images/chutri/0.8209050014230447320.476954001422599895w3.png" alt width="143px" height="67px" /></a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="cot3">
      <h2>ĐỐI TÁC NƯỚC NGOÀI</h2>
      <div className="part-right f-right">
        <div className="part-slider all">
          <ul id="j-cycle-1" className="jcycle">
            <li>
              <a target="_blank"><img src="/images/nuocngoai/0.456439001545114127PP+S-2019---156x70.gif" alt width="143px" height="67px" /></a> 
              <a target="_blank"><img src="/images/nuocngoai/0.295836001545113648DPS-WEB-BANNER-156-x-73.gif" alt width="143px" height="67px" /></a> 
              <a target="_blank"><img src="/images/nuocngoai/0.920677001545113349ISLE156x73.gif" alt width="143px" height="67px" /></a> 
            </li>
           
          </ul>
        </div>
      </div>
    </div>
    <div className="cot2">
      <h2>TÀI TRỢ</h2>
      <div className="part-right f-right">
        <div className="part-slider all">
          <ul id="j-cycle-1" className="jcycle">
            <li>
              <a target="_blank"><img src="/images/taitro/0.234284001422600443w7.png" alt width="143px" height="67px" /></a> 
              <a target="_blank"><img src="/images/taitro/0.426771001422861574w8.png" alt width="143px" height="67px" /></a> 
            </li>
            <li>
              <a target="_blank"><img src="/images/taitro/0.688016001437789319yyy-01.jpg" alt width="143px" height="67px" /></a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="cot3">
      <h2 />
      <div className="part-right f-right">
        <div className="part-slider all">
          <ul id="j-cycle-1" className="jcycle">
            <li>
              {/* <a href="http://www.aelvn.com" target="_blank"><img src="/uploads/images/partners/0.543054001423045291file_up_web_vỉead-02.png" alt width="143px" height="67px" /></a>  */}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="clear" />
  </div>
  <div className="clear" />
</div>

        );
    }
}

export default WidgetFooter;