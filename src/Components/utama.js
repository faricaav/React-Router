import React from "react";
import {Routes, Route} from 'react-router-dom';

import Dashboard from './dashboard';
import DataSiswa from "./datasiswa";
import DataPetugas from "./datapetugas";
import DataKelas from "./datakelas";
import DataSPP from "./dataspp"; 
import DataPembayaran from "./datapembayaran"; 

const Utama=()=>(
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/datasiswa" element={<DataSiswa/>}/>
        <Route path="/datapetugas" element={<DataPetugas/>}/>
        <Route path="/datakelas" element={<DataKelas/>}/>
        <Route path="/dataspp" element={<DataSPP/>} />
        <Route path="/datapembayaran" element={<DataPembayaran/>} />
    </Routes>
)

export default Utama; 