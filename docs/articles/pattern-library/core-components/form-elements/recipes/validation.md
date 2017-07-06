---
$imports:
  '{ Form, Field, FieldGroup }': '@xo-union/tk-component-fields'
  '{ Button }': '@xo-union/tk-component-buttons'

  Demo: '@components/Demo'
---

# Form validation

Union forms support the HTML5 constraints api. Simply use the constraint attributes on the `Field` component and you have validation.

<Demo>
  <Form method="POST" action="/my-api" onSubmit={(_, evt) => evt.preventDefault()}>
    <FieldGroup>
      <Field name="required" validationMessage="Failed required validation" required />
      <Field name="email" type="email" validationMessage="Failed email validation" />
    </FieldGroup>
    <FieldGroup>
      <Field name="url" type="url" validationMessage="Failed url validation" />
      <Field name="phone" type="tel" pattern="\(\d{3}\)\s*\d{3}\s*-\s*\d{4}"validationMessage="Failed phone validation. Expected (000) 000 - 0000" />
    </FieldGroup>
    <FieldGroup>
      <Field name="length" type="password" minLength="3" maxLength="6" validationMessage="Failed length validation. Expected 3 - 6 characters" />
    </FieldGroup>

    <Button isCTA block>Submit</Button>
  </Form>
</Demo>
