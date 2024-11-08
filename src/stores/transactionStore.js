import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transactionStore', {
  state: () => ({
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
      this.saveToLocalStorage();
    },
    removeTransaction(index) {
      this.transactions.splice(index, 1);
      this.saveToLocalStorage();
    },
    clearAllTransactions() {
      if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
        this.transactions = [];
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    },
  },
  getters: {
    totalIncome: (state) =>
      state.transactions
        .filter((t) => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0),
    totalExpense: (state) =>
      state.transactions
        .filter((t) => t.amount < 0)
        .reduce((sum, t) => sum + t.amount, 0),
    balance: (state) => state.totalIncome + state.totalExpense,
    transactionCount: (state) => state.transactions.length,
  },
});
