<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-typescript {
      background-color: #3178c6;
      color: white;
    }

    &-prisma {
      background-color: #2d3748;
      color: white;
    }

    &-vue {
      background-color: #42b883;
      color: #0b2a1e;
    }

    &-phaser {
      background-color: #8a2be2;
      color: white;
    }

    &-vite {
      background-color: #646cff;
      color: white;
    }

    &-tailwind {
      background-color: #38bdf8;
      color: #082f49;
    }

    &-socketio {
      background-color: #111111;
      color: white;
    }

    &-python {
      background-color: #ffd43b;
      color: #1e3a5f;
    }

    &-webgl {
      background-color: #990000;
      color: white;
    }

    &-rk4 {
      background-color: #22d3ee;
      color: #083344;
    }

    &-mysql {
      background-color: #00758f;
      color: white;
    }

    &-express {
      background-color: #333333;
      color: white;
    }

    &-nodejs {
      background-color: #237d23;
      color: white;
    }

    &-react-native {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-jwt {
      background-color: #d63aff;
      color: white;
    }

    &-java {
      background-color: #e76f00;
      color: white;
    }
  }
}
</style>
