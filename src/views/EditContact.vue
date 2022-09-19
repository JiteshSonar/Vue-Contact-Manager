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
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="UpdateSubmit()">
                    <div class="mb-2">
                        <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.photo" type="text" class="form-control" placeholder="photo Url">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.mobile " type="number" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.company" type="text" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.title" type="text" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.groupId" class="form-control" id="" v-if="groups.length > 0">
                            <option value="">select group</option>
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                        <router-link to="/contacts" class="btn btn-warning m-2">
                            <i class="fa fa-arrow-left"></i> Back
                        </router-link>
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" alt="" class="contact-img" />
            </div>
        </div>
    </div>
</template>
<script>
import { ContactService } from '@/services/ContactService';

export default {
    name: 'EditContact',
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {
                name: '',
                photo: '',
                email: '',
                mobile: '',
                company: '',
                title: '',
                groupId: ''
            },
            errorMessage: null,
            groups: []
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
            let groupResponse = await ContactService.getAllGroups(this.contactId);
            this.groups = groupResponse.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = true;
            this.loading = false
        }
    },
    methods: {
        UpdateSubmit : async function () {
            try {
                let response = await ContactService.updateContact(this.contact, this.contactId);
                if (response){
                    return this.$router.push('/')
                } else {
                    return this.$router.push(`/contact/edit/${this.contactId}`)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>