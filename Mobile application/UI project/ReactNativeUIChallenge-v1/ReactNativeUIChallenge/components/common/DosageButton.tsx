import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { colors, borderRadius } from '../../constants/theme';

interface DosageButtonProps {
    dosage: string;
    isActive: boolean;
    onPress: () => void;
}

export const DosageButton: React.FC<DosageButtonProps> = ({
    dosage,
    isActive,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.dosageButton,
                isActive ? styles.dosageButtonActive : styles.dosageButtonInactive
            ]}
            onPress={onPress}
        >
            <Text style={[
                styles.dosageText,
                isActive ? styles.dosageTextActive : styles.dosageTextInactive
            ]}>
                {dosage}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dosageButton: {
        width: 44,
        height: 44,
        borderRadius: borderRadius.circle,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    dosageButtonActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    dosageButtonInactive: {
        backgroundColor: colors.white,
        borderColor: colors.gray[500],
    },
    dosageText: {
        fontSize: 14,
        fontWeight: '600',
    },
    dosageTextActive: {
        color: colors.black,
    },
    dosageTextInactive: {
        color: colors.gray[900],
    },
});