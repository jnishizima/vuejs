<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ nome }}</strong></p>
        <p>Manipulando o nome invertido: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props:{
        nome: { 
            type: String,
            //default: 'Anonimo',
            required: true
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
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
