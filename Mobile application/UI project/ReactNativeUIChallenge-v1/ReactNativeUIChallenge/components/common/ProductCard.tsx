import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    ImageSourcePropType,
} from 'react-native';
import { colors, spacing, borderRadius } from '../../constants/theme';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: ImageSourcePropType;
    isFavorite?: boolean;
}

interface ProductCardProps {
    product: Product;
    onPress?: () => void;
    style?: ViewStyle;
}

const PLACEHOLDER_IMAGE = require('../../assets/images/pill1.png');

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onPress,
    style,
}) => {
    const {
        name,
        description,
        price,
        imageUrl,
        isFavorite = false,
    } = product;

    const handleFavoritePress = () => {
        console.log('Toggle favorite for:', name);
    };

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.9}>
            {/* Favorite Button */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={handleFavoritePress}>
                <Text style={styles.favoriteIcon}>
                    {isFavorite ? '❤️' : '🤍'}
                </Text>
            </TouchableOpacity>

            {/* Product Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={imageUrl}
                    style={styles.productImage}
                    resizeMode="contain"
                />
            </View>

            {/* Product Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.productName} numberOfLines={2}>
                    {name}
                </Text>
                <Text style={styles.productDescription} numberOfLines={1}>
                    {description}
                </Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>R{price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.lg,
        padding: spacing.md,
        margin: spacing.xs,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
        width: 160,
    },
    favoriteButton: {
        position: 'absolute',
        top: spacing.sm,
        right: spacing.sm,
        zIndex: 10,
        backgroundColor: colors.white,
        borderRadius: borderRadius.circle,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    favoriteIcon: {
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: spacing.sm,
        height: 120,
        justifyContent: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
    },
    infoContainer: {
        flex: 1,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        marginBottom: spacing.xs,
        lineHeight: 18,
    },
    productDescription: {
        fontSize: 12,
        color: colors.gray[500],
        marginBottom: spacing.md,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
    },
    addButton: {
        backgroundColor: colors.primary,
        width: 32,
        height: 32,
        borderRadius: borderRadius.circle,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: '300',
        color: colors.black,
        lineHeight: 20,
    },
});