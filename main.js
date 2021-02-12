const app = {
    data() {
        return {
            tasks: [{ title: 'Learing INT203 Client-side Web Programming 2', done: false },
            { title: 'Building modern websites with tailwindcss', done: false },
            { title: 'Developer web applications fast and hassle free with Spring', done: false }
            ],
            places: [
                { Pname: 'Dharma', des: 'Valley', country: 'Thailand', done: false },
                { Pname: 'kratukchit', des: 'Valley', country: 'UK', done: false },
                { Pname: 'krachakjai', des: 'Valley', country: 'Pakistan', done: false }
            ],
            photos: ["./images/1.jpg",
                "./images/2.jpg",
                "./images/3.jpg"]
        }
    },
    methods: {
        placess(index) {
            this.places[index].done = !this.places[index].done
        },
        merge(index){
            return this.places[index].Pname + " " + this.places[index].des + ", " + this.places[index].country
        }

    },
    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },
       
    }
}
Vue.createApp(app).mount('#app')

