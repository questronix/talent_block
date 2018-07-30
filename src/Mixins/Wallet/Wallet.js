import axios from 'axios';

export default {
  data() {
    return {
      coins: 0,
    };
  },
  methods: {
    getWallet() {
      axios.get('/wallet')
        .then((response) => {
          return this.coins = response.data.wallet;
        }).catch((err) => {
          console.log('Error while getting wallet: ', err);
        });
    }
  },
  mounted() {
    if (window.isLogged) {
      this.getWallet();
    }
  }
}