<template>
  <div id="app">
    <div class="main-div">
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
      <nitrozen-carousel :items="Products">
      <div
        class="item divider-v-md"
        v-for="(item, index) in Products"
        :key="index"
      >
      <img :src=item alt="images">
      </div>
    </nitrozen-carousel>
    </div>
  </div>
</template>

<script>
import { countries } from "./countries";
import {NitrozenRadio,NitrozenCheckBox,NitrozenButton,NitrozenCarousel} from "../components";
export default {
  name: "App",
  components : {
NitrozenRadio,"nitrozen-checkbox":NitrozenCheckBox,"nitrozen-toggle-btn":NitrozenButton,"nitrozen-carousel":NitrozenCarousel
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
      Products : ["data:image/jpeg;base64,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","data:image/jpeg;base64,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","data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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","data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"],
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
</style>
