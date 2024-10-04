import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RatesList } from '@/screens/RatesList';

export default function App() {
  return (
    <SafeAreaProvider>
      <RatesList />
    </SafeAreaProvider>
  );
}
