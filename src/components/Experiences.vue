<template>
    <div class="container px-4 py-5" id="experience">
        <h2 class="pb-3 border-bottom text-gold border-secondary">
            <i class="bi bi-award-fill"></i> Experiences
        </h2>

        <div class="row row-cols-1 row-cols-md-2 g-4 py-5">
            <div v-for="experience in experiences" :key="experience.id" class="col">
                <div class="card border-2 rounded-3 bg-darker">
                    <img :src="experience.img" class="card-img-top" :alt="experience.title" />
                    <div class="card-body">
                        <h5 class="card-title text-white">{{ experience.title }}</h5>
                        <p class="card-text text-secondary">{{ experience.detail }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            experiences: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/experiences')
            .then(res => res.json())
            .then(data => this.experiences = data)
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
</style>
