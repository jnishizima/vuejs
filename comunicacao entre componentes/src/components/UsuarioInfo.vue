<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ nome }}</strong></p>
        <p>Manipulando o nome invertido: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuario: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (CallBack)</button>
    </div>
</template>

<script>
import barramentos from '@/barramentos'

export default {
    props:{
        nome: { 
            type: String,
            //default: 'Anonimo',
            required: true
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created() {
        barramentos.onIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
