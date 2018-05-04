/* global Vue */

var myHeaderOptions = Vue.component('my-header', {
    // el: "#app",
    template: `
    <h>this is output from myHeaderOptions component</h>
    `
});





const app = new Vue({
    el: "#app",
    components: {
        'my-header': myHeaderOptions
      },
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
});

































