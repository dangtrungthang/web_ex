import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="homeleft">
                    <div className="imghome">
                        <img src="/images/0.0527900015578873170db859bc9f797a272368.jpg" alt title />
                    </div>
                    <div className="btuong">
                        <div className="cothome"><a href="/vn/dang-ki-tham-quan-online"> <img src="/images/h1.png" alt title /></a><br /> <div className="titbtuong"><a href="/vn/dang-ki-tham-quan-online"> ĐĂNG KÝ THAM QUAN ONLINE</a></div></div>
                        <div className="line" />
                        <div className="cothome"><a href="/vn/dang-ky-gian-hang-online"><img src="/images/h2.png" alt title /></a><br /> <div className="titbtuong"><a href="/vn/dang-ky-gian-hang-online"> ĐĂNG KÝ GIAN HÀNG ONLINE</a></div></div>
                        <div className="line" />
                        <div className="cothome"><a href="/vn/tham-gia-trien-lam/brochure/1"><img src="/images/h3.png" alt title /></a><br /> <div className="titbtuong"><a href="/vn/tham-gia-trien-lam/brochure/1"> DOWNLOAD</a></div></div>
                        <div className="clear" />
                    </div>
                    <div className="clear" />
                    <h2 className="photogallery"> <span className="pho1" style={{ paddingLeft: 21 }}>THƯ VIỆN ẢNH</span> <span className="pho2" /></h2>
                </div>
                <div className="homeright">
                    <div className="meeting">
                        <h2> Sự kiện </h2>
                        <div className="ndmeet">
                            <img src="/images/0.435774001522133062IMG_6797.JPG" alt title />
                        </div>
                    </div>
                    <div className="meeting ">
                        <h2 className="videoh2">{/*<a class="pre" href="#"> <img src="/images/pre.png" alt="" title="" ></a>*/} Video {/*<a class="next" href="#"> <img src="/images/next.png" alt="" title="" ></a>*/}</h2>
                        <div className="ndmeet video">
                            <p>
                                <iframe allow="autoplay; encrypted-media" allowFullScreen frameBorder={0} height={120} scrolling="no" src="https://www.youtube.com/embed/T_bm9FaB7ZI" width={238} /></p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;