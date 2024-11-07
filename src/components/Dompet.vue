<template>
  <div class="transaction-list">
    <h3>Daftar Transaksi</h3>
    <ul>
      <li v-for="(transaction, index) in transactions" :key="index">
        <span>{{ transaction.description }} - Rp {{ transaction.amount }}</span>
        <button @click="removeTransaction(index)">Hapus</button>
      </li>
    </ul>
    <button @click="clearAll">Hapus Semua Data</button>
  </div>
</template>

<script>
export default {
  props: ["transactions"],
  methods: {
    removeTransaction(index) {
      this.$emit("remove", index);
    },
    clearAll() {
      this.$emit("clearAll");
    },
  },
};
</script>

<style scoped>
.transaction-list {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  margin-left: 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #ff4c4c;
}
</style>
