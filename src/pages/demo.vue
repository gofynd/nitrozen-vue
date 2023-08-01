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
          :tabIcon="fruitsIcon"
          :label="'name'"
        ></nitrozen-tab>
      </div>
      <div class="main-div space-between">
        <nitrozen-search-box
        :icon="'https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x5/products/pictures/item/free/original/bY8N9S67n-Test.png'">
        </nitrozen-search-box>
      </div>
      <div class="main-div space-between">
        <nitrozen-tag
        :kind="'filter'"
        :label="'Test tag'"
        :active.sync="isActive">

        </nitrozen-tag>
      </div>
      <div>
        <nitrozen-avatar
        :isClickable="true"
        :size="'large'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'xlarge'"
        :kind="'initials'"
        :isClickable="true"
        :initials="'anand'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :isClickable="true"
        :size="'xxlarge'"
        :kind="'image'"
        :image="'https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x5/products/pictures/item/free/original/bY8N9S67n-Test.png'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'small'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'medium'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'xsmall'">
        </nitrozen-avatar>
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
      
     <!-- venkatesh -->
<div>
  <nitrozen-heading level="h1" >JioMart Component</nitrozen-heading>
  <nitrozen-heading level="h5" size="m">Heading</nitrozen-heading>
  <nitrozen-heading level="h1"  color="gray" size="l">JioMart Main Heading</nitrozen-heading>
  <nitrozen-heading level="h1" color="blue" size="s">JioMart Main Heading</nitrozen-heading>
  <nitrozen-heading level="h5" color="green" size="body-l-link">JioMart Main Heading</nitrozen-heading>
  <br />
  <nitrozen-heading level="h5" >Text</nitrozen-heading>
  <nitrozen-text level="p" color="#666666" size="body-xs">JioMart Paragraph text</nitrozen-text>
  <nitrozen-text level="p" color="#666666" size="body-l">JioMart Paragraph text</nitrozen-text>
  <br />
  <nitrozen-heading level="h5" >Grid View</nitrozen-heading>
  <nitrozen-heading level="h5" size='s'>Grid View - 4 column</nitrozen-heading>
  <nitrozen-grid gap="30px" template="1fr 1fr 1fr 1fr" templateMobile="1fr" templateTablet="1fr 1fr">
      <div class="story-box">
        <div>Eu proident velit cupidatat proident eiusmod ex consequat.</div>
      </div>

      <div class="story-box">
        <div>Nostrud sunt aliqua fugiat pariatur in.</div>
      </div>

      <div class="story-box">
        <div>Cupidatat et ea nostrud ea.</div>
      </div>

      <div class="story-box">
        <div>Irure magna deserunt ullamco occaecat reprehenderit ad enim excepteur sint non cillum elit eiusmod eiusmod.</div>
      </div>
    </nitrozen-grid>
    <nitrozen-heading level="h5" size='s'>Grid View - 3 column</nitrozen-heading>
    <nitrozen-grid gap="30px" template="1fr 1fr 1fr" templateMobile="1fr" templateTablet="1fr 1fr">
      <div class="story-box">
        <div>Eu proident velit cupidatat proident eiusmod ex consequat.</div>
      </div>

      <div class="story-box">
        <div>Nostrud sunt aliqua fugiat pariatur in.</div>
      </div>

      <div class="story-box">
        <div>Cupidatat et ea nostrud ea.</div>
      </div>

      <div class="story-box">
        <div>Irure magna deserunt ullamco occaecat reprehenderit ad enim excepteur sint non cillum elit eiusmod eiusmod.</div>
      </div>
    </nitrozen-grid>
    <br />
    <nitrozen-heading level="h5" >Flex Block</nitrozen-heading>
    <nitrozen-flexbox direction="row" justify-content="space-evenly">
      <div class="card">
        <div class="story-box">
        <div>Irure magna deserunt ullamco occaecat reprehenderit ad enim excepteur sint non cillum elit eiusmod eiusmod.</div>
      </div>
      </div>
      <div class="card">
        <div class="story-box">
        <div>Irure magna deserunt ullamco occaecat reprehenderit ad enim excepteur sint non cillum elit eiusmod eiusmod.</div>
      </div>
      </div>
    </nitrozen-flexbox>
    <br />
    <nitrozen-heading level="h5" >List Block</nitrozen-heading>
    <nitrozen-listblock
      title="JioSaavn with Icon"
      prefix="visible"
      suffix="close"
      verticalAlignment="center"
      spacing="m"
      :items="['Item 1', 'Item 2', 'Item 3']"
    />
    <nitrozen-listblock
      title="JioSaavn"
      verticalAlignment="center"
      spacing="m"
      :items="['Item 1', 'Item 2', 'Item 3']"
    />
