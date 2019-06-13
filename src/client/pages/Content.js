import React, { Component } from 'react';
import { fetchPostsWithID } from '../../databases/logicCode';
import renderHTML from 'react-render-html';
import { Route, Switch,Link } from 'react-router-dom';
import FormDisplay from '../../components/FormDisplay';
import FormVisit from '../../components/FormVisit';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/index';
const navItem = {
    thongtin: false,
    sodo: false,
    hinhanh: false,
    sanpham: false,
    thamquan: false
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "post": '',
            ...navItem,
            thongtin: true
        }
    }
    toggleMenu = (event, type) => {
        event.stopPropagation();

        this.setState({
            ...navItem,
            [type]: true
        });
        this.props.getPostId(this.props.match.params.id);
    };
    
    componentDidMount() {
        fetchPostsWithID(this.props.match.params.id).then((post) => {
            this.setState({ post })
        }).catch((error) => {
            console.log('Loi fecthPosts' + `${error}`)
        });

    }
    
    render() {

        const { post, thongtin, hinhanh, sodo, sanpham, thamquan } = this.state;
        const idPost=this.props.match.params.id;
        return (
            <div className="main wrapper">
                <div className="container">
                    <h1 className="title"> {post.title}</h1>
                    <div className="mcon">
                        <ul>
                            <li className={thongtin ? 'active' : ''}
                                onClick={event => this.toggleMenu(event, "thongtin")}>
                                    <Link to={`/trien-lam/nuoc-ngoai/${idPost}/thong-tin`}> Thông tin chi tiết </Link></li>
                            <li className={hinhanh ? 'active' : ''}
                                onClick={event => this.toggleMenu(event, "hinhanh")}>
                                    <Link to={`/trien-lam/nuoc-ngoai/${idPost}/hinh-anh`}> Hình ảnh </Link></li>
                            <li className={sodo ? 'active' : ''}
                                onClick={event => this.toggleMenu(event, "sodo")}>
                                    <Link to={`/trien-lam/nuoc-ngoai/${idPost}/so-do`}> Sơ đồ triễn lãm </Link></li>
                            <li className={sanpham ? 'active' : ''}
                                onClick={event => this.toggleMenu(event, "sanpham")}>
                                    <Link to={`/trien-lam/nuoc-ngoai/${idPost}/dang-ky-trung-bay`} > Đăng ký trưng bày sản phẩm </Link></li>
                            <li className={thamquan ? 'active' : ''}
                                onClick={event => this.toggleMenu(event, "thamquan")}>
                                    <Link to={`/trien-lam/nuoc-ngoai/${idPost}/dang-ky-tham-quan`} > Đăng ký tham quan </Link></li>

                            <div className="clear" />
                        </ul>
                    </div>
                    <div className="content-left">
                        <Switch>
                            <Route exact path={this.props.match.url+"/thong-tin"} component={() => (
                                renderHTML(`${post.noidung}`)
                            )} />
                            <Route path={this.props.match.url+'/hinh-anh'} component={() => (
                                <div>
                                   Hinh anh
                                </div>
                            )} />
                            <Route path={this.props.match.url+'/so-do'} component={() => (
                                <div>
                                   So do
                                </div>
                            )} />
                            <Route path={this.props.match.url+'/dang-ky-trung-bay'} component={() => (
                                <div>
                                   <FormDisplay/>
                                </div>
                            )} />
                            <Route path={this.props.match.url+'/dang-ky-tham-quan'} component={() => (
                                <div>
                                   <FormVisit/>
                                </div>
                            )} />
                        </Switch>
                    </div>
                    <div className="content-right ">
                        <div className="btuong">
                            <div className="clear" />
                        </div>
                        <div className="clear" />			</div>
                    <div className="clear" />
                </div>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
     getPostId:(id)=>{
         dispatch(actions.get_post_id(id));
     }
    }
  }
export default connect(null,mapDispatchToProps)(Content)
