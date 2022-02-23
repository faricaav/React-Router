import React,{Component} from 'react';  
//import $ from 'jquery';  
import axios from 'axios';  
	  
class DataSPP extends Component {  
	constructor() {  
        super();  
        this.state = {  
            spp: [], // array spp untuk menampung data spp  
            id_spp: "",  
            tahun: "",  
            nominal: "",  
            action: "",  
            search: "",  
        }
  }
  
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  getSPP = () => {
    let url = "http://localhost:2910/spp";
    // mengakses api untuk mengambil data spp
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array spp
      this.setState({spp: response.data.spp});
    })
    .catch(error => {
      console.log(error);
    });
  }

  findSPP = (event) => {
    let url = "http://localhost:2910/spp";
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
        this.setState({spp: response.data.spp});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  Drop = (id_spp) => {
    let url = "http://localhost:2910/spp/" + id_spp;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getSPP();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getSPP()
  }    

  render(){  
      return (  
      <div className="m-3 card">  
        <div className="card-header bg-light text-dark">Data SPP</div>  
          <div className="card-body">  
          <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
          onChange={this.bind} onKeyUp={this.findSPP} placeholder="Pencarian..." />  
          {/* tampilan tabel spp */}  
            <table className="table">  
              <thead>  
                <tr align="center">  
                  <th>ID SPP</th>  
                  <th>Tahun</th>  
                  <th>Nominal</th>  
                  <th>Option</th>  
                </tr>  
              </thead>  
                <tbody>  
                {this.state.spp.map((item,index) => {  
                  return (  
                    <tr align="center" key={index}>  
                      <td>{item.id_spp}</td>  
                      <td>{item.tahun}</td>  
                      <td>{item.nominal}</td>  
                      <td>  
                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.id_spp)}>  
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

export default DataSPP; 