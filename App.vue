<template>
  <v-app>
    <v-container class="pa-md-12">
      <section>
        <h3 class="d-flex justify-space-between align-center text-subtitle-1 font-weight-bold">
          Promotions

          <v-btn
            class="text-none"
            color="primary"
            prepend-icon="mdi-plus"
            rounded="lg"
            slim
            text="Create promotion"
            variant="flat"
          />
        </h3>

        <div class="text-body-2 text-medium-emphasis mb-4 w-100 w-md-75">
          A list of all the promotions that are currently running.
        </div>

        <v-data-table
          class="bg-transparent"
          :headers="headers"
          hide-default-footer
          :items="items"
        >
          <template #item="{ item }">
            <tr>
    <td>{{ item.title }}</td>
    <td>{{ item.description }}</td>
    <td>{{ item.status }}</td>
    <td>{{ item.start }}</td>
    <td>{{ item.end }}</td>
    <td>
      <v-btn
        class="text-none"
        color="primary"
        min-width="0"
        slim
        text="Edit"
        variant="text"
      />
    </td>
  </tr>
          </template>
        </v-data-table>
      </section>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Title', key: 'title' },
  { title: 'Description', key: 'description' },
  { title: 'Status', key: 'status' },
  { title: 'Start', key: 'start' },
  { title: 'End', key: 'end' },
  { title: '', key: 'actions' }
]

const items = [
  {
    title: '20% off all products',
    description: 'Get 20% off all products in the store.',
    status: 'Active',
    start: '2021-08-01',
    end: '2021-08-31'
  },
  {
    title: 'Free shipping on orders over $50',
    description: 'Get free shipping on all orders over $50.',
    status: 'Active',
    start: '2021-08-01',
    end: '2021-08-31'
  },
  {
    title: 'Buy one get one free',
    description: 'Buy one product and get another one for free.',
    status: 'Inactive',
    start: '2021-08-01',
    end: '2021-08-31'
  }
]
</script>
