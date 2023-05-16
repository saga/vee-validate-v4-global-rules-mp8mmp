<template>
  <Form>
    <label for="input">Field</label>
    <Field name="input" rules="digits:3" />

    <ErrorMessage name="input" />
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
