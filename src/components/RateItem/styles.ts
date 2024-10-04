import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    gap: RFValue(8),
    padding: RFValue(12),
    marginBottom: RFValue(12),
    borderRadius: RFValue(8),
    borderWidth: RFValue(1),
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: '600',
  },
  content: {
    gap: RFValue(8),
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(4),
  },
  textLabel: {
    color: '#555',
    fontSize: RFValue(13),
  },
  textValue: {
    color: '#333',
    fontWeight: '500',
    fontSize: RFValue(14),
  },
});
