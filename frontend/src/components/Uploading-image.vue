<template>
  <input class="mt-4 mb-3 mr-3 col-12 col-md-6 justify-content-center" type="file" v-on:change="selectedFile" ref="file">
</template>

<script>
export default {
  name: 'Uplaoding',
  data() {
    return {
      file: ''
    }
    
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    }
  }
}
</script>