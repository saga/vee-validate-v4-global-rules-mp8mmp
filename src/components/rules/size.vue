<template>
  <Form>
    <label for="input">Field</label>
    <Field name="input" type="file" rules="size:250" />

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
