<template>
 <div id="app">
    <h1>Dompetku - Expense & Income Money Management</h1>

    <!-- Form Tambah Transaksi -->
    <div class="transaction-form">
      <h3>Tambah Transaksi</h3>
      <input
        type="text"
        placeholder="Keterangan"
        v-model="description"
        required
      />
      <input
        type="number"
        placeholder="Jumlah Uang"
        v-model="amount"
        required
      />
      <button @click="submitTransaction">Tambah</button>
    </div>

    <!-- Daftar Transaksi -->
    <Dompet
      :transactions="transactions"
      @remove="removeTransaction"
      @clearAll="clearAllTransactions"
    />
  </div>
</template>

<script>
import Dompet from '@/components/Dompet.vue';

export default {
  components: { Dompet },
  data() {
    return {
      transactions: [],
      description: "",
      amount: "",
    };
  },
  methods: {
    submitTransaction() {
      if (this.description && this.amount) {
        this.transactions.push({
          description: this.description,
          amount: this.amount,
        });
        this.description = "";
        this.amount = "";
      }
    },
    removeTransaction(index) {
      this.transactions.splice(index, 1);
    },
    clearAllTransactions() {
      this.transactions = [];
    },
  },
};
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
.transaction-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.transaction-form input {
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}
.transaction-form button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.transaction-form button:hover {
  background-color: #45a049;
}
</style>
