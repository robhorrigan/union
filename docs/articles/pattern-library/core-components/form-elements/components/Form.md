---
$imports:
  '{ Form, Field, FieldGroup }': '@xo-union/tk-component-fields'
  '{ Button }': '@xo-union/tk-component-buttons'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'

  FormMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Form'
---

Go back to [Form Elements](/pattern-library/core-components/form-elements)

# Form

<p>{FormMeta.description}</p>

```javascript
import { Form } from '@xo-union/tk-component-fields';
```

> This demo logs the first parameter of the `onSubmit` callback to the console.
<Demo>
  <Form onSubmit={(data, evt) => {evt.preventDefault(); console.log(data)}}>
    <FieldGroup>
      <Field name="email" />

      <Field name="domain" />
    </FieldGroup>

    <FieldGroup>
      <Field name="password" />
    </FieldGroup>

    <Button isCTA block>Submit</Button>
  </Form>
</Demo>

## Properties

<PropTypesTable metadata={FormMeta.props} exclude={["default"]} />
