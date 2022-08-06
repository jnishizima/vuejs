import Vue from 'vue'
export default new Vue({
    methods: {
        setIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        onIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})