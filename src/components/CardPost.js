import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CardPost extends Component {
    render() {
        return (
            <div className="K2ItemsRow">
                <div className="itemContainer itemContainerLast" style={{ width: '97%' }}>
                    <div className="catItemView blog groupLeading blog">
                        <div className="catItemHeader">
                            <div className="catItemImageBlock">
                                <span className="catItemImage">
                                    <a className href="/vn/bao-chi/khai-mac-trien-lam-quoc-te-thiet-bi-cong-nghe-quang-cao-viet-nam---vietad-2019---ha-noi_90" title="Khai mạc Triển lãm quốc tế thiết bị công nghệ quảng cáo Việt Nam - VietAd 2019 - Hà Nội">
                                        <img style={{ visibility: 'visible', opacity: 1,maxHeight:150,maxWidth:250 }}
                                            src={this.props.image}
                                        />
                                    </a>

                                </span>
                            </div>
                            <h3 className="catItemTitle"><a>
                               <Link to={`/trien-lam/nuoc-ngoai/${this.props.paramLink.id}/thong-tin`}> {this.props.title}</Link>

                            </a></h3>
                            <a style={{color:'black',opacity:0.5}}>
                                Thời gian : Từ ngày {this.props.to} đến {this.props.from}
                            </a>
                            <br/>
                            <a style={{color:'black',opacity:0.5}}>
                                Địa điểm :{this.props.where}
                            </a>
                        </div>
                        <div className="catItemBody">
                            <div className="catItemIntroText" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:'ellipsis',maxHeight:100}}>
                                {this.props.intro}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear" />
            </div>
        );
    }
}

export default CardPost;