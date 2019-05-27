import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="footercontain wrapper">
                    <div className="l">
                        <b>Copyright © 2011 University of Information Technology</b> <br />
                        Address: Xa Lo Ha Noi Street,
      Ward 6, Thu Duc District, HCM City, Vietnam<br />
                        Tel: (028) 372 52002 &nbsp;&nbsp;&nbsp;. Fax: (028) 372 52148 <br />
                        Hotline:  (028) 372 52002  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:info@uit.edu.vn	</div>
                    <div className="r">
                        {/* <a href="https://www.youtube.com/watch?v=uh0Fp-8Wy0A" target="_blank"> <img src="/images/youtube.png" alt title height="30px" /></a>
                        <a href="https://vi-vn.facebook.com/DongnamPromotion" target="_blank"> <img src="/images/facebook.png" alt title height="30px" /></a> */}
                        {/* <a href target="_blank"> <img src="/images/.png" alt title height="30px" /></a><br /> */}
                        {/* <div className="visitor">Visitors: <span>1</span><span>0</span><span>9</span><span>1</span><span>3</span><span>2</span><span>1</span></div> */}
                    </div>
                    <div className="clear" />
                </div>
                <div className="clear" />
            </div>

        );
    }
}

export default FooterComponent;