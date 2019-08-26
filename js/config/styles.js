import { Platform } from 'react-native'
export const typography = {
  fontMainLight: 'Montserrat-Light', ...Platform.select({
    ios: {
      fontMain: 'Montserrat'
    },
    android: {
      fontMain: 'Montserrat-Regular'
    }
  })
}

