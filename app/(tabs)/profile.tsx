import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TokenActionSheet } from '@/components/TokenActionSheet';

// Mock profile data
const profile = {
  name: 'Your Profile',
  username: 'yourprofile',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  tokenPrice: 50.25,
  priceChange24h: 8.3,
  followers: 12500,
  following: 850,
};

export default function ProfileScreen() {
  const [isActionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="pt-12 px-4">
        <View className="items-center">
          <Image
            source={{ uri: profile.imageUrl }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">
            {profile.name}
          </Text>
          <Text className="text-gray-500 dark:text-gray-400 mb-4">
            @{profile.username}
          </Text>

          <View className="flex-row space-x-8 mb-6">
            <View className="items-center">
              <Text className="text-gray-900 dark:text-white font-bold">
                {profile.followers.toLocaleString()}
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-gray-900 dark:text-white font-bold">
                {profile.following.toLocaleString()}
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">Following</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setActionSheetVisible(true)}
            className="bg-primary px-8 py-3 rounded-full"
          >
            <Text className="text-white font-semibold">Trade Token</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TokenActionSheet
        visible={isActionSheetVisible}
        onClose={() => setActionSheetVisible(false)}
        influencerName={profile.name}
        tokenPrice={profile.tokenPrice}
        onBuy={() => {
          // Placeholder for buy logic
          setActionSheetVisible(false);
        }}
        onSell={() => {
          // Placeholder for sell logic
          setActionSheetVisible(false);
        }}
      />
    </View>
  );
}