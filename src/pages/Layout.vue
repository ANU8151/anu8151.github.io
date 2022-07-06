<template>
    <div class="w-full h-full flex">
        <div class="w-[923px]">
            <div class="bg-[#7025FB] py-[30px] px-[60px]">
                <a href="/">
                    <img alt="logo" src="../assets/logo.svg" />
                </a>
            </div>
            <div class="h-screen bg-cover bg-no-repeat font-nunito pl-[132px] pt-[211px] uppercase" :style="{backgroundImage:`url(${bg_pic})`}">
                <h2 class="max-w-[500px] leading-9 font-extrabold text-[#212529] italic pb-6 text-[26px]">“When you see a good move, look for a better one.”</h2>
            <span class="text-2xl text-white">-Emanuel Lasker</span>
            </div>
        </div>
        <div class="w-[997px]">
            <div class="py-[30px] px-12 border-b-2">
                <h3 class="">Start creating your account</h3>
            </div>
            <div class="px-12">
                {{ bg_pic }}
                <slot />
            </div>
        </div>
    </div>

</template>

<script>

export default {
    props:{
        bg_pic: String
    }
}
</script>