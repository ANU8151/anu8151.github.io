<template>
    <h1 class=" font-semibold text-[32px]">Personal information</h1>
    <span class=" text-sm text-[#95939A]">This is basic informaton fields</span>
    <div>
        <Input />
    </div>

</template>

<script>
import Input from '../../components/Input.vue'

export default {
    props:{
        name: String,
        email: String,
        phone: String,
        date_of_birth: String
    },
    components: {
        Input
    }
}
</script>