import React, { Component } from 'react';
import { fetchPostsWithID } from '../../databases/logicCode';
import renderHTML from 'react-render-html';
import { Route, Switch } from 'react-router-dom';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "post": ''
        }
    }
    componentDidMount() {
        fetchPostsWithID(this.props.match.params.id).then((post) => {
            this.setState({ post })
        }).catch((error) => {
            console.log('Loi fecthPosts' + `${error}`)
        });
    }
    render() {
        const { post } = this.state;
        return (
            <div className="main wrapper">
                <div className="container">
                    <h1 className="title"> {post.title}</h1>
                    <div className="mcon">
                        <ul>
                            <li className="active"><a href="/vn/bao-chi"> Thông tin chi tiết </a></li>
                            <li><a href="/vn/hinh-anh"> Hình ảnh </a></li>
                            <li className><a href="/vn/video"> Sơ đồ triễn lãm </a></li>
                            <li className><a href="/vn/video"> Đăng ký trưng bày sản phẩm </a></li>
                            <li className><a href="/vn/video"> Đăng ký tham quan </a></li>

                            <div className="clear" />
                        </ul>
                    </div>
                    <div className="content-left">
                        <Switch>
                            <Route path={this.props.match.url} component={() => (
                                renderHTML(`${post.content}`)
                            )} />
                            <Route path="/3" component={() => (
                                <div>
                                    {console.log(`${this.props.match.params.URL}`)}
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

export default Content;