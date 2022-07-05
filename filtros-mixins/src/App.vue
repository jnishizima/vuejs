<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | mascaraCpf | inverter }}</p>
		<input type="text" :value="cpf | mascaraCpf">
		<hr>
		<Frutas />
		<hr>
		<ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
import Frutas from './Frutas'
import frutaMixin from './frutaMixin'

export default {
	mixins: [frutaMixin],
	components: {
		Frutas
	},
	data(){
		return{
			cpf: '60070080090',
		}
	},
	filters: {
		mascaraCpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input{
	font-size: 2.5rem;
}
</style>
