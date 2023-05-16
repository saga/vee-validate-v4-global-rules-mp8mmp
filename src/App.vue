<template>
  <div class="app">
    <h1>vee-validate Playground</h1>

    <div class="RuleSelector">
      <label for="rule">Select Rule</label>
      <select name="rule" id="rule" v-model="rule">
        <option v-for="rule in rules" :key="rule">{{ rule }}</option>
      </select>

      <label for="locale">Select Locale</label>
      <select name="locale" id="locale" v-model="locale">
        <option v-for="locale in localeOptions" :key="locale">
          {{ locale }}
        </option>
      </select>
    </div>

    <div :key="locale">
      <RuleDemo :rule="rule" :key="rule" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RuleDemo from './components/RuleDemo.vue';
import { ref, watch } from 'vue';
import * as Rules from '@vee-validate/rules';
import { setLocale } from '@vee-validate/i18n';
import { locales } from './constants';

const rules = Object.keys(Rules).sort();
const rule = ref(rules[0]);
const localeOptions = [...locales];
const locale = ref('en');

watch(locale, (value) => {
  setLocale(value);
});
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.RuleSelector {
  margin-bottom: 60px;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input,
select {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

select + label {
  margin-top: 20px;
}

input:focus {
  border-color: var(--primary-color);
}

input + span {
  color: var(--error-color);
  font-size: 14px;
}
</style>
