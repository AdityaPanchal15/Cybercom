var app2 = new Vue({
    el: '#app-2',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        message: "sssaaa",
        count: 0,
        seen: true,
        isActive: true,
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    created: function () {
        // `this` points to the vm instance
        console.log('count is: ' + this.count)
    },
    // methods:{
    //     reverseMessage: function () {
    //         this.message = this.message.split('').reverse().join('')
    //     }
    // }
})