import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://chess-tournament-api.devtest.ge/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

const getGrandmasters = () => {
    instance.get('grandmasters')
    .then(function(res){})
}


export default getGrandmasters