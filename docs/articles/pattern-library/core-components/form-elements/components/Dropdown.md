---
$imports:
  '{ Form, Dropdown, DropdownItem, FieldGroup }': '@xo-union/tk-component-fields'

  Demo: '@components/Demo'
  Snippet: '@components/Snippet'
  PropTypesTable: '@components/PropTypesTable'

  DropdownMeta:             '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Dropdown'
  DropdownItemMeta:         '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/DropdownItem'

---

Go back to [Form Elements](/pattern-library/core-components/form-elements)

# Dropdown

<p>{DropdownMeta.description}</p>

```javascript
import { Dropdown, DropdownItem } from '@xo-union/tk-component-fields';
```

<Demo>
  <Form>
    <FieldGroup>
      <Dropdown name="Season">
        <DropdownItem label="Winter" />
        <DropdownItem label="Spring" />
        <DropdownItem label="Summer" />
        <DropdownItem label="Fall"/>
      </Dropdown>

      <Dropdown name="Season-2" value="Winter">
        <DropdownItem label="Winter" />
        <DropdownItem label="Spring" />
        <DropdownItem label="Summer" />
        <DropdownItem label="Fall"/>
      </Dropdown>
    </FieldGroup>
  </Form>
</Demo>

## Dropdown properties

<PropTypesTable metadata={DropdownMeta.props} exclude={["default"]}/>

## DropdownItem properties

<PropTypesTable metadata={DropdownItemMeta.props} exclude={["default"]}/>
