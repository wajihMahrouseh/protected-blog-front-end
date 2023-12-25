// import AdvancedSearchModal from "./AdvancedSearchModal";
export default {
    // components: { AdvancedSearchModal },
    template: `
    <section class="flex justify-center my-8 py-6">
    <div>
    <!-- Input and button for simple search -->
    <input type="text" v-model="searchTerm" placeholder="Search by Name" @input="searchSubscribers" class="text-black placeholder-gray-500">
    <button @click="showAdvancedSearchModal">Advanced Search</button>

    <!-- subscriber list -->
    <div v-for="subscriber in filteredSubscribers" :key="subscriber.id">
      <p>{{ subscriber.name }}</p>
      <p>{{ subscriber.username }}</p>
      <!-- ... -->

      <!-- Include the AdvancedSearchModal component -->
    <AdvancedSearchModal v-if="showModal" @perform-advanced-search="performAdvancedSearch" />
    <!-- ... -->
      <button @click="deleteSubscriber(subscriber.id)">Delete</button>
    </div>
  </div>
  </section>
  
  
    `,
    data() {
        return {
            searchTerm: '',
            // subscribers: [], // Replace this with your fetched subscriber data
            subscribers: [
                { id: 1, name: 'name', username: 'username' }
            ],
            advancedSearchParams: {
                // Initialize with fields for advanced search
                // For example: username: '', status: '', etc.
            },
            showModal: false
        };
    },
    computed: {
        filteredSubscribers() {
            // Perform search based on the 'searchTerm' against the 'name' field
            return this.subscribers.filter(subscriber =>
                subscriber.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
    },
    methods: {
        searchSubscribers() {
            // Update the list based on search term changes
            // This will automatically trigger the computed property 'filteredSubscribers'
        },
        showAdvancedSearchModal() {
            // Display the advanced search modal when the button is clicked
            this.showModal = true;
        },
        performAdvancedSearch(searchParams) {
            // Handle advanced search based on the searchParams received from the modal
            // Perform the search using the provided parameters and update the subscribers list
            // You can make an Axios request to fetch subscribers based on advanced criteria
            // Update this.subscribers with the fetched data or handle it as per your backend's response
            console.log('Performing advanced search with parameters:', searchParams);
            // For demonstration, let's assume it updates the subscribers list with the search results
        }
    },
    async deleteSubscriber(subscriberId) {
        try {
            // Make an Axios DELETE request to delete the subscriber with the given 'subscriberId'
            await this.$axios.delete(`/api/subscribers/${subscriberId}`);

            // Upon successful deletion, update the 'subscribers' array in the component's data
            // Remove the deleted subscriber from the local subscribers array
            this.subscribers = this.subscribers.filter(subscriber => subscriber.id !== subscriberId);
        } catch (error) {
            console.error('Error deleting subscriber:', error);
            // Handle error: show a message to the user or perform other actions
        }
    }
}

