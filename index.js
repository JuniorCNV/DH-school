const express = require('express')
const app = express();
const db = require('./config/database')
const Aluno = require('./models/Alunos');

app.get('/', (req,res)=> res.send('helo'))
app.get('/alunos', async (req,res)=> {
    const alunos = await Aluno.findAll();//todos os alunos

    res.json(alunos);
})
app.get('/alunos/:id', async (req,res)=> {
    const {id} = req.params;
    // const alunos = await Aluno.findByPk(id);
    const alunos = await Aluno.findOne({ where: {id:id}});//posso filtrar por outras colunas
    
    res.json(alunos);
})

// db
//     .authenticate()
//     .then(()=>{
//         console.log('deu bom campeão');
//     }).catch(err =>{
//         console.error('deu ruim campeão',err);
//     });


app.listen('3000', ()=> console.log('rolando...'))