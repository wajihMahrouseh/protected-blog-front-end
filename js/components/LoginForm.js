
export default {
    template: `
    <section class="flex gap-8">
    <form @submit.prevent="login" class="flex flex-col">
      <div class="mb-4 flex flex-col">
        <label for="username" class="text-white mb-2">Username:</label>
        <input type="text" id="username" v-model="formData.username" required
               class="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-blue-500">
      </div>
      <div class="mb-4 flex flex-col">
        <label for="password" class="text-white mb-2">Password:</label>
        <input type="password" id="password" v-model="formData.password" required
               class="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-blue-500">
      </div>
      <div class="mb-4">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300
                                       mt-2">
          Login
        </button>
      </div>
      <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
    </form>
  </section>
  
    
    `,

    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            error: ''
        };
    },
    methods: {
        async login() {
            try {
                // Make an Axios POST request to your Laravel backend for authentication
                const response = await this.$axios.post('/api/login', this.formData);

                // Handle successful login response - for instance, store token in Vuex/local storage
                // Redirect the user to the Home Page or perform other actions
                // For now, you can log the response and handle it accordingly
                console.log('Login Success:', response.data);
            } catch (error) {
                // Handle login failure - display error message
                this.error = error.response.data.message; // Assuming the error message is sent from the backend
                console.error('Login Error:', error);
            }
        }
    }

    // created() {
    //     // axios
    //     fetch('url')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.dataArray = data;
    //         });
    // },
}
