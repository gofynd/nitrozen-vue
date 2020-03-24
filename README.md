# nitrozen-vue

### Nitrozen Badge

```
name: 'nitrozen-badge',
props:
    state:
        1. info
        2. success
        3. warn
        4. disable
        5. none,
    fill: Boolean
```

### Nitrozen Button

```
name: 'nitrozen-button',
directives:
    1. strokeBtn
    2. flatBtn
props:
    href: String
    type: String
    disabled: Boolean
    rounded: Boolean
    theme: 'primary' or 'secondary'
    size: 'small' or 'medium' or 'large'
    focused: Boolean
    showProgress: Boolean

```

### Nitrozen Chips

```
name: 'nitrozen-chips',
props:
    disable: Boolean
    theme: 'primary' or 'secondary'
    inProgress: Boolean
    error: Boolean
    multiSelect: Boolean
    state:
        1. error
        2. success
        3. progress
        4. selected
```

### Nitrozen Dialog

```
name: 'nitrozen-dialog',
props:
    id: String
    title: String
methods:
    open(config?: DialogConfig): NitrozenDialog
    close()
    isOpen(): Boolean

DialogConfig:{
      data: null,
      dismissible: true,
      isModalVisible: false,
      negativeButtonLabel: false,
      neutralButtonLabel: "Ok",
      positiveButtonLabel: false
}
```

### Nitrozen Dropdown

```
name: 'nitrozen-dropdown',
props:
    items: Array
    disabled: Boolean
    label: String
    required: Boolean
    value: v-model
```

### Nitrozen Input

```
name: 'nitrozen-input',
props:
    type:
        1. text
        2. textarea
    label: String
    placeholder: String
    disabled: Boolean
    value: v-model
    search: Boolean
    showSearchIcon: Boolean
    showTooltip: Boolean
    tooltipText: String
    maxlength: Number
```

### Nitrozen Radio

```
name: 'nitrozen-radio'
props:
    disabled: Boolean
    radioValue: String or Number
    name: String
    value: v-model
```

### Nitrozen Stepper

```
name: 'nitrozen-stepper'
props:
    activeIndex: Number
    maxActiveIndex: Number
    elements: Array
```

### Nitrozen Toggle Button

```
name: 'nitrozen-toggle-btn'
props:
    v-model: Boolean
```

### Nitrozen Tooltip

```
name: 'nitrozen-tooltip`
props:
    position:
        1. bottom
        2. top
        3. right
        4. left
    tooltipText: String
```