<br />
<nitrozen-heading level="h5" >Divider</nitrozen-heading>
<nitrozen-grid gap="30px" template="1fr 1fr 1fr 1fr" templateMobile="1fr" templateTablet="1fr 1fr">
<div>
  <nitrozen-divider />
</div>
<div>
  <nitrozen-divider direction="horizontal">
      Horizontal - With Label
    </nitrozen-divider>

</div>
<div>
  <nitrozen-divider direction="vertical" />
</div>
<div>
  <nitrozen-divider direction="vertical">
  Vertical - With Label Text
</nitrozen-divider>
</div>
</nitrozen-grid>
</div>
<br />
<nitrozen-heading level="h5" >Spacing</nitrozen-heading>
<div>
    <nitrozen-space position="horizontal" size="xl">
      <p>This element has padding on all sides.</p>
    </nitrozen-space>

    <nitrozen-space position="bottom" size="m">
      <p>This element has horizontal padding.</p>
    </nitrozen-space>
    <nitrozen-space size="s" position="vertical">
      <p>This element has  vertical padding.</p>
    </nitrozen-space>
   </div>
   <br/>
   <nitrozen-heading level="h5" >Toast</nitrozen-heading>
   <div>

    <nitrozen-button v-flat-btn @click="showToastNotification">Show Toast Notification</nitrozen-button>

      <nitrozen-toaster
      :showToast="showToast"
      :title="notificationMessage"
      :description="description"
      icon="home"
       @onClose="onCloseToast"
       :showPrimaryButton="true"
    primaryButtonLabel="CTA 1"
    :showSecondaryButton="true"
    secondaryButtonLabel="CTA 2"
    @onClickPrimary="handlePrimaryAction"
    @onClickSecondary="handleSecondaryAction"
    />
    
    <br/>

<div>
  <nitrozen-heading level="h5" >Nudge</nitrozen-heading>
  <nitrozen-button v-flat-btn @click="showNudgeNotification">Show Nudge Notification</nitrozen-button>
      <nitrozen-nudge
      :showNudge="showNudge"
      :title="notificationMessage"
      :description="description"
      icon="home"
       @onClose="onCloseNudge"
       :showPrimaryButton="true"
    primaryButtonLabel="CTA 1"
    :showSecondaryButton="true"
    secondaryButtonLabel="CTA 2"
    @onClickPrimary="handlePrimaryAction"
    @onClickSecondary="handleSecondaryAction"
    />
</div>

    <div>
    <nitrozen-heading level="h5" >SidePanel</nitrozen-heading>
    <div class="hover-new">
    <nitrozen-button v-flat-btn @click="showPanel">Show Side Panel</nitrozen-button>
        </div>
    <!-- Use the SidePanel component with its props -->
    <nitrozen-sidepanel
      header="panelHeader"
      :showClose="true"
      :isOpen="isPanelOpen"
      direction="left"
      :disableTransition="false"
      :maxWidth="true"
      className="test-class"
      @onClose="closePanel"
      @headerPrefixClickEvent="handleHeaderPrefixClick"
    >
    <p>helo</p>
    </nitrozen-sidepanel>
  </div>
  <div>
    <nitrozen-heading level="h5" >Custom Scrollbar</nitrozen-heading>
    <nitrozen-scrollbar :hover="true">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the
        theory of ethics, very popular during the Renaissance. The first line
        of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
        section 1.10.32.
      </p>
    </nitrozen-scrollbar>
    <br />
    <nitrozen-scrollbar :hover="false">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the
        theory of ethics, very popular during the Renaissance. The first line
        of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
        section 1.10.32.
      </p>
    </nitrozen-scrollbar>
  </div>
  <div>
    <nitrozen-heading level="h5" >BottomSheet</nitrozen-heading>
   <!-- Button to open the BottomSheet -->
   <div class="hover-new">
    <nitrozen-button v-flat-btn @click="openBottomSheet">Open Bottom Sheet</nitrozen-button>
        </div>

