<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant='primary' class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<transition name="fade" appear>
			<b-alert variant='info' show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant='info' show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		
		<transition name="fadeslide" appear>
			<b-alert variant='info' show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" appear mode="out-in">
			<b-alert variant='info' show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant='warning' show v-else key="warn">{{ msg }}</b-alert>
		</transition> 

		<hr>
		<button @click="exibir2 = !exibir2">Altenar</button> 
		<transition
			
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave">
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<b-button @click="adicionarAlunos" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno, index) in alunos" :key='aluno'>
				<b-list-group-item @click="removerAluno(index)">
					{{ aluno }}
				</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>

export default {
	data (){
		return{
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuario!',
			exibir: true,
			tipoAnimacao: 'fade',
			exibir2: true,
			larguraBase: 0
		}
	},
	methods: {
		adicionarAlunos(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(index){
			this.alunos.splice(index, 1)
		},
		animar(el, done, negativo){
			let rodada = 1 
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + 
					(negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada ++
				if (rodada > 30){
					clearInterval(temporizador)
				}
				done()
			}, 20)
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el, done, false)
		},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el, done, true)
		},
	}
	
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightblue;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active{
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-move {
	transition: transform 1s;
}

@keyframes fadeslide-in {
	from { transform: translateY(60px); }
	to { transform: translateY(0); }
}

@keyframes fadeslide-out {
	from { transform: translateY(0); }
	to { transform: translateY(60px); }
}

.fadeslide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.fadeslide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.fadeslide-enter, .fadeslide-leave-to {
	opacity: 0;
}

</style>
