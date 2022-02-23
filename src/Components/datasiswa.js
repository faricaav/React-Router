import React,{Component} from 'react';  
//import $ from 'jquery';  
import axios from 'axios';  
	  
class DataSiswa extends Component {  
	constructor() {  
        super();  
        this.state = {  
            siswa: [], // array siswa untuk menampung data siswa  
            nisn: "",
            nis: "",  
            nama: "",
            id_kelas: "",
            alamat: "",
            no_telp: "",  
            id_spp: "",  
            username: "",
            action: "",  
            search: "",  
        }
  }
  
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  getSiswa = () => {
    let url = "http://localhost:2910/siswa";
    // mengakses api untuk mengambil data pegawai
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array pegawai
      this.setState({siswa: response.data.siswa});
    })
    .catch(error => {
      console.log(error);
    });
  }

  findSiswa = (event) => {
    let url = "http://localhost:2910/siswa";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data siswa
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array siswa
        this.setState({siswa: response.data.siswa});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  Drop = (nisn) => {
    let url = "http://localhost:2910/siswa/" + nisn;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getSiswa();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getSiswa()
  }    

  render(){  
      return (  
      <div className="m-3 card">  
        <div className="card-header bg-light text-dark">Data Siswa</div>  
          <div className="card-body">  
          <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
          onChange={this.bind} onKeyUp={this.findSiswa} placeholder="Pencarian..." />  
          {/* tampilan tabel siswa */}  
            <table className="table">  
              <thead>  
                <tr align="center">  
                  <th>NISN</th>
                  <th>NIS</th>
                  <th>Nama</th>
                  <th>ID Kelas</th>
                  <th>Alamat</th>
                  <th>No Telp</th>
                  <th>ID SPP</th>  
                  <th>Username</th>  
                  <th>Option</th>  
                </tr>  
              </thead>  
                <tbody>  
                {this.state.siswa.map((item,index) => {  
                  return (  
                    <tr align="center" key={index}>  
                      <td>{item.nisn}</td> 
                      <td>{item.nis}</td>  
                      <td>{item.nama}</td>
                      <td>{item.id_kelas}</td> 
                      <td>{item.alamat}</td> 
                      <td>{item.no_telp}</td> 
                      <td>{item.id_spp}</td>   
                      <td>{item.username}</td>  
                      <td>  
                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.nisn)}>  
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

export default DataSiswa; 