<template>
<div class="autocomplete" id="parent-div">
    <nitrozen-input :type="type" :showSearchIcon="true" v-model="autocompleteModal" @input="autocomplete($event)" @keydown="keydownFunc($event)" :id="id" :placeholder="placeholder"></nitrozen-input>
</div>
</template>

<script>
import NInput from './../NInput/NInput';
import NitrozenUuid from './../../utils/NUuid';

export default {
    name: 'nitrozen-autocomplete',
    components: {
        'nitrozen-input':NInput
    },
    props: {
        id: {
            type: [Number, String]
        },
        placeholder: {
            type: String,
            default: ''
        },
        dataset: {
            type: Array,
            default: []
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    data() {
        return {
            currentFocus: 0,
            autocompleteModal: ''
        }
    },
    methods: {
        autocomplete: function (event) {
            var autocompleteList, autocompleteItem, index, inputValue = event;
            /*close any already open lists of autocompleted values*/
            this.closeAllLists();
            if (!inputValue) {
                return false;
            }
            this.currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            autocompleteList = document.createElement("DIV");
            autocompleteList.setAttribute("id", this.id + "autocomplete-list");
            autocompleteList.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            document.getElementById('parent-div').appendChild(autocompleteList);
            /*for each item in the array...*/
            for (index = 0; index < this.dataset.length; index++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (this.dataset[index].substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    autocompleteItem = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    autocompleteItem.innerHTML = "<span>" + this.dataset[index].substr(0, inputValue.length) + "</span>";
                    autocompleteItem.innerHTML += this.dataset[index].substr(inputValue.length);
                    /*insert a input field that will hold the current array item's value:*/
                    autocompleteItem.innerHTML += "<input type='hidden' value='" + this.dataset[index] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    var vm = this;
                    autocompleteItem.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        var value = this.getElementsByTagName("input")[0].value;
                        vm.autocompleteModal = value;
                        vm.$emit('input',value)
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        vm.closeAllLists(value);
                    });
                    autocompleteList.appendChild(autocompleteItem);
                }
            }
        },
        keydownFunc: function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                this.currentFocus++;
                /*and and make the current item more visible:*/
                this.addActive(x);
            } else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                this.currentFocus--;
                /*and and make the current item more visible:*/
                this.addActive(x);
            } else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (this.currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[this.currentFocus].click();
                }
            }
        },
        addActive: function (x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            this.removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        },
        removeActive: function (x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        },
        closeAllLists: function (element) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (element != x[i]) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
    }
}
</script>

<style lang="less">
@import './../../base/base.less';

.autocomplete-items {
  position: absolute;
  border: 1px solid @BorderColor;
  font-family: @PrimaryFont;  
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 3px;
  width: 100%;
  font-size: @BaseFontSize + 2px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px -1px @BoxShadow, 0 4px 5px 0 @BoxShadow, 0 1px 10px 0 @BoxShadow;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: @WhiteColor; 
  border-bottom: 2px solid @BorderColor;
  &:hover{
    background-color: @HoverColor; 
  }
}
// /*when navigating through the items using the arrow keys:*/
// .autocomplete-active {
//   background-color: DodgerBlue !important; 
//   color: #ffffff; 
// }
/*the container must be positioned relative:*/
.autocomplete {
  position: relative;
  width: 100%;
}
</style>
