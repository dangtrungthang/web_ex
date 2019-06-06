import React, { Component } from 'react';

class FormVisit extends Component {
    render() {
        return (
            
                <div className="content-left">
                    <h2 className="tit2">Đăng kí tham quan online</h2>
                    <div className="news_detail_content">
                        <form action="/vn/dang-ki-tham-quan-online&function=mailing" name="frmContact" id="frmContact" method="post" onsubmit="return check_input();" className="wpcf7-form" encType="multipart/form-data">
                            <table border={0} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td className="td" width="170px">Tên đơn vị:</td>
                                        <td><input type="text" name="tendn" /></td>
                                    </tr>
                                    <tr>
                                        <td className="td">Địa chỉ:</td>
                                        <td><input type="text" name="diachi" /></td>
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
                                        <td className="td">Loại hình công ty:</td>
                                        <td><select name="loaihinh">
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
                                        <td><input type="text" name="dienthoai" /></td>
                                    </tr>
                                    <tr>
                                        <td className="td">Di động:</td>
                                        <td><input type="text" name="didong" /></td>
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
                                        <td className="td">Người đại diện
                :</td>
                                        <td><input type="text" name="nguoidaidien" /></td>
                                    </tr>
                                    <tr>
                                        <td className="td">Chức danh:</td>
                                        <td><input type="text" name="chucdanh" /></td>
                                    </tr>
                                    <tr>
                                        <td className="td">Mặt hàng quan tâm:</td>
                                        <td><textarea type="text" name="mathang" defaultValue={""} /></td>
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
                                        <td> &nbsp;&nbsp;  <input type="reset" defaultValue="Làm lại" className="btn " /> &nbsp;&nbsp; <input type="button" defaultValue="Gửi" className="btn" /></td>
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

export default FormVisit;