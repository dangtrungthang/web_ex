import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="main wrapper">
                <div className="container contact">
                    <h1 className="title"> Liên hệ</h1>
                    <p>
                        <iframe frameBorder={0} height={400} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.8985470824348!2d106.65968500554904!3d10.79687979213815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752933e2eef977%3A0x79715d401e1b9c0!2zMzQgSG_DoG5nIFZp4buHdCwgUGjGsOG7nW5nIDQsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1416884588237" width="100%" /></p>
                    <h5>
                        &nbsp;</h5>
                    <h5>
                        <span style={{ fontSize: 18 }}><span style={{ color: 'rgb(237, 113, 39)' }}>TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN TP. HCM</span></span></h5>
                    <p>
                        <strong>Địa chỉ:</strong> Xa Lộ Hà Nội, P.6, Quận Thủ Đức, TP.HCM<br />
                        <strong>Điện thoại:</strong> 08 39910954 - 39910955 - 39910956<br />
                        <strong>Fax:</strong>&nbsp; 08 39910957 <strong>Hotline:</strong> 0909 844 338<br />
                        <strong>Email:</strong> <a href="mailto:google.com.vn">uit@gm.edu.vn</a><br />
                        <strong style={{ color: 'rgb(51, 51, 51)', fontFamily: 'Arial', lineHeight: 20 }}>Website</strong><span style={{ color: 'rgb(51, 51, 51)', fontFamily: 'Arial', lineHeight: 20 }}>:&nbsp;</span><a href="http://www.dongnam.com.vn/">http://www.dongnam.com.vn/</a></p>
                    <p>
                        &nbsp;</p>
                </div>
                <div className="clear" />
            </div>

        );
    }
}

export default Contact;