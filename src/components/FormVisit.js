import React, { Component } from 'react';
import { database } from '../databases/firebase';
import ConfirmForm from './ConfirmForm';
import { connect } from 'react-redux';
const inputDetail = {
    tendonvi: '',
    diachi: '',
    quocgia: 'Viet Nam',
    loaihinhcty: 'Doanh nghiệp nhà nước',
    diadiem: '',
    dienthoai: '',
    didong: '',
    fax: '',
    email: '',
    website: '',
    nguoidaidien: '',
    chucdanh: '',
    mathang: '',

}
class FormVisit extends Component {
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
    onSubmit() {
        const { tendonvi, diachi, quocgia, loaihinhcty, diadiem, dienthoai,
            didong,
            fax,
            email,
            website,
            nguoidaidien,
            chucdanh,
            mathang, } = this.state;
        const id = this.props.postID;
        const data = {
            tendonvi, diachi, quocgia, loaihinhcty, diadiem, dienthoai,
            didong,
            fax,
            email,
            website,
            nguoidaidien,
            chucdanh,
            mathang,
            id
        }

        try {
            if (true) {
                database.child('/dangkythamgia').push(data).then(() => {
                    this.toggleModal();


                })

            }
        } catch (error) {
            console.log(`${error}`)
        }

    }
    render() {
        const { tendonvi,
            diachi,
            quocgia,
            loaihinhcty,
            diadiem,
            dienthoai,
            didong,
            fax,
            email,
            website,
            nguoidaidien,
            chucdanh,
            mathang, } = this.state;
        return (

            <div className="content-left">
                <h2 className="tit2">Đăng kí tham quan online</h2>
                <div className="news_detail_content">
                    <form action="/vn/dang-ki-tham-quan-online&function=mailing" name="frmContact" id="frmContact" method="post" onsubmit="return check_input();" className="wpcf7-form" encType="multipart/form-data">
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
                                    <td className="td">Quốc gia:</td>
                                    <td><select
                                        value={quocgia}
                                        onChange={(e) => this.setState({ quocgia: e.target.value })}
                                        name="quocgia">
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
                                    <td><select
                                        value={diadiem}
                                        onChange={(e) => this.setState({ diadiem: e.target.value })}
                                        name="diadiem">
                                        <option value>--Chọn địa điểm tổ chức--</option>
                                        <option value="VietAd Hồ Chí Minh">VietAd Hồ Chí Minh</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td">Loại hình công ty:</td>
                                    <td><select
                                        value={loaihinhcty}
                                        onChange={(e) => this.setState({ loaihinhcty: e.target.value })}
                                        name="loaihinh">
                                        <option value="Doanh nghiệp nhà nước">Doanh nghiệp nhà nước</option>
                                        <option value="Doanh nghiệp tư nhân">Doanh nghiệp tư nhân</option>
                                        <option value="Doanh nghiệp công ty cổ phần">Doanh nghiệp công ty cổ phần</option>
                                        <option value="Công ty trách nhiệm hữu hạn">Công ty trách nhiệm hữu hạn</option>
                                        <option value="Công ty hợp danh">Công ty hợp danh</option>
                                        <option value="Công ty liên doanh">Công ty liên doanh</option>
                                        <option value="Hợp tác xã">Hợp tác xã</option>
                                        <option value="Nhà phân phối">Nhà phân phối</option>
                                        <option value="Đại lý lẻ">Đại lý lẻ</option>
                                        <option value="Khác">Khác</option>
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
                                    <td className="td">Di động:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ didong: e.target.value })}
                                        value={didong}
                                        type="text" name="didong" /></td>
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
                                    <td className="td">Người đại diện
                :</td>
                                    <td><input
                                        onChange={(e) => this.setState({ nguoidaidien: e.target.value })}
                                        value={nguoidaidien}
                                        type="text" name="nguoidaidien" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Chức danh:</td>
                                    <td><input
                                        onChange={(e) => this.setState({ chucdanh: e.target.value })}
                                        value={chucdanh}
                                        type="text" name="chucdanh" /></td>
                                </tr>
                                <tr>
                                    <td className="td">Mặt hàng quan tâm:</td>
                                    <td><textarea
                                        onChange={(e) => this.setState({ mathang: e.target.value })}
                                        value={mathang}
                                        type="text" name="mathang" defaultValue={""} /></td>
                                </tr>
                                <tr>
                                    <td className="td">Captcha:</td>
                                    <td><div className="captcha">
                                        <a href="javascript:void(0)" className="tiptip reload" title="Thay đổi"><img src="/cap2/captcha.php" className="captcha_img" /></a>
                                        <a href="javascript:void(0)" title="Thay đổi" className="captcha_reload tiptip reload" />
                                        <input maxLength={8} size={8} id="userstring" name="userstring" type="text" defaultValue className="maxt" style={{ float: 'left', width: 115, marginRight: 10 }} />
                                    </div>
                                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t\t.captcha .captcha_reload {background: url(\"/images/reload.gif\") no-repeat scroll left center rgba(0, 0, 0, 0);display: inline-block;padding: 10px 10px 10px 25px;}\n\t\t\t\t\t\t\t\t\t" }} /></td>
                                </tr>
                                <tr>
                                    <td className="td" />
                                    <td> &nbsp;&nbsp;  
                                        <input type="reset" defaultValue="Làm lại" className="btn " /> &nbsp;&nbsp; 
                                    <input onClick={()=>this.onSubmit()}
                                    type="button" defaultValue="Gửi" className="btn" /></td>
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
export default connect(mapStateToProps)(FormVisit);