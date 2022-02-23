import React,{Component} from 'react';  
//import $ from 'jquery';  
import axios from 'axios';  
	  
class DataPetugas extends Component {  
	constructor() {  
        super();  
        this.state = {  
            petugas: [], // array petugas untuk menampung data petugas  
            id_petugas: "",  
            username: "",
            nama_petugas: "",  
            level: "",  
            action: "",  
            search: "",  
        }
  }
  
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  getPetugas = () => {
    let url = "http://localhost:2910/petugas";
    // mengakses api untuk mengambil data petugas
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array petugas
      this.setState({petugas: response.data.petugas});
    })
    .catch(error => {
      console.log(error);
    });
  }

  findPetugas = (event) => {
    let url = "http://localhost:2910/petugas";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data petugas
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array petugas
        this.setState({petugas: response.data.petugas});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  Drop = (id_petugas) => {
    let url = "http://localhost:2910/petugas/" + id_petugas;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getPetugas();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getPetugas()
  }    

  render(){  
      return (  
      <div className="m-3 card">  
        <div className="card-header bg-light text-dark">Data Petugas</div>  
          <div className="card-body">  
          <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
          onChange={this.bind} onKeyUp={this.findPetugas} placeholder="Pencarian..." />  
          {/* tampilan tabel petugas */}  
            <table className="table">  
              <thead>  
                <tr align="center">  
                  <th>ID Petugas</th>
                  <th>Username</th>  
                  <th>Nama Petugas</th>  
                  <th>Level</th>  
                  <th>Option</th>  
                </tr>  
              </thead>  
                <tbody>  
                {this.state.petugas.map((item,index) => {  
                  return (  
                    <tr align="center" key={index}>  
                      <td>{item.id_petugas}</td>  
                      <td>{item.username}</td>  
                      <td>{item.nama_petugas}</td>  
                      <td>{item.level}</td>  
                      <td>  
                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.id_petugas)}>  
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

export default DataPetugas; 