import React,{Component} from 'react';  
//import $ from 'jquery';  
import axios from 'axios';  
	  
class DataKelas extends Component {  
	constructor() {  
        super();  
        this.state = {  
            kelas: [], // array kelas untuk menampung data kelas  
            id_kelas: "",  
            nama_kelas: "",  
            kompetensi_keahlian: "",  
            action: "",  
            search: "",  
        }
  }
  
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  getKelas = () => {
    let url = "http://localhost:2910/kelas";
    // mengakses api untuk mengambil data kelas
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array kelas
      this.setState({kelas: response.data.kelas});
    })
    .catch(error => {
      console.log(error);
    });
  }

  findKelas = (event) => {
    let url = "http://localhost:2910/kelas";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data kelas
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array pegawai
        this.setState({kelas: response.data.kelas});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  Drop = (id_kelas) => {
    let url = "http://localhost:2910/kelas/" + id_kelas;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getKelas();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getKelas()
  }    

  render(){  
      return (  
      <div className="m-3 card">  
        <div className="card-header bg-light text-dark">Data Kelas</div>  
          <div className="card-body">  
          <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
          onChange={this.bind} onKeyUp={this.findKelas} placeholder="Pencarian..." />  
          {/* tampilan tabel kelas */}  
            <table className="table">  
              <thead>  
                <tr align="center">  
                  <th>ID Kelas</th>  
                  <th>Nama Kelas</th>  
                  <th>Kompetensi Keahlian</th>  
                  <th>Option</th>  
                </tr>  
              </thead>  
                <tbody>  
                {this.state.kelas.map((item,index) => {  
                  return (  
                    <tr align="center" key={index}>  
                      <td>{item.id_kelas}</td>  
                      <td>{item.nama_kelas}</td>  
                      <td>{item.kompetensi_keahlian}</td>  
                      <td>  
                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.id_kelas)}>  
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

export default DataKelas; 