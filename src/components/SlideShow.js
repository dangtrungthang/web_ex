import React, { Component } from 'react';
import * as $ from "jquery"
class Slide extends Component {
    componentDidMount(){
       
    }
    render() {
        return (
            <div className="netviet">
                <div className="nvslide">
                    <div className="slide active" style={{ display: 'none' }}><img src="http://www.vietad.com.vn/timthumb.php?src=/uploads/images/banners/0.355687001522132770IMG_6691.JPG&w=1000&h=360" />
                        <div className="text_home">LED decorative light, LED light, LED display…</div>
                    </div>
                    <div className="slide " style={{ display: 'none' }}><img src="http://www.vietad.com.vn/timthumb.php?src=/uploads/images/banners/0.046255001522131758IMG_6657.JPG&w=1000&h=360" />
                        <div className="text_home" />
                    </div>
                    <div className="slide " style={{ display: 'none' }}><img src="http://www.vietad.com.vn/timthumb.php?src=/uploads/images/banners/0.046255001522131758IMG_6657.JPG&w=1000&h=360" />
                        <div className="text_home" />
                    </div>
                    <div className="ui-effects-wrapper" style={{ fontSize: '100%', background: 'transparent', border: 'none', margin: 0, padding: 0, width: 1000, height: 366, float: 'none', position: 'absolute', zIndex: 'auto', top: 0, left: 0, bottom: '-6px', right: 0 }}><div className="slide " style={{ display: 'block', position: 'relative', top: 0, right: 'auto', bottom: 'auto', width: 1000, height: 366, opacity: '0.0120416', left: '-493.979px' }}><img src="/timthumb.php?src=/uploads/images/banners/0.737275001522131980IMG_6871.JPG&w=1000&h=360" />
                        <div className="text_home">Outdoor advertising; online advertising; advertising media; branding; maketing research; event management; advertising design and construction.</div>
                    </div></div>
                    <div className="slide " style={{ display: 'block', opacity: '0.987958' }}><img src="http://www.vietad.com.vn/timthumb.php?src=/uploads/images/banners/0.046255001522131758IMG_6657.JPG&w=1000&h=360" />
                        <div className="text_home" />
                    </div>
                    <div className="slide " style={{ display: 'none' }}><img src="http://www.vietad.com.vn/timthumb.php?src=/uploads/images/banners/0.046255001522131758IMG_6657.JPG&w=1000&h=360" />
                        <div className="text_home">Digital printing machine, offset printing machine, photo printing machine, laser cutting machine, vinyl cutting machine, CMC machine…</div>
                    </div>
                </div>
                <div className="slide_button">  
                    <div className="textslide">
                        {/* <span className="text1">Exhibit profile</span> */}
                    </div>
                    <ul class>
                        <li><a class rel={0}>Led Technology</a></li>
                        <li><a class rel={1}>Printing Machinery</a></li>
                        <li><a class rel={2}>Advertising materials and gift</a></li>
                        <li><a class rel={3}>Service &amp; Media</a></li>
                        <li><a class="active" rel={4}>Label &amp; Package Printing</a></li>
                        <li><a class rel={5}>Advertising &amp; Display Equipments</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Slide;