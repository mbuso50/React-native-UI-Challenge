export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    dosage?: string;
    imageUrl: any;
    quantity?: number;
    isFavorite?: boolean;
    category?: string;
}

export interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    style?: any;
    textStyle?: any;
}

export interface HeaderProps {
    cartItemsCount?: number;
    onBackPress: () => void;
    onCartPress: () => void;
}

export interface ProductCardProps {
    product: Product;
    onPress?: () => void;
    style?: any;
}