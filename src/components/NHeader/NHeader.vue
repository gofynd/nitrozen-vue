<template>
    <div>
      <div class="d-header">
        <!-- Main Header Menu - Categories, Search, Cart, Account Icons -->
        <div class="d-header-main">
          <div class="d-header-container">
            <div class="d-header-logo">
              <fdk-link :link="'/'">
                <img
                  class="jm-logo"
                  src="../../assets/images/jio-market-logo.svg"
                />
              </fdk-link>
            </div>
            <!-- <div class="d-header-menu" v-if="getDesktopMainNav.length">
              <fdk-link
                v-for="(navItem, index) in getDesktopMainNav"
                :key="index"
                :link="navItem.link"
              >
                <div
                  class="d-header-menu-link"
                  :class="{ active: isCurrentNavActive(navItem) }"
                >
                  {{ navItem.display }}
                </div>
              </fdk-link>
            </div> -->
          </div>
  
          <div class="d-header-container">
            <div class="d-header-search" @click="changeSearchContainerVisibility">
              <span class="d-header-search-icon">
                <img src="../../assets/images/search-icon.svg" alt="" />
              </span>
              <input
                placeholder="Search in JioMarket"
                class="d-header-search-input"
                @focus="changeSearchContainerVisibility"
              />
            </div>
            <div class="d-header-user-icons">
              <fdk-accounts>
                <template slot-scope="accountsData">
                  <div
                    v-if="!accountsData.is_logged_in && isMounted"
                    @click="accountsData.openLogin"
                    class="pointer"
                  >
                    <fdk-link>
                      <div>
                        <img
                          title="Wishlist"
                          src="../../assets/images/heart-dark.svg"
                        />
                      </div>
                    </fdk-link>
                  </div>
                  <div v-else>
                    <fdk-link
                      :link="'/wishlist'"
                      class="position-relative"
                      v-if="isMounted"
                    >
                      <div>
                        <img
                          title="Wishlist"
                          src="../../assets/images/heart-dark.svg"
                        />
                      </div>
                      <div
                        v-if="
                          context.favourite_ids &&
                          context.favourite_ids.length > 0
                        "
                        class="icon-count"
                      >
                        {{ context.favourite_ids.length }}
                      </div>
                    </fdk-link>
                  </div>
                </template>
              </fdk-accounts>
  
              <div>
                <fdk-link
                  :link="'/cart/bag'"
                  class="position-relative"
                  v-if="isMounted && !global_config.props.disable_cart"
                >
                  <div>
                    <img title="Cart" src="../../assets/images/cart-icon.svg" />
                  </div>
                  <div v-if="context.cart_item_count" class="icon-count">
                    {{ context.cart_item_count }}
                  </div>
                </fdk-link>
              </div>
  
              <fdk-accounts>
                <template slot-scope="accountsData">
                  <div
                    v-if="!accountsData.is_logged_in && isMounted"
                    @click="accountsData.openLogin"
                    class="pointer"
                  >
                    <fdk-link>
                      <div class="position-relative">
                        <img
                          title="Profile"
                          src="../../assets/images/profileicon.svg"
                        />
                      </div>
                    </fdk-link>
                  </div>
                  <div v-else class="pointer">
                    <fdk-link :link="'/profile/details'">
                      <div class="position-relative">
                        <img
                          title="Profile"
                          src="../../assets/images/profileicon.svg"
                        />
                      </div>
                    </fdk-link>
                  </div>
                </template>
              </fdk-accounts>
            </div>
          </div>
        </div>
  
        <!-- Header Sub Menu - Categories List -->
        <desktop-navigation :context="context" />
  
        <!-- Header Pincode (Serviceability) Ingress -->
        <div v-if="showPincodeSectionInHeader">
          <div class="d-header-pincode" v-if="!isMobile">
            <pincode
              @changePincode="changePincode"
              :global_config="global_config"
              :context="context"
            />
          </div>
        </div>
      </div>
  
      <div class="m-header">
        <div class="m-header-main">
          <div v-if="isHomePage" class="m-header-container">
            <div class="m-header-hamburger" @click="changeMobileNavVisibility">
              <img
                src="../../assets/images/hamburger-icon.svg"
                alt="main navigation icon"
              />
            </div>
  
            <!-- <div class="m-header-logo">
              <fdk-link :link="'/'">
                <img
                  class="jm-logo"
                  src="../../assets/images/jio-market-logo.svg"
                />
              </fdk-link>
            </div> -->
          </div>
  
          <div v-else class="m-header-container" style="min-width: 0">
            <div class="m-header-back" @click="handleMobileHeaderBack()">
              <img src="../../assets/images/back-arrow-icon.svg" alt="" />
            </div>
  
            <div v-if="mobileHeaderItems.title" class="m-header-title">
              {{ mobileHeaderItems.title }}
            </div>
          </div>
  
          <div
            class="m-header-container"
            :class="{ 'm-header-search-container': mobileHeaderItems.searchBox }"
          >
            <div
              v-if="mobileHeaderItems.searchBox"
              class="m-header-search"
              @click="changeSearchContainerVisibility"
            >
              <span class="m-header-search-icon">
                <img src="../../assets/images/search-icon.svg" alt="" />
              </span>
              <input
                placeholder="Search in JioMarket"
                class="m-header-search-input"
              />
            </div>
  
            <div
              v-if="mobileHeaderItems.searchIcon"
              class="m-header-search-button"
              @click="changeSearchContainerVisibility"
            >
              <img src="../../assets/images/search-icon-brown.svg" alt="" />
            </div>
  
            <div class="m-header-cart" v-if="mobileHeaderItems.cartIcon">
              <fdk-link
                :link="'/cart/bag'"
                class="position-relative jm-d-block"
                v-if="isMounted"
              >
                <div>
                  <img title="Cart" src="../../assets/images/cart-icon.svg" />
                </div>
                <div v-if="context.cart_item_count" class="icon-count">
                  {{ context.cart_item_count }}
                </div>
              </fdk-link>
            </div>
  
            <div v-if="mobileHeaderItems.wishlistIcon">
              <fdk-accounts>
                <template slot-scope="accountsData">
                  <div
                    v-if="!accountsData.is_logged_in && isMounted"
                    @click="accountsData.openLogin"
                    class="pointer"
                  >
                    <fdk-link>
                      <div>
                        <img
                          title="Wishlist"
                          src="../../assets/images/heart-dark.svg"
                        />
                      </div>
                    </fdk-link>
                  </div>
                  <div v-else>
                    <fdk-link
                      :link="'/wishlist'"
                      class="position-relative"
                      v-if="isMounted"
                    >
                      <div>
                        <img
                          title="Wishlist"
                          src="../../assets/images/heart-dark.svg"
                        />
                      </div>
                      <div
                        v-if="
                          context.favourite_ids &&
                          context.favourite_ids.length > 0
                        "
                        class="icon-count"
                      >
                        {{ context.favourite_ids.length }}
                      </div>
                    </fdk-link>
                  </div>
                </template>
              </fdk-accounts>
            </div>
          </div>
        </div>
        <div v-if="showPincodeSectionInHeader">
          <div class="m-header-pincode" v-if="isMobile">
            <pincode
              @changePincode="changePincode"
              :global_config="global_config"
              :context="context"
              :is-mobile="isMobile"
            />
          </div>
        </div>
      </div>
  
      <search
        v-if="isSearchContainerVisible"
        @close-search="changeSearchContainerVisibility"
      />
      <mobile-navigation
        v-if="isMobileNavVisible"
        :context="context"
        @close-mobile-nav="changeMobileNavVisibility"
      />
    </div>
  </template>
  
  <script>
  import Search from "./header/search.vue";
  import MobileNavigation from "./header/mobileNavigation.vue";
  import Pincode from "./header/pincode.vue";
  import {
    detectMobileWidth,
    setModalQueryParameters,
    removeQueryViewsOnInitialRender,
    historyBack,
    capitalizeFirstLetter,
    deSlugify,
  } from "../../helper/utils";
  import { QUERY_PARAM_VIEWS } from "../../constants/queryParam";
  import { emitSegmentIdentifyEvent } from "../../helper/events";
  import {
    AVAILABLE_PAGES,
    pagesToShowPincodeInHeader,
  } from "../../constants/availablePages";
  import DesktopNavigation from "./header/desktopNavigation.vue";
  import { LocalStorageServiceForSearch } from "./header/helpers";
  import { RECENT_SEARCH_KEY } from "./header/constant";
  import {
    emitRecentSearchesFocus,
    emitRecentOrSearchesSelection,
    emitUserSearchEntered,
  } from "../../helper/events";
  
  export default {
    name: "Header",
    components: {
      search: Search,
      "mobile-navigation": MobileNavigation,
      "desktop-navigation": DesktopNavigation,
      pincode: Pincode,
    },
    data() {
      return {
        isMobile: false,
        isMounted: false,
        selectedIndex: null,
        isHomePage: false,
        mobileHeaderTitle: "",
        mobileHeaderItems: {
          title: "",
          searchIcon: true,
          cartIcon: true,
        },
        isSearchContainerVisible: false,
        hasPrevHistory: "",
      };
    },
    mounted() {
      // Remove queryViews on initial render
      removeQueryViewsOnInitialRender(QUERY_PARAM_VIEWS.Search, this.$router);
      removeQueryViewsOnInitialRender(QUERY_PARAM_VIEWS.Hamburger, this.$router);
      this.isMobile = detectMobileWidth();
      this.isMounted = true;
      this.checkHomePage(this.$route?.path);
      this.checkSectionPages(this.$route);
      this.$root.$on("mheader-change", this.updateMobileHeaderItems);
      if (this.$root.$store.getters.IS_LOGGED_IN) {
        emitSegmentIdentifyEvent(this.$root.$store.getters.GET_USER_INFO.user);
      }
    },
    watch: {
      $route(to, from) {
        this.checkHomePage(to.path);
        this.checkSectionPages(to);
        // assigning the router's location from which user came
        this.hasPrevHistory = from.path;
        // this is to handle the browser back/forward button for hamburger and search icon
        if (Object.values(to.query).includes(QUERY_PARAM_VIEWS.Search)) {
          this.isSearchContainerVisible = true;
        } else if (
          Object.values(to.query).includes(QUERY_PARAM_VIEWS.Hamburger)
        ) {
        } else {
          this.isSearchContainerVisible = false;
        }
      },
    },
    computed: {
      getDesktopMainNav() {
        return this.context?.all_navigation?.top || [];
      },
      isMobileNavVisible() {
        return Object.values(this.$route.query).includes(
          QUERY_PARAM_VIEWS.Hamburger
        );
      },
      showPincodeSectionInHeader() {
        return pagesToShowPincodeInHeader.includes(
          this.$route?.meta?.available_page_slug
        );
      },
    },
    methods: {
      checkSectionPages(route) {
        const {
          meta: { available_page_slug = "" },
          params: { group = "" },
        } = route;
        const isSectionPageGroup =
          available_page_slug === AVAILABLE_PAGES.SECTION_PAGE;
        if (isSectionPageGroup) {
          if (!group.trim().length) return;
  
          const title = deSlugify(group, "-", " ");
          this.mobileHeaderItems = {
            title: capitalizeFirstLetter(title),
            searchIcon: true,
            cartIcon: true,
          };
        }
      },
      handleMobileHeaderBack() {
        // if `window.routerFrom` is not defined/assigned, that means this is the first route the user has visited from our vue app,
        // so since we don't have access to history path, we are routing the user to fallback route which is `HomePage`.
        // also, we are redirecting deleted user to home page
        if (
          !window.routerFrom ||
          this.$router.currentRoute.path.includes("/c/deleted-account")
        ) {
          this.$router.replace({
            path: "/",
            query: null,
          });
        }
        // if `window.routerFrom` has any value, this means user has been to at least one route within our vue app,
        // so we are allowing user to go back to whatever route they came from by using `history.back()` logic.
        else {
          historyBack(this.$router);
        }
      },
      changeMobileNavVisibility() {
        setModalQueryParameters(this.$router, QUERY_PARAM_VIEWS.Hamburger);
      },
      changeSearchContainerVisibility(params) {
        const recentSearch =
          LocalStorageServiceForSearch.getItem(RECENT_SEARCH_KEY);
        if (params?.recentOrSearchSelection) {
          emitRecentOrSearchesSelection(params?.recentOrSearchSelection);
        } else if (params?.enterUserSearch) {
          emitUserSearchEntered(params?.enterUserSearch);
        } else if (!params?.shouldSegmentEventEmit && recentSearch) {
          const eventData = {
            origin: window.location.href,
            popular_searches: [],
            recent_searches: recentSearch,
          };
          emitRecentSearchesFocus(eventData);
        }
        this.isSearchContainerVisible = !this.isSearchContainerVisible;
        if (this.isMobile) {
          setModalQueryParameters(this.$router, QUERY_PARAM_VIEWS.Search);
        }
      },
      updateMobileHeaderItems(headerItems) {
        this.mobileHeaderItems = headerItems;
      },
      checkHomePage(path) {
        const isHomePagePath = path === "/";
  
        this.isHomePage = isHomePagePath;
  
        if (isHomePagePath) {
          this.mobileHeaderItems = {
            title: "",
            searchBox: true,
            cartIcon: true,
          };
        }
      },
      isCurrentNavActive(navItem) {
        return navItem?.link === this.$route?.path;
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .jm-logo {
    height: 1.8rem;
    width: 10.3rem;
  }
  
  img {
    display: block;
  }
  
  .icon-count {
    position: absolute;
    bottom: @SpacingXS;
    left: @SpacingS;
    width: @SpacingM;
    height: @SpacingM;
    padding: @SpacingS;
  
    font-size: @TextBodyXXS;
    line-height: @LineHeightXXS;
    color: @LightGlobalWhite;
  
    border-radius: @RadiusXL;
    background-color: @LightSecondary50;
  
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  @media @JMDesktop {
    .m-header {
      display: none;
    }
  
    .d-header {
      &-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: @DesktopMainHeaderHeight;
        width: 100%;
        padding: @SpacingBase @SpacingXXL;
        background-color: @LightPrimary50;
      }
  
      &-container {
        display: flex;
        align-items: center;
      }
  
      &-menu {
        display: flex;
        align-items: center;
        color: @LightGlobalWhite;
  
        &-link {
          margin-right: @SpacingL;
          border-bottom: 2px solid transparent;
  
          &.active {
            border-bottom: 2px solid @LightPrimaryInverse;
          }
  
          &:hover {
            border-bottom: 2px solid @LightPrimaryInverse;
          }
        }
      }
  
      &-search {
        position: relative;
        width: 31.2rem;
        margin-right: @SpacingM;
        display: flex;
        align-items: center;
  
        &-input {
          outline: 0;
          border: none;
          border-radius: @RadiusPill;
          color: @LightGlobalWhite;
          background-color: @LightPrimary60;
          width: 100%;
          padding: @SpacingS @SpacingBase @SpacingS @SpacingXXL;
  
          &::placeholder {
            color: @LightGlobalWhite;
          }
        }
  
        &-icon {
          display: inline-flex;
          position: absolute;
          left: @SpacingS;
          color: @LightGlobalWhite;
          border-radius: @RadiusS;
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
        height: @DesktopPincodeHeaderHeight;
        background-color: @LightPrimary20;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: @SpacingXXL;
      }
    }
  }
  
  @media @JMTablet {
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
        height: @MobileMainHeaderHeight;
        width: 100%;
        padding: @SpacingXS @SpacingBase;
        padding-right: @SpacingM;
        background-color: @LightPrimary50;
      }
  
      &-search-container {
        flex: 1;
      }
  
      &-hamburger {
        padding: @SpacingBase;
        padding-left: 0;
      }
  
      &-back {
        padding: @SpacingBase;
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
        color: @LightGlobalWhite;
      }
  
      &-search {
        position: relative;
        margin-right: @SpacingS;
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
          border-radius: @RadiusPill;
          color: @LightGlobalWhite;
          background-color: @LightPrimary60;
          width: 100%;
          padding: @SpacingXS @SpacingBase;
          padding-left: @SpacingXXL;
  
          &::placeholder {
            color: @LightGlobalWhite;
          }
        }
  
        &-icon {
          position: absolute;
          top: @SpacingS;
          left: @SpacingS;
          color: @LightGlobalWhite;
          line-height: 0;
          border-radius: @RadiusS;
          width: 2rem;
          transform: none;
          z-index: auto;
        }
  
        &-button {
          padding: @SpacingBase;
        }
      }
  
      &-pincode {
        height: @MobilePincodeHeaderHeight;
        background-color: @LightPrimary20;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      &-search-button {
        padding: @SpacingBase 1.4rem;
      }
    }
  }
  </style>
  