<template>
  <v-app>
    <v-container>
      <h1 class="text-center">Dompetku - Expense & Income Money Management</h1>

      <!-- Form Tambah Transaksi -->
      <v-form @submit.prevent="submitTransaction" class="transaction-form">
        <h3>Tambah Transaksi</h3>
        <v-text-field
          label="Keterangan"
          v-model="description"
          outlined
          required
        ></v-text-field>
        <v-text-field
          label="Jumlah Uang"
          v-model="amount"
          type="number"
          outlined
          required
        ></v-text-field>
        <v-select
          label="Kategori"
          v-model="category"
          :items="categories"
          outlined
          required
        ></v-select>
        <v-btn color="primary" @click="submitTransaction">Tambah</v-btn>
      </v-form>

      <!-- Ringkasan Transaksi -->
      <v-card style="background-color: beige;" class="mt-5 summary" outlined>
        <v-card-title>Ringkasan</v-card-title>
        <v-card-text>
          <v-row>
            <v-col> Total Transaksi: {{ transactionStore.transactionCount }}</v-col>
            <v-col> Total Pemasukan: Rp {{ transactionStore.totalIncome }}</v-col>
            <v-col> Total Pengeluaran: Rp {{ -transactionStore.totalExpense }}</v-col>
            <v-col> Saldo: Rp {{ transactionStore.balance }}</v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Daftar Transaksi -->
      <Dompet
        :transactions="transactionStore.transactions"
        @remove="transactionStore.removeTransaction"
        @clearAll="transactionStore.clearAllTransactions"
      />
    </v-container>
  </v-app>
</template>

<script>
import { useTransactionStore } from "./stores/transactionStore";
import { ref } from "vue";
import Dompet from "./components/Dompet.vue";

export default {
  components: { Dompet },
  setup() {
    const transactionStore = useTransactionStore();
    const description = ref("");
    const amount = ref("");
    const category = ref("");
    const categories = ["Food", "Transport", "Entertainment", "Utilities", "Other"];

    const submitTransaction = () => {
      if (description.value && amount.value && category.value) {
        transactionStore.addTransaction({
          description: description.value,
          amount: parseFloat(amount.value),
          category: category.value,
        });
        description.value = "";
        amount.value = "";
        category.value = "";
      }
    };

    return {
      description,
      amount,
      category,
      categories,
      transactionStore,
      submitTransaction,
    };
  },
};
</script>

<style scoped>
.transaction-form {
  margin-top: 20px;
}
.summary {
  margin-top: 20px;
}
</style>
