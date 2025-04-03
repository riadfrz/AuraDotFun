import {
  View,
  ScrollView,
  Text,
  RefreshControl,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { InfluencerCard } from '@/components/InfluencerCard';
import { trendingInfluencers } from '@/lib/mockData';
import { useState, useCallback } from 'react';
import { Search } from 'lucide-react-native';
import { useColorScheme } from 'react-native';
import { COLORS } from '@/constants/theme';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a data refresh
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  const filteredInfluencers = trendingInfluencers.filter(
    (influencer) =>
      influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      influencer.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1 px-4 pt-12">
        {trendingInfluencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </ScrollView>
    </View>
  );
}
