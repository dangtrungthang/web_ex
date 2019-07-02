import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header wrapper" style={{}}>
                <div className="lefthead logo"><h1><a href="/"><img src="/images/trienlam88.png" alt="Triễn lãm Quốc tế Thiết bị và Công nghệ Quảng cáo Việt Nam - Lần thứ 10" title="Triễn lãm Quốc tế Thiết bị và Công nghệ Quảng cáo Việt Nam - Lần thứ 10" height="200px" /></a>{/* <br /><a href="/"><img src="/images/logo-vpse.png" alt="Triễn lãm Quốc tế Thiết bị và Công nghệ Quảng cáo Việt Nam - Lần thứ 10" title="Triễn lãm Quốc tế Thiết bị và Công nghệ Quảng cáo Việt Nam - Lần thứ 10" style="margin:0 0 15px 10px; height:140px;"></a></h1> */}</h1></div>
                <div className="righthead ">
                    <div className="flag">
                        {/* <a href="/vn/"><img src="/images/viet.png" alt title /></a>
                        <a href="/en/"><img src="/images/anh.png" alt title /></a>
                        <a href="/cn/"><img src="/images/trung.png" alt title /></a> */}
                        {/*<a href="/kr/"><img src="/images/han.png" alt="" title="" ></a>*/}
                    </div>
                    <div className="search">
                        <form method="get" action="/" id="searchbox">
                            <input type="hidden" name="module" defaultValue="tim-kiem" />
                            <input name="key" type="text" defaultValue="Tìm kiếm ..." onblur="if(this.value=='') this.value='Tìm kiếm ...';" onfocus="if(this.value=='Tìm kiếm ...') this.value='';" />
                        </form>
                    </div>
                </div>
                <div className="slogan ">TRIỂN LÃM QUỐC TẾ THIẾT BỊ &amp; CÔNG NGHỆ QUẢNG CÁO VIỆT NAM LẦN 10 - VIETAD 2019 - TP. HỒ CHÍ MINH
    {/* <p></p> */}</div>
                <div className="clear" />
            </div>

        );
    }
}

export default HeaderComponent;