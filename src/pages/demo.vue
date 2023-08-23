<template>
  <div id="app">
    <div class="main-div">
<nitrozen-header avatar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEXh4eGjo6OgoKDk5OS+vr6tra3T09PFxcXe3t7Pz8/b29u7u7vX19eoqKi4uLixsbHKbNcEAAACuklEQVR4nO2ay9brIAiFVbxEE+P7v+0xSZt1+jcXq2A7YE/amV9ABEEhWCwWi8VisVjEAgAxDOvPd9YXXie5Kmkv+lPApKNSakPIf6Ke+kKAGOVj+aeUHHtaAvxfgA3Cd2OA8QBghRh7MZwRLAxdAECfEmQG3cEOlwR9GOwVwCJLTQDmDsEQmwH8pRtWV1CHZrwjkDIOlAAFRqA2A8wlCDMlwlDgB2JP3EbkJsK4BFfgh+wJR+eJX0A4T1AvCIQJsyggaEPiFxCus+SOQJgtf2A7/sC58AunI6QShESapr6fKYs8QVsvlIQlfQF7bwVigPvdQF463h7StCXTU+nqNpU6AFwy9CI4Z+hHIIRWR/0FpfsRCJjMXwilTO9Wj0//d1qUTP1aLDuDCC49juuYXPhCy22hyBiTtVMQ32o8slgsFutYsOs7i4tgvXM6yzlvQ88JVV4qWDfHdR60K6fL2dnQgSN/u9dmWf2oapLSaE+atvPnu3S4+gtHLh6IbJHXf6vWzjBMpkBfX9h0NBI7pZDJIjvEfwTwgPB46x/Uy0UQaDU1hKsb3A1FwtgT4D51wQuDROi+lfV8LyBaR5eDaSTIDKap8TPEZoLM0NR8arfBymCqAQpbzgUM1R0wi0SQGSpbwlB/HrwhVDZkAxbAolBlhLLOf5nq5gNom3FFqNuQeLuxej8imqE6KhFO5wdB/RmNFhNV8bAKcLaDsg0JGyUwGwd2CAzNI8NmBoShZSMDyti0iQFpcAuFM9ojtcTCC0OoO6OUQbzWDTV1tBpRB5bZGR9f6LCcsDPA4STmFCAnJvwLPkxzqSWUnIkmNFB2wV8u9oTPOCat7rosivo5Mgg/xzMKpeLc41E2iMGPa8dLvXy8lGb0Q68R1db30yk+x2Mx6T4dvzeO9VX+9i6fB2QsFovFYrFYxPoH9ScZU9maJOIAAAAASUVORK5CYII=" logo="https://cdn-icons-png.flaticon.com/128/4494/4494477.png" SearchPlaceholder="Search in Jiomart">
<template #links>
  <div class="links">
   <div v-for="(link,index) in Hlinks" :key="index">{{ link }}</div> 
  </div>
  
