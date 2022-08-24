<template>
  <div class="section__button">
    <a class="button button__dark link-to-cursor" :href="ButtonTitle.url">{{ButtonTitle.title}}</a>
  </div>
</template>

<script>
export default {
name: "Button",
  props: {
    ButtonTitle: {
      title: {
        default: 'Button Title'
      },
      url: {
        default: '/'
      }
    }
  }
}
</script>

<style lang="scss">
.section__button {
  display: flex;
  justify-content: center;
  padding: 4rem ;
  background-color: $color-white;
}
.button {
  display: inline-flex;
  padding: 1rem 3.5rem;
  border-width: 0.4px;
  border-style: solid;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  background-color: transparent;
  &__contacts {
    padding: 0;
  }
  &:after {
    right: -11%;
    top: calc(50% - 0.2rem);
    width: 3rem;
    height: 0.4rem;
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='black'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }
  &:hover {
    text-decoration: none;
  }
  &__dark {
    border-color: $color-black;
    color: $color-black;
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='black'/%3E%3C/svg%3E");
    }
    &:active {
      border-color: #7E7E7E;
      color: #7E7E7E;
      &:after {
        background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='%237E7E7E'/%3E%3C/svg%3E");

      }
    }
  }
  &__white {
    border-color: $color-white;
    color: $color-white;
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='white'/%3E%3C/svg%3E");
    }
    &:active {
      border-color: #6F6F6F;
      color: #6F6F6F;
      &:after {
        background-image: url("data:image/svg+xml,%3Csvg class='button__arrow' viewBox='0 0 67 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M66.6031 4.7233C66.8007 4.52568 66.8007 4.20527 66.6031 4.00764L63.3826 0.787168C63.185 0.589544 62.8646 0.589544 62.6669 0.787168C62.4693 0.984793 62.4693 1.3052 62.6669 1.50283L65.5296 4.36547L62.6669 7.22812C62.4693 7.42574 62.4693 7.74615 62.6669 7.94378C62.8646 8.1414 63.185 8.1414 63.3826 7.94378L66.6031 4.7233ZM0.807129 4.87153L66.2452 4.87152L66.2452 3.85942L0.807129 3.85943L0.807129 4.87153Z' fill='%236F6F6F'/%3E%3C/svg%3E");
      }
    }
  }
}

</style>
