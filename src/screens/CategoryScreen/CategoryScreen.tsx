import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';

const CategoryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>CATEGORY</Text>
    </SafeAreaView>
  );
};

export default CategoryScreen;
