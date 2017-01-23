---
imports:
  '{ Field, Group, Textarea, TextareaWithoutLabel, Dropdown, DropdownItem }': '@union/fields'
  bsGrid: '@union/bootstrap/lib/grid'
  bsUtils: '@union/bootstrap/lib/utilities'

---
# Form Elements

## Install

```bash
npm install --save @union/fields
```

## Demo

```render jsx
<div className={bsUtils.mb3}>
  <div className={bsGrid.row}>
    <div className={bsGrid.col6}>
      <Field name="email" />
    </div>

    <div className={bsGrid.col6}>
      <Field name="domain" />
    </div>
  </div>
</div>

<div className={bsUtils.mb3}>
  <div className={bsGrid.row}>
    <div className={bsGrid.col12}>
      <Field name="password" />
    </div>
  </div>
</div>

<div className={bsUtils.mb3}>
  <div className={bsGrid.row}>
    <div className={bsGrid.col12}>
      <Dropdown name="season">
        <DropdownItem label="Winter" />
        <DropdownItem label="Spring" />
        <DropdownItem label="Summer" />
        <DropdownItem label="Fall" />
      </Dropdown>
    </div>
  </div>
</div>

<div className={bsUtils.mb3}>
  <div className={bsGrid.row}>
    <div className={bsGrid.col12}>
      <Textarea name="description-1" />
    </div>
  </div>
</div>
```

## Field
> Simple form field

```render jsx
<Field name="email" />
```

## Textarea

```render jsx
<Textarea name="description" />
```

## Dropdowns

```render jsx
<Dropdown name="season">
  <DropdownItem label="Winter" />
  <DropdownItem label="Spring" />
  <DropdownItem label="Summer" />
  <DropdownItem label="Fall" />
</Dropdown>
```
