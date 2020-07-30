const sqlite3 = require("sqlite3").verbose()

//criar objeto que ira criar operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados para nossas aplicaçoes
/*
db.serialize( () => {
 
    //com comandos SQL eu vou:


    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
    
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
            );
    `)

    //inserir dados na tabela
    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES(?,?,?,?,?,?,?);
        `
    
        const values = [
            "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "Paperside",
            "Guilherme Gemballa, Jardim América",
            "numero 260",
            "Santa Catarina",
            "Rio do Sul",
            "Resíduos Eletrônicos, Lâmpadas"
        ]

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com  sucesso")
        console.log(this)
    }


    db.run(query, values, afterInsertData   )
    
    //consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão os seus registros: ")
        console.log(rows)
    })
    
    // apagar dados da tabela

    db.run(`DELETE FROM places WHERE id = ? `, [15], function(err){
            if (err) {
                return console.log(err)

        }
        console.log("Registro deletado com sucesso")
    })

})
*/
