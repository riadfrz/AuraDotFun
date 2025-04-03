import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { X } from 'lucide-react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  influencerName: string;
  tokenPrice: number;
  onBuy: () => void;
  onSell: () => void;
}

export function TokenActionSheet({
  visible,
  onClose,
  influencerName,
  tokenPrice,
  onBuy,
  onSell,
}: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white dark:bg-gray-800 rounded-t-3xl p-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-semibold text-gray-900 dark:text-white">
              Trade {influencerName} Token
            </Text>
            <TouchableOpacity onPress={onClose}>
              <X color="#6B7280" size={24} />
            </TouchableOpacity>
          </View>
          
          <Text className="text-gray-600 dark:text-gray-300 mb-4">
            Current Price: ${tokenPrice.toFixed(2)}
          </Text>
          
          <View className="flex-row space-x-4">
            <TouchableOpacity
              onPress={onBuy}
              className="flex-1 bg-primary py-4 rounded-xl items-center"
            >
              <Text className="text-white font-semibold">Buy</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={onSell}
              className="flex-1 bg-gray-200 dark:bg-gray-700 py-4 rounded-xl items-center"
            >
              <Text className="text-gray-900 dark:text-white font-semibold">
                Sell
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}