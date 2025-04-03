import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export interface Influencer {
  id: string;
  name: string;
  imageUrl: string;
  tokenPrice: number;
  priceChange24h: number;
  username: string;
}

interface Props {
  influencer: Influencer;
}

export function InfluencerCard({ influencer }: Props) {
  const router = useRouter();
  const isPriceUp = influencer.priceChange24h > 0;

  return (
    <TouchableOpacity
      onPress={() => router.push(`/profile/${influencer.id}`)}
      className="flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-xl mb-4"
    >
      <Image
        source={{ uri: influencer.imageUrl }}
        className="w-12 h-12 rounded-full"
      />
      <View className="flex-1 ml-4">
        <Text className="text-gray-900 dark:text-white font-semibold">
          {influencer.name}
        </Text>
        <Text className="text-gray-500 dark:text-gray-400">
          @{influencer.username}
        </Text>
      </View>
      <View className="items-end">
        <Text className="text-gray-900 dark:text-white font-semibold">
          ${influencer.tokenPrice.toFixed(2)}
        </Text>
        <View className="flex-row items-center">
          {isPriceUp ? (
            <ArrowUpRight size={16} color="#10B981" />
          ) : (
            <ArrowDownRight size={16} color="#EF4444" />
          )}
          <Text
            className={isPriceUp ? "text-green-500" : "text-red-500"}
          >
            {Math.abs(influencer.priceChange24h).toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}