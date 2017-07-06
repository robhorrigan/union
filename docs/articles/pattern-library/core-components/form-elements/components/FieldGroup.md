---
$imports:
  '{ Form, Field, FieldGroup }': '@xo-union/tk-component-fields'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'

  FieldGroupMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/FieldGroup'
---

Go back to [Form Elements](/pattern-library/core-components/form-elements)

# FieldGroup

<p>{FieldGroupMeta.description}</p>

```javascript
import { FieldGroup } from '@xo-union/tk-component-fields';
```

<Demo>
  <Form>
    <FieldGroup>
      <Field name="email" />

      <Field name="domain" />
    </FieldGroup>

    <FieldGroup>
      <Field name="password" />
    </FieldGroup>
  </Form>
</Demo>

## Properties

<PropTypesTable metadata={FieldGroupMeta.props} exclude={["default"]} />
