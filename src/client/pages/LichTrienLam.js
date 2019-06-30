import React, { Component } from 'react';
import {Table} from 'reactstrap';
class LichTrienLam extends Component {
    render() {
        return (
            <div className='main wrapper'>
               <div className='container'>
               <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên triễn lãm</th>
                            <th>Thời gian</th>
                            <th>Địa điểm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Thang</td>
                        </tr>
                    </tbody>
                </Table>
               </div>
            </div>
        );
    }
}

export default LichTrienLam;