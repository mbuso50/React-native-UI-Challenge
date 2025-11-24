import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { colors, spacing, borderRadius } from '../../constants/theme';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    icon,
    style,
    textStyle,
}) => {
    const getButtonStyle = (): ViewStyle[] => {
        const baseStyle: ViewStyle[] = [
            styles.button,
            styles[`${variant}Button`],
            styles[`${size}Button`],
        ];

        if (disabled) {
            baseStyle.push(styles.disabledButton);
        }

        if (style) {
            return Array.isArray(style) ? [...baseStyle, ...style] : [...baseStyle, style];
        }
        return baseStyle;
    };

    const getTextStyle = (): TextStyle[] => {
        const baseStyle: TextStyle[] = [
            styles.text,
            styles[`${variant}Text`],
            styles[`${size}Text`],
        ];

        if (disabled) {
            baseStyle.push(styles.disabledText);
        }

        if (textStyle) {
            return Array.isArray(textStyle) ? [...baseStyle, ...textStyle] : [...baseStyle, textStyle];
        }
        return baseStyle;
    };

    return (
        <TouchableOpacity
            style={getButtonStyle()}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}>
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={variant === 'primary' ? colors.black : colors.primary}
                />
            ) : (
                <>
                    {icon && <Text style={styles.icon}>{icon}</Text>}
                    <Text style={getTextStyle()}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius.xxl,
        gap: spacing.sm,
    },
    primaryButton: {
        backgroundColor: colors.primary,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary,
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.gray[500],
    },
    smallButton: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        minHeight: 40,
    },
    mediumButton: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        minHeight: 48,
    },
    largeButton: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xl,
        minHeight: 56,
    },
    text: {
        fontWeight: '600',
        textAlign: 'center',
    },
    primaryText: {
        color: colors.black,
    },
    secondaryText: {
        color: colors.primary,
    },
    outlineText: {
        color: colors.gray[900],
    },
    smallText: {
        fontSize: 14,
    },
    mediumText: {
        fontSize: 16,
    },
    largeText: {
        fontSize: 18,
    },
    disabledButton: {
        opacity: 0.6,
    },
    disabledText: {
        opacity: 0.6,
    },
    icon: {
        fontSize: 16,
    },
});