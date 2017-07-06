---
$imports:
  '{ Form, HiddenField, Field, FieldGroup }': '@xo-union/tk-component-fields'
  '{ Button }': '@xo-union/tk-component-buttons'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'
  Description: '@components/Description'

  HiddenFieldMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/HiddenField'
---

Go back to [Form Elements](/pattern-library/core-components/form-elements)

# HiddenField

<Description metadata={HiddenFieldMeta} />

```javascript
import { HiddenField } from '@xo-union/tk-component-fields';
```

> This demo logs the first parameter of the `onSubmit` callback to the console. Check the console to see the submitted hidden field.
<Demo>
  <Form onSubmit={(data, evt) => {evt.preventDefault(); console.log(data)}}>
    <HiddenField name="secret" value="secret-value" />
    <FieldGroup>
      <Field name="email" />
    </FieldGroup>

    <Button isCTA block>Submit</Button>
  </Form>
</Demo>
