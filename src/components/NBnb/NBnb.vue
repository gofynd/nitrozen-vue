<template>
    <nav class="bottom-nav">
        <a v-for="(item, index) in items" :key="index" :href="item.href" :aria-label="item['aria-label']"
            @click="handleItemClick(item)">
            <div class="icon-wrapper">
                <div v-html="item.icon"></div>
            </div>
            <div v-if="item.title" class="title">{{ item.title }}</div>
        </a>
    </nav>
</template>
  
<script>
export default {
    name: 'niotrozen-bottom-nav',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        handleItemClick(item) {
            if (!item.disabled && item.onClick) {
                item.onClick();
            }
        },
    },
};
</script>
  
<style lang="less">
@import '../../../src/base/variable.less';

.bottom-nav {

    display: flex;

    justify-content: space-around;

    background-color: @GreyColor;

    padding: 10px 0px;

    position: fixed;

    bottom: 0;

    width: 100%;

    z-index: 1;

    left: 0;

    box-shadow: 0 4px 16px @Shadow;
    a {

        display: flex;

        flex-direction: column;

        align-items: center;

        text-decoration: none;

        color: @TypographySecondaryColor;
        .icon-wrapper {

            width: 24px;

            height: 24px;

        }
        .title {

            font-size: 12px;

            margin-top: 4px;

        }

    }
}
</style>
  