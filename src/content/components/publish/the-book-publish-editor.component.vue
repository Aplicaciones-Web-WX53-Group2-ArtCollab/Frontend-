<script setup>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
</script>

<template>
  <div class="flex align-items-center justify-content-center">
    <div class="card mt-5 w-10">
      <pv-editor v-model="value" editorStyle="height: 320px">
        <template v-slot:toolbar>
          <span class="ql-formats">
            <pv-button v-tooltip.bottom="'Bold'" class="ql-bold"></pv-button>
            <pv-button v-tooltip.bottom="'Italic'" class="ql-italic"></pv-button>
            <pv-button v-tooltip.bottom="'Underline'" class="ql-underline"></pv-button>
            <pv-button v-tooltip.bottom="'Strike'" class="ql-strike"></pv-button>
            <pv-button v-tooltip.bottom="'Block Quote'" class="ql-blockquote"></pv-button>
            <span class="ql-formats">
              <select class="ql-header"></select>
              <select class="ql-font"></select>
              <select class="ql-color"></select>
              <select class="ql-background"></select>
            </span>
            <pv-button v-tooltip.bottom="'Clean'" class="ql-clean"></pv-button>
          </span>
        </template>
      </pv-editor>
    </div>
  </div>
</template>

<style scoped>
.custom-divider::before {
  border-top-width: 5px;
  border-top-color: #012840;
}
</style>