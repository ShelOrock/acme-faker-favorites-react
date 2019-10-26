const { Component } = React;
const { render } = ReactDOM;

const app = document.querySelector('#app');
const favoriteList = [];

class App extends Component {
    constructor() {
        super()

        this.state = {
            count: 0,
            users: [],

        };
    }

    changeCount() {
        this.setState({
            count: 0,
            users: userList,
           
        }) 
    }

    render() {
        let { count } = this.state;
      
        const findFavorite = (target) => {
            console.log('target in findfav',target)
            if(target.backgroundColor==='red') {
               
                target.style.backgroundColor = 'grey';
                count--;
                this.setState({count})
            } else {
              
                target.style.backgroundColor = 'red';
                count++;
                this.setState({count})
            }


            // if(users[idx].props.className ==='notSelected') {
            //     users[idx].classList.remove('notSelected');
            //     users[idx].classList.add('selected');
            // } else {
            //     users[idx].classList.remove('selected');
            //     users[idx].classList.add('notSelected');
        // }
        }

        const h1 = React.createElement('h1', null, 'Acme Faker Favorites');

        const h2 = React.createElement('h2', null , `You have ${this.state.count} favorite users`);

        const users = userList.map((user, idx) => {
            return React.createElement('div', { key: idx, onClick:(ev)=>{
              
                findFavorite(ev.target);
             }, style: {
                 padding: '1rem',
                 margin: '1rem',
                 border: '3px green solid',
                 backgroundColor:'grey'

             }}, user.name, user.username);
        })


        const container = React.createElement('div', null ,h1, h2,users)
        return container;
    }

}

const createUsers = () => {
    let users = [];
    for(let i = 0; i < 20; i++) {
        users.push(faker.helpers.createCard())
    }
    return users;
}

const userList = createUsers();
console.log('user list ',userList);

render( React.createElement(App), app);