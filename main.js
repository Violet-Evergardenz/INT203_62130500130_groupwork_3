    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
               
                tasks: [{image: 'images/iu.jpg',imagelike: 'images/iulike.jpg',article: 'Lee Ji-eun (IU)',done: false},
                {image: 'images/kimyoojung.jpg',imagelike: 'images/kimyoojunglike.jpg',article: 'kim yoo‑jung' ,done: false},
                {image: 'images/chaesoobin.jpg',imagelike: 'images/chaesoobinlike.jpg',article: 'chae soo-bin' ,done: false}
            ]
            }
        },
        methods: {
            toggleDone(index){
                this.tasks[index].done = !this.tasks[index].done
            }
        },
        computed: {
            count(){
                return this.tasks.filter( t => t.done ).length
            }
        }

    }
    Vue.createApp(app).mount('#app')