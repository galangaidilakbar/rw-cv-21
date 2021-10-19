<template>
    <div class="container px-4 py-5" id="capabilities">
        <div class="row">
            <div class="col-lg-12 mx-auto text-center">
                <p class="text-gold fs-5">Why Choose Me</p>
                <h2 class="display-5 fw-bold text-white">My Expertise Area</h2>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4 py-5">
            <div v-for="skill in skills" :key="skill.id" class="col-md">
                <p class="text-white">{{skill.title}}</p>
                <div class="c bg-darker rounded-3">
                    <div class="text-end py-2 text-white rounded-3" :class="skill.class">{{skill.avg}}%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            skills: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/skills')
        .then(res => res.json())
        .then(data => this.skills = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
.text-gold {
    color: #ffd700 !important;
}
.bg-darker {
    background-color: #1f2937 !important;
}
.bg-php {
    background-color: #8993be !important;
}
.bg-mysql {
    background-color: #f29111 !important;
}
.bg-laravel {
    background-color: #fb503b !important;
}
.bg-vue {
    background-color: #42b883 !important;
}
.bg-bootstrap {
    background-color: #563d7c !important;
}
.bg-tailwind {
    background-color: #06b6d4 !important;
}
.bg-react{
    background-color: #61DBFB !important;
}
.bg-node{
    background-color: #6cc24a !important;
}
.c {
    width: 100%;
}
.w-80 {
    width: 80%;
}
.w-85{
    width: 85%;
}
.w-90 {
    width: 90%;
}
</style>