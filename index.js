const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "spp"
})

db.connect(err => {
    if (err) console.log(err.message)
    else console.log("koneksi berhasil")
    
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



// GET: /petugas --> end point untuk mengakses data petugas
app.get("/petugas", (req,res) => {
    let sql = "select * from petugas"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else{
            let response = {
                count: result.length,
                petugas: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// POST: /petugas --> end point untuk pencarian data petugas
app.post("/petugas", (req,res) => {
    let find = req.body.find
    let sql = "select * from petugas where id_petugas like '%"+find+"%' or nama_petugas like '%"+find+"%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                petugas: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// DELETE: /petugas/:id_petugas --> end point untuk hapus data petugas
app.delete("/petugas/:id_petugas", (req,res) => {
    let data = {
        id_petugas : req.params.id_petugas
    }
    let message = ""
    let sql = "delete from petugas where ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })
})

// GET: /siswa --> end point untuk mengakses data siswa
app.get("/siswa", (req,res) => {
    let sql = "select * from siswa"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else{
            let response = {
                count: result.length,
                siswa: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// POST: /siswa --> end point untuk pencarian data siswa
app.post("/siswa", (req,res) => {
    let find = req.body.find
    let sql = "select * from siswa where nisn like '%"+find+"%' or nama like '%"+find+"%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                siswa: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// DELETE: /siswa/:nisn --> end point untuk hapus data siswa
app.delete("/siswa/:nisn", (req,res) => {
    let data = {
        nisn : req.params.nisn
    }
    let message = ""
    let sql = "delete from siswa where ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })
})

// GET: /kelas --> end point untuk mengakses data kelas
app.get("/kelas", (req,res) => {
    let sql = "select * from kelas"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else{
            let response = {
                count: result.length,
                kelas: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// POST: /kelas --> end point untuk pencarian data petugas
app.post("/kelas", (req,res) => {
    let find = req.body.find
    let sql = "select * from kelas where id_kelas like '%"+find+"%' or nama_kelas like '%"+find+"%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                kelas: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// DELETE: /kelas/:id_kelas --> end point untuk hapus data kelas
app.delete("/kelas/:id_kelas", (req,res) => {
    let data = {
        id_kelas : req.params.id_kelas
    }
    let message = ""
    let sql = "delete from kelas where ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })

    
})

// GET: /spp --> end point untuk mengakses data spp
app.get("/spp", (req,res) => {
    let sql = "select * from spp"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else{
            let response = {
                count: result.length,
                spp: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// POST: /spp --> end point untuk pencarian data petugas
app.post("/spp", (req,res) => {
    let find = req.body.find
    let sql = "select * from spp where id_spp like '%"+find+"%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                spp: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// DELETE: /spp/:id_spp --> end point untuk hapus data spp
app.delete("/spp/:id_spp", (req,res) => {
    let data = {
        id_spp : req.params.id_spp
    }
    let message = ""
    let sql = "delete from spp where ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })
})

// GET: /pembayaran --> end point untuk mengakses data pembayaran
app.get("/pembayaran", (req,res) => {
    let sql = "select * from pembayaran"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else{
            let response = {
                count: result.length,
                pembayaran: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })

    
})

// POST: /pembayaran --> end point untuk pencarian data petugas
app.post("/pembayaran", (req,res) => {
    let find = req.body.find
    let sql = "select * from pembayaran where id_pembayaran like '%"+find+"%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                pembayaran: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// DELETE: /pembayaran/:id_pembayaran --> end point untuk hapus data pembayaran
app.delete("/pembayaran/:id_pembayaran", (req,res) => {
    let data = {
        id_pembayaran : req.params.id_pembayaran
    }
    let message = ""
    let sql = "delete from pembayaran where ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })

    
})

app.listen(2910, () => {
    console.log("Server run on port 2910");
})
