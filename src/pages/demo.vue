<template>
<div id="app">


    <div class="main-div">
        <div class="main-div space-between">
            <div>Searchable Dropdown</div>
            <nitrozen-dropdown
                label="State"
                id="searchable-dropdown-1"
                :items="dropdownItemsFiltered"
                v-model="selectedDropdown"
                :searchable="true"
                @searchInputChange="dropdownInputChange"
            >
            </nitrozen-dropdown>
        </div>
        <div class="main-div space-between">
            <nitrozen-menu>
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
        <div class="main-div">
            <nitrozen-stepper
                    :elements = "stepper.elements"
                    :activeIndex = "stepper.activeIndex"
                    :maxActiveIndex = "stepper.maxActiveIndex"
                    @stepperClicked = "stepperClicked"
            >
            </nitrozen-stepper>
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
        
        
        <!-- Flat Button -->
        <div class="main-div space-between">
            <nitrozen-button v-flat-btn @click="someFunc">Primary Flat {{numberOfClick}}</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-flat-btn>Hover Flat</nitrozen-button>
            </div>
            <nitrozen-button v-flat-btn :showProgress="true"></nitrozen-button>
            <nitrozen-button v-flat-btn :focused="true">Focused Flat</nitrozen-button>
            <nitrozen-button v-flat-btn :disabled="true">Disabled Flat</nitrozen-button>

        </div>

        <!-- Flat Stroke Button -->
        <div class="main-div space-between">
            <nitrozen-button v-stroke-btn>Primary Stroke</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-stroke-btn>Hover Stroke</nitrozen-button>
            </div>
            <nitrozen-button v-stroke-btn :focused="true">Focused Stroke</nitrozen-button>
            <nitrozen-button v-stroke-btn :disabled="true">Disabled Stroke</nitrozen-button>
        </div>

        <!-- Rounded Button -->
        <div class="main-div space-between">
            <nitrozen-button v-flat-btn :rounded="true">Rounded</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-flat-btn :rounded="true">Hover</nitrozen-button>
            </div>
            <nitrozen-button v-flat-btn :rounded="true" :showProgress="true"></nitrozen-button>
            <nitrozen-button v-flat-btn :rounded="true" :focused="true">Focused</nitrozen-button>
            <nitrozen-button v-flat-btn :rounded="true" :disabled="true">Disabled</nitrozen-button>
        </div>

        <!-- Rounded Stroke Button -->
        <div class="main-div space-between">
            <nitrozen-button v-stroke-btn :rounded="true">Rounded</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-stroke-btn :rounded="true">Hover</nitrozen-button>
            </div>
            <nitrozen-button v-stroke-btn :rounded="true" :focused="true">Focused</nitrozen-button>
            <nitrozen-button v-stroke-btn :rounded="true" :disabled="true">Disabled</nitrozen-button>
        </div>

        <!-- Secondary Flat Button -->
        <div class="main-div space-between">
            <nitrozen-button v-flat-btn :theme="'secondary'">Primary Flat</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-flat-btn :theme="'secondary'">Hover Flat</nitrozen-button>
            </div>
            <nitrozen-button v-flat-btn :showProgress="true" :theme="'secondary'"></nitrozen-button>
            <nitrozen-button v-flat-btn :focused="true" :theme="'secondary'">Focused Flat</nitrozen-button>
            <nitrozen-button v-flat-btn :disabled="true" :theme="'secondary'">Disabled Flat</nitrozen-button>
        </div>

        <!-- Secondary Stroke Button -->
        <div class="main-div space-between">
            <nitrozen-button v-stroke-btn :theme="'secondary'">Primary</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-stroke-btn :theme="'secondary'">Hover</nitrozen-button>
            </div>
            <nitrozen-button v-stroke-btn :focused="true" :theme="'secondary'">Focused Stroke</nitrozen-button>
            <nitrozen-button v-stroke-btn :disabled="true" :theme="'secondary'">Disabled</nitrozen-button>
        </div>

        <!-- Secondary Rounded Button -->
        <div class="main-div space-between">
            <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true">Rounded</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-flat-btn :theme="'secondary'" :rounded="true">Hover</nitrozen-button>
            </div>
            <nitrozen-button v-flat-btn :showProgress="true" :theme="'secondary'" :rounded="true"></nitrozen-button>
            <nitrozen-button v-flat-btn :focused="true" :rounded="true" :theme="'secondary'">Disabled</nitrozen-button>
            <nitrozen-button v-flat-btn :disabled="true" :rounded="true" :theme="'secondary'">Disabled</nitrozen-button>
        </div>

        <!-- Secondary Rounded Stroke Button -->
        <div class="main-div space-between">
            <nitrozen-button v-stroke-btn :rounded="true" :theme="'secondary'">Primary</nitrozen-button>
            <div class="hover-new">
                <nitrozen-button v-stroke-btn :rounded="true" :theme="'secondary'">Hover</nitrozen-button>
            </div>
            <nitrozen-button v-stroke-btn :rounded="true" :focused="true" :theme="'secondary'">Focused</nitrozen-button>
            <nitrozen-button v-stroke-btn :rounded="true" :disabled="true" :theme="'secondary'">Disabled</nitrozen-button>
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
            <nitrozen-button v-flat-btn :icon="'bag'" :theme="'secondary'">Bag</nitrozen-button>
        </div>
        <!-- Toggle Button -->
        <div class="main-div space-between">
            <nitrozen-toggle-btn></nitrozen-toggle-btn>
            <nitrozen-toggle-btn v-model="abcd" @change="checkValue"></nitrozen-toggle-btn>
        </div>

        <!-- Input -->
        <div class="main-div">
            <nitrozen-input :id="1" v-model="inputModel" @input="getState" :label="'Input with Error Message'"></nitrozen-input>
            <nitrozen-error v-if="inputModel == ''">Field is required</nitrozen-error>
        </div>

        <div class="main-div">
            <nitrozen-input :id="2" :placeholder="'Enter Name'" :label="'Input with Placeholder'"></nitrozen-input>
        </div>

        <div class="main-div">
            <nitrozen-input :id="3" :type="'search'" :placeholder="'Search'" :label="'Input with Search'"></nitrozen-input>
        </div>

        <!-- <div class="main-div">
            <nitrozen-input :id="4" :type="'text'" :placeholder="'Enter Name'" :label="'Input with Loader'" :search="true"></nitrozen-input>
        </div> -->

        <div class="main-div">
            <nitrozen-input :id="5" :disabled="true" :type="'text'" :placeholder="'Enter Name'" :label="'Disabled Input'" v-model="inputModel"></nitrozen-input>
        </div>

        <div class="main-div">
            <nitrozen-input :id="6" :showSearchIcon="true" :type="'text'" :placeholder="'Enter Name'" :label="'Search Icon Input'" v-model="inputModel"></nitrozen-input>
        </div>

        <div class="main-div">
            <nitrozen-input :id="7" :showTooltip="true" :tooltipText="'Tooltip text Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip text'" :type="'text'" :placeholder="'Enter Name'" :label="'Search Icon Input'" v-model="inputModel"></nitrozen-input>
        </div>

        <div class="main-div">
            <nitrozen-input :id="8" :type="'textarea'" :placeholder="'Enter description'" :label="'Textarea'" v-model="inputModel" v-bind:maxlength="15"></nitrozen-input>
        </div>

        <div class="main-div space-between">
            <nitrozen-input :id="9" :type="'text'" :placeholder="'First Name'" :label="'First Name'"></nitrozen-input>
            <nitrozen-input :id="10" :type="'text'" :placeholder="'Last Name'" :label="'Last Name'"></nitrozen-input>

        </div>

        <div class="main-div space-between">
            <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'1'">Basic Radio 1</nitrozen-radio>
            <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'2'">Basic Radio 2</nitrozen-radio>
            {{radioModel}}
        </div>

        <div class="main-div space-between">
            <!-- <nitrozen-checkbox :id="'check1'" v-model="checkArray" @change="testFunc($event)" value="'Check 1'">Check 1</nitrozen-checkbox> 
        <nitrozen-checkbox :id="'check2'" value="'Check 2'" @change="testFunc($event)" v-model="checkArray">Check 2</nitrozen-checkbox>        
        <nitrozen-checkbox :id="'check3'" value="'Check 3'" @change="testFunc($event)" v-model="checkArray">Check 3</nitrozen-checkbox>        
        <nitrozen-checkbox :id="'check4'" value="'Check 4'" @change="testFunc($event)" v-model="checkArray">Check 4</nitrozen-checkbox>        
    <span>Checked names: {{ checkArray }}</span> -->

            <nitrozen-checkbox :id="'check1'" @change="checkValue" v-model="abcd">Checkbox</nitrozen-checkbox>

            <!-- <div id='example-3'>
    <input type="checkbox" id="jack" value="Jack" @change="testFunc($event)"  v-model="checkArray">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" @change="testFunc($event)" v-model="checkArray">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" @change="testFunc($event)"  v-model="checkArray">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkArray }}</span>
    </div> -->

        </div>
        <!-- <div class="main-div space-between">
        <nitrozen-radio :selected="true">Selected Radio</nitrozen-radio>        
    </div> -->
        <!-- <div class="main-div space-between">
        <nitrozen-radio :disabled="true">Disabled Radio</nitrozen-radio>        
    </div> -->

        <div class="main-div space-between">
            <nitrozen-autocomplete :id="'auto'" v-model="autoModel" :dataset="autoArray" :placeholder="'Start Type'"></nitrozen-autocomplete>
        </div>

        <div class="main-div space-between">
            <nitrozen-chips>Nitro Basic Chips</nitrozen-chips>
            <nitrozen-chips :deletable="true">Nitro Delete Chips</nitrozen-chips>
            <nitrozen-chips :inProgress="true">Nitro Progress Chips</nitrozen-chips>
            <nitrozen-chips :error="true">Nitro Error Chips</nitrozen-chips>        
            <nitrozen-chips :disable="true">Disable Chips</nitrozen-chips>
        </div>

        <div class="main-div space-between">
            <nitrozen-chips :state="'error'">Nitro Error</nitrozen-chips>
            <nitrozen-chips :state="'success'">Nitro Success Chips</nitrozen-chips>
            <nitrozen-chips :state="'progress'">Nitro Progress</nitrozen-chips>
            <nitrozen-chips :state="'selected'">Nitro Selected</nitrozen-chips>
        </div>

        <div class="main-div">
            <span class="chips-input">
                <nitrozen-chips v-for="(item, index) in fruits" :key="index">{{item.name}}
                    <nitrozen-inline :icon="'cross'" class="nitrozen-icon" v-on:click="removeFruit(index)"></nitrozen-inline>
                </nitrozen-chips>
            </span>

            <nitrozen-input v-model="fruitName" v-on:keyup.enter="addFruit"></nitrozen-input>
        </div>

        <div class="main-div">
            <span class="chips-input">
                <nitrozen-chips :multiSelect="true" :theme="'secondary'" v-on:click="setSelectItems(item)" v-for="(item, index) in dataItems" :key="index">{{item}}
                </nitrozen-chips>
            </span>
            {{selectedItems.toString()}}

        </div>

        <div class="main-div">
            <span class="chips-input">
                <nitrozen-badge>Normal</nitrozen-badge>
                <nitrozen-badge state="info">Info</nitrozen-badge>
                <nitrozen-badge state="success">Success</nitrozen-badge>
                <nitrozen-badge state="warn">Warning</nitrozen-badge>
                <nitrozen-badge state="error">Error</nitrozen-badge>
                <nitrozen-badge state="disable">Disable</nitrozen-badge>
            </span>
        </div>
        
        <div class="main-div">
            <span class="chips-input">
                <nitrozen-badge :fill="true" >Normal</nitrozen-badge>
                <nitrozen-badge :fill="true" state="info">Info</nitrozen-badge>
                <nitrozen-badge :fill="true" state="success">Success</nitrozen-badge>
                <nitrozen-badge :fill="true" state="warn">Warning</nitrozen-badge>
                <nitrozen-badge :fill="true" state="error">Error</nitrozen-badge>
                <nitrozen-badge :fill="true" state="disable">Disable</nitrozen-badge>
            </span>
        </div>

        <div class="main-div space-between">
                <nitrozen-dropdown label="State" :items="dropdownItems" v-model="selectedDropdown" >
                </nitrozen-dropdown>
                <nitrozen-dropdown v-model="selectedDropdown" :items="[...dropdownItems,...dropdownItems,...dropdownItems,...dropdownItems,...dropdownItems,...dropdownItems]" @change="changeEvent">
                </nitrozen-dropdown>
                <nitrozen-dropdown label="State Advanced" :items="dropdownItems" v-model="selectedDropdown" :required="true">
                </nitrozen-dropdown>
                <nitrozen-dropdown label="State Disabled" :items="dropdownItems" v-model="selectedDropdown" :disabled="true">
                </nitrozen-dropdown>
        </div>

        <div class="main-div space-between">
            <nitrozen-pagination name="Pages" v-model="paginationConfig" @change="paginationChange" :pageSizeOptions="[5,10,20,50]">
                            </nitrozen-pagination>
        </div>

        <div class="main-div space-between">
            <nitrozen-button v-flat-btn @click="openDialog('alert')"> Alert Dialog </nitrozen-button>
            <nitrozen-button v-flat-btn @click="openDialog('confirm')"> Confirmation Dialog </nitrozen-button>
            <nitrozen-button v-flat-btn @click="openDialog"> Select Dialog </nitrozen-button>
            <nitrozen-button v-flat-btn @click="openDialog('choose')"> Choose Dialog </nitrozen-button>
        </div>

        <nitrozen-dialog ref="alert_dialog" title="Success" @close="onCloseDialog"> 
            <template v-slot:body name="body">Image Uploaded Successfully</template>
        </nitrozen-dialog>
        <nitrozen-dialog ref="confirm_dialog" title="Confirm" @close="onCloseDialog"> 
            <template v-slot:body name="body">Are you sure you want to delete this company?</template>
        </nitrozen-dialog>
        <nitrozen-dialog ref="choose_dialog" title="Choose Radio" @close="onCloseDialog"> 
            <template v-slot:body name="body">
                <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'1'">Basic Radio 1</nitrozen-radio>
                <nitrozen-radio :name="'radio-1'" v-model="radioModel" @change="changeEvent" :radioValue="'2'">Basic Radio 2</nitrozen-radio>
            </template>
        </nitrozen-dialog>

    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            numberOfClick: 0,
            abcd: false,
            inputModel: 'Some Value',
            autoModel: '',
            checkArray: [],
            radioModel: '1',
            dropdownItems: [{
             text: 'Maharashtra',
             value: 1,   
            },{
             text: 'Andhra Pradesh',
             value: 2,   
            },{
             text: 'West Bengal',
             value: 3,   
            }],
            dropdownItemsFiltered:[],
            selectedDropdown: 2,
            fruits: [{
                    name: 'Lemon'
                },
                {
                    name: 'Lime'
                },
                {
                    name: 'Apple'
                }
            ],
            dataItems: ['Tess','Kurtas','Watches','Belt','Tie','Jeans','Sunglasses'],
            selectedItems: [],
            fruitName: '',
            autoArray: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
            stepper:{
                activeIndex: 0,
                maxActiveIndex: 1,
                elements:[
                    {
                        text:"Step 1"
                    },
                    {
                        text:"Step 2"
                    },
                    {
                        text:"Step 3"
                    },
                    {
                        text:"Step 4"
                    },
                    {
                        text:"Step 5"
                    }
                ],
            },
            paginationConfig: {
                limit: 10,
                current: 1,
                total: 95
            }
        }
    },
    mounted(){
        this.dropdownItemsFiltered = this.dropdownItems
    },
    methods: {
        stepperNext(){
            let next = this.stepper.activeIndex + 1
            if(this.stepper.maxActiveIndex < next){
                this.stepper = Object.assign({},this.stepper,{maxActiveIndex:next})
            }
            this.stepper = Object.assign({},this.stepper,{activeIndex:next})
        },
        stepperClicked(event){
            this.stepper = Object.assign({},this.stepper,{activeIndex:event.nextIndex})
        },
        someFunc() {
            this.numberOfClick += 1;
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
                'name': value
            }
            this.fruits.push(obj);
            this.fruitName = '';
        },
        removeFruit(index) {
            this.fruits.splice(index, 1)
        },
        setSelectItems: function(item){
            let index = this.selectedItems.indexOf(item);
            if(index == -1){
                this.selectedItems.push(item);            
            }
            else{
                this.selectedItems.splice(index,1);
            }
        },
        changeEvent: function(event){
            console.log(event);
        },
        openDialog(type){
            switch(type){
                case 'alert':
                    this.$refs['alert_dialog'].open({ width: '300px' })
                    break;
                case 'confirm':
                    this.$refs['confirm_dialog'].open({
                            width: '300px',
                            positiveButtonLabel: 'Delete',
                            negativeButtonLabel: 'Cancel',
                            neutralButtonLabel: false,
                        })
                    break;
                case 'choose':
                    this.$refs['choose_dialog'].open({ width: '300px' })
                    break;
                default:
                    this.$refs['alert_dialog'].open({ dismissible: false })
            }
           
        },
        onCloseDialog(data){
            window.console.log(data)
        },
        paginationChange(e){
            console.log(e)
        },
        dropdownInputChange(e){
            if(e && e.text){
                let text = e.text
                this.dropdownItemsFiltered = this.dropdownItems.filter(a=>a.text.toLowerCase().indexOf(text.toLowerCase()) > -1)
            }
            else{
                this.dropdownItemsFiltered = this.dropdownItems
            }
        }
    }
}
</script>

<style lang="less">
.main-div {
    margin-top: 2%;
    padding: 40px;
    background: #F8F8F8;
}

.space-between {
    display: flex;
    justify-content: space-evenly;
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
.stepper-btn-container{
    text-align: center;
    width:100%;
}
.hover-new {
    .n-button {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.09), 0 6px 20px 0 rgba(0, 0, 0, 0.09) !important;
    }
}

</style>
