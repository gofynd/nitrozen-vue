<template>
      <div class="d-header">
        <div class="d-header-main">
          <div class="d-header-container-main">
              <div class="d-header-hamburger" @click="changeMobileNavVisibility">
              <img
                src="../../assets/jds-icons/hamburger-icon.svg"
                alt="main navigation icon"
              />
            </div>
            <div class="d-header-logo">
                <img
                  class="logo"
                  :src="logo"
                />
            </div>
            
            
<slot name="links" class="links"></slot>
          </div>
          <div class="d-header-container-tool">
            <div class="d-header-search" @click="changeSearchContainerVisibility">
              <div class="d-header-icon-input">
                <span class="d-header-search-icon">
                  <img src="../../assets/jds-icons/search-icon-brown.svg" alt="" />
                </span>
                <input
                  :placeholder="SearchPlaceholder"
                  class="d-header-search-input"
                  @focus="changeSearchContainerVisibility"
                />
              </div>
                
            </div>
            <div class="d-header-user-icons">
              <img src="../../assets/jds-icons/search-icon-brown.svg" alt="" class="d-header-search-mob"/>
                      <div>
                        <img
                          title="Wishlist"
                          src="../../assets/jds-icons/heart-dark.svg"
                        />
                  </div>
  
              <div>
                  <div>
                    <img title="Cart" src="../../assets/jds-icons/cart-icon.svg" />
                  </div>
              </div>
  

              
            </div>
            <div class="position-relative">
              <img
                title="Profile"
                :src="avatar"
                placeholder="./../assets/jds-icons/profileicon.svg"
                class="d-header-avatar"
              />
            </div>
          </div>
        </div>
        <slot name="tabs">
        </slot>
      </div>
  </template>
  
  <script>
  export default {
    name: "nitrozen-header",
    components: {
    },
    props:{
      logo: {
      type: String,
    },
    avatar : {
      type: String,
      default : "../../assets/jds-icons/profileicon.svg"
    },
    SearchPlaceholder: {
      type :String,
      default : "search"
    },
    },
    data() {
    },
    methods :{
      changeSearchContainerVisibility(){

      },
      changeMobileNavVisibility(){

      },
      mobileHeaderItems(){

      }
    }
  };
  </script>
  
  <style lang="less" scoped>

.logo{
  width: inherit;
}
.jm-logo {
    height: 1.8rem;
    width: 10.3rem;
  }
  
  img {
    display: block;
  }
  
  .icon-count {
    position: absolute;
    bottom: 8px;
    left: 12px;
    width: 24px;
    height: 24px;
    padding: 12px;
  
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
  
    border-radius: 24px;
    background-color: #E30513;
  
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
    .d-header {

      &-avatar{
        height: 40px;
        width: 40px;
        border-radius: 200px;
      }

      &-icon-input{
        position: relative;
      }
      &-main {
        background-color: #0078ad;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 16px;
        max-width: 1230px;
        margin: 0 auto;
      }
  
      &-container-main {
        display: flex;
        align-items: center;
        position: relative;
      }
      &-container-tool{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex: 1 0 0;
}
      &-logo{
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        padding-right: 12px;
        align-items: flex-start;
        gap: 10px;
      }
  
      &-menu {
        display: flex;
        align-items: center;
        color: #FFFFFF;
  
        &-link {
          margin-right: 32px;
          border-bottom: 2px solid transparent;
  
          &.active {
            border-bottom: 2px solid #FFFFFF;
          }
  
          &:hover {
            border-bottom: 2px solid #FFFFFF;
          }
        }
      }
  
      &-search {
        
        width: 31.2rem;
        margin-right: 24px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
  
        &-input {
          outline: 0;
          border: none;
          color: #FFFFFF;
          background-color: #0c5273;
          width: 100%;
          padding: 12px 16px 12px 48px;
          border-radius: 24px;
          display: flex;
          justify-content: center;
          align-items: flex-start;

  
          &::placeholder {
            color: #FFFFFF;
          }
        }
  
        &-icon {
          display: inline-flex;
          position: absolute;
          left: 12px;
          color: #FFFFFF;
          border-radius: 4px;
          width: 2.4rem;
          z-index: auto;
          position: absolute;
        top: 10px;
        }
      }

      &-hamburger{
        display: none;
      }
  
      &-user-icons {
        display: flex;
        align-items: center;
  
        & > * {
          padding: 1.2rem;
        }
      }
  
      &-pincode {
        height: 4rem;
        background-color: #e5f1f7;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 48px;
      }
    }
  
  
  @media only screen and (max-width:768px){
    .d-header {


      &-search{
        display: none;
      }
      &-hamburger {
        display: block;
        padding: 16px;
        padding-left: 0;
      }
    }

    .links{
      display: none;
    }
  }
  </style>
  