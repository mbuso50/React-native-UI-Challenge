import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Header } from '../../components/layout/Header';
import { Button } from '../../components/common/Button';
import { DosageButton } from '../../components/common/DosageButton';
import { colors, spacing, borderRadius } from '../../constants/theme';

const PLACEHOLDER_IMAGE = require('../../assets/images/pill1.png');

const MOCK_PRODUCT = {
  id: '1',
  name: 'Relax 30 Dissolvable Wafers',
  description: '250 mg',
  price: 25.5,
  dosage: '250 mg',
  imageUrl: PLACEHOLDER_IMAGE,
  quantity: 2,
};

const ProductDetailScreen: React.FC = () => {
  const [quantity, setQuantity] = useState(MOCK_PRODUCT.quantity);
  const [selectedDosage, setSelectedDosage] = useState('30');

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleBackPress = () => console.log('Back pressed');
  const handleCartPress = () => console.log('Cart pressed');
  const handleBuyNow = () => console.log('Buy now pressed');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Header
          cartItemsCount={3}
          onBackPress={handleBackPress}
          onCartPress={handleCartPress}
        />

        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <Image
              source={PLACEHOLDER_IMAGE}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.dosageContainer}>
            {['30', '60', '90'].map(dosage => (
              <DosageButton
                key={dosage}
                dosage={dosage}
                isActive={selectedDosage === dosage}
                onPress={() => setSelectedDosage(dosage)}
              />
            ))}
          </View>
        </View>

        <View style={styles.detailsCard}>
          <Text style={styles.productName}>{MOCK_PRODUCT.name}</Text>
          <Text style={styles.productDescription}>{MOCK_PRODUCT.description}</Text>

          <View style={styles.priceQuantityContainer}>
            <Text style={styles.price}>R{MOCK_PRODUCT.price.toFixed(2)}</Text>

            <View style={styles.quantityContainer}>
              <Button
                title="-"
                variant="primary"
                size="small"
                onPress={handleDecrement}
                style={styles.quantityButton}
                textStyle={styles.quantityButtonText}
              />
              <Text style={styles.quantityText}>{quantity}</Text>
              <Button
                title="+"
                variant="primary"
                size="small"
                onPress={handleIncrement}
                style={styles.quantityButton}
                textStyle={styles.quantityButtonText}
              />
            </View>
          </View>

          <Button
            title="Buy Now"
            variant="primary"
            size="large"
            onPress={handleBuyNow}
            style={styles.buyButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  activeCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: borderRadius.circle,
  },
  inactiveCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  categoryIcon: {
    fontSize: 20,
  },
  activeCategoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  inactiveCategoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  imageSection: {
    position: 'relative',
    height: 300,
    marginTop: spacing.xl,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  productImage: {
    width: 160,
    height: 240,
  },
  dosageContainer: {
    position: 'absolute',
    right: spacing.lg,
    top: '50%',
    transform: [{ translateY: -50 }],
    gap: spacing.md,
    zIndex: 20,
  },
  detailsCard: {
    backgroundColor: colors.backgroundLight,
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    padding: spacing.xl,
    paddingTop: spacing.xxl + spacing.lg,
    marginTop: 120,
    flex: 1,
    minHeight: 400,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    lineHeight: 32,
  },
  productDescription: {
    fontSize: 16,
    color: colors.gray[500],
    marginTop: spacing.sm,
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.black,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  quantityButton: {
    width: 40,
    height: 40,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 24,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    minWidth: 30,
    textAlign: 'center',
  },
  buyButton: {
    marginTop: spacing.xxl,
    marginBottom: spacing.lg,
  },
});

export default ProductDetailScreen;