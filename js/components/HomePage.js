
export default {
    template: `
    <section class="flex gap-8 my-8 py-6">
    <div class="blog-cards grid grid-cols-3 gap-6">
      <div v-for="blog in blogs" :key="blog.id" class="blog-card p-4 bg-white rounded-lg shadow-md">
        <img :src="blog.image" alt="Blog Image" class="rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold text-black">{{ blog.title }}</h3>
          <p class="mt-2 text-black">{{ blog.shortDetails }}</p>
        </div>
      </div>
    </div>
  </section>
  
    `,

    data() {
        return {
            // blogs: []
            blogs: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 1',
                    shortDetails: 'Short details for blog 1.',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 2',
                    shortDetails: 'Short details for blog 2.',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 3',
                    shortDetails: 'Short details for blog 3.',
                },
                {
                    id: 4,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 1',
                    shortDetails: 'Short details for blog 1.',
                },
                {
                    id: 5,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 2',
                    shortDetails: 'Short details for blog 2.',
                },
                {
                    id: 6,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 3',
                    shortDetails: 'Short details for blog 3.',
                },
                {
                    id: 7,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 1',
                    shortDetails: 'Short details for blog 1.',
                },
                {
                    id: 8,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 2',
                    shortDetails: 'Short details for blog 2.',
                },
                {
                    id: 9,
                    image: 'https://via.placeholder.com/300', // Placeholder image URL
                    title: 'Title 3',
                    shortDetails: 'Short details for blog 3.',
                },
            ] // Initialize an empty array to store fetched blog data
        };
    },
    created() {
        // Fetch data when the component is created
        this.fetchBlogs();
    },
    methods: {
        async fetchBlogs() {
            try {
                // Make an Axios GET request to fetch blog data from the backend API
                const response = await this.$axios.get('/api/blogs');

                // Update the 'blogs' array in the component's data with the fetched data
                this.blogs = response.data;
            } catch (error) {
                console.error('Error fetching blogs:', error);
                // Handle error: show a message to the user or perform other actions
            }
        }
    }
}
