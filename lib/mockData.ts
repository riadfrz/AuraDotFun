// Mock data for the AuraDotFun app

export interface Influencer {
  id: string;
  name: string;
  username: string;
  imageUrl: string;
  tokenPrice: number;
  priceChange24h: number;
  followers?: number;
  following?: number;
  bio?: string;
}

export const trendingInfluencers: Influencer[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    username: 'emmathompson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    tokenPrice: 125.5,
    priceChange24h: 12.5,
    followers: 125000,
    following: 850,
    bio: 'Digital creator & lifestyle influencer. Sharing fashion, travel, and daily inspiration.',
  },
  {
    id: '2',
    name: 'Alex Rivera',
    username: 'alexrivera',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    tokenPrice: 87.25,
    priceChange24h: -5.3,
    followers: 98000,
    following: 723,
    bio: 'Tech entrepreneur and investor. Building the future of Web3.',
  },
  {
    id: '3',
    name: 'Sophia Chen',
    username: 'sophiachen',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    tokenPrice: 215.75,
    priceChange24h: 28.4,
    followers: 245000,
    following: 512,
    bio: 'Beauty & wellness creator. Sharing skincare routines and self-care tips.',
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    username: 'marcusjohnson',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    tokenPrice: 65.3,
    priceChange24h: -2.1,
    followers: 78000,
    following: 934,
    bio: 'Fitness coach and nutrition expert. Helping you achieve your health goals.',
  },
  {
    id: '5',
    name: 'Olivia Kim',
    username: 'oliviakim',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    tokenPrice: 178.9,
    priceChange24h: 15.7,
    followers: 320000,
    following: 631,
    bio: 'Fashion designer and style icon. Creating trends and breaking rules.',
  },
];

export const portfolioHoldings: Influencer[] = [
  trendingInfluencers[0],
  trendingInfluencers[2],
  trendingInfluencers[4],
];

export const userProfile: Influencer = {
  id: 'user',
  name: 'Your Profile',
  username: 'yourprofile',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  tokenPrice: 50.25,
  priceChange24h: 8.3,
  followers: 12500,
  following: 850,
  bio: 'Web3 enthusiast and early adopter. Exploring the future of social trading.',
};
