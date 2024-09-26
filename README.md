# Nitrozen Design for Vue (Enhanced)

[![npm version](https://badge.fury.io/js/%40gofynd%2Fnitrozen-vue.svg)](https://badge.fury.io/js/%40gofynd%2Fnitrozen-vue)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fc6557a3-7a3f-45c3-be9d-53bdd12f6dcf/deploy-status)](https://nitrozen.netlify.app/)


### Nitrozen Badge
​
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

Code Snippet

```javascript
<template>
  <div>
    <nitrozen-badge state="success"> Done 1 </nitrozen-badge>
    <nitrozen-badge state="success" :fill = "true"> Done 2 </nitrozen-badge>
 </div>
</template>

<script>
    import { NitrozenBadge } from '@gofynd/nitrozen-vue';
    export default {
        components: {
            'nitrozen-badge': NitrozenBadge
        }
    }
</script>

```
​
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/badges.png" alt="Nitrozen Badges"><br><br><br><br><hr>
​
​
### Nitrozen Button
​
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

actions:
    click
​
```

Code Snippet

```javascript
<template>
 <div>
    <nitrozen-button theme="primary" :rounded="true" v-flatBtn> Save 1</nitrozen-button>
    <nitrozen-button theme="primary" v-flatBtn> Save 2</nitrozen-button>
    <nitrozen-button theme="primary" v-strokeBtn> Save 3</nitrozen-button>
 </div>
</template>

<script>
    import { NitrozenButton, flatBtn, strokeBtn } from '@gofynd/nitrozen-vue';
    export default {
        components: {
            'nitrozen-button': NitrozenButton
        },
        directives: {
            flatBtn,
            strokeBtn
        }
    }
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/primary-button.png" alt="Nitrozen Primary Button"><br>
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/secondary-button.png" alt="Nitrozen Secondary Button"><br>
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/button.png" alt="Nitrozen Button"><br><br><br><br><hr>
​


### Nitrozen Checkbox

```
name: 'nitrozen-checkbox'
props: 
    disabled: Boolean
        true
        false
    value: v-model
methods: 
    input
    change
```

Code Snippet
```javascript
<template>
    <div>
        <nitrozen-checkbox @change="toggle" v-model="checkBoxValue"
            >Checkbox 1</nitrozen-checkbox >
    </div>
</template>

<script>
import { NitrozenCheckBox } from "@gofynd/nitrozen-vue";

export default {
    components: {
        "nitrozen-checkbox": NitrozenCheckBox,
    },
    data: function () {
        return {
            checkBoxValue: true,
        };
    },
    methods: {
        toggle(e){
            console.log(e)
        }
    }
};
</script>
```
### Nitrozen Chips
​
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
​
```

Code Snippet

```javascript
<template>
 <div>
    <nitrozen-chips>Chip 1</nitrozen-chips>
    <nitrozen-chips theme='secondary' :error = 'true'>Chip 2</nitrozen-chips>
    <nitrozen-chips theme='secondary' state = 'success'>Chip 3</nitrozen-chips>
 </div>
</template>

<script>
    import { NitrozenChips } from "@gofynd/nitrozen-vue";
    export default {
        components: {
            'nitrozen-chips': NitrozenChips
        }
    }
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/chips.png" alt="Nitrozen Chips"><br><br><br><br><hr>
​
### Nitrozen Dialog
​
```
name: 'nitrozen-dialog',
props:
    id: String
    title: String
methods:
    open(config?: DialogConfig): NitrozenDialog
    close()
    isOpen(): Boolean
​
DialogConfig:{
      data: null,
      dismissible: true,
      isModalVisible: false,
      negativeButtonLabel: false,
      neutralButtonLabel: "Ok",
      positiveButtonLabel: false
      showCloseButton: false,
}
​
```
Code Snippet

```javascript
<template>
    <div>
        <nitrozen-button @click="openDialog" v-flatBtn :rounded="true">Open Success Dialog</nitrozen-button>
        <nitrozen-dialog ref="dialog" title="Success">
            <template slot="body">
                <div>
                    Image Uploaded Successfully
                </div>
            </template>
        </nitrozen-dialog>
    </div>
</template>

<script>
import { NitrozenDialog, NitrozenButton, flatBtn } from "@gofynd/nitrozen-vue";
export default {
    components: {
        "nitrozen-dialog": NitrozenDialog,
        "nitrozen-button": NitrozenButton,
    },
    directives: {
        flatBtn,
    },
    methods: {
        openDialog() {
            this.$refs["dialog"].open({
                width: "600px",
                showCloseButton: true,
            });
        },
        closeDialog() {
            this.$refs["dialog"].close();
        }
    },
};
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/dialog-1.png" alt="Nitrozen Dialog 1"><br>
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/dialog-2.png" alt="Nitrozen Dialog 2"><br><br><br><br><hr>
​
### Nitrozen Dropdown
​
```
name: 'nitrozen-dropdown',
props:
    items: Array
    disabled: Boolean
    label: String
    required: Boolean
    value: v-model
​
```
Code Snippet

```javascript

<template>
    <div style>
        <nitrozen-dropdown label="State" :items="states" v-model="selectedState"
        @change="selectionChanged"></nitrozen-dropdown>
    </div>
</template>

<script>
import {  NitrozenDropdown } from '@gofynd/nitrozen-vue'
export default {
    components: {
        'nitrozen-dropdown': NitrozenDropdown
    },
    data: function() {
        return{
            states: [{
                text: "Maharashtra",
                value: "Marathi"
            },{
                text: "Andhra Pradesh",
                value: "Telugu"
            }],
            selectedState: ""
        }
    },
    methods: {
        selectionChanged(selectedState) {
            console.log(selectedState);
        }
    }
};
</script>

```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/dropdown.png" alt="Nitrozen Dropdown"><br><br><br><br><hr>
​


### Nitrozen Error
```
name: 'nitrozen-error'

```

Code Snippet
```javascript
<template>
    <div>
        <nitrozen-error>Please enter password with atleast 8 character</nitrozen-error>
    </div>
</template>

<script>
import { NitrozenError } from '@gofynd/nitrozen-vue'
export default {
    components: {
        'nitrozen-error': NitrozenError
    }
};
</script>

```

### Nitrozen Input
​
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
​
```

Code Snippet

```javascript
<template>
    <div>
        <nitrozen-input
            type="text"
            label="Name"
            placeholder="Enter Name"
            v-model="name"
        ></nitrozen-input>
        <nitrozen-input
            type="text"
            label="Search"
            v-model="search"
            :search = "true"
            :showSearchIcon = "true"
            placeholder="Search"
        ></nitrozen-input>
        <nitrozen-input
            type="textarea"
            label="Description"
            placeholder="Enter Description"
            v-model="description"
        >
        </nitrozen-input>
    </div>
</template>

<script>
import { NitrozenInput } from "@gofynd/nitrozen-vue";
export default {
    components: {
        "nitrozen-input": NitrozenInput,
    },
    data: function(){
        return {
            name: "",
            description: "",
            search: ""
        }
    }
};
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/input-1.png" alt="Nitrozen Input 1"><br>
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/input-2.png" alt="Nitrozen Input 2"><br>
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/input-3.png" alt="Nitrozen Input 3"><br><br><br><br><hr>
​
### Nitrozen Menu
​
```
name: "nitrozen-menu",
directives: clickOutside
props: 
    mode: String
        horizontal
        vertical
    inverted: Boolean
    position: String
        top
        bottom
methods: 
        closeMenu()
​
```

Code Snippet

```javascript
<template>
    <div>
        <nitrozen-menu>
            <nitrozen-menu-item> Item 1 </nitrozen-menu-item>
            <nitrozen-menu-item> Item 2 </nitrozen-menu-item>
            <nitrozen-menu-item> Item 3 </nitrozen-menu-item>
        </nitrozen-menu>
    </div>
</template>

<script>
import { NitrozenMenu, NitrozenMenuItem } from "@gofynd/nitrozen-vue";

export default {
    components: {
        "nitrozen-menu": NitrozenMenu,
        "nitrozen-menu-item": NitrozenMenuItem,
    },
};
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/context-menu.png" alt="Nitrozen Menu"><br><br><br><br><hr>
​

### Nitrozen Pagination

```
name: 'nitrozen-pagination'
props:
    name: String
    pageSizeOptions: String or Number
    value: v-model (PaginationConfig)

    PaginationConfig : {
         limit: Number,
         total: Number,
         current: Number
      }
```

Code Snippet

```javascript
<template>
    <div>
        <nitrozen-pagination
            name="Department"
            v-model="pagination"
            @change="paginationChange"
            :pageSizeOptions="[5, 10, 20, 50]"
        ></nitrozen-pagination>
    </div>
</template>

<script>
import { NitrozenPagination } from "@gofynd/nitrozen-vue";

export default {
    components: {
        "nitrozen-pagination": NitrozenPagination,
    },
    data: function () {
        return {
            pagination: {
                total: 0,
                current: 1,
                limit: 10
            }
        };
    },
    methods: {
        paginationChange(filter) {
            const { current } = filter;
            this.pagination.current = current;
            this.pagination = Object.assign({}, this.pagination, filter);
        },
    },
};
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/pagination.png" alt="Nitrozen Pagination"><br><br><br><br><hr>

​​
### Nitrozen Radio
​
```
name: 'nitrozen-radio'
props:
    disabled: Boolean
    radioValue: String or Number
    name: String
    value: v-model
​
```

Code Snippet

```javascript
<template>
    <div>
        <nitrozen-radio
            name="radio"
            v-model="radioSelection"
            radioValue="One"
        >
            One
        </nitrozen-radio>
        <nitrozen-radio
            name="radio"
            v-model="radioSelection"
            radioValue="Two"
        >
            Two
        </nitrozen-radio>
          <nitrozen-radio
            name="radio"
            v-model="radioSelection"
            radioValue="Three"
        >
            Three
        </nitrozen-radio>
    </div>
</template>

<script>
import { NitrozenRadio } from "@gofynd/nitrozen-vue";

export default {
    components: {
        "nitrozen-radio": NitrozenRadio,
    },
    data: function () {
        return {
            radioSelection: "One",
        }
    }
};
</script>
```

<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/radio.png" alt="Nitrozen Radio"><br><br><br><br><hr>
​
### Nitrozen Stepper
​
```
name: 'nitrozen-stepper'
props:
    activeIndex: Number
    maxActiveIndex: Number
    elements: Array
​
```
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/stepper.png" alt="Nitrozen Stepper"><br><br><br><br><hr>
​
### Nitrozen Toggle Button
​
```
name: 'nitrozen-toggle-btn'
props:
    v-model: Boolean
​
```

Code Snippet

```javascript
<template>
    <div>
        <nitrozen-toggle-btn
            v-model="toogleStatus"
            @change="togChange"
        ></nitrozen-toggle-btn>
    </div>
</template>

<script>
import { NitrozenToggleBtn } from "@gofynd/nitrozen-vue";

export default {
    components: {
        'nitrozen-toggle-btn': NitrozenToggleBtn,
    },
    data: function () {
        return {
            toogleStatus: false
        };
    },
    methods: {
        togChange(event){
            console.log(event);
        }
    }
};
</script>
```
​
<img width=600px src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/demo_images/toggle.png" alt="Nitrozen Toggle"><br><br><br><br><hr>
​
### Nitrozen Tooltip
​
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

Code Snippet

```javascript
<template>
    <div>
        <nitrozen-tooltip
            tooltipText="Hi! This is tooltip text."
            position = "right"
        ></nitrozen-tooltip>
    </div>
</template>

<script>
import { NitrozenTooltip } from "@gofynd/nitrozen-vue";

export default {
    components: {
        "nitrozen-tooltip": NitrozenTooltip,
    }
};
</script>
```
