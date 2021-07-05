import { createGlobalStyle } from 'styled-components'

//https://github.com/ben-rogerson/twin.macro/pull/136

const GlobalBase = createGlobalStyle`
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
`

export default GlobalBase
