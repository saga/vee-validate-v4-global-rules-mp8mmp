<template>
  <Form>
    <label for="password">Password</label>
    <Field name="password" type="password" />

    <label for="confirmation">Confirm Password</label>
    <Field name="confirmation" type="password" rules="confirmed:@password" />
    <ErrorMessage name="confirmation" />
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
