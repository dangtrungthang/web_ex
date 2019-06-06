import React, { Component } from 'react';

const inputDetail={
    tendonvi:'',
            diachi:'',
            sanpham:'',
            quocgia:'Viet Nam',
            diadiem:'',
            dienthoai:'',
            fax:'',
            email:'',
            website:'',
            mathang:'',
            yeucau:''
}
class FormDisplay extends Component {
    constructor(props) {
        super(props);
        this.state={
            ...inputDetail
        }
    }
    
    render() {
        const {tendonvi,diachi,sanpham,quocgia,diadiem,dienthoai,fax,email,website,mathang,yeucau}=this.state;
        return (
            <div className="content-left">
                <h2 className="tit2">Đăng ký Gian hàng Online</h2>
                <div className="news_detail_content">
                    <form className="wpcf7-form" encType="multipart/form-data">
                        <table border={0} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td className="td" width="170px">Tên đơn vị:</td>
                                    <td><input 
                                     onChange={(e)=>this.setState({tendonvi:e.target.value})} 
                                     value={tendonvi}
                                     type="text" name="tendn" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Địa chỉ:</td>
                                    <td><input 
                                    onChange={(e)=>this.setState({diachi:e.target.value})} 
                                    value={diachi}
                                    type="text" name="diachi" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Danh mục sản phẩm:</td>
                                    <td><select name="danhmuc">
                                        <option value="Dịch vụ & Truyền thông">Dịch vụ &amp; Truyền thông</option>
                                        <option value="Máy móc thiết bị">Máy móc thiết bị</option>
                                        <option value="Công nghệ LED">Công nghệ LED</option>
                                        <option value="Máy móc in bao bì và nhãn mác">Máy móc in bao bì và nhãn mác</option>
                                        <option value="Thiết bị, vật liệu & Quà tặng quảng cáo">Thiết bị, vật liệu &amp; Quà tặng quảng cáo</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Quốc gia:</td>
                                    <td><select name="quocgia">
                                        <option value="Việt Nam">Việt Nam</option>
                                        <option value="Campuchia">Campuchia</option>
                                        <option value="Trung Quốc">Trung Quốc</option>
                                        <option value="Hàn Quốc">Hàn Quốc</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Nhật Bản">Nhật Bản</option>
                                        <option value="Ấn Độ">Ấn Độ</option>
                                        <option value="Quốc gia khác...">Quốc gia khác...</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Địa điểm tổ chức:</td>
                                    <td><select name="diadiem">
                                        <option value>--Chọn địa điểm tổ chức--</option>
                                        <option value="VietAd Hồ Chí Minh">VietAd Hồ Chí Minh</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Điện thoại:</td>
                                    <td><input type="text" name="dienthoai" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Fax:</td>
                                    <td><input type="text" name="fax" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Emai:</td>
                                    <td><input type="text" name="email" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Website:</td>
                                    <td><input type="text" name="web" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Mặt hàng triển lãm:</td>
                                    <td><textarea type="text" name="mathang" defaultValue={""} /></td>
                                </tr>
                                <tr>
                                    <td className="td">Thông tin yêu cầu:</td>
                                    <td><textarea type="text" name="thongtin" defaultValue={""} /></td>
                                </tr>
                                
                                <tr>
                                    <td className="td">Captcha:</td>
                                    <td><div className="captcha">
                                        <a href="javascript:void(0)" className="tiptip reload" title="Thay đổi"><img src="/cap2/captcha.php?v=1559823668754" className="captcha_img" /></a>
                                        <a href="javascript:void(0)" title="Thay đổi" className="captcha_reload tiptip reload" />
                                        <input maxLength={8} size={8} id="userstring" name="userstring" type="text" defaultValue className="maxt" style={{ float: 'left', width: 115, marginRight: 10 }} />
                                    </div>
                                        <style dangerouslySetInnerHTML={{ __html: "\n                                .captcha .captcha_reload {background: url(\"/images/reload.gif\") no-repeat scroll left center rgba(0, 0, 0, 0);display: inline-block;padding: 10px 10px 10px 25px;}\n                                " }} /></td>
                                </tr>
                                <tr>
                                    <td className="td" />
                                    <td> &nbsp;&nbsp;  
                                        <input onClick={()=>{this.setState({...inputDetail})}} type="button" defaultValue="Làm lại" className="btn " /> 
                                        &nbsp;&nbsp; 
                                        <input type="button" defaultValue="Gửi" className="btn" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="clear" />
            </div>

        );
    }
}

export default FormDisplay;