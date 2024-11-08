<script setup>
import { mdiDelete } from '@mdi/js'
</script>

<template>
  <v-card style="background-color: beige;" class="transaction-list mt-5" outlined>
    <v-card-title>Daftar Transaksi</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="(transaction, index) in transactions"
          :key="index"
          class="d-flex justify-space-between"
        >
          <div>
            {{ transaction.description }} - {{ transaction.category }} - Rp
            {{ transaction.amount }}
          </div>
          <v-btn :icon="mdiDelete" @click="removeTransaction(index)" color="red">
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="clearAll">Hapus Semua Data</v-btn>
    </v-card-actions>
  </v-card>
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
</style>

