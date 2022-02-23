import React,{Component} from 'react';  
//import $ from 'jquery';  
import axios from 'axios';  
	  
class DataPembayaran extends Component {  
	constructor() {  
        super();  
        this.state = {  
            pembayaran: [], // array pembayaran untuk menampung data pembayaran  
            id_pembayaran: "",
            id_petugas: "",  
            nisn: "",
            tgl_bayar: "",
            id_spp: "",
            jumlah_bayar: "",  
            bulan: "",
            action: "",  
            search: "",  
        }
  }
  
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  getPembayaran = () => {
    let url = "http://localhost:2910/pembayaran";
    // mengakses api untuk mengambil data pembayaran
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array pembayaran
      this.setState({pembayaran: response.data.pembayaran});
    })
    .catch(error => {
      console.log(error);
    });
  }

  findPembayaran = (event) => {
    let url = "http://localhost:2910/pembayaran";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data pembayaran
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array pembayaran
        this.setState({pembayaran: response.data.pembayaran});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  Drop = (id_pembayaran) => {
    let url = "http://localhost:2910/pembayaran/" + id_pembayaran;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getPembayaran();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getPembayaran()
  }    

  render(){  
      return (  
      <div className="m-3 card">  
        <div className="card-header bg-light text-dark">Data Pembayaran</div>  
          <div className="card-body">  
          <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
          onChange={this.bind} onKeyUp={this.findPembayaran} placeholder="Pencarian..." />  
          {/* tampilan tabel pembayaran */}  
            <table className="table">  
              <thead>  
                <tr align="center">  
                  <th>ID Pembayaran</th>
                  <th>ID Petugas</th>
                  <th>NISN</th>
                  <th>Tanggal Bayar</th>
                  <th>ID SPP</th>
                  <th>Jumlah Bayar</th>
                  <th>Bulan</th>
                  <th>Option</th>  
                </tr>  
              </thead>  
                <tbody>  
                {this.state.pembayaran.map((item,index) => {  
                  return (  
                    <tr align="center" key={index}>  
                      <td>{item.id_pembayaran}</td> 
                      <td>{item.id_petugas}</td>  
                      <td>{item.nisn}</td>
                      <td>{item.tgl_bayar}</td> 
                      <td>{item.id_spp}</td> 
                      <td>{item.jumlah_bayar}</td> 
                      <td>{item.bulan}</td> 
                      <td>  
                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.id_pembayaran)}>  
                          Hapus  
                        </button>  
                      </td>  
                    </tr>  
                  );  
                })}  
              </tbody>  
            </table>
          </div>  
      </div> 
      );  
    }  
}  

export default DataPembayaran; 