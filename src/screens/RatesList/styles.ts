import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E5E9',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    padding: RFValue(16),
  },
});
