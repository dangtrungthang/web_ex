import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="footercontain wrapper">
                    <div className="l">
                        <b>Copyright © 2011 Dong Nam Advertising and Commercial Promotion JSC</b> <br />
                        Address: 1st Floor, Hoang Viet Building, 34 Hoang Viet Street,
      Ward 4, Tan Binh District, HCM City, Vietnam<br />
                        Tel: (84-28) 39910954 - 39910955 - 39910956 &nbsp;&nbsp;&nbsp;. Fax: (84-28) 39910957<br />
                        Hotline:  (+84) 909 844 338  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: baoai@dongnam.com.vn	</div>
                    <div className="r">
                        <a href="https://www.youtube.com/watch?v=uh0Fp-8Wy0A" target="_blank"> <img src="/images/youtube.png" alt title height="30px" /></a>
                        <a href="https://vi-vn.facebook.com/DongnamPromotion" target="_blank"> <img src="/images/facebook.png" alt title height="30px" /></a>
                        {/* <a href target="_blank"> <img src="/images/.png" alt title height="30px" /></a><br /> */}
                        <div className="visitor">Visitors: <span>1</span><span>0</span><span>9</span><span>1</span><span>3</span><span>2</span><span>1</span></div>
                    </div>
                    <div className="clear" />
                </div>
                <div className="clear" />
            </div>

        );
    }
}

export default FooterComponent;