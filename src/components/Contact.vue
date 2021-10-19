<template>
    <div class="container px-4 py-5" id="contact">
        <div class="row">
            <div class="col-lg-12 mx-auto text-center">
                <p class="text-info fs-5">Contact me</p>
                <h2 class="display-5 fw-bold text-white">Get in Touch</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto py-5">
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="subject" placeholder="subject" />
                        <label for="subject">Subject</label>
                    </div>
                    <div class="form-floating">
                        <textarea
                            class="form-control"
                            placeholder="Message"
                            id="message"
                            style="height: 100px"
                        ></textarea>
                        <label for="message">Message</label>
                    </div>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button
                            type="button"
                            class="mt-3 btn btn-outline-info btn-lg px-5 me-sm-3 fw-bold"
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.text-gold {
    color: #ffd700 !important;
}
</style>