import { createApp } from 'vue';
import App from './App.vue';
import { defineRule, configure } from 'vee-validate';
import rules from '@vee-validate/rules';
import './locales';

const app = createApp(App);

// Make the validat aggressive to show case validators
configure({
  validateOnInput: true,
});

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

app.mount('#app');