</template>
</nitrozen-header>
      <div class="main-div space-between">
        <div>Searchable Dropdown</div>
        <nitrozen-dropdown
          label="Data"
          :disabled="false"
          id="searchable-dropdown-1"
          tooltip="This is a searchable dropdown"
          :items="dropdownItemsFiltered"
          v-model="selectedGroupDropdown"
          :searchable="true"
          @searchInputChange="dropdownInputChange"
        ></nitrozen-dropdown>
      </div>

      <div class="main-div space-between">
        <div>Custom Dropdown</div>
        <nitrozen-dropdown
          label="Data"
          :disabled="false"
          id="searchable-dropdown-1"
          tooltip="This is a searchable dropdown"
          :items="dropdownItemsFiltered"
          v-model="selectedGroupDropdown"
          :searchable="true"
          :add_option="true"
          @addOption="addOption"
          @searchInputChange="dropdownInputChange"
        ></nitrozen-dropdown>
      </div>

      <div class="main-div space-between">
        <nitrozen-menu position="top" :inverted="true" :mode="'vertical'" style="background: black;">
          <nitrozen-menu-item>Item 1</nitrozen-menu-item>
          <nitrozen-menu-item>Item 2</nitrozen-menu-item>
          <nitrozen-menu-item>Item 3</nitrozen-menu-item>
          <nitrozen-menu-item>Item 4</nitrozen-menu-item>
          <nitrozen-menu-item>Item 5</nitrozen-menu-item>
        </nitrozen-menu>

        <nitrozen-menu>
          <nitrozen-menu-item>Item 1</nitrozen-menu-item>
          <nitrozen-menu-item>Item 2</nitrozen-menu-item>
          <nitrozen-menu-item>Item 3</nitrozen-menu-item>
        </nitrozen-menu>
      </div>

      <div class="main-div space-between">
        <div>
          This is text tooltip
          <nitrozen-tooltip icon="help" tooltipText="Text tooltip"></nitrozen-tooltip>
        </div>
        <div>
          This is custom html content tooltip
          <nitrozen-tooltip>
            <div class="tooltip-custom">
              <I>Custom</I>
              <b>Html</b>
              <strike>content</strike>
            </div>
          </nitrozen-tooltip>
        </div>
      </div>
      <div class="main-div space-between">
        <nitrozen-tab
          @tab-change="tabChange"
          :tabItem="fruits"
          :label="'name'"
        ></nitrozen-tab>
      </div>
      <div class="main-div">
        <nitrozen-stepper
          :elements="stepper.elements"
          :activeIndex="stepper.activeIndex"
          :maxActiveIndex="stepper.maxActiveIndex"
          @stepperClicked="stepperClicked"
        ></nitrozen-stepper>
        <div class="stepper-btn-container">
          <nitrozen-button  @click="stepperNext"
            >Next</nitrozen-button
          >
        </div>
      </div>
      <div class="main-div">
        <h1>Nitrozen Demo H1</h1>
        <h2>Nitrozen Demo H2</h2>
        <h3>Nitrozen Demo H3</h3>
        <h4>Nitrozen Demo H4</h4>
        <h5>Nitrozen Demo H5</h5>
        <h6>Nitrozen Demo H6</h6>
      </div>

      <!-- Flat Button -->
      <div class="main-div space-between">
        <nitrozen-button  @click="someFunc"
          >Primary Flat {{ numberOfClick }}</nitrozen-button
        >
        <div class="hover-new">
          <nitrozen-button >Hover Flat</nitrozen-button>
        </div>
        <nitrozen-button  :showProgress="true"></nitrozen-button>
        <nitrozen-button  :focused="true"
          >Focused Flat</nitrozen-button
        >
        <nitrozen-button  :disabled="true"
          >Disabled Flat</nitrozen-button
        >
      </div>

      <!-- Flat Stroke Button -->
      <div class="main-div space-between">
        <nitrozen-button >Primary Stroke</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button >Hover Stroke</nitrozen-button>
        </div>
        <nitrozen-button  :focused="true"
          >Focused Stroke</nitrozen-button
        >
        <nitrozen-button  :disabled="true"
          >Disabled Stroke</nitrozen-button
        >
      </div>

      <!-- Rounded Button -->
      <div class="main-div space-between">
        <nitrozen-button  :rounded="true">Rounded</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button  :rounded="true">Hover</nitrozen-button>
        </div>
        <nitrozen-button
          
          :rounded="true"
          :showProgress="true"
        ></nitrozen-button>
        <nitrozen-button  :rounded="true" :focused="true"
          >Focused</nitrozen-button
        >
        <nitrozen-button  :rounded="true" :disabled="true"
          >Disabled</nitrozen-button
        >
      </div>

      <!-- Rounded Stroke Button -->
      <div class="main-div space-between">
        <nitrozen-button  :rounded="true">Rounded</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button  :rounded="true">Hover</nitrozen-button>
        </div>
        <nitrozen-button  :rounded="true" :focused="true"
          >Focused</nitrozen-button
        >
        <nitrozen-button  :rounded="true" :disabled="true"
          >Disabled</nitrozen-button
        >
      </div>

      <!-- Secondary Flat Button -->
      <div class="main-div space-between">
        <nitrozen-button  :theme="'secondary'"
          >Primary Small Flat</nitrozen-button
        >
        <nitrozen-button  :theme="'secondary'"
        size="medium"
          >Primary Medium Flat</nitrozen-button
        >
        <nitrozen-button  :theme="'secondary'"
        size="large"
          >Primary Large Flat</nitrozen-button
        >
        <div class="hover-new">
          <nitrozen-button  :theme="'secondary'"
            >Hover Flat</nitrozen-button
          >
        </div>
        <nitrozen-button
          
          :showProgress="true"
          :theme="'secondary'"
        ></nitrozen-button>
        <nitrozen-button  :focused="true" :theme="'secondary'"
          >Focused Flat</nitrozen-button
        >
        <nitrozen-button  :disabled="true" :theme="'secondary'"
          >Disabled Flat</nitrozen-button
        >
      </div>

      <!-- Secondary Stroke Button -->
      <div class="main-div space-between">
        <nitrozen-button  :theme="'secondary'"
          >Primary</nitrozen-button
        >
        <div class="hover-new">
          <nitrozen-button  :theme="'secondary'"
            >Hover</nitrozen-button
          >
        </div>
        <nitrozen-button  :focused="true" :theme="'secondary'"
          >Focused Stroke</nitrozen-button
        >
        <nitrozen-button  :disabled="true" :theme="'secondary'"
          >Disabled</nitrozen-button
        >
      </div>

      <!-- Secondary Rounded Button -->
      <div class="main-div space-between">
        <nitrozen-button  :theme="'secondary'" :rounded="true"
          >Rounded</nitrozen-button
        >
        <div class="hover-new">
          <nitrozen-button  :theme="'secondary'" :rounded="true"
            >Hover</nitrozen-button
          >
        </div>
        <nitrozen-button
          
          :showProgress="true"
          :theme="'secondary'"
          :rounded="true"
        ></nitrozen-button>
        <nitrozen-button
          
          :focused="true"
          :rounded="true"
          :theme="'secondary'"
          >Disabled</nitrozen-button
        >
        <nitrozen-button
          
          :disabled="true"
          :rounded="true"
          :theme="'secondary'"
          >Disabled</nitrozen-button
        >
      </div>

      <!-- Secondary Rounded Stroke Button -->
      <div class="main-div space-between">
        <nitrozen-button  :rounded="true" :theme="'secondary'"
          >Primary</nitrozen-button
        >
        <div class="hover-new">
          <nitrozen-button  :rounded="true" :theme="'secondary'"
            >Hover</nitrozen-button
          >
        </div>
        <nitrozen-button
          
          :rounded="true"
          :focused="true"
          :theme="'secondary'"
          >Focused</nitrozen-button
        >
        <nitrozen-button
          
          :rounded="true"
          :disabled="true"
          :theme="'secondary'"
          >Disabled</nitrozen-button
        >
      </div>

      <!-- Gropup Button -->
      <div class="main-div">
        <div class="grouping">
          <div class="width-50">
            <nitrozen-button >Save</nitrozen-button>
            <nitrozen-button >Cancel</nitrozen-button>
          </div>

          <div class="width-50">
            <nitrozen-button >Save</nitrozen-button>
            <nitrozen-button>Cancel</nitrozen-button>
          </div>
        </div>
      </div>

      <!-- Large Button -->
      <div class="main-div space-between">
        <nitrozen-button  :size="'large'"
          >Large Button</nitrozen-button
        >
        <nitrozen-button  :size="'large'" :theme="'secondary'"
          >Large Button</nitrozen-button
        >
      </div>

      <!-- Basic Button -->
      <div class="main-div space-between">
        <nitrozen-button :href="'https://google.com'">Primary</nitrozen-button>
        <nitrozen-button :href="'https://google.com'" :theme="'secondary'"
          >Secondary</nitrozen-button
        >
        <nitrozen-button :href="'https://google.com'" :focused="true"
          >Focused</nitrozen-button
        >
        <!-- <nitrozen-button  :large="true" :theme="'secondary'">Large Button</nitrozen-button>       -->
      </div>

      <div class="main-div space-between">
        <nitrozen-button  :icon="'facebook'" :theme="'secondary'"
          >Facebook</nitrozen-button
        >
        <nitrozen-button
          @click="autofocusSearch = !autofocusSearch"
          
          :icon="'bag'"
          :theme="'secondary'"
          >Bag</nitrozen-button
        >
      </div>
      <!-- Toggle Button -->
      <div class="main-div space-between">
        <nitrozen-toggle-btn></nitrozen-toggle-btn>
        <nitrozen-toggle-btn
          v-model="abcd"
          @change="checkValue"
        ></nitrozen-toggle-btn>
      </div>

      <!-- Input -->
      <div class="main-div">
        <nitrozen-input
          :autofocus="autofocusSearch"
          v-model="inputModel"
          @input="getState"
          :required="true"
          :label="'Input with Error Message'"
        ></nitrozen-input>
        <nitrozen-error v-if="inputModel == ''"
          >Field is required</nitrozen-error
        >
      </div>

      <div class="main-div">
        <nitrozen-input
          :id="2"
          :placeholder="'Enter Name'"
          :label="'Input with Placeholder'"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input
          :id="3"
          :type="'search'"
          :placeholder="'Search'"
          :label="'Input with Search'"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input
          id="4"
          label="OTP"
          placeholder="Enter OTP Code"
          autocomplete="one-time-code"
        ></nitrozen-input>
      </div>

      <!-- <div class="main-div">
            <nitrozen-input :id="4" :type="'text'" :placeholder="'Enter Name'" :label="'Input with Loader'" :search="true"></nitrozen-input>
      </div>-->

      <div class="main-div">
        <nitrozen-input
          :id="5"
          :disabled="true"
          :type="'text'"
          :placeholder="'Enter Name'"
          :label="'Disabled Input'"
          v-model="inputModel"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input
          :id="6"
          :showSearchIcon="true"
          :type="'text'"
          :placeholder="'Enter Name'"
          :label="'Search Icon Input'"
          v-model="inputModel"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input
          :id="7"
          :showTooltip="true"
          :tooltipText="
            'Tooltip text Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip text'
          "
          :type="'text'"
          :placeholder="'Enter Name'"
          :label="'Search Icon Input'"
          v-model="inputModel"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input
          :type="'number'"
          :placeholder="'Enter Number'"
          :label="'Number'"
          :min="1"
          :max="10"
          v-model="numberModel"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input
          :id="8"
          :type="'textarea'"
          :placeholder="'Enter description'"
          :label="'Textarea'"
          v-model="inputModel"
          v-bind:maxlength="15"
        ></nitrozen-input>
      </div>

      <div class="main-div space-between">
        <nitrozen-input
          :id="9"
          :type="'text'"
          :placeholder="'First Name'"
          :label="'First Name'"
        ></nitrozen-input>
        <nitrozen-input
          :id="10"
          :type="'text'"
          :placeholder="'Last Name'"
          :label="'Last Name'"
        ></nitrozen-input>
      </div>
      <div class="main-div space-between">
        <nitrozen-input
          class="box"
          :id="11"
          :type="'text'"
          :showPrefix="true"
          prefix="%"
          :placeholder="'Percentage'"
        ></nitrozen-input>
        <nitrozen-input
          class="box"
          :id="12"
          :type="'text'"
          :showSuffix="true"
          suffix="₹"
          :placeholder="'Rupee'"
        ></nitrozen-input>
        <nitrozen-input
          class="box"
          :id="13"
          :type="'text'"
          :showPrefix="true"
          prefix="$"
          :showSuffix="true"
          suffix=".00"
        ></nitrozen-input>
        <nitrozen-input
          class="box"
          :id="14"
          :type="'text'"
          :showPrefix="true"
          prefix="https://example.com/users/"
          :placeholder="'Url'"
        ></nitrozen-input>

        <nitrozen-input
          class="box"
          :id="15"
          :type="'text'"
          :showPrefix="true"
          :custom="true"
          :placeholder="'value'"
        >
          <nitrozen-dropdown
            :items="dropdownItemsPrefix"
            v-model="selectedDropdown"
          ></nitrozen-dropdown>
        </nitrozen-input>

        <nitrozen-input
          class="box"
          id="a11"
          :type="'text'"
          :showSuffix="true"
          :custom="true"
          :placeholder="'value'"
        >
          <nitrozen-dropdown
            :items="dropdownItemsPrefix"
            v-model="selectedDropdown"
          ></nitrozen-dropdown>
        </nitrozen-input>
      </div>

      <div class="main-div space-between">
        <nitrozen-radio
          :name="'radio-1'"
          v-model="radioModel"
          @change="changeEvent"
          :radioValue="'1'"
          >Basic Radio 1</nitrozen-radio
        >
        <nitrozen-radio
          :name="'radio-1'"
          v-model="radioModel"
          @change="changeEvent"
          :radioValue="'2'"
          >Basic Radio 2</nitrozen-radio
        >
        {{ radioModel }}
      </div>

      <div class="main-div space-between">
        <nitrozen-checkbox v-model="singleCheckboxModel"
          >Test Single Checkbox</nitrozen-checkbox
        >
        <span>Checkbox model value: {{ singleCheckboxModel }}</span>
      </div>
      <div class="main-div space-between">
        <nitrozen-checkbox
          v-model="checkArray"
          @change="testFunc($event)"
          checkboxValue="Check 1"
          >Check 1</nitrozen-checkbox
        >
        <nitrozen-checkbox
          checkboxValue="Check 2"
          @change="testFunc($event)"
          v-model="checkArray"
          >Check 2</nitrozen-checkbox
        >
        <nitrozen-checkbox
          checkboxValue="Check 3"
          @change="testFunc($event)"
          v-model="checkArray"
          >Check 3</nitrozen-checkbox
        >
        <nitrozen-checkbox
          checkboxValue="Check 4"
          @change="testFunc($event)"
          v-model="checkArray"
          >Check 4</nitrozen-checkbox
        >
        <span>Checked names: {{ checkArray }}</span>

        <nitrozen-checkbox :disabled="true" v-model="abcd"
          >Checkbox</nitrozen-checkbox
        >
        {{ abcd }}
      </div>

      <div class="main-div space-between">
        <nitrozen-autocomplete
          :id="'auto'"
          v-model="autoModel"
          :dataset="countries"
          :placeholder="'Start Type'"
        ></nitrozen-autocomplete>
      </div>

      <div class="main-div space-between">
        <nitrozen-chips>Nitro Basic Chips</nitrozen-chips>
        <nitrozen-chips :deletable="true">Nitro Delete Chips</nitrozen-chips>
        <nitrozen-chips :inProgress="true">Nitro Progress Chips</nitrozen-chips>
        <nitrozen-chips :error="true">Nitro Error Chips</nitrozen-chips>
        <nitrozen-chips :disable="true">Disable Chips</nitrozen-chips>
      </div>

      <div class="main-div space-between">
        <nitrozen-chips
          @click="$snackbar.global.showError('Error Snackbar')"
          :state="'error'"
          >Nitro Error</nitrozen-chips
        >
        <nitrozen-chips
          @click="$snackbar.global.showSuccess('Success snackbar')"
          :state="'success'"
          >Nitro Success Chips</nitrozen-chips
        >
        <nitrozen-chips
          @click="$snackbar.global.showWarning('Warning snackbar')"
          :state="'progress'"
          >Nitro Progress</nitrozen-chips
        >
        <nitrozen-chips
          @click="$snackbar.global.show('Default snackbar')"
          :state="'selected'"
          >Nitro Selected</nitrozen-chips
        >
      </div>

      <div class="main-div">
        <span class="chips-input">
          <nitrozen-chips v-for="(item, index) in fruits" :key="index">
            {{ item.name }}
            <nitrozen-inline
              :icon="'cross'"
              class="nitrozen-icon"
              v-on:click="removeFruit(index)"
            ></nitrozen-inline>
          </nitrozen-chips>
        </span>

        <nitrozen-input
          v-model="fruitName"
          v-on:keyup.enter="addFruit"
        ></nitrozen-input>
      </div>

      <div class="main-div">
        <span class="chips-input">
          <nitrozen-chips
            :multiSelect="true"
            :theme="'secondary'"
            v-on:click="setSelectItems(item)"
            v-for="(item, index) in dataItems"
            :key="index"
            >{{ item }}</nitrozen-chips
          >
        </span>
        {{ selectedItems.toString() }}
      </div>

      <div class="main-div space-between">
        <nitrozen-badge>Normal</nitrozen-badge>
        <nitrozen-badge state="info">Info</nitrozen-badge>
        <nitrozen-badge state="success">Success</nitrozen-badge>
        <nitrozen-badge state="warn">Warning</nitrozen-badge>
        <nitrozen-badge state="error">Error</nitrozen-badge>
        <nitrozen-badge state="disable">Disable</nitrozen-badge>
      </div>

      <div class="main-div space-between">
        <nitrozen-badge :fill="true">Normal</nitrozen-badge>
        <nitrozen-badge :fill="true" state="info">Info</nitrozen-badge>
        <nitrozen-badge :fill="true" state="success">Success</nitrozen-badge>
        <nitrozen-badge :fill="true" state="warn">Warning</nitrozen-badge>
        <nitrozen-badge :fill="true" state="error">Error</nitrozen-badge>
        <nitrozen-badge :fill="true" state="disable">Disable</nitrozen-badge>
      </div>

      <div class="main-div space-between">
        <nitrozen-dropdown
          label="Custom Dropdown"
          :items="dropdownItems"
          v-model="selectedDropdown"
        >
          <template v-slot:option="slotProps">
            <div
              class="custom-dropdown-option"
              :class="{ selected: slotProps.selected }"
            >
              {{ slotProps.item }} {{ slotProps.selected }}
            </div>
          </template>
        </nitrozen-dropdown>
        <nitrozen-dropdown
          label="State"
          :items="dropdownItems"
          v-model="selectedDropdown"
        ></nitrozen-dropdown>
        <nitrozen-dropdown
          v-model="selectedDropdown"
          :items="[
            ...dropdownItems,
            ...dropdownItems,
            ...dropdownItems,
            ...dropdownItems,
            ...dropdownItems,
            ...dropdownItems,
          ]"
          @change="changeEvent"
        ></nitrozen-dropdown>
        <nitrozen-dropdown
          label="State Advanced"
          :items="dropdownItems"
          v-model="selectedDropdown"
          :required="true"
        ></nitrozen-dropdown>
        <nitrozen-dropdown
          label="State Disabled"
          :items="dropdownItems"
          v-model="selectedDropdown"
          :disabled="true"
        ></nitrozen-dropdown>
      </div>

      <div class="main-div space-between">
        <nitrozen-dropdown
          label="Multiple State"
          :items="dropdownItemsFiltered"
          @searchInputChange="dropdownInputChange"
          :multiple="true"
          :enable_select_all="true"
          @change="changeEvent"
          v-model="multiSelect"
          :searchable="true"
        ></nitrozen-dropdown>
      </div>

      <div class="main-div space-between">
        <nitrozen-pagination
          name="Pages"
          v-model="paginationConfig"
          @change="paginationChange"
          :pageSizeOptions="[5, 10, 20, 50]"
        ></nitrozen-pagination>
      </div>

      <div class="main-div space-between">
        <nitrozen-pagination
          name="Pages"
          mode="cursor"
          v-model="cursorPaginationConfig"
          @change="paginationChange"
          :pageSizeOptions="[5, 10, 20, 50]"
        ></nitrozen-pagination>
      </div>

      <div class="main-div space-between">
        <nitrozen-button  @click="openDialog('alert')"
          >Alert Dialog</nitrozen-button
        >
        <nitrozen-button  @click="openDialog('confirm')"
          >Confirmation Dialog</nitrozen-button
        >
        <nitrozen-button  @click="openDialog"
          >Select Dialog</nitrozen-button
        >
        <nitrozen-button  @click="openDialog('choose')"
          >Choose Dialog</nitrozen-button
        >
      </div>

      <nitrozen-dialog
        ref="alert_dialog"
        title="Success"
        @close="onCloseDialog"
      >
        <template v-slot:body name="body">Image Uploaded Successfully</template>
      </nitrozen-dialog>
      <nitrozen-dialog
        ref="confirm_dialog"
        title="Confirm"
        @close="onCloseDialog"
      >
        <template v-slot:body name="body"
          >Are you sure you want to delete this company?</template
        >
      </nitrozen-dialog>
      <nitrozen-dialog
        ref="choose_dialog"
        title="Choose Radio"
        @close="onCloseDialog"
      >
        <template v-slot:body name="body">
          <nitrozen-radio
            :name="'radio-1'"
            v-model="radioModel"
            @change="changeEvent"
            :radioValue="'1'"
            >Basic Radio 1</nitrozen-radio
          >
          <nitrozen-radio
            :name="'radio-1'"
            v-model="radioModel"
            @change="changeEvent"
            :radioValue="'2'"
            >Basic Radio 2</nitrozen-radio
          >
          <nitrozen-radio
            :name="'radio-1'"
            v-model="radioModel"
            @change="changeEvent"
            :radioValue="'3'"
            >Basic Radio 3</nitrozen-radio
          >
          <nitrozen-radio
            :name="'radio-1'"
            v-model="radioModel"
            @change="changeEvent"
            :radioValue="'4'"
            style="height:400px"
            >Basic Radio 4</nitrozen-radio
          >
          <nitrozen-radio
            :name="'radio-1'"
            v-model="radioModel"
            @change="changeEvent"
            :radioValue="'5'"
            >Basic Radio 4</nitrozen-radio
          >
        </template>
      </nitrozen-dialog>
      <nitrozen-footer
      logo="https://www.jiomart.com/assets/ds2web/jds-icons/jiomart-logo-icon.svg"
      :links="footerLinks"
      copyright=" © All rights reserved. Reliance
            Retail Ltd."
      >
      <template #marketplace>
        <div class="jm-heading-xxs jm-pb-base">Connect with us</div>
          <div>
            <a
              v-for="(socialItem, index) in getSocialLinks"
              :key="index"
              href="socialItem.link"
              class="jm-mr-base"
            >
              <img
                :src="socialItem.icon"
                :alt="socialItem.title"
                class="three-p-logo"
              />
            </a>
          </div>

          <div class="jm-heading-xxs jm-pb-base jm-mt-l">Download the app</div>
          <div>
            <a
              link="https://play.google.com/store/apps"
              class="jm-mr-base"
            >
              <img
                src="https://hdn-1.jiox0.de/jiox2/company/2/applications/61c050db47047572f4a55559/theme/pictures/free/original/theme-image-1641989250072.png"
                alt=""
                class="three-p-logo"
              />
            </a>
            <a
              link="https://www.apple.com/app-store/"
              class="jm-mr-base"
            >
              <img
                src="https://hdn-1.jiox0.de/jiox2/company/2/applications/61c050db47047572f4a55559/theme/pictures/free/original/theme-image-1641989250075.png"
                alt=""
                class="three-p-logo"
              />
            </a>
          </div>

      </template>
      <template #footerBRight>
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari
            5.1.5+, Google Chrome 80+
      </template>
    </nitrozen-footer>
        <nitrozen-carousel :items="Products" prevButtonText="Previous" nextButtonText="Next" />
      <!-- <div
        class="item divider-v-md"
        v-for="(item, index) in Products"
        :key="index"
      >
      <img :src=item alt="images">
      </div> -->
    </div>
  </div>
