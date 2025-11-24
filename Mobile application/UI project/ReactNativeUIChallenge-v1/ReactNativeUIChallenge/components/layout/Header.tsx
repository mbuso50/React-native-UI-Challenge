import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors, spacing, borderRadius } from '../../constants/theme';

interface HeaderProps {
  cartItemsCount?: number;
  onBackPress: () => void;
  onCartPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount = 0,
  onBackPress,
  onCartPress
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBackPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Product Details</Text>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={onCartPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Text style={styles.cartIcon}>🛒</Text>
        {cartItemsCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {cartItemsCount > 99 ? '99+' : cartItemsCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.black,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cartIcon: {
    fontSize: 20,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.gray[900],
    borderRadius: borderRadius.circle,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});