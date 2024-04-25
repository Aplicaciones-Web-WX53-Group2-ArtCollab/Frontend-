<script >


export default {
  name:'genres-navbar',

}
</script>

<template>
  <pv-toolbar class="toolbar" aria-label="Toolbar content">
    <template #center>
      <div class="toolbar-links">
        <RouterLink class="link-button" to="/romance"> Romance </RouterLink>
        <RouterLink class="link-button" to="/fantasy"> Fantasy </RouterLink>
        <RouterLink class="link-button" to="/comedy"> Comedy </RouterLink>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  margin-bottom:50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
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
