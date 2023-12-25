
export default {
    template: `
    <section class="flex justify-center my-8 py-6">
    <div class="modal" v-show="showModal">
    <!-- Modal content for advanced search -->
    <div class="modal-content">
      <!-- Add form fields for advanced search (e.g., username, status) -->
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="advancedSearchParams.username">

      <label for="status">Status:</label>
      <input type="text" id="status" v-model="advancedSearchParams.status">

      <!-- Add additional fields for other search criteria -->

      <div>
        <button @click="performAdvancedSearch">Search</button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
  </section>
    `,

    data() {
        return {
            showModal: false,
            advancedSearchParams: {
                username: '',
                status: '',
                // Add other fields for advanced search criteria
            }
        };
    },
    methods: {
        performAdvancedSearch() {
            // Perform search based on advanced search parameters
            // Call a method to trigger advanced search using the values in 'advancedSearchParams'
            // You can emit an event or call a method in the parent component to handle the advanced search
            // For example, emit an event like this:
            // this.$emit('perform-advanced-search', this.advancedSearchParams);

            // For this example, let's just log the search parameters
            console.log('Performing advanced search:', this.advancedSearchParams);
        },
        closeModal() {
            // Close the modal
            this.showModal = false;
        }
    }
}
