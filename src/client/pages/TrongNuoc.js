import React, { Component } from 'react';
import { fetchPosts } from "../../databases/logicCode"
import CardPost from '../../components/CardPost';
class TrongNuoc extends Component {constructor(props) {
  super(props);
  this.state={
      "posts":[
      "1","2"
      ],
  }
}

componentDidMount() {

  fetchPosts().then((posts)=>{
      this.setState({posts})
  }).catch((error)=>{
      console.log('Loi fecthPosts'+`${error}`)
  });
}
renderPosts(){
  const {posts}=this.state;
  return posts.map((val,index)=>(
      <CardPost key={index}
      title={val.title}
      intro={val.intro}
      image={val.image}
      to={val.to}
      from={val.from}
      where={val.where}
      paramLink={val}
      />
  ))

}
render() {
  return (
      <div className="main wrapper">
      <div className="container">
          <h1 className="title"> Triễn lãm trong nước</h1>
          <div className="mcon">
              <ul>
                  <li className="active"><a href="/vn/bao-chi"> Tp. Hồ Chí Minh </a></li>
                  <li><a href="/vn/hinh-anh"> Hà Nội </a></li>
                  <li className><a href="/vn/video"> Các tỉnh khác </a></li>
                

                  <div className="clear" />
              </ul>
          </div>
          <div className="content-left">
              <div className="news_detail_content c">
                  <div id="doc-content" className="doc-content">
                      <div style={{ paddingRight: 15, paddingTop: 55 }}>

                          {this.renderPosts()}
                          {/* conttn */}

                      </div>
                  </div>
                  <div>
                      <div className="clear" />
                  </div>
                  <div className="clear" />
              </div>
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

export default TrongNuoc;