<!-- Use the BottomSheet component -->
<nitrozen-bottomsheet
  title="Your Jio Account"
  description="Text"
  :close="true"
  ref="bottomSheet"
>
<p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the
        theory of ethics, very popular during the Renaissance. The first line
        of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
        section 1.10.32.
      </p>
</nitrozen-bottomsheet>
  </div>
  <div>
    <nitrozen-heading level="h5" >Bottom navigation</nitrozen-heading>
    <niotrozen-bottom-nav :items="staticNavItems" />

  </div>
  </div>
 
 <!-- venkatesh -->


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

      
     <!--  Selectors -->
    <div class="main-div">
      <nitrozen-selector :buttons="buttons"/>
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
    </div>
    <div>====================================================================</div>
      <div>NMS Buttons</div>
      <!-- AddCart Button -->
      <div class="main-div space-between">
        <nitrozen-button  :rounded="true" :theme="'add'">Add</nitrozen-button>
        <nitrozen-button  :theme="'primary'"
        size="medium"
          >Renew</nitrozen-button
        >
      </div>
      <div class="main-div space-between">
       <!-- <nitrozen-button  :theme="'delete'"></nitrozen-button>-->
        <nitrozen-inline
              :icon="'delete'"
              class="nitrozen-icon"
            ></nitrozen-inline>
      </div>
      <div class="main-div space-between">
        <nitrozen-dropdown
            label="Please Select"
            :items="dropdownItems"
            v-model="selectedDropdown"
            :required="true"
          ></nitrozen-dropdown>
      </div>    

      <div class="main-div">
        <nitrozen-progressbar 
          :progress="'60'" 
          :inital_value="'0'" 
          :fixed_value="'600'" 
          :final_value="'1000'">
        </nitrozen-progressbar>
      </div>

      <div class="main-div ">
        Small: <nitrozen-spinner size="small"
          ></nitrozen-spinner>
        Medium: <nitrozen-spinner size="medium"
          ></nitrozen-spinner>
        Large: <nitrozen-spinner size="large"
        ></nitrozen-spinner>    
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
      staticNavItems: [
        {
          'aria-label': 'Home',
          href: '#',
          icon: '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.47 9.31L13.85 2.7a2.8 2.8 0 00-3.7 0L2.53 9.31A1.53 1.53 0 003.45 12H4v7a3 3 0 003 3h3v-6h4v6h3a3 3 0 003-3v-7h.55a1.53 1.53 0 00.92-2.69z" fill="currentColor"/></svg>',
          onClick: function noRefCheck() {},
          title: 'Home'
        },
        {
          'aria-label': 'Categories',
          href: '#',
          icon: '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.47 9.31L13.85 2.7a2.8 2.8 0 00-3.7 0L2.53 9.31A1.53 1.53 0 003.45 12H4v7a3 3 0 003 3h3v-6h4v6h3a3 3 0 003-3v-7h.55a1.53 1.53 0 00.92-2.69z" fill="currentColor"/></svg>',          onClick: function noRefCheck() {},
          title: 'Categories'
        },
        {
        'aria-label': 'Favourite',
        href: '#',
        icon: '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.47 9.31L13.85 2.7a2.8 2.8 0 00-3.7 0L2.53 9.31A1.53 1.53 0 003.45 12H4v7a3 3 0 003 3h3v-6h4v6h3a3 3 0 003-3v-7h.55a1.53 1.53 0 00.92-2.69z" fill="currentColor"/></svg>',          onClick: function noRefCheck() {},
        onClick: function noRefCheck(){},
        title: 'Favourite'
      },
        {
        'aria-label': 'Menu',
        href: '#',
        icon: '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.47 9.31L13.85 2.7a2.8 2.8 0 00-3.7 0L2.53 9.31A1.53 1.53 0 003.45 12H4v7a3 3 0 003 3h3v-6h4v6h3a3 3 0 003-3v-7h.55a1.53 1.53 0 00.92-2.69z" fill="currentColor"/></svg>',          onClick: function noRefCheck() {},
        onClick: function noRefCheck(){},
        title: 'Menu'
      },

      ],
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
      currentToast: null,
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
    handleHeaderPrefixClick() {
      // Handle the header prefix click event here
    },
    openBottomSheet() {
      this.$refs.bottomSheet.open();
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
