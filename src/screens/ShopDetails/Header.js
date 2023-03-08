import { View, Text, Image } from 'react-native';
import styles from './styles';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';

const DEFAULT_IMAGE = '';

const BusinessHeader = ({ business }) => {
  return (
    <View style={styles.page}>
      <View>
        <Image
          source={{
            uri: business?.image.startsWith('http') ? business?.image : DEFAULT_IMAGE,
          }}
          style={styles.image}
        />
        <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryText}>
            DELIVERY: FREE
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>{business?.name}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.desc}>
          {business.description}
        </Text>
      </View>
      <View style={styles.container}>
        {/* <View style={styles.listItem}>
          <FontAwesome5 name="smile" size={18} color="blue" />
          <Text style={styles.info}>{business?.rating?.toFixed(1)}</Text>
        </View> */}

        <View style={styles.listItem}>
          <Feather name="clock" size={18} color="blue" />
          <Text style={styles.info}>{business?.business_hours}</Text>
        </View>

        <View style={styles.listItem}>
          <MaterialIcons name="directions-bike" size={18} color="blue" />
          <Text style={styles.info}>
            Delivery in {business?.delivery_time_min}-{business?.delivery_time_max} min
          </Text>
        </View>
      </View>
      {/* <Text style={styles.menuTitle}>Menu</Text> */}
    </View>
  );
};

export default BusinessHeader;
