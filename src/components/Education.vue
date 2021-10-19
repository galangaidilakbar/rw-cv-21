<template>
    <div class="container px-4 py-5 text-white" id="education">
        <h2 class="pb-3 border-bottom text-info border-secondary">
            <i class="bi bi-book-half"></i> Education
        </h2>

        <div class="row row-cols-1 row-cols-md-2 g-4 py-5">
            <div class="col">
                <h5 class="card-title">University of Technology Yogyakarta</h5>
                <p class="card-text text-secondary">
                    <strong class="text-white">Bachelor Degree</strong> in Informatics
                </p>
            </div>
            <div class="col">
                <h6 class="card-title text-md-end">August 2019 - Present</h6>
                <p class="card-text text-md-end">
                    <strong>GPA 3.84</strong>/4.00
                </p>
            </div>
            <div class="col col-md-12 bg-darker rounded py-4">
                <canvas id="gpaChart"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import gpa from "../gpa"

export default {
    data() {
        return {
            gpa
        }
    },
    mounted() {
        const grafic = document.getElementById('gpaChart');
        new Chart(grafic, this.gpa);
    }
}
</script>

<style>
.bg-darker {
    background-color: #1f2937 !important;
}
#gpaChart{
    height: auto;
    max-height: 25rem;
}
</style>