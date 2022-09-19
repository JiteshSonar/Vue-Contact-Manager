<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
                <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ex est illo
                    asperiores perspiciatis! Molestiae eius nemo qui sunt quam, doloribus numquam, dicta ullam hic
                    reiciendis maxime explicabo enim eaque.</p>
            </div>
        </div>
    </div>

    <!-- spinner -->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Spinner />
                </div>
            </div>
        </div>
    </div>
    <!-- Errot Message -->
    <div v-if="!loading && errorMessage">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{errorMessage}}</p>
                </div>
            </div>
        </div>
    </div>


    <div class="container" v-if="!loading && isDone()">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.photo"
                    alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold">{{contact.name}}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                    <li class="list-group-item">Mobile: <span class="fw-bold">{{contact.mobile}}</span></li>
                    <li class="list-group-item">Company: <span class="fw-bold">{{contact.company}}</span></li>
                    <li class="list-group-item">Title: <span class="fw-bold">{{contact.title}}</span></li>
                    <li class="list-group-item">Group: <span class="fw-bold">{{group.name}}</span></li>
                </ul>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <router-link to="/" class="btn btn-success">
                    <i class="fa fa-arrow-left"></i> Back
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/ContactService';
import Spinner from '@/components/Spinner.vue';

export default {
    name: "ViewContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
            errorMessage: null,
            group: {}
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
            let groupResponse = await ContactService.getGroup(this.contactId);
            this.group = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    components: { Spinner },
    methods: {
        isDone: function (){
            return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
        }
    }
}
</script>

<style>

</style>