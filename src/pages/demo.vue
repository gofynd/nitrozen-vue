<template>
  <div id="app">
    <div class="main-div">
      <div class="main-div space-between">
        <nitrozen-dialog ref="more-filters-dialog" class="more-filters-dialog" title="Testing" @close="onCloseAction">
          <template v-slot:header>
            <slot name="header"></slot>
          </template>
          <template v-slot:body>
            <slot name="body"></slot>
          </template>
          <template v-slot:footer>
            <slot name="footer"></slot>
          </template>
        </nitrozen-dialog>
        <div>Searchable Dropdown</div>
        <nitrozen-dropdown  id="searchable-dropdown-1" 
          tooltip="This is a searchable dropdown" :items="dropdownItemsFiltered" v-model="selectedGroupDropdown"
          :searchable="true" @searchInputChange="dropdownInputChange" ></nitrozen-dropdown>
      </div>
      <div>
        <nitrozen-chips deletable="true" v-for="(item, index) in ['tag1','tag2','tag3','tag4']" :key="'chips_' + index">
          {{ item }}
        </nitrozen-chips>
      </div>
      <div class="main-div space-between">
        <div>Searchable Dropdown</div>
        <nitrozen-input label="Data" :disabled="true" id="searchable-dropdown-1" tooltip="This is a searchable dropdown"
          v-model="selectedGroupDropdown" type="text" :maxlength="100"></nitrozen-input>
      </div>

      <div class="main-div space-between">
        <div>Custom Dropdown</div>
        <nitrozen-dropdown label="Data" :disabled="false" id="searchable-dropdown-1"
          tooltip="This is a searchable dropdown" :items="dropdownItemsFiltered" v-model="selectedGroupDropdown"
          :searchable="true" :add_option="true" @addOption="addOption"
          @searchInputChange="dropdownInputChange" @scroll="handleScroll1" @fetchMoreData="handleScroll1"></nitrozen-dropdown>
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
        <nitrozen-tab @tab-change="tabChange" :tabItem="fruits" :label="'name'"></nitrozen-tab>
      </div>
      <div class="main-div">
        <nitrozen-stepper :elements="stepper.elements" :activeIndex="stepper.activeIndex"
          :maxActiveIndex="stepper.maxActiveIndex" @stepperClicked="stepperClicked"></nitrozen-stepper>
        <div class="stepper-btn-container">
          <nitrozen-button v-flat-btn @click="stepperNext">Next</nitrozen-button>
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

      <!-- ====================================== -->
      <!-- V1 BUTTONS - COMPREHENSIVE SHOWCASE -->
      <!-- ====================================== -->
      <h2 style="padding: 20px; background: #2E31BE; color: white; margin-top: 20px;">V1 Buttons (nitrozen-button)</h2>
      
      <!-- V1 Denotations -->
      <div class="main-div" style="background: #fff3cd; border-left: 4px solid #ffc107;">
        <h4 style="margin: 0 0 10px 0;">V1 Button Denotations</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Component:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>&lt;nitrozen-button&gt;</code></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Directives:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>v-flat-btn</code> (filled button), <code>v-stroke-btn</code> (outlined button)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Themes:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>primary</code> (default - green), <code>secondary</code> (blue/purple)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Sizes:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>small</code> (default - 39px), <code>medium</code> (48px), <code>large</code> (60px)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Props:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>:rounded</code>, <code>:disabled</code>, <code>:showProgress</code>, <code>:focused</code>, <code>:icon</code>, <code>:href</code></td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Border Radius:</strong></td>
            <td style="padding: 8px;">250px (pill-shaped)</td>
          </tr>
        </table>
      </div>

      <!-- V1: Primary Theme - Flat Buttons - All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Primary Theme - Flat Buttons</h3>
      <p style="padding: 0 20px;">Sizes: Small (default), Medium, Large</p>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn>Small Flat</nitrozen-button>
        <nitrozen-button v-flat-btn size="medium">Medium Flat</nitrozen-button>
        <nitrozen-button v-flat-btn size="large">Large Flat</nitrozen-button>
      </div>

      <!-- V1: Primary Theme - Flat Buttons - States -->
      <p style="padding: 0 20px;">States: Normal, Hover, Progress, Focused, Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn @click="someFunc(true)">Normal {{ numberOfClick }}</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-flat-btn>Hover</nitrozen-button>
        </div>
        <nitrozen-button v-flat-btn :showProgress="true">Loading</nitrozen-button>
        <nitrozen-button v-flat-btn :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-flat-btn :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Primary Theme - Stroke Buttons - All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Primary Theme - Stroke Buttons</h3>
      <p style="padding: 0 20px;">Sizes: Small (default), Medium, Large</p>
      <div class="main-div space-between">
        <nitrozen-button v-stroke-btn>Small Stroke</nitrozen-button>
        <nitrozen-button v-stroke-btn size="medium">Medium Stroke</nitrozen-button>
        <nitrozen-button v-stroke-btn size="large">Large Stroke</nitrozen-button>
      </div>

      <!-- V1: Primary Theme - Stroke Buttons - States -->
      <p style="padding: 0 20px;">States: Normal, Hover, Focused, Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button v-stroke-btn>Normal</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-stroke-btn>Hover</nitrozen-button>
        </div>
        <nitrozen-button v-stroke-btn :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-stroke-btn :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Primary Theme - Rounded Flat Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Primary Theme - Rounded Flat Buttons</h3>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :rounded="true">Normal</nitrozen-button>
        <nitrozen-button v-flat-btn :rounded="true" size="medium">Medium</nitrozen-button>
        <nitrozen-button v-flat-btn :rounded="true" size="large">Large</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-flat-btn :rounded="true">Hover</nitrozen-button>
        </div>
        <nitrozen-button v-flat-btn :rounded="true" :showProgress="true">Loading</nitrozen-button>
        <nitrozen-button v-flat-btn :rounded="true" :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-flat-btn :rounded="true" :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Primary Theme - Rounded Stroke Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Primary Theme - Rounded Stroke Buttons</h3>
      <div class="main-div space-between">
        <nitrozen-button v-stroke-btn :rounded="true">Normal</nitrozen-button>
        <nitrozen-button v-stroke-btn :rounded="true" size="medium">Medium</nitrozen-button>
        <nitrozen-button v-stroke-btn :rounded="true" size="large">Large</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-stroke-btn :rounded="true">Hover</nitrozen-button>
        </div>
        <nitrozen-button v-stroke-btn :rounded="true" :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-stroke-btn :rounded="true" :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Secondary Theme - Flat Buttons - All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Secondary Theme - Flat Buttons</h3>
      <p style="padding: 0 20px;">Sizes: Small (default), Medium, Large</p>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :theme="'secondary'">Small Flat</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" size="medium">Medium Flat</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" size="large">Large Flat</nitrozen-button>
      </div>

      <!-- V1: Secondary Theme - Flat Buttons - States -->
      <p style="padding: 0 20px;">States: Normal, Hover, Progress, Focused, Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :theme="'secondary'">Normal</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-flat-btn :theme="'secondary'">Hover</nitrozen-button>
        </div>
        <nitrozen-button v-flat-btn :theme="'secondary'" :showProgress="true">Loading</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Secondary Theme - Stroke Buttons - All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Secondary Theme - Stroke Buttons</h3>
      <p style="padding: 0 20px;">Sizes: Small (default), Medium, Large</p>
      <div class="main-div space-between">
        <nitrozen-button v-stroke-btn :theme="'secondary'">Small Stroke</nitrozen-button>
        <nitrozen-button v-stroke-btn :theme="'secondary'" size="medium">Medium Stroke</nitrozen-button>
        <nitrozen-button v-stroke-btn :theme="'secondary'" size="large">Large Stroke</nitrozen-button>
      </div>

      <!-- V1: Secondary Theme - Stroke Buttons - States -->
      <p style="padding: 0 20px;">States: Normal, Hover, Focused, Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button v-stroke-btn :theme="'secondary'">Normal</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-stroke-btn :theme="'secondary'">Hover</nitrozen-button>
        </div>
        <nitrozen-button v-stroke-btn :theme="'secondary'" :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-stroke-btn :theme="'secondary'" :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Secondary Theme - Rounded Flat Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Secondary Theme - Rounded Flat Buttons</h3>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true">Normal</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true" size="medium">Medium</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true" size="large">Large</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true">Hover</nitrozen-button>
        </div>
        <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true" :showProgress="true">Loading</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true" :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true" :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Secondary Theme - Rounded Stroke Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Secondary Theme - Rounded Stroke Buttons</h3>
      <div class="main-div space-between">
        <nitrozen-button v-stroke-btn :theme="'secondary'" :rounded="true">Normal</nitrozen-button>
        <nitrozen-button v-stroke-btn :theme="'secondary'" :rounded="true" size="medium">Medium</nitrozen-button>
        <nitrozen-button v-stroke-btn :theme="'secondary'" :rounded="true" size="large">Large</nitrozen-button>
        <div class="hover-new">
          <nitrozen-button v-stroke-btn :theme="'secondary'" :rounded="true">Hover</nitrozen-button>
        </div>
        <nitrozen-button v-stroke-btn :theme="'secondary'" :rounded="true" :focused="true">Focused</nitrozen-button>
        <nitrozen-button v-stroke-btn :theme="'secondary'" :rounded="true" :disabled="true">Disabled</nitrozen-button>
      </div>

      <!-- V1: Link Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Link Buttons (with href)</h3>
      <div class="main-div space-between">
        <nitrozen-button :href="'https://google.com'">Primary Link</nitrozen-button>
        <nitrozen-button :href="'https://google.com'" :theme="'secondary'">Secondary Link</nitrozen-button>
        <nitrozen-button :href="'https://google.com'" :focused="true">Focused Link</nitrozen-button>
      </div>

      <!-- V1: Icon Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Icon Buttons</h3>
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :icon="'facebook'">Facebook</nitrozen-button>
        <nitrozen-button v-flat-btn :icon="'white-dots'" :theme="'secondary'">Dots</nitrozen-button>
        <nitrozen-button v-flat-btn :icon="'bag'" :theme="'secondary'">Bag</nitrozen-button>
      </div>

      <!-- V1: Button Groups -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Button Groups</h3>
      <div class="main-div">
        <div class="grouping">
          <div class="width-50">
            <nitrozen-button v-flat-btn>Save</nitrozen-button>
            <nitrozen-button v-stroke-btn>Cancel</nitrozen-button>
          </div>
          <div class="width-50">
            <nitrozen-button v-flat-btn :theme="'secondary'">Submit</nitrozen-button>
            <nitrozen-button v-stroke-btn :theme="'secondary'">Reset</nitrozen-button>
          </div>
        </div>
      </div>

      <!-- ====================================== -->
      <!-- V2 BUTTONS - COMPREHENSIVE SHOWCASE -->
      <!-- ====================================== -->
      <h2 style="padding: 20px; background: #2E31BE; color: white; margin-top: 40px;">V2 Buttons (nitrozen-button-v2)</h2>
      
      <!-- V2 Denotations -->
      <div class="main-div" style="background: #d4edda; border-left: 4px solid #28a745;">
        <h4 style="margin: 0 0 10px 0;">V2 Button Denotations</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Component:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>&lt;nitrozen-button-v2&gt;</code></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Themes:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>primary</code> (default - filled), <code>secondary</code> (outlined/stroke)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Appearances:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>default</code> (blue/purple), <code>positive</code> (green/success), <code>negative</code> (red/error), <code>warning</code> (orange/warning)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Sizes:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>extra-small</code> (24px), <code>small</code> (32px), <code>medium</code> (default - 40px), <code>large</code> (48px), <code>extra-large</code> (64px)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Props:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><code>:rounded</code>, <code>:disabled</code>, <code>:showProgress</code>, <code>:focused</code>, <code>:icon</code>, <code>:href</code></td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Border Radius:</strong></td>
            <td style="padding: 8px;">250px (pill-shaped)</td>
          </tr>
        </table>
      </div>
      
      <!-- V2 Key Differences from V1 -->
      <div class="main-div" style="background: #e7f3ff; border-left: 4px solid #0d6efd;">
        <h4 style="margin: 0 0 10px 0;">Key Differences: V1 vs V2</h4>
        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
          <li><strong>No directives needed:</strong> V2 doesn't require <code>v-flat-btn</code> or <code>v-stroke-btn</code></li>
          <li><strong>Appearance prop:</strong> V2 has semantic appearances (positive, negative, warning) for contextual actions</li>
          <li><strong>More sizes:</strong> V2 has 5 sizes vs V1's 3 sizes</li>
          <li><strong>Theme meaning:</strong> In V2, <code>secondary</code> theme creates outlined/stroke style (similar to V1's <code>v-stroke-btn</code>)</li>
          <li><strong>Disabled styling:</strong> V2 uses opacity-based disabled state with specific colors per appearance</li>
        </ul>
      </div>

      <!-- V2: Default Appearance - Primary Theme - All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Default Appearance - Primary Theme</h3>
      <p style="padding: 0 20px;">Sizes: Extra Small, Small, Medium (default), Large, Extra Large</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 size="extra-small">Extra Small</nitrozen-button-v2>
        <nitrozen-button-v2 size="small">Small</nitrozen-button-v2>
        <nitrozen-button-v2>Medium (default)</nitrozen-button-v2>
        <nitrozen-button-v2 size="large">Large</nitrozen-button-v2>
        <nitrozen-button-v2 size="extra-large">Extra Large</nitrozen-button-v2>
      </div>

      <!-- V2: Default Appearance - Primary Theme - States -->
      <p style="padding: 0 20px;">States: Normal, Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 size="extra-small">Normal XS</nitrozen-button-v2>
        <nitrozen-button-v2 size="small">Normal S</nitrozen-button-v2>
        <nitrozen-button-v2>Normal M</nitrozen-button-v2>
        <nitrozen-button-v2 size="large">Normal L</nitrozen-button-v2>
        <nitrozen-button-v2 size="extra-large">Normal XL</nitrozen-button-v2>
      </div>
      <div class="main-div space-between">
        <nitrozen-button-v2 size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Default Appearance - Secondary Theme - All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Default Appearance - Secondary Theme</h3>
      <p style="padding: 0 20px;">Sizes: Extra Small, Small, Medium (default), Large, Extra Large</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 theme="secondary" size="extra-small">Extra Small</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="small">Small</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary">Medium (default)</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="large">Large</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="extra-large">Extra Large</nitrozen-button-v2>
      </div>

      <!-- V2: Default Appearance - Secondary Theme - States -->
      <p style="padding: 0 20px;">States: Normal, Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 theme="secondary" size="extra-small">Normal XS</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="small">Normal S</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary">Normal M</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="large">Normal L</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="extra-large">Normal XL</nitrozen-button-v2>
      </div>
      <div class="main-div space-between">
        <nitrozen-button-v2 theme="secondary" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 theme="secondary" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Positive Appearance - Primary Theme -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Positive Appearance - Primary Theme</h3>
      <p style="padding: 0 20px;">Sizes: Extra Small, Small, Medium (default), Large, Extra Large</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="positive" size="extra-small">Positive XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" size="small">Positive S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive">Positive M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" size="large">Positive L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" size="extra-large">Positive XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Disabled State</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="positive" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Positive Appearance - Secondary Theme -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Positive Appearance - Secondary Theme</h3>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="extra-small">Positive XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="small">Positive S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary">Positive M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="large">Positive L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="extra-large">Positive XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Disabled State</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="positive" theme="secondary" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Negative Appearance - Primary Theme -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Negative Appearance - Primary Theme</h3>
      <p style="padding: 0 20px;">Sizes: Extra Small, Small, Medium (default), Large, Extra Large</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="negative" size="extra-small">Negative XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" size="small">Negative S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative">Negative M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" size="large">Negative L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" size="extra-large">Negative XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Disabled State</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="negative" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Negative Appearance - Secondary Theme -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Negative Appearance - Secondary Theme</h3>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="extra-small">Negative XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="small">Negative S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary">Negative M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="large">Negative L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="extra-large">Negative XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Disabled State</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="negative" theme="secondary" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Warning Appearance - Primary Theme -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Warning Appearance - Primary Theme</h3>
      <p style="padding: 0 20px;">Sizes: Extra Small, Small, Medium (default), Large, Extra Large</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="warning" size="extra-small">Warning XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" size="small">Warning S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning">Warning M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" size="large">Warning L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" size="extra-large">Warning XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Disabled State</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="warning" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Warning Appearance - Secondary Theme -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Warning Appearance - Secondary Theme</h3>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="extra-small">Warning XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="small">Warning S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary">Warning M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="large">Warning L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="extra-large">Warning XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Disabled State</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="extra-small" :disabled="true">Disabled XS</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="small" :disabled="true">Disabled S</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" :disabled="true">Disabled M</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="large" :disabled="true">Disabled L</nitrozen-button-v2>
        <nitrozen-button-v2 appearance="warning" theme="secondary" size="extra-large" :disabled="true">Disabled XL</nitrozen-button-v2>
      </div>

      <!-- V2: Rounded Buttons -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Rounded Buttons - All Appearances</h3>
      <p style="padding: 0 20px;">Default Appearance</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 :rounded="true" size="extra-small">Rounded XS</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" size="small">Rounded S</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true">Rounded M</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" size="large">Rounded L</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" size="extra-large">Rounded XL</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">All Appearances - Rounded</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 :rounded="true">Default</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" appearance="positive">Positive</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" appearance="negative">Negative</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" appearance="warning">Warning</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">All Appearances - Rounded - Secondary Theme</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 :rounded="true" theme="secondary">Default</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" theme="secondary" appearance="positive">Positive</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" theme="secondary" appearance="negative">Negative</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" theme="secondary" appearance="warning">Warning</nitrozen-button-v2>
      </div>
      <p style="padding: 0 20px;">Rounded - Disabled</p>
      <div class="main-div space-between">
        <nitrozen-button-v2 :rounded="true" :disabled="true">Disabled</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" :disabled="true" appearance="positive">Positive Disabled</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" :disabled="true" appearance="negative">Negative Disabled</nitrozen-button-v2>
        <nitrozen-button-v2 :rounded="true" :disabled="true" appearance="warning">Warning Disabled</nitrozen-button-v2>
      </div>

      <!-- V2: Comparison Grid - All Appearances x All Sizes -->
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Comparison Grid - All Combinations</h3>
      <p style="padding: 0 20px;">Primary Theme - All Appearances x All Sizes</p>
      <div class="main-div">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #ddd;">
              <th style="padding: 10px; text-align: left;">Size / Appearance</th>
              <th style="padding: 10px;">Default</th>
              <th style="padding: 10px;">Positive</th>
              <th style="padding: 10px;">Negative</th>
              <th style="padding: 10px;">Warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px;">Extra Small</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-small">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-small" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-small" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-small" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Small</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="small">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="small" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="small" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="small" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Medium</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2>Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Large</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="large">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="large" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="large" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="large" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Extra Large</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-large">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-large" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-large" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 size="extra-large" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="padding: 0 20px;">Secondary Theme - All Appearances x All Sizes</p>
      <div class="main-div">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #ddd;">
              <th style="padding: 10px; text-align: left;">Size / Appearance</th>
              <th style="padding: 10px;">Default</th>
              <th style="padding: 10px;">Positive</th>
              <th style="padding: 10px;">Negative</th>
              <th style="padding: 10px;">Warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px;">Extra Small</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-small">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-small" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-small" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-small" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Small</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="small">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="small" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="small" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="small" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Medium</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Large</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="large">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="large" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="large" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="large" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
            <tr>
              <td style="padding: 10px;">Extra Large</td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-large">Default</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-large" appearance="positive">Positive</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-large" appearance="negative">Negative</nitrozen-button-v2></td>
              <td style="padding: 10px; text-align: center;"><nitrozen-button-v2 theme="secondary" size="extra-large" appearance="warning">Warning</nitrozen-button-v2></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ====================================== -->
      <!-- V1 vs V2 SIDE BY SIDE COMPARISON -->
      <!-- ====================================== -->
      <h2 style="padding: 20px; background: #2E31BE; color: white; margin-top: 40px;">V1 vs V2 Side by Side Comparison</h2>
      
      <!-- Comparison Legend -->
      <div class="main-div" style="background: #f8f9fa; border-left: 4px solid #6c757d;">
        <h4 style="margin: 0 0 10px 0;">Quick Reference</h4>
        <div style="display: flex; gap: 40px; font-size: 14px;">
          <div>
            <strong style="color: #ffc107;">V1 (nitrozen-button)</strong>
            <ul style="margin: 5px 0; padding-left: 20px;">
              <li>Uses directives: <code>v-flat-btn</code>, <code>v-stroke-btn</code></li>
              <li>3 sizes: small, medium, large</li>
              <li>2 themes: primary, secondary</li>
            </ul>
          </div>
          <div>
            <strong style="color: #28a745;">V2 (nitrozen-button-v2)</strong>
            <ul style="margin: 5px 0; padding-left: 20px;">
              <li>No directives needed</li>
              <li>5 sizes: extra-small to extra-large</li>
              <li>4 appearances: default, positive, negative, warning</li>
              <li>2 themes: primary (filled), secondary (outlined)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 style="padding: 10px 20px; background: #e0e0e0;">Primary Buttons Comparison</h3>
      <div class="main-div space-between">
        <div style="text-align: center;">
          <p>V1 Flat Primary</p>
          <nitrozen-button v-flat-btn>V1 Flat</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V2 Default Primary</p>
          <nitrozen-button-v2>V2 Default</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V1 Stroke Primary</p>
          <nitrozen-button v-stroke-btn>V1 Stroke</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V2 Default Secondary</p>
          <nitrozen-button-v2 theme="secondary">V2 Secondary</nitrozen-button-v2>
        </div>
      </div>

      <h3 style="padding: 10px 20px; background: #e0e0e0;">Size Comparison</h3>
      <div class="main-div space-between">
        <div style="text-align: center;">
          <p>V1 Small</p>
          <nitrozen-button v-flat-btn>Small</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V1 Medium</p>
          <nitrozen-button v-flat-btn size="medium">Medium</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V1 Large</p>
          <nitrozen-button v-flat-btn size="large">Large</nitrozen-button>
        </div>
      </div>
      <div class="main-div space-between">
        <div style="text-align: center;">
          <p>V2 Extra Small</p>
          <nitrozen-button-v2 size="extra-small">XS</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V2 Small</p>
          <nitrozen-button-v2 size="small">Small</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V2 Medium</p>
          <nitrozen-button-v2>Medium</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V2 Large</p>
          <nitrozen-button-v2 size="large">Large</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V2 Extra Large</p>
          <nitrozen-button-v2 size="extra-large">XL</nitrozen-button-v2>
        </div>
      </div>

      <h3 style="padding: 10px 20px; background: #e0e0e0;">Disabled States Comparison</h3>
      <div class="main-div space-between">
        <div style="text-align: center;">
          <p>V1 Flat Disabled</p>
          <nitrozen-button v-flat-btn :disabled="true">V1 Disabled</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V1 Stroke Disabled</p>
          <nitrozen-button v-stroke-btn :disabled="true">V1 Disabled</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V2 Primary Disabled</p>
          <nitrozen-button-v2 :disabled="true">V2 Disabled</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V2 Secondary Disabled</p>
          <nitrozen-button-v2 theme="secondary" :disabled="true">V2 Disabled</nitrozen-button-v2>
        </div>
      </div>

      <h3 style="padding: 10px 20px; background: #e0e0e0;">Rounded Buttons Comparison</h3>
      <div class="main-div space-between">
        <div style="text-align: center;">
          <p>V1 Rounded Flat</p>
          <nitrozen-button v-flat-btn :rounded="true">V1 Rounded</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V1 Rounded Stroke</p>
          <nitrozen-button v-stroke-btn :rounded="true">V1 Rounded</nitrozen-button>
        </div>
        <div style="text-align: center;">
          <p>V2 Rounded Primary</p>
          <nitrozen-button-v2 :rounded="true">V2 Rounded</nitrozen-button-v2>
        </div>
        <div style="text-align: center;">
          <p>V2 Rounded Secondary</p>
          <nitrozen-button-v2 theme="secondary" :rounded="true">V2 Rounded</nitrozen-button-v2>
        </div>
      </div>

      <!-- Gropup Button -->
      <div class="main-div">
        <div class="grouping">
          <div class="width-50">
            <nitrozen-button v-flat-btn>Save</nitrozen-button>
            <nitrozen-button v-stroke-btn>Cancel</nitrozen-button>
          </div>

          <div class="width-50">
            <nitrozen-button v-flat-btn>Save</nitrozen-button>
            <nitrozen-button>Cancel</nitrozen-button>
          </div>
        </div>
      </div>

      <!-- Large Button -->
      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :size="'large'">Large Button</nitrozen-button>
        <nitrozen-button v-flat-btn :size="'large'" :theme="'secondary'">Large Button</nitrozen-button>
      </div>

      <!-- Basic Button -->
      <div class="main-div space-between">
        <nitrozen-button :href="'https://google.com'">Primary</nitrozen-button>
        <nitrozen-button :href="'https://google.com'" :theme="'secondary'">Secondary</nitrozen-button>
        <nitrozen-button :href="'https://google.com'" :focused="true">Focused</nitrozen-button>
        <!-- <nitrozen-button v-flat-btn :large="true" :theme="'secondary'">Large Button</nitrozen-button>       -->
      </div>

      <div class="main-div space-between">
        <nitrozen-button v-flat-btn :icon="'facebook'" :theme="'secondary'">Facebook</nitrozen-button>
        <nitrozen-button v-flat-btn :icon="'white-dots'" :theme="'secondary'">Facebook</nitrozen-button>
        <nitrozen-button @click="autofocusSearch = !autofocusSearch" v-flat-btn :icon="'bag'"
          :theme="'secondary'">Bag</nitrozen-button>
      </div>
      <!-- Toggle Button -->
      <div class="main-div space-between">
        <nitrozen-toggle-btn></nitrozen-toggle-btn>
        <nitrozen-toggle-btn v-model="abcd" @change="checkValue"></nitrozen-toggle-btn>
      </div>
      <div class="main-div space-between">
        <span>Secondary</span> 
      </div>
      <div class="main-div space-between">     
        <nitrozen-icon-button :icon="'cross'"  :kind="'secondary'" :appearance="'positive'" :size="'large'"/>
        <nitrozen-icon-button :icon="'cross'"  :kind="'secondary'" :appearance="'negative'" :size="'large'"/>
        <nitrozen-icon-button  :icon="'cross'" :kind="'secondary'"  :size="'large'"/>
        <nitrozen-icon-button  :icon="'cross'" :kind="'secondary'" :disabled="true"  :size="'large'"/>
      </div>
      <div class="main-div space-between">
        <span>Tertiary</span> 
      </div>
      <div class="main-div space-between">      
        <nitrozen-icon-button :icon="'cross'"  :kind="'tertiary'" :appearance="'positive'" :size="'large'"/>
        <nitrozen-icon-button :icon="'cross'"  :kind="'tertiary'" :appearance="'negative'" :size="'large'"/>
        <nitrozen-icon-button  :icon="'cross'" :kind="'tertiary'"  :size="'large'"/>
        <nitrozen-icon-button  :icon="'cross'" :kind="'tertiary'" :disabled="true"  :size="'large'"/>
      </div>

      <div class="main-div space-between">
        <span>Primary</span> 
      </div>
      <div class="main-div space-between">      
        <nitrozen-icon-button :icon="'cross'"  :kind="'primary'" :appearance="'positive'" :size="'large'"/>
        <nitrozen-icon-button :icon="'cross'"  :kind="'primary'" :appearance="'negative'" :size="'large'"/>
        <nitrozen-icon-button  :icon="'cross'" :kind="'primary'"  :size="'large'"/>
        <nitrozen-icon-button  :icon="'cross'" :kind="'primary'" :disabled="true"  :size="'large'"/>
      </div>
      <!-- Input -->
      <div class="main-div">
        <nitrozen-input :autofocus="autofocusSearch" v-model="inputModel" @input="getState" :required="true"
          :label="'Input with Error Message'"></nitrozen-input>
        <nitrozen-error v-if="inputModel == ''">Field is required</nitrozen-error>
      </div>

      <div class="main-div">
        <nitrozen-input :id="2" :placeholder="'Enter Name'" :label="'Input with Placeholder'"></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input :id="3" :type="'search'" :placeholder="'Search'" :label="'Input with Search'"></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input id="4" label="OTP" placeholder="Enter OTP Code" autocomplete="one-time-code"></nitrozen-input>
      </div>

      <!-- <div class="main-div">
            <nitrozen-input :id="4" :type="'text'" :placeholder="'Enter Name'" :label="'Input with Loader'" :search="true"></nitrozen-input>
      </div>-->

      <div class="main-div">
        <nitrozen-input :id="5" :disabled="true" :type="'text'" :placeholder="'Enter Name'" :label="'Disabled Input'"
          v-model="inputModel"></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input :id="6" :showSearchIcon="true" :type="'text'" :placeholder="'Enter Name'"
          :label="'Search Icon Input'" v-model="inputModel"></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input :id="7" :showTooltip="true" :tooltipText="'Tooltip text Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip text'
          " :type="'text'" :placeholder="'Enter Name'" :label="'Search Icon Input'"
          v-model="inputModel"></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input :type="'number'" :placeholder="'Enter Number'" :label="'Number'" :min="1" :max="10"
          v-model="numberModel"></nitrozen-input>
      </div>

      <div class="main-div">
        <nitrozen-input :id="8" :type="'textarea'" :placeholder="'Enter description'" :label="'Textarea'"
          v-model="inputModel" v-bind:maxlength="15"></nitrozen-input>
      </div>

      <div class="main-div space-between">
        <nitrozen-input :id="9" :type="'text'" :placeholder="'First Name'" :label="'First Name'"></nitrozen-input>
        <nitrozen-input :id="10" :type="'text'" :placeholder="'Last Name'" :label="'Last Name'"></nitrozen-input>
      </div>
      <div class="main-div space-between">
        <nitrozen-input class="box" :id="11" :type="'text'" :showPrefix="true" prefix="%"
          :placeholder="'Percentage'"></nitrozen-input>
        <nitrozen-input class="box" :id="12" :type="'text'" :showSuffix="true" suffix="₹"
          :placeholder="'Rupee'"></nitrozen-input>
        <nitrozen-input class="box" :id="13" :type="'text'" :showPrefix="true" prefix="$" :showSuffix="true"
          suffix=".00"></nitrozen-input>
        <nitrozen-input class="box" :id="14" :type="'text'" :showPrefix="true" prefix="https://example.com/users/"
          :placeholder="'Url'"></nitrozen-input>

        <nitrozen-input class="box" :id="15" :type="'text'" :showPrefix="true" :custom="true" :placeholder="'value'">
          <nitrozen-dropdown :items="dropdownItemsPrefix" v-model="selectedDropdown"></nitrozen-dropdown>
        </nitrozen-input>

        <nitrozen-input class="box" id="a11" :type="'text'" :showSuffix="true" :custom="true" :placeholder="'value'">
          <nitrozen-dropdown :items="dropdownItemsPrefix" v-model="selectedDropdown" lable="testing"
            disabled="true"></nitrozen-dropdown>
        </nitrozen-input>
      </div>

      <div class="main-div space-between">
        <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'1'">Basic Radio
          1</nitrozen-radio>
        <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'2'">Basic Radio
          2</nitrozen-radio>
        {{ radioModel }}
      </div>

      <div class="main-div space-between">
        <nitrozen-checkbox v-model="singleCheckboxModel">Test Single Checkbox</nitrozen-checkbox>
        <span>Checkbox model value: {{ singleCheckboxModel }}</span>
      </div>
      <div class="main-div space-between">
        <nitrozen-checkbox v-model="checkArray" @change="testFunc($event)" checkboxValue="Check 1">Check
          1</nitrozen-checkbox>
        <nitrozen-checkbox checkboxValue="Check 2" @change="testFunc($event)" v-model="checkArray">Check
          2</nitrozen-checkbox>
        <nitrozen-checkbox checkboxValue="Check 3" @change="testFunc($event)" v-model="checkArray">Check
          3</nitrozen-checkbox>
        <nitrozen-checkbox checkboxValue="Check 4" @change="testFunc($event)" v-model="checkArray">Check
          4</nitrozen-checkbox>
        <span>Checked names: {{ checkArray }}</span>

        <nitrozen-checkbox :disabled="true" v-model="abcd">Checkbox</nitrozen-checkbox>
        {{ abcd }}
      </div>

      <div class="main-div space-between">
        <nitrozen-autocomplete :id="'auto'" v-model="autoModel" :dataset="countries"
          :placeholder="'Start Type'"></nitrozen-autocomplete>
      </div>

      <div class="main-div space-between">
        <nitrozen-chips>Nitro Basic Chips</nitrozen-chips>
        <nitrozen-chips :deletable="true">Nitro Delete Chips</nitrozen-chips>
        <nitrozen-chips :inProgress="true">Nitro Progress Chips</nitrozen-chips>
        <nitrozen-chips :error="true">Nitro Error Chips</nitrozen-chips>
        <nitrozen-chips :disable="true">Disable Chips</nitrozen-chips>
      </div>

      <div class="main-div space-between">
        <nitrozen-chips @click="$snackbar.global.showError('Error Snackbar')" :state="'error'">Nitro
          Error</nitrozen-chips>
        <nitrozen-chips @click="$snackbar.global.showSuccess('Success snackbar')" :state="'success'">Nitro Success
          Chips</nitrozen-chips>
        <nitrozen-chips @click="$snackbar.global.showWarning('Warning snackbar')" :state="'progress'">Nitro
          Progress</nitrozen-chips>
        <nitrozen-chips @click="$snackbar.global.show('Default snackbar')" :state="'selected'">Nitro
          Selected</nitrozen-chips>
      </div>

      <div class="main-div">
        <span class="chips-input">
          <nitrozen-chips v-for="(item, index) in fruits" :key="index">
            {{ item.name }}
            <nitrozen-inline :icon="'cross'" class="nitrozen-icon" v-on:click="removeFruit(index)"></nitrozen-inline>
          </nitrozen-chips>
        </span>

        <nitrozen-input v-model="fruitName" v-on:keyup.enter="addFruit"></nitrozen-input>
      </div>

      <div class="main-div">
        <span class="chips-input">
          <nitrozen-chips :multiSelect="true" :theme="'secondary'" v-on:click="setSelectItems(item)"
            v-for="(item, index) in dataItems" :key="index">{{ item }}</nitrozen-chips>
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
        <nitrozen-dropdown label="Custom Dropdown" :items="dropdownItems" v-model="selectedDropdown">
          <template v-slot:option="slotProps">
            <div class="custom-dropdown-option" :class="{ selected: slotProps.selected }">
              {{ slotProps.item }} {{ slotProps.selected }}
            </div>
          </template>
        </nitrozen-dropdown>
        <nitrozen-dropdown label="State" :items="dropdownItems" v-model="selectedDropdown"></nitrozen-dropdown>
        <nitrozen-dropdown v-model="selectedDropdown" :items="[
          ...dropdownItems,
          ...dropdownItems,
          ...dropdownItems,
          ...dropdownItems,
          ...dropdownItems,
          ...dropdownItems,
        ]" @change="changeEvent"></nitrozen-dropdown>
        <nitrozen-dropdown label="State Advanced" :items="dropdownItems" v-model="selectedDropdown"
          :required="true"></nitrozen-dropdown>
        <nitrozen-dropdown label="State Disabled" :items="dropdownItems" v-model="selectedDropdown"
          :disabled="true"></nitrozen-dropdown>
      </div>

      <div class="main-div space-between">
        <nitrozen-dropdown label="Multiple State" :items="dropdownItemsFiltered" @searchInputChange="dropdownInputChange"
          :multiple="true" :enable_select_all="true" @change="changeEvent" v-model="multiSelect"
          :searchable="true"></nitrozen-dropdown>
      </div>

      <div class="main-div space-between">
        <nitrozen-pagination name="Pages" v-model="paginationConfig" @change="paginationChange"
          :pageSizeOptions="[5, 10, 20, 50]"></nitrozen-pagination>
      </div>

      <div class="main-div space-between">
        <nitrozen-pagination name="Pages" mode="cursor" v-model="cursorPaginationConfig" @change="paginationChange"
          :pageSizeOptions="[5, 10, 20, 50]"></nitrozen-pagination>
      </div>

      <div class="main-div space-between">
        <nitrozen-button v-flat-btn @click="openDialog('alert')">Alert Dialog</nitrozen-button>
        <nitrozen-button v-flat-btn @click="openDialog('confirm')">Confirmation Dialog</nitrozen-button>
        <nitrozen-button v-flat-btn @click="openDialog">Select Dialog</nitrozen-button>
        <nitrozen-button v-flat-btn @click="openDialog('choose')">Choose Dialog</nitrozen-button>
      </div>

      <nitrozen-dialog ref="alert_dialog" title="Success" @close="onCloseDialog">
        <template v-slot:body name="body">Image Uploaded Successfully</template>
      </nitrozen-dialog>
      <nitrozen-dialog ref="confirm_dialog" title="Confirm" @close="onCloseDialog">
        <template v-slot:body name="body">Are you sure you want to delete this company?</template>
      </nitrozen-dialog>
      <nitrozen-dialog ref="choose_dialog" title="Choose Radio" @close="onCloseDialog">
        <template v-slot:body name="body">
          <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'1'">Basic Radio
            1</nitrozen-radio>
          <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'2'">Basic Radio
            2</nitrozen-radio>
          <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'3'">Basic Radio
            3</nitrozen-radio>
          <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'4'"
            style="height:400px">Basic Radio 4</nitrozen-radio>
          <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'5'">Basic Radio
            4</nitrozen-radio>
        </template>
      </nitrozen-dialog>
    </div>
  </div>
</template>

<script>
import { countries } from "./countries";
export default {
  name: "App",
  data() {
    return {
      tabArray: ["Item1", "Item2", "Item3"],
      multiSelect: [11, 12, 13, 14, 15, 21, 22, 23, 24, 25],
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
    handleScroll1(){
      const temp = this.dropdownItemsFiltered;
      if(this.dropdownItemsFiltered.length < 50){
      this.dropdownItemsFiltered = [...this.dropdownItemsFiltered,...temp];
      }
    },
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
    someFunc(openModal = false) {
      this.numberOfClick += 1;
      if (openModal) {
        const config = {
          width: '100%',
          showCloseButton: true,
          neutralButtonLabel: false,
          height: '50%',
          'border-radius': '12px',
          dismissible: false
        };
        this.$refs['more-filters-dialog'].open(config);
      }
    },
    onCloseAction() {
      this.$refs['more-filters-dialog'].close();

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
    setSelectItems: function (item) {
      let index = this.selectedItems.indexOf(item);
      if (index == -1) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(index, 1);
      }
    },
    changeEvent: function (event) {
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
