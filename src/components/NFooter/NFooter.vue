<template>
      <div>
    <div class="d-footer jm-mt-huge">
      <div class="row d-footer-container">
        <div class="col-lg-8">
          <div class="row">
            <div
              v-for="(navItem, index) in getDesktopFooterNav"
              :key="index"
              class="col-lg-4 jm-pa-xs jm-body-s jm-fc-primary-gray-80 d-footer-nav-links"
              @click="emitFooterEvent(navItem.display)"
            >
              <a href="navItem.link">
                {{ navItem.display }}
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
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
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-wrapper">
        <div class="footer-bottom">
          <div class="footer-bottom-brand">
            <img
              class="jm-mr-s"
              :src="logo"
            />© All rights reserved. Reliance
            Retail Ltd.
          </div>
          <div>
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari
            5.1.5+, Google Chrome 80+
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{
name : "nitrozen-footer",
data () {
  return {
    logo : "../../assets/jds-icons/jiomart-logo-icon.svg",
    marketplace:{
      stores: [
        {
          ariaLabel: 'Google Play Store',
        //   badgeAsset: <img alt="Alt Text" src="images/play-store.png"/>,
          href: '#',
          newTab: true,
          title: 'play-store'
        },
        {
          ariaLabel: 'Apple App Store',
        //   badgeAsset: <img alt="Alt Text" src="images/app-store.png"/>,
          href: '#',
          newTab: true,
          title: 'app-store'
        }
      ],
      title: 'Download Our App'
    },
    getDesktopFooterNav : [{display:"Hello",link:"yes"},{display:"Hi",link:""},{display:"Bye",link:""}],
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
}},
methods: {
    // click event callback to emitevents
    emitFooterEvent(footerLink) {
      const eventData = {
        value: footerLink,
      };
    //   emitFooterClick(eventData);
    },
  },
  } 
</script>


<style lang="less" scoped>
.footer-divider{
  align-self:normal;
  border-top:1px solid #e0e0e0;
}
.jm-mr-s{margin-right:12px !important}
.footer-wrapper {
  margin: 0 auto;
  padding-left: 16px !important;
  padding-right: 16px !important;
  max-width: 1230px;
    width: 100%;
}
.footer-bottom {
  padding: 16px !important;
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    font-family: "JioType",helvetica,arial,sans-serif;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.06px;
    line-height: 1.3333333333;
    color: rgba(0,0,0,.65);

  &-brand{
    display:flex;
    align-items:center
  }
}

.jm-mt-l{margin-top:32px !important}
.jm-pb-base{padding-bottom:16px !important}
.jm-heading-xxs{font-family:"JioType",helvetica,arial,sans-serif;font-weight:900 !important;font-size:16px !important;letter-spacing:-0.48px !important;line-height:1 !important}
.jm-fc-primary-gray-80{color:rgba(0,0,0,.65) !important}
.jm-body-s{font-family:"JioType",helvetica,arial,sans-serif;font-weight:500 !important;font-size:16px !important;letter-spacing:-0.08px !important;line-height:1.5 !important}
.jm-pa-xs{padding:8px !important}
.col-lg-8 {
  flex: 0 0 auto;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  flex-basis: 66.66666667%;
  max-width: 66.66666667%;
}

.col-lg-4 {
  flex: 0 0 auto;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
}
.row{
display: flex;
  flex: 0 1 auto;
  // flex-wrap: wrap;
}
.jm-mt-huge{margin-top:64px !important}
.router-link-exact-active .m-footer-items-text {
  color: #130028;
}

.router-link-exact-active .m-footer-items-logo img {
  filter: invert(17%) sepia(97%) saturate(7315%) hue-rotate(353deg)
    brightness(88%) contrast(103%);
}

.three-p-logo {
  height: 40px;
}

.d-footer {
  background-color: #F5F5F5;

  &-container {
    max-width: 120rem;
    padding: 4rem 0;
    margin: 0 auto;
  }

  &-nav-links {
    word-break: break-word;
  }
  &-nav-links:hover {
    background-color: #E0E0E0;
  }

}

.m-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 0.4rem 1.6rem rgba(0, 0, 0, 0.16);
  padding: 1.6rem;
  background-color: #FFFFFF;


  &-items {
    display: flex;
    align-items: center;
    flex-direction: column;

    &-logo {
      height: 2rem;
    }

    &-text {
      color: rgba(0, 0, 0, 0.65);
    }
  }


  .m-footer-container {
    justify-content: space-between;
    text-align: center;
  }
}
</style>