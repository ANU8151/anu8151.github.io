<template>
    <select name="" id="">
        <option v-for=" grandmaster in grandmasters" :key="grandmaster.name">
            <span> {{ grandmaster.id }}</span>
            <img class=" h-20 rounded-md" :src="'https://chess-tournament-api.devtest.ge' + grandmaster.image" alt="">
            {{ grandmaster.name }}
        </option>
    </select>
</template>

<script>
import axios from 'axios'
// import getGrandmasters from '../../api'

export default {
    data() {
        return {
            grandmasters: {}
        }
    },
    mounted() {
        axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
            .then((res) => {
                this.grandmasters = res.data
            })
    }
}
</script>