</template>

<script>
import { countries } from "./countries";
import {NitrozenRadio,NitrozenCheckBox,NitrozenButton,NitrozenCarousel,NitrozenHeader} from "../components";
export default {
  name: "App",
  components : {
NitrozenRadio,"nitrozen-checkbox":NitrozenCheckBox,"nitrozen-toggle-btn":NitrozenButton,"nitrozen-carousel":NitrozenCarousel,NitrozenHeader
  },
  data() {
    return {
      footerLinks:[
      {
        subLinks: [
          {
            href: '#Mobile',
            newTab: false,
            title: 'Mobile'
          },
          {
            href: '#Fiber',
            newTab: false,
            title: 'Fiber'
          },
          {
            href: '#Business',
            newTab: false,
            title: 'Business'
          },
          {
            href: '#Apps',
            newTab: false,
            title: 'Apps'
          },
          {
            href: '#Shop',
            newTab: false,
            title: 'Shop'
          }
        ],
        title: 'Our offerings'
      },
      {
        subLinks: [
          {
            href: '#Explore-Support',
            newTab: false,
            title: 'Explore Support'
          },
          {
            href: '#Locate-us',
            newTab: false,
            title: 'Locate us'
          },
          {
            href: '#FAQ',
            newTab: false,
            title: 'FAQ'
          },
          {
            href: '#Track-order',
            newTab: false,
            title: 'Track order'
          },
          {
            href: '#Contact-us',
            newTab: false,
            title: 'Contact us'
          }
        ],
        title: 'Support'
      },
      {
        subLinks: [
          {
            href: '#Reliance-Industries',
            newTab: false,
            title: 'Reliance Industries'
          },
          {
            href: '#Reliance-Foundation',
            newTab: false,
            title: 'Reliance Foundation'
          },
          {
            href: '#JioLife',
            newTab: false,
            title: 'JioLife'
          },
          {
            href: '#Careers',
            newTab: false,
            title: 'Careers'
          },
          {
            href: '#Investor-relations',
            newTab: false,
            title: 'Investor relations'
          }
        ],
        title: 'Our company'
      },
      {
        subLinks: [
          {
            href: '#Get-Jio-SIM',
            newTab: false,
            title: 'Get Jio SIM'
          },
          {
            href: '#Get-JioFiber',
            newTab: false,
            title: 'Get JioFiber'
          },
          {
            href: '#Recharge',
            newTab: false,
            title: 'Recharge'
          },
          {
            href: '#Pay-Bills',
            newTab: false,
            title: 'Pay Bills'
          },
          {
            href: '#Login',
            newTab: false,
            title: 'Login'
          }
        ],
        title: 'Useful links'
      }
    ]
  ,
      getSocialLinks : [
        {
          href: '#',
          icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
          newTab: true,
          title: 'IcFavorite'
        },
        {
          href: '#',
icon : "https://cdn-icons-png.flaticon.com/128/4494/4494475.png",
          newTab: true,
          title: 'IcFilter'
        },
        {
          href: '#',
icon : "https://cdn-icons-png.flaticon.com/128/4494/4494477.png",
          newTab: true,
          title: 'IcCamera'
        },
      ],
      Products : ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1691612739_Aaj_Ki_Deals_Desktop.jpg?im=Resize=(1680,320)","https://www.jiomart.com/images/cms/aw_rbslider/slides/1692303288_1691645793_MAIN_BANNER_-_REVISED_.jpg?im=Resize=(1680,320)","https://www.jiomart.com/images/cms/aw_rbslider/slides/1692265739_Max_Discounts_On_Daily_Essentials_Desktop.jpg?im=Resize=(1680,320)","https://www.jiomart.com/images/cms/aw_rbslider/slides/1692775898_Accessories_Your_Devices_Mobile_.jpg?im=Resize=(1680,320)","https://www.jiomart.com/images/cms/aw_rbslider/slides/1692726084_Footwear_BestSellers_Desktop.jpg?im=Resize=(1680,320)"],
      tabArray: ["Item1", "Item2", "Item3"],
      multiSelect: [11,12,13,14,15,21,22,23,24,25],
      numberOfClick: 0,
      abcd: true,
      singleCheckboxModel: true,
      inputModel: "Some Value",
      numberModel: 1,
      autoModel: "",
      checkArray: ["Check 1"],
      radioModel: "1",
      dropdownItems: [
        {
          text: "Maharashtra",
          value: 1,
          logo:
            "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/gionee-56405d/Gionee_Logo_20190919.jpg",
        },
        {
          text: "Andhra Pradesh",
          value: 2,
          logo:
            "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/gionee-56405d/Gionee_Logo_20190919.jpg",
        },
        {
          text: "West Bengal",
          value: 3,
          logo:
            "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/gionee-56405d/Gionee_Logo_20190919.jpg",
        },
      ],
      dropdownItemsGroup: [
        {
          text: "Kokan Region",
          isGroupLabel: true,
        },
        {
          text: "Sindhudurg",
          value: 11,
          logo:
            "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/apple-7f951c/logo_apple.png",
        },
        {
          text: "Ratnagiri",
          value: 12,
          logo:
            "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/lyf-4a1902/logo_LYF.png",
        },
        {
          text: "Raigad",
          value: 13,
          logo:
            "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/gionee-56405d/Gionee_Logo_20190919.jpg",
        },
        {
          text: "Thane",
          value: 14,
        },
        {
          text: "Mumbai",
          value: 15,
        },
        {
          text: "Pune Region",
          isGroupLabel: true,
        },
        {
          text: "Pune",
          value: 21,
        },
        {
          text: "Sangali",
          value: 22,
        },
        {
          text: "Kolhapur",
          value: 23,
        },
        {
          text: "Satara",
          value: 24,
        },
        {
          text: "Solapur",
          value: 25,
        },
      ],
      Hlinks:['Link1','Link2'],
      dropdownItemsFiltered: [],
      selectedDropdown: "",
      selectedGroupDropdown: [],
      fruits: [
        {
          name: "Lemon",
        },
        {
          name: "Lime",
        },
        {
          name: "Apple",
        },
      ],
      dataItems: [
        "Tess",
        "Kurtas",
        "Watches",
        "Belt",
        "Tie",
        "Jeans",
        "Sunglasses",
      ],
      selectedItems: [],
      fruitName: "",
      countries,
      stepper: {
        activeIndex: 0,
        maxActiveIndex: 1,
        elements: [
          {
            text: "Step 1",
          },
          {
            text: "Step 2",
          },
          {
            text: "Step 3",
          },
          {
            text: "Step 4",
          },
          {
            text: "Step 5",
          },
        ],
      },
      paginationConfig: {
        limit: 10,
        current: 1,
        total: 45,
      },
      cursorPaginationConfig: {
        limit: 10,
        total: 45,
        currentTotal: 8,
        prevPage: "sample-prev-page-id",
        nextPage: "sample-next-page-id",
      },
      dropdownItemsPrefix: [
        {
          text: "%",
          value: 1,
        },
        {
          text: "px",
          value: 2,
        },
        {
          text: "rem",
          value: 3,
        },
      ],
      autofocusSearch: false,
    };
  },
  mounted() {
    this.dropdownItemsFiltered = this.dropdownItemsGroup;
    // setTimeout(() => {
    //   this.autofocusSearch = true;
    // }, 5000);
  },
  methods: {
    stepperNext() {
      let next = this.stepper.activeIndex + 1;
      if (this.stepper.maxActiveIndex < next) {
        this.stepper = Object.assign({}, this.stepper, {
          maxActiveIndex: next,
        });
      }
      this.stepper = Object.assign({}, this.stepper, { activeIndex: next });
    },
    stepperClicked(event) {
      this.stepper = Object.assign({}, this.stepper, {
        activeIndex: event.nextIndex,
      });
    },
    someFunc() {
      this.numberOfClick += 1;
    },
    addOption(value) {
      console.log(value);
    },
    testFunc(event) {
      console.log(event);
    },
    getState() {
      console.log(this.inputModel);
    },
    checkValue(event) {
      console.log(event);
      this.abcd = event.target.checked;
    },
    addFruit(event) {
      var value = this.fruitName;
      let obj = {
        name: value,
      };
      this.fruits.push(obj);
      this.fruitName = "";
    },
    removeFruit(index) {
      this.fruits.splice(index, 1);
    },
    setSelectItems: function(item) {
      let index = this.selectedItems.indexOf(item);
      if (index == -1) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(index, 1);
      }
    },
    changeEvent: function(event) {
      console.log(event, "event");
    },
    openDialog(type) {
      switch (type) {
        case "alert":
          this.$refs["alert_dialog"].open({ width: "300px" });
          break;
        case "confirm":
          this.$refs["confirm_dialog"].open({
            width: "500px",
            positiveButtonLabel: "Delete",
            negativeButtonLabel: "Cancel",
            neutralButtonLabel: false,
          });
          break;
        case "choose":
          this.$refs["choose_dialog"].open({ width: "300px", height: "400px" });
          break;
        default:
          this.$refs["alert_dialog"].open({ dismissible: false });
      }
    },
    onCloseDialog(data) {
      window.console.log(data);
    },
    paginationChange(e) {
      console.log(e);
    },
    dropdownInputChange(e) {
      console.log(e);
      if (e && e.text) {
        let text = e.text;
        this.dropdownItemsFiltered = this.dropdownItemsGroup.filter(
          (a) =>
            a.text.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            a.isGroupLabel
        );
        this.dropdownItemsFiltered = this.dropdownItemsFiltered.filter(
          (a, i, arr) => {
            if (a.isGroupLabel) {
              if (arr[i + 1] && !arr[i + 1].isGroupLabel) {
                return true;
              }
              return false;
            }
            return true;
          }
        );
      } else {
        this.dropdownItemsFiltered = this.dropdownItemsGroup;
      }
    },
    tabChange(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="less">
body {
  font-family: "Inter";
}
.main-div {
  margin-top: 2%;
  padding: 40px;
  background: #f8f8f8;
  &.pad {
    padding: 24px;
  }
  &.bg-white {
    background: #ffffff;
  }
}

.space-between {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .box {
    margin: 20px;
  }
}

.grouping {
  display: flex;

  button {
    margin-right: 1%;
  }

  .width-50 {
    width: 50%;
  }
}
.stepper-btn-container {
  text-align: center;
  width: 100%;
}
.hover-new {
  .n-button {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.09),
      0 6px 20px 0 rgba(0, 0, 0, 0.09) !important;
  }
}
.tooltip-custom {
  padding: 1px;
  border: 1px dotted gray;
  margin: 10px;
}

.custom-dropdown-option {
  height: 50px;
  color: green;
  &.selected {
    color: white;
    background-color: green;
  }
}

.links{
    display: flex;
    padding-left: 0px;
    align-items: flex-start;
    gap: 32px;
    color: var(--light-primary-inverse, #FFF);
    font-family: JioType;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: -0.08px;
  }
</style>
