<template>
      <div>
    <div class="d-footer jm-mt-huge">
      <div class="row d-footer-container">
        <div class="col-lg-8">
          <div class="row">
            <div
            v-for="(footerItem,index) in links"
            :key="index"
            class="d-footer-row"
            >
            <div class="footerRowHeader">
              {{ footerItem.title }}
            </div>
            <div
              v-for="(navItem, index) in footerItem.subLinks"
              :key="index"
              class="d-footer-nav-links"
              @click="emitFooterEvent(navItem.title)"
            >
              <a href="navItem.href" class="d-footer-display-link">
                {{ navItem.title }}
              </a>
            </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
         <slot name ="marketplace"></slot>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-wrapper">
        <div class="footer-bottom">
          <div class="footer-bottom-brand">
            <img
              class="jm-mr-s"
              :src="logo"
            />
          {{ copyright }}
          </div>
       <slot name="footerBRight">

       </slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{
name : "nitrozen-footer",
props : {
logo:{
  type : String,
  default : ""
},
links:{
type : Array,
default : [],
sublinks:{
type : Array,
default :[]
}
},
copyright:{
  type:String,
  default : ""
}
},
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

.footerRowHeader{
  color: var(--light-primary-grey-100, #141414);
font-family: JioType;
font-size: 16px;
font-style: normal;
font-weight: 900;
line-height: 20px; 
letter-spacing: -0.48px;
padding-bottom: 16px;
}

.footer-divider{
  align-self:normal;
  border-top:1px solid #e0e0e0;
}
.jm-mr-s{
margin-right:16px;
width :32px;
height: 32px
}
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
gap:16px;
align-items: flex-start;
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
    margin: 0 auto;
    display: flex;
    padding: 40px 0px 16px 0px;
    gap: 40px;
    align-self: stretch;
    align-items: flex-start;
  }

  &-nav-links {
    font-family: "JioType",helvetica,arial,sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.08px;
    color: rgba(0,0,0,.65);
    padding: 8px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: -0.08px;
    width: 100%;
  }

  &-nav-links:hover {
    background-color: #E0E0E0;
  }

  &-display-link{
    text-decoration: none;
    color: var(--light-primary-grey-80, rgba(0, 0, 0, 0.65));
  }

  &-row{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex: 1 0 0;
    justify-content: center;
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

  &-container {
    justify-content: space-between;
    text-align: center;
  }

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
}


@media only screen and (max-width:768px){
  .d-footer-container{
    flex-direction: column;
  }
}
</style>