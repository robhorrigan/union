---
$imports:
  '{ Form, Field, FieldGroup }': '@xo-union/tk-component-fields'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'

  FieldMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Field'
---

Go back to [Form Elements](/pattern-library/core-components/form-elements)

# Field

<p>{FieldMeta.description}</p>

```javascript
import { Field } from '@xo-union/tk-component-fields';
```

<Demo>
  <Form>
    <FieldGroup>
      <Field name="email-1" />
      <Field name="email-2" disabled />
    </FieldGroup>
    <FieldGroup>
      <Field name="email-2" state="invalid" validationMessage="Something went wrong" />
      <Field name="address" state="valid" value="232 Boerum St." />
    </FieldGroup>
  </Form>
</Demo>

## Properties
<PropTypesTable metadata={FieldMeta.props} />

