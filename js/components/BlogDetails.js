
export default {
    template: `
    <section class="flex justify-center my-8 py-6">
    <div class="max-w-3xl w-full">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div v-if="blog">
          <img :src="blog.image" alt="Blog Image" class="rounded-lg mb-4">
          <div class="flex justify-between text-gray-500">
          <p>Status: {{ blog.status }}</p>
          <p>Publish Date: {{ blog.publishDate }}</p>
        </div>
          <h2 class="text-3xl font-bold mt-6 mb-4 text-black">{{ blog.title }}</h2>
          <div class="text-gray-600 mb-6 leading-relaxed">
            <p class="whitespace-pre-wrap">{{ blog.content }}</p>
          </div>
        </div>
        <div v-else class="flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </section>
  
  
    `,

    data() {
        return {
            // blog: null // Initialize as null for the fetched blog details
            blog: {
                id: 1,
                image: 'https://via.placeholder.com/900x600', // Placeholder image URL
                title: 'Title 1',
                content: 'ok',
                status: 'draft',
                publishDate: '2023-09-01'
            }, // Initialize as null for the fetched blog details
        };
    },
    created() {
        // Fetch blog details when the component is created
        this.fetchBlogDetails();
    },
    methods: {
        async fetchBlogDetails() {
            try {
                const blogId = this.$route.params.id; // Get the blog ID from the route parameters

                // Make an Axios GET request to fetch detailed blog data using the blog ID
                const response = await this.$axios.get(`/api/blogs/${blogId}`);

                // Update the 'blog' object with the fetched detailed blog data
                this.blog = response.data;
            } catch (error) {
                console.error('Error fetching blog details:', error);
                // Handle error: show a message to the user or perform other actions
            }
        }
    }
}
