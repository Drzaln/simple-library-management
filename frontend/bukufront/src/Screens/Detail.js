import React, { Component } from "react";
import { connect } from "react-redux";
import { getBukuId, deleteBook } from "../Publics/redux/actions/buku";
import { Link } from 'react-router-dom';
import ModalEdit from "../Component/modal/editBook";
import swal from 'sweetalert';

class Detail extends Component {
  state = {
    books: []
  }

  componentDidMount = async () => {
    await this.props.dispatch(getBukuId(this.props.match.params.id_buku))
    this.setState({
      books: this.props.buku
    })
  }

  handledelete = (id_buku) =>{
    const { books } = this.state;
		const list = books.listBuku;
    console.log('coba id', list ? list.id_buku : '');
    swal({
        title: "Apakah Anda Yakin?",
        text: "Data Anda tidak akan kembali lagi",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Data Behasil dihapus!", {
            icon: "success",
          });
          this.props.dispatch(deleteBook(list ? list.id_buku : ''));
          this.setState({ id_buku : list ? list.id_buku : '' })
        } else {
          swal("Data Anda Aman!");
        }
      })
  }

  render() {
    const { books } = this.state;
		const list = books.listBuku;
		console.log(`cucoooookk`,list);
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark position-absolute" style={{ backgroundColor: "#FF000000", boxShadow: `0px 0px 0px` }} >
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/">
                <p class="nav-item nav-link active font-weight-bold font-size-big ">BACK<span class="sr-only">(current)</span></p>
              </Link>
              <ModalEdit/>
              <p class="nav-item nav-link active font-weight-bold font-size-big " onClick={() => this.handledelete()} >DELETE<span class="sr-only">(current)</span></p>
            </div>
          </div>
        </nav>
        <div>
          <img src={list ? list.gmb_buku : ''} style={{ height: 300, width: "100%", objectFit: "cover" }} alt={list ? list.nama_buku : ''} />
          <img src={list ? list.gmb_buku : ''} alt={list ? list.nama_buku : ''} style={{ width: "10%", position: "absolute", height: 200, borderRadius: 16, top: "25%", right: "10%", boxShadow: `0px 4px 15px #bfbfbf` }} />
          <div className="container" style={{marginTop:"2%"}} >
          <text className="font-weight-bold" style={{fontSize:50}} >{list ? list.nama_buku : ''}</text>
          </div>
          <div className="container" >
          <text className="font-weight-normal" style={{fontSize:20}} >{list ? `Penulis: ` + list.penulis_buku : ''}</text>
          </div>
          <div className="container" style={{marginTop:"2%"}} >
          <text className="font-weight-bold" >{list ? `Lokasi buku: ` + list.lokasi_buku : ''}</text>
          </div>
          <div className="container" style={{marginTop:"3%"}} >
          <text>{list ? list.ringkasan : ''}</text>
          </div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buku: state.buku
  }
}

export default connect(mapStateToProps)(Detail)