---
$imports:
  '{ Form, Textarea, FieldGroup }': '@xo-union/tk-component-fields'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'

  TextareaMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Textarea'
---

Go back to [Form Elements](/pattern-library/core-components/form-elements)

# Textarea

<p>{TextareaMeta.description}</p>

```javascript
import { Textarea } from '@xo-union/tk-component-fields';
```

<Demo>
  <Form>
    <FieldGroup>
      <Textarea name="description" />
    </FieldGroup>
    <FieldGroup>
      <Textarea name="description-1" placeholder="(Optional) description" label={false} />
    </FieldGroup>
  </Form>
</Demo>

## Properties

<PropTypesTable metadata={TextareaMeta.props} exclude={["default"]} />
