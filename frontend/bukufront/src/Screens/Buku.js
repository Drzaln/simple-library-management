import React, { Component } from "react";
import { connect } from "react-redux";
import getBuku from "../Publics/redux/actions/buku";
import {Link} from 'react-router-dom';
import './Buku.css'

class Buku extends Component {
  state = {
    books: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getBuku());
    this.setState({
      books: this.props.buku
    });
  };

  renderBookJsx = () => {
    const { books } = this.state;
    const list = books.listBuku;
    let jsx = list &&
    list.result.length > 0 &&
    list.result.map((entry, index) => {
      return (
        <div className="col-md-3 mb-5">
        <div className="card text-white bg-info" style={{width: '15rem'}}>
          <Link to={'/bookDetail/'+entry.id_book}><img src={entry.gmb_buku} className="card-img-top cardHome" alt="..." /></Link>
            <h5><span className="badge badge-warning">{entry.id_kategori}</span></h5>
            <div className="card-body">
                <p className="card-text"><h5>{entry.nama_buku}</h5></p>
            </div>
        </div>
    </div>
      );
    })
    return jsx
}

  render() {
    return (
      <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm-7 mt-5">
                        <input className="form-control form-control-lg rounded-pill search" ref="input" onChange={this.search} type="text" placeholder="Search..." /> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 offset-md-8 mt-3">
                        {/* <ModalAdd/> */}
                    </div>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    {this.renderBookJsx()}
                </div>
            </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buku: state.buku
  };
};

export default connect(mapStateToProps)(Buku);
