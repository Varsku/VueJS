var cmp = {    //Lokaali itse tehty Vue komponentti, voidaan käyttää html tagillä kuten index.html tiedostossa
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server status: {{ status }} <button @click="changeStatus">Change status</button></p>',
    methods:  {
        changeStatus : function() {
            this.status = 'Normal'
        }
    }
};

Vue.component('server-status2' , { //Globaali komponentti, server-status2 voidaan kutsua missä vain applikaatiossa index.html tiedostossa
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server status AGAIN: {{ status }} <button @click="changeStatus">Change status</button></p>',
    methods:  {
        changeStatus : function() {
            this.status = 'Not so critical'
        }
    }
})

new Vue({
    el: '#app',
    components: {
        'server-status': cmp //Kutsutaan lokaalia komponenttia "app" id:llä olevaan diviin
    }
})

new Vue({
    el: '#app2'
})