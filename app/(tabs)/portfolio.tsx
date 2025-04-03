import { View, Text, ScrollView } from 'react-native';
import { InfluencerCard, Influencer } from '@/components/InfluencerCard';

// Mock portfolio data
const portfolioHoldings: Influencer[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    username: 'emmathompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    tokenPrice: 125.50,
    priceChange24h: 12.5,
  },
];

export default function PortfolioScreen() {
  const totalValue = portfolioHoldings.reduce(
    (sum, holding) => sum + holding.tokenPrice,
    0
  );

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="pt-12 px-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Portfolio
        </Text>
        <Text className="text-3xl font-bold text-primary mb-6">
          ${totalValue.toFixed(2)}
        </Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {portfolioHoldings.map((holding) => (
          <InfluencerCard key={holding.id} influencer={holding} />
        ))}
      </ScrollView>
    </View>
  );
}