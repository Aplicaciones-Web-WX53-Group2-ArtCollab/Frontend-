<script >


export default {
  name:'genres-navbar',

}
</script>

<template>
  <pv-toolbar class="toolbar" aria-label="Toolbar content">
    <template #center>
      <div class="toolbar-links">
        <a href="/romance" class="link-button" aria-label="Romance">Romance</a>
        <a href="/fantasy" class="link-button" aria-label="Fantasy">Fantasia</a>
        <a href="/comedy" class="link-button" aria-label="Comedy">Comedia</a>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  color:gray;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}

.toolbar-links {
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.link-button {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-right: 10px;
}

.link-button:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .toolbar-links {
    flex-direction: column;
    align-items: center;
  }

  .link-button {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .link-button:last-child {
    margin-bottom: 0;
  }
}
</style>
