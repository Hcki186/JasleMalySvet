<template>
    <div class="AboutUs">
        <div v-if="datas.length" >
            <div class="OpenHours">
                <div class="flex">
                    <div v-for="data in datas" :key="data.day">
                        <p>{{ data.openHours.day }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>

        </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      const datas = ref<string[]>([]);
  
      onMounted(() => {
        fetch('http://localhost:3000/Contact')
          .then((res) => res.json())
          .then((data) => (datas.value = data))
          .catch((err) => console.log(err.message));
      });
  
      return {
        datas,
      };
    },
  });
</script>