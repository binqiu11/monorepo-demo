<template>
  <div class="shell-layout">
    <header class="shell-header">
      <strong>Monorepo Shell</strong>
      <nav class="shell-nav">
        <RouterLink to="/nomad">
          Nomad
        </RouterLink>
        <RouterLink to="/nomad/report">
          Nomad Report
        </RouterLink>
        <RouterLink to="/rmax/test-1">
          RMax 1
        </RouterLink>
        <RouterLink to="/rmax/test-2">
          RMax 2
        </RouterLink>
        <RouterLink to="/rmax/test-3">
          RMax 3
        </RouterLink>
        <RouterLink to="/rmax/test-4">
          RMax 4
        </RouterLink>
        <RouterLink to="/login">
          Login
        </RouterLink>
      </nav>
    </header>
    <main class="shell-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="js">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.shell-layout {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: #f5f7fa;
}

.shell-header {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 16px 20px;
  background: #1f2937;
  color: #fff;
}

.shell-nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.shell-nav a {
  color: #bfdbfe;
  text-decoration: none;
}

.shell-nav a.router-link-active {
  color: #fff;
  text-decoration: underline;
}

.shell-main {
  padding: 20px;
}
</style>
