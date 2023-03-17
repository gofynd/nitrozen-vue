<template>
  <transition name="nitrozen-chip">
    <div
      :ref="chipId"
      @click="setBackground"
      class="nitrozen-chip ripple"
      :class="[chipClasses]"
      tabindex="0"
      v-on="$listeners"
    >
      <span :class="icon ? 'chip-slot' : 'chip-slot-default'">
        <slot class="nitrozen-chip-icon"
      /></span>
      <nitrozen-icon
        :class="'nitrozen-icon'"
        :name="icon"
        :size="16"
        v-if="icon !== '' && !deletable"
      />
      <transition name="nitrozen-input-action">
        <span
          :ref="iconId"
          v-on:click="spliceElement(chipId)"
          v-if="!disable && deletable"
          class="icon-container"
        >
          <nitrozen-icon :name="icon || 'close'" :size="16" />
        </span>
      </transition>
    </div>
  </transition>
</template>

<script>
// import NitrozenInline from './../NInline/index';
import NIcon from '../NIcon';
import NitrozenUuid from './../../utils/NUuid';
import NitrozenTooltip from './../NTooltip/index';

export default {
  name: 'nitrozen-chips',
  components: {
    'nitrozen-icon': NIcon,
    // 'nitrozen-inline':NitrozenInline,
    'nitrozen-tooltip': NitrozenTooltip,
  },
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
    deletable: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'primary',
    },
    inProgress: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    iconId: {
      type: [Number, String],
      default: () => 'nitrozen-icon' + NitrozenUuid(),
    },
    chipId: {
      type: [Number, String],
      default: () => 'nitrozen-chip' + NitrozenUuid(),
    },
    multiSelect: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: 'none',
    },
  },
  computed: {
    chipClasses() {
      return {
        'nitrozen-chip-primary': this.theme === 'primary',
        'nitrozen-chip-secondary': this.theme === 'secondary',
        'nitrozen-chip-disabled': this.disable,
        'nitrozen-chip-inprogress': this.inProgress,
        'nitrozen-chip-error': this.error || this.state == 'error',
        'nitrozen-chip-success': this.state == 'success',
        'nitrozen-chip-progress': this.state == 'progress',
        'nitrozen-chip-selected': this.state == 'selected',
        'nitrozen-chip-rounded': this.isRounded,
        ...(this.icon !== '' && { 'nitrozen-icon': true }),
      };
    },
  },
  methods: {
    spliceElement: function (id) {
      this.$refs[id].parentElement.style.display = 'none';
      this.$emit('remove');
    },
    setBackground: function () {
      if (this.multiSelect) {
        let flag =
          this.$refs[this.chipId].classList.contains(
            'nitrozen-chip-primary-active'
          ) ||
          this.$refs[this.chipId].classList.contains(
            'nitrozen-chip-secondary-active'
          );
        if (!flag) {
          if (this.theme == 'primary') {
            this.$refs[this.chipId].classList.add(
              'nitrozen-chip-primary-active'
            );
          } else {
            this.$refs[this.chipId].classList.add(
              'nitrozen-chip-secondary-active'
            );
          }
        } else {
          this.$refs[this.chipId].classList.remove(
            'nitrozen-chip-primary-active'
          );
          this.$refs[this.chipId].classList.remove(
            'nitrozen-chip-secondary-active'
          );
        }
      }
    },
  },
};
</script>

<style lang="less">
@import './../../base/base.less';

.primary {
  color: @ColorPrimaryGrey80 !important;
  background-color: @WhiteColor !important;
  border: 0.1rem solid @ColorPrimaryGrey60 !important;
}
.secondary {
  color: @PrimaryColor !important;
  background-color: @WhiteColor !important;
  border: 0.1rem solid @PrimaryColor !important;
  font-weight: 700 !important;
}
.disabled {
  background: @WhiteColor !important;
  color: @ColorSecondaryGrey60 !important;
  opacity: @DisabledOpacity !important;
  &:hover {
    box-shadow: none;
  }
  svg {
    filter: saturate(10%);
  }
}
.error {
  background-color: @ErrorColor !important;
  color: @WhiteColor !important;
  border: 0.1rem solid @ErrorColor !important;
  :hover {
    background-color: @WhiteColor !important;
    color: @ErrorColor !important;
  }
}
.success {
  background-color: @SuccessColor !important;
  color: @WhiteColor !important;
  border: 0.1rem solid @SuccessColor !important;
  :hover {
    background-color: @WhiteColor !important;
    color: @SuccessColor !important;
  }
}
.progress {
  background-color: @ProgressColor !important;
  color: @WhiteColor !important;
  border: 0.1rem solid @ProgressColor !important;
  :hover {
    background-color: @WhiteColor !important;
    color: @ProgressColor !important;
  }
}
.nitrozen-chip {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  vertical-align: middle;
  white-space: nowrap;
  font-family: @PrimaryFont;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  max-width: 22rem;
  width: fit-content;
  &:focus {
    outline: none;
    // border: 0.2rem solid @ColorPrimary60;
    color: @ColorPrimary60;
    //   text-decoration: underline;
  }

  &:hover {
    // box-shadow: 0 0 16px @BoxShadow;
    // background: @HoverColor;
    color: @ColorBlack;
  }

  // &.nitrozen-chip-enter-active,
  // &.nitrozen-chip-leave-active {
  //     opacity: 0;
  //     transform: transformZ(0) scale(.8);
  // }

  // &.nitrozen-chip-enter-to {
  //     opacity: 1;
  //     transform: transformZ(0) scale(1);
  // }
  &-disabled {
    cursor: default;
    background: @WhiteColor;
    color: @ColorSecondaryGrey60;
    opacity: @DisabledOpacity;
    pointer-events: none;
    &:hover {
      box-shadow: none;
    }
    svg {
      filter: saturate(10%);
    }
  }
  &-primary {
    .primary();
  }
  &-secondary {
    .secondary();
  }
  &-inprogress {
    border: 1px dashed @ProcessingColor !important;
  }
  &-error {
    border: 1px solid @ErrorColor;
    background: @ErrorColor;
    color: @WhiteColor;
  }
  &-primary-active {
    background: @PrimaryColor;
    color: @WhiteColor;
    border-color: @PrimaryColor;
  }
  &-primary-active:hover {
    background: @WhiteColor;
    color: @PrimaryColor;
    border-color: @PrimaryColor;
  }
  &-secondary-active {
    background: @SecondaryColor;
    color: @WhiteColor;
    border-color: @SecondaryColor;
  }
  &-secondary-active:hover {
    background: @WhiteColor;
    color: @SecondaryColor;
    border-color: @SecondaryColor;
  }
  &-success {
    background: @SuccessColor;
    color: @WhiteColor;
    border-color: @SuccessColor;
  }
  &-progress {
    background: @ProgressColor;
    color: @WhiteColor;
    border-color: @ProgressColor;
  }
  &-selected {
    background: @SecondaryColor;
    color: @WhiteColor;
    border-color: @SecondaryColor;
  }
  &-rounded {
    border-radius: 3.9rem;
  }
  &-icon {
    margin-left: 0.4rem;
    &-primary {
      color: @PrimaryColor !important;
    }
  }
}
.chip-slot {
  max-width: 18rem;
  text-overflow: ellipsis;
  overflow: hidden;
}
.chip-slot-default {
  max-width: 22rem;
  text-overflow: ellipsis;
  overflow: hidden;
}
.icon-container {
  display: flex;
  align-items: center;
}
</style>
