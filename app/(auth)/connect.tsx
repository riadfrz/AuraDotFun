import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Wallet } from 'lucide-react-native';

export default function ConnectScreen() {
  const router = useRouter();

  const handleConnect = () => {
    // Placeholder for wallet connection logic
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <View className="items-center mb-8">
        <Text className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          AuraDotFun
        </Text>
        <Text className="text-gray-600 dark:text-gray-300 text-center">
          Trade influencer tokens and join the social trading revolution
        </Text>
      </View>
      
      <TouchableOpacity
        onPress={handleConnect}
        className="bg-primary px-8 py-4 rounded-full flex-row items-center"
      >
        <Wallet className="mr-2" color="white" size={24} />
        <Text className="text-white font-semibold text-lg">Connect Wallet</Text>
      </TouchableOpacity>
    </View>
  );
}