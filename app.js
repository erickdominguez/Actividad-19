const app = Vue.createApp({

})

app.component('foco', {
    props: ['lugar'],
    data(){
        return {
            estatus: 0
        }
    },
    template:`
            <img :src="estatus ? 'images/focoOff.png' : 'images/focoOn.png'" @click="estatus = !estatus">
            <p>{{lugar}}</p>
            `
})

const vm = app.mount('#app')