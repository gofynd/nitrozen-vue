<template>
  <div id="app">
    <div class="main-div">
      <div class="title">Small Button </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">
        <nitrozen-button size="small" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="primary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button size="small" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button size="small" theme="tertiary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary" state="positive">Recharge Now</nitrozen-button>
      </div>

      <div class="title">Medium Button </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">
        <nitrozen-button size="medium" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button size="medium" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="medium" theme="primary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button size="medium" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button size="medium" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="medium" theme="secondary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button size="medium" theme="tertiary">Recharge Now</nitrozen-button>
        <nitrozen-button size="medium" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="medium" theme="tertiary" state="positive">Recharge Now</nitrozen-button>
      </div>

      <div class="title">Large Button </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">
        <nitrozen-button size="large" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button size="large" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="large" theme="primary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button size="large" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button size="large" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="large" theme="secondary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button size="large" theme="tertiary">Recharge Now</nitrozen-button>
        <nitrozen-button size="large" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="large" theme="tertiary" state="positive">Recharge Now</nitrozen-button>
      </div>
      <div class="title">Small Button Left icon </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">

        <nitrozen-button :size="'small'" :icon="'paste'" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="primary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="secondary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="tertiary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="tertiary" state="positive">Recharge Now</nitrozen-button>
        
      </div>
      <div class="title">Small Button Right icon </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">

        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="primary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="secondary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="tertiary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :iconRight="'arrow_next'" theme="tertiary" state="positive">Recharge Now</nitrozen-button>

      </div>
      <div class="title">Small Button Left Right icon </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">

        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="primary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="secondary" state="positive">Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="tertiary">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'arrow_back'" :iconRight="'paste'" theme="tertiary" state="positive">Recharge Now</nitrozen-button>

      </div>

      <div class="title">Full width Button </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">
        <nitrozen-button :size="'small'" :theme="'primary'" :fullwidth="'fullwidth'">Recharge Now</nitrozen-button>
      </div>

      <div class="title">Disable width Button </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">
        <nitrozen-button :size="'small'" :icon="'paste'" theme="primary" disabled>Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="primary" state="destructive" disabled>Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="primary" state="positive" disabled>Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="secondary" disabled>Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="secondary" state="destructive" disabled>Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="secondary" state="positive" disabled>Recharge Now</nitrozen-button>
        <div class="diff">/</div>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="tertiary" disabled>Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="tertiary" state="destructive" disabled>Recharge Now</nitrozen-button>
        <nitrozen-button :size="'small'" :icon="'paste'" theme="tertiary" state="positive" disabled>Recharge Now</nitrozen-button>
      </div>

      <div class="title">loader Button </div>
      <div class="subtitle">Type : Primary / Secondary / Tertiary | Stage : Normal - Destructive - Positive </div>
      <div class="main-div space-between">
        <nitrozen-button :size="'small'" :theme="'primary'" :icon="'arrow_back'" :iconRight="'paste'" :showProgress="true">Recharge Now</nitrozen-button>
      </div>


      <!--div class="subtitle">Primary Button</div>
      <div class="main-div space-between">
        <nitrozen-button size="small" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary">Recharge Now</nitrozen-button>

        <nitrozen-button size="small" theme="primary" state="normal">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="primary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="primary" state="positive">Recharge Now</nitrozen-button>

        <nitrozen-button size="small" theme="secondary" state="normal">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary" state="positive">Recharge Now</nitrozen-button>
      </div>
      <div class="main-div space-between">
        

        <nitrozen-button size="small" theme="tertiary" state="normal">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary" state="positive">Recharge Now</nitrozen-button>

      </div>
      <div class="subtitle">Secondary Button</div>
      <div class="main-div space-between">
        <nitrozen-button size="small" theme="primary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary">Recharge Now</nitrozen-button>

        <nitrozen-button size="small" theme="primary" state="normal">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="secondary" state="destructive">Recharge Now</nitrozen-button>
        <nitrozen-button size="small" theme="tertiary" state="positive">Recharge Now</nitrozen-button>

      </div-->
      <!-- Flat Button -->
      <!--div class="main-div space-between">
        <nitrozen-button  @click="someFunc" class="n-button-small">Primary Flat {{ numberOfClick }}</nitrozen-button
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
      </div-->

      <!-- Flat Stroke Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Rounded Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Rounded Stroke Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Secondary Flat Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Secondary Stroke Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Secondary Rounded Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Secondary Rounded Stroke Button -->
      <!--div class="main-div space-between">
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
      </div-->

      <!-- Gropup Button -->
      <!--div class="main-div">
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
      </div-->

      <!-- Large Button -->
      <!--div class="main-div space-between">
        <nitrozen-button  :size="'large'"
          >Large Button</nitrozen-button
        >
        <nitrozen-button  :size="'large'" :theme="'secondary'"
          >Large Button</nitrozen-button
        >
      </div-->

      <!-- Basic Button -->
      <!--div class="main-div space-between">
        <nitrozen-button :href="'https://google.com'">Primary</nitrozen-button>
        <nitrozen-button :href="'https://google.com'" :theme="'secondary'"
          >Secondary</nitrozen-button
        >
        <nitrozen-button :href="'https://google.com'" :focused="true"
          >Focused</nitrozen-button
        >
        <nitrozen-button  :large="true" :theme="'secondary'">Large Button</nitrozen-button>
      </div-->

      <!--div class="main-div space-between">
        <nitrozen-button  :icon="'facebook'" :theme="'secondary'"
          >Facebook</nitrozen-button
        >
        <nitrozen-button
          @click="autofocusSearch = !autofocusSearch"
          
          :icon="'bag'"
          :theme="'secondary'"
          >Bag</nitrozen-button
        >
      </div-->
      <!-- Toggle Button -->
      <!--div class="main-div space-between">
        <nitrozen-toggle-btn></nitrozen-toggle-btn>
        <nitrozen-toggle-btn
          v-model="abcd"
          @change="checkValue"
        ></nitrozen-toggle-btn>
      </div-->
      

    </div>
    </div> 
</template>

<script>
import { countries } from "./countries";
import {NitrozenRadio,NitrozenCheckBox,NitrozenButton} from "../components";
export default {
  name: "App",
  components : {
NitrozenRadio,"nitrozen-checkbox":NitrozenCheckBox,"nitrozen-toggle-btn":NitrozenButton
  },
  data() {
    return {
      buttons: [
      { text: 'Postpaid' },
      { text: 'Prepaid' },
      { text: 'JIOFiber' },
      { text: '5G' },
      { text: 'Plans' },
    ],
      tabArray: ["Item1", "Item2", "Item3"],
      multiSelect: [11,12,13,14,15,21,22,23,24,25],
      numberOfClick: 0,
      abcd: true,
      isActive: false,
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
        },
        {
          text: "Andhra Pradesh",
          value: 2,
           
        },
        {
          text: "West Bengal",
          value: 3,
          
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
          name: "Discover",
        },
        {
          name: "Apple",
        },
      ],
      fruitsIcon:[
      "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x5/products/pictures/item/free/original/bY8N9S67n-Test.png",
      "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x5/products/pictures/item/free/original/bY8N9S67n-Test.png",
      "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x5/products/pictures/item/free/original/bY8N9S67n-Test.png"
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
      linkTitle: 'External Link',
      externalLink: 'https://www.example.com', // Replace with your desired external link
      linkText: 'Click me to open in a new tab!',
      routerLinkTitle: 'Internal Link',
      routerLinkText: 'Click me for an internal link!',
      linkAppearance: 'body-md', // Replace with your desired text appearance class
      routerProvider: {
        to: '/some-internal-route', // Replace with the internal route you want to navigate to
      },
      breadcrumbsData: [
        { label: 'Home', to: '/' },
        { label: 'Category', to: '/category' },
        { label: 'Subcategory', to: '/category/subcategory' },
      ],
      customLabelStyle: {
        color: 'blue',
        fontWeight: 'bold',
        // Add more styles as needed
      },
      imageSrc: 'https://www.w3schools.com/html/pic_trulli.jpg',
      showToast: false,
      showNudge: false,
      notificationMessage: 'JioMart',
      notificationType: 'info', // 'info', 'success', 'warning', 'error', etc.
      showPrimaryButton: false,
      primaryButtonLabel: 'Primary',
      showSecondaryButton: false,
      secondaryButtonLabel: 'Secondary',
      description:"This is a notification message",
      isPanelOpen: false,
      sheetContent: [
        "Dynamic Content 1",
        "Dynamic Content 2",
      ],
      stepperConfig: {
        activeStep: 0,
        onBack: this.onBackMethod, 
        totalStep: 2
      }
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
    handleImageLoad(event) {
      // Handle image load event
      console.log("Image Loding....")
    },
    handleImageError(event) {
      // Handle image error event
      console.log("Image handle Error....");
    },
    handleImageClick(event) {
      // Handle image click event
      console.log("Image Click.....");
    },
    showToastNotification() {
      this.showToast = true;
    },
    showNudgeNotification() {
      this.showNudge = true;
    },
    onCloseToast() {
      this.showToast = false;
    },
    onCloseNudge() {
      this.showNudge = false;
    },
    onClickPrimary() {
      console.log('Primary button clicked.');
    },
    onClickSecondary() {
      console.log('Secondary button clicked.');
    },
    showPanel() {
      this.isPanelOpen = true; 
    },
    closePanel() {
      this.isPanelOpen = false;
    },
    openBottomSheet() {
      if (this.$refs.bottomSheet) {
        this.$refs.bottomSheet.open(); // Call the open method
      }
    },
    openBottomSheetStepper() {
      if (this.$refs.bottomSheetStepper) {
        this.$refs.bottomSheetStepper.open(); // Call the open method
      }
    },
    handleHeaderPrefixClick() {
      // Handle the header prefix click event here
    },
    onBackMethod() {
      if (this.stepperConfig.activeStep > 0) {
        this.stepperConfig.activeStep--;
      }
    }
  },
};
</script>

<style lang="less">
@import '../base/mixin.less';

body {
  font-family: "Inter";
  .color-palette(jiomart);
}
.main-div {
  margin-top: 0%;
  padding: 40px 20px;
  background: #f8f8f8;
  .title {
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    text-align: center;
  }
  .subtitle {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 0 0 8px;
  }
  .diff {
    font-size: 30px;
    font-weight: 100;
    color: #ccc;
  }
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
