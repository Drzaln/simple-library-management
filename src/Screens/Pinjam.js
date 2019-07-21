import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Pinjam extends Component {
  render () {
    return (
      <div className='container'>
        <Link to='/'>
          <p
            className='nav-item nav-link active font-weight-bold font-size-big'
            style={{ color: 'black', marginTop:'1%' }}
          >
            BACK<span className='sr-only'>(current)</span>
          </p>
        </Link>
        <div className='row' style={{ marginTop: '1%' }}>
          <div className='col-2' style={{ marginTop: '2%' }}>
            <img
              src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flibapps.libraries.uc.edu%2Fexhibits%2Fmargaretarmstrong%2Fwp-content%2Fuploads%2Fsites%2F17%2F2014%2F05%2Fgolden_key_large.jpg&f=1'
              style={{ width: '60%' }}
              alt='gambar'
            />
          </div>
          <div className='col-8' style={{ marginTop: '2%' }}>
            <div className='row'>
              <text>
                <b>Judul: </b>The Golden Key
              </text>
            </div>
            <div className='row'>
              <text>
                <b>Peminjam: </b>nama yang pinjem
              </text>
            </div>
            <div className='row'>
              <text>
                <b>Mulai pinjam: </b>29-Mei-2017
              </text>
            </div>
            <div className='row'>
              <text>
                <b>Tanggal kembali: </b>30-Mei-2018
              </text>
            </div>
            <div className='row'>
              <text>
                <b>DENDA: </b>masih belom
              </text>
            </div>
          </div>
          <div className='col-2' style={{ marginTop: '2%' }}>
            <button type='button' class='btn btn-success'>
              Return Book
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    buku: state.buku
  }
}

export default connect(mapStateToProps)(Pinjam)
