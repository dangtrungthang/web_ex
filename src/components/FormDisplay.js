import React, { Component } from 'react';
import { database } from '../databases/firebase';
import ConfirmForm from './ConfirmForm';
import { connect } from 'react-redux';
const inputDetail = {
    tendonvi: '',
    diachi: '',
    sanpham: '',
    quocgia: 'Viet Nam',
    diadiem: '',
    dienthoai: '',
    fax: '',
    email: '',
    website: '',
    mathang: '',
    yeucau: ''
}
class FormDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...inputDetail,
            isOpen: false
        }
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentDidMount() {

    }
    onSubmit() {
      
        const { tendonvi, diachi, sanpham, quocgia, diadiem, dienthoai, fax, email, website, mathang, yeucau } = this.state;
        const id=this.props.postID;
        const data = { tendonvi, diachi, sanpham, quocgia, diadiem, dienthoai, fax, email, website, mathang, yeucau,id }
        try {
            if (true) {
                database.child('/dangkytrungbay').push(data).then(() => {
                    this.toggleModal();
                   

                })

            }
        } catch (error) {
            console.log(`${error}`)
        }
    }
    render() {
        const { tendonvi, diachi, sanpham, quocgia, diadiem, dienthoai, fax, email, website, mathang, yeucau } = this.state;
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
                                        onChange={(e) => this.setState({ tendonvi: e.target.value })}
                                        value={tendonvi}
                                        type="text" name="tendn" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Địa chỉ:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ diachi: e.target.value })}
                                        value={diachi}
                                        type="text" name="diachi" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Danh mục sản phẩm:</td>
                                    <td><select value={sanpham} onChange={(e) => this.setState({ sanpham: e.target.value })} name="danhmuc">
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
                                    <td><select value={quocgia} onChange={(e) => this.setState({ quocgia: e.target.value })} name="quocgia">
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
                                    <td><select value={diadiem} onChange={(e) => this.setState({ diadiem: e.target.value })} name="diadiem">
                                        <option value>--Chọn địa điểm tổ chức--</option>
                                        <option value="VietAd Hồ Chí Minh">VietAd Hồ Chí Minh</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Điện thoại:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ dienthoai: e.target.value })}
                                        value={dienthoai}
                                        type="text" name="dienthoai" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Fax:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ fax: e.target.value })}
                                        value={fax}
                                        type="text" name="fax" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Emai:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                        value={email}
                                        type="text" name="email" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Website:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ website: e.target.value })}
                                        value={website}
                                        type="text" name="web" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Mặt hàng triển lãm:</td>
                                    <td><textarea
                                        onChange={(e) => this.setState({ mathang: e.target.value })}
                                        value={mathang}
                                        type="text" name="mathang" defaultValue={""} /></td>
                                </tr>
                                <tr>
                                    <td className="td">Thông tin yêu cầu:</td>
                                    <td><textarea
                                        onChange={(e) => this.setState({ yeucau: e.target.value })}
                                        value={yeucau}
                                        type="text" name="thongtin" defaultValue={""} /></td>
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
                                        <input onClick={() => { this.setState({ ...inputDetail }) }} type="button" defaultValue="Làm lại" className="btn " />
                                        &nbsp;&nbsp;
                                        <input onClick={() => this.onSubmit()} type="button" defaultValue="Gửi" className="btn" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="clear" />
                <ConfirmForm show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Bạn đã đăng ký thành công
        </ConfirmForm>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        postID: state.getpostid,
        


    }
}
export default connect(mapStateToProps)(FormDisplay);