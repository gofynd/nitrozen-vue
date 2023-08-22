<template>
    <div>
      <div class="d-header">
        <div class="d-header-main">
          <div class="d-header-container">
            <div class="d-header-logo">
                <img
                  class="logo"
                  :src="logo"
                />
            </div>
          </div>
  
          <div class="d-header-container">
            <div class="d-header-search" @click="changeSearchContainerVisibility">
              <span class="d-header-search-icon">
                <img src="../../assets/jds-icons/search-icon.svg" alt="" />
              </span>
              <input
                :placeholder="SearchPlaceholder"
                class="d-header-search-input"
                @focus="changeSearchContainerVisibility"
              />
            </div>
            <div class="d-header-user-icons">
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
  


                      <div class="position-relative">
                        <img
                          title="Profile"
                          :src="avatar"
                        />
                      </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="m-header">
        <div class="m-header-main">
          <div  class="m-header-container">
            <div class="m-header-hamburger" @click="changeMobileNavVisibility">
              <img
                src="../../assets/jds-icons/hamburger-icon.svg"
                alt="main navigation icon"
              />
            </div>
          </div>
  
          <div class="m-header-container" style="min-width: 0">
            <div class="m-header-back" @click="handleMobileHeaderBack()">
              <img src="../../assets/jds-icons/back-arrow-icon.svg" alt="" />
            </div>
  
          </div>
  
          <div
            class="m-header-container"
          >
            <div
            >
              <span class="m-header-search-icon">
              </span>
              <input
                :placeholder="SearchPlaceholder"
                class="m-header-search-input"
              />
            </div>
  
            <div

            >
              <img src="../../assets/jds-icons/search-icon-brown.svg" alt="" />
            </div>
  
            <div class="m-header-cart" v-if="mobileHeaderItems.cartIcon">
              <div
                class="position-relative jm-d-block"
              >
                <div>
                  <img title="Cart" src="../../assets/jds-icons/cart-icon.svg" />
                </div>
              </div>
            </div>
  

          </div>
        </div>
      </div>
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
    // data() {
    // },
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
  
  @media only screen and (min-width:992px) {
    .m-header {
      display: none;
    }
  
    .d-header {
      &-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 7.2rem;
        width: 100%;
        padding: 16px 48px;
        background-color: #0078ad;
      }
  
      &-container {
        display: flex;
        align-items: center;
      }

      &-logo{
        height: 45px;
        width: 45px;
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
        position: relative;
        width: 31.2rem;
        margin-right: 24px;
        display: flex;
        align-items: center;
  
        &-input {
          outline: 0;
          border: none;
          border-radius: 250px;
          color: #FFFFFF;
          background-color: #0c5273;
          width: 100%;
          padding: 12px 16px 12px 48px;
  
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
        }
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
  }
  
  @media only screen and (max-width:991px){
    .d-header {
      display: none;
    }
  
    .m-header {
      &-container {
        display: flex;
        align-items: center;
      }
  
      &-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 6.4rem;
        width: 100%;
        padding: 8px 16px;
        padding-right: 24px;
        background-color: #0078ad;
      }
  
      &-search-container {
        flex: 1;
      }
  
      &-hamburger {
        padding: 16px;
        padding-left: 0;
      }
  
      &-back {
        padding: 16px;
        padding-left: 0;
        img {
          display: block;
        }
      }
  
      &-title {
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #FFFFFF;
      }
  
      &-search {
        position: relative;
        margin-right: 12px;
        flex: 1 1 auto;
  
        &-input {
          font-family: JioType, helvetica, arial, sans-serif;
          font-weight: 500;
          text-transform: none;
          font-size: 1.6rem;
          letter-spacing: -0.08px;
          line-height: 2.4rem;
  
          outline: 0;
          border: none;
          border-radius: 250px;
          color: #FFFFFF;
          background-color: #0c5273;
          width: 100%;
          padding: 8px 16px;
          padding-left: 48px;
  
          &::placeholder {
            color: #FFFFFF;
          }
        }
  
        &-icon {
          position: absolute;
          top: 12px;
          left: 12px;
          color: #FFFFFF;
          line-height: 0;
          border-radius: 4px;
          width: 2rem;
          transform: none;
          z-index: auto;
        }
  
        &-button {
          padding: 16px;
        }
      }
  
      &-pincode {
        height: 3.2rem;
        background-color: #e5f1f7;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      &-search-button {
        padding: 16px 1.4rem;
      }
    }
  }
  </style>
  