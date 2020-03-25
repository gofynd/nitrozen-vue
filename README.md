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

![Nitrozen Badges](./demo_images/badges.png)

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

![Nitrozen Primary Button](./demo_images/primary-button.png)
![Nitrozen Secondary Button](./demo_images/secondary-button.png)
![Nitrozen Button](./demo_images/button.png)


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

![Nitrozen Chips](./demo_images/chips.png)
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
      showcloseButton: false,
}

![Nitrozen Dialog 1](./demo_images/dialog-1.png)
![Nitrozen Dialog 2](./demo_images/dialog-2.png)
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

![Nitrozen Dropdown](./demo_images/dropdown.png)
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

![Nitrozen Input 1](./demo_images/input-1.png)
![Nitrozen Input 2](./demo_images/input-2.png)
![Nitrozen Input 3](./demo_images/input-3.png)
```

### Nitrozen Menu

```
name: "nitrozen-menu",
directives: clickOutside
methods: 
        closeMenu()

![Nitrozen Menu](./demo_images/menu.png)
```

### Nitrozen Menu Item

```
name: "nitrozen-menu-item"
```

### Nitrozen Radio

```
name: 'nitrozen-radio'
props:
    disabled: Boolean
    radioValue: String or Number
    name: String
    value: v-model

![Nitrozen Radio](./demo_images/radio.png)
```

### Nitrozen Stepper

```
name: 'nitrozen-stepper'
props:
    activeIndex: Number
    maxActiveIndex: Number
    elements: Array

![Nitrozen Stepper](./demo_images/tepper.png)

```

### Nitrozen Toggle Button

```
name: 'nitrozen-toggle-btn'
props:
    v-model: Boolean

![Nitrozen Toggle](./demo_images/toggle.png)

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
