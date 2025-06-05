export interface Product {
    createdAt: string;
    favoriteCount: number;
    ownerNickname: string;
    ownerId: number;
    images: string[];
    tags: string[];
    price: number;
    description: string;
    name: string,
    id: number;
    isFavorite: boolean;
}

export interface Products {
    totalCount: number;
    list: Product[];
}

export interface Comment {
    writer: {
        image: string;
        nickname: string;
        id: number;
    };
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
}

export interface Comments {
    nextCursor: number;
    list: Comment[]
}