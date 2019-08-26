import { StyleSheet } from 'react-native'
import { typography } from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    lineHeight: 22
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
  }
})
export default styles