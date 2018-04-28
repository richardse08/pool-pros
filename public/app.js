Vue.component('my-header', {
    template: `
    <div class="top-banner">
        <div class="banner-contents float-right">
            <div class="banner-link float-left">Dealers and Distributors</div>
            <div class="banner-link float-left">Commercial Service</div>
            <img class="banner-icon float-left" src="/assets/action-commercial-icon.png">
        </div>
    </div>
    `
})






const app = new Vue({
    el: "#app",
    data: {
        friends: ['item1', 'item2'],
        item1: {
            name: 'Eric',
            age: '29'
        },
        item2: {
            name: 'Lilly',
            age: '3'
        }
    },
    computed: {
        ericNameAge() {
            return `${this.item1.name} ${this.item1.age}`
        },
    },
    filters: {
        fullName(value) {
            return `${value.name} ${value.age}`        
        }
    },
    template: `
        <div>
            <h1>header</h1>
            <h2>paragraph</h2>
            <h3>third paragraph</h3>
            <div>div tag</div>
            <div>filtered: {{item1 | fullName}}</div>
            <div>filtered2: {{item2 | fullName}}</div>
            <div>Computed entry name & age: {{ericNameAge}}</div>
            <div>hardcoded entry name: {{item2.name}}</div>
            <div>hardcoded entry age: {{item2.age}}</div>
        </div>
    `
})















































// // static posts Vue component
// Vue.component('static-posts', {

//     // setting the template that this component will use to render
//     template: '#static-posts-template',

//     // the data function is where we define all the variables this component will need
//     // in this specific case, we only need to worry about an array of posts
//     data: () => ({
//         posts: []
//     }),

//     // this is called whenever this component is mounted onto the DOM
//     // basically whenever we want to show all the posts, we go and get them
//     mounted() {
//         this.getPosts();
//     },

//     // this is where you define all the methods this component needs
//     methods: {

//         // getPost simply sets the 'posts' variable with static data
//         getPosts() {
//             this.posts = [
//                 {
//                     "title": "The first post title!"
//                 },
//                 {
//                     "title": "The second post title!"
//                 },
//                 {
//                     "title": "The third post title!"
//                 }
//             ];
//         }
//     }
// });

// // Create new Vue instance and mount onto elmement with id app
// new Vue({
//     el: '#app'
// })