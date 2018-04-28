const app = new Vue({
    el: "#app",
    data: {
        item1: {
            name: 'Eric',
            age: '29'
        },
        item2: {
            name: 'Lilly',
            age: '3'
        }
    },
    template: `
        <div>
            <h1>header</h1>
            <h2>paragraph</h2>
            <h3>third paragraph</h3>
            <div>div tag</div>
            <div>First entry name: {{item1.name}}</div>
            <div>First entry age: {{item1.age}}</div>
            <div>Second entry name: {{item2.name}}</div>
            <div>Second entry age: {{item2.age}}</div>
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