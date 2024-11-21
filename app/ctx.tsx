import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { axiosInstance } from '@/hooks/useAxios';
import * as SecureStore from 'expo-secure-store';
import { IUser } from '@/interface/user';
import { IProfile } from '@/interface/profile';
import { Progress } from '@/components/Progress';


interface AuthContextType {
    data: IUser & {
        profile: IProfile
    } | null;
    saveToken: (token: string) => void;
    onRefresh: () => void;
    removeToken: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    data: null,
    saveToken: () => { },
    onRefresh: () => { },
    removeToken: () => { },
});

export const useUser = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<IUser & {
        profile: IProfile
    } | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            setLoading(true);
            try {
                const [user, profile] = await Promise.all([
                    axiosInstance.get("/user/self"),
                    axiosInstance.get(`/profile/self`),
                ]);

                setData({ ...user.data, profile: profile.data });
            } catch (error) {
                SecureStore.deleteItemAsync(process.env.EXPO_PUBLIC_JWT_TOKEN_NAME!);
            }
            setLoading(false);
        };
        checkToken();
    }, []);

    const saveToken = async (token: string) => {
        setLoading(true);
        try {
            await SecureStore.setItemAsync(process.env.EXPO_PUBLIC_JWT_TOKEN_NAME!, token);
            const [user, profile] = await Promise.all([
                axiosInstance.get("/user/self"),
                axiosInstance.get(`/profile/self`),
            ]);

            setData({ ...user.data, profile: profile.data });
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    // SecureStore.deleteItemAsync(process.env.EXPO_PUBLIC_JWT_TOKEN_NAME!);
    const removeToken = async () => {
        setLoading(true);
        try {
            await SecureStore.deleteItemAsync(process.env.EXPO_PUBLIC_JWT_TOKEN_NAME!);
            setData(null);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const onRefresh = async () => {
        try {
            const [user, profile] = await Promise.all([
                axiosInstance.get("/user/self"),
                axiosInstance.get(`/profile/self`),
            ]);
            setData({ ...user.data, profile: profile.data });
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) {
        return <Progress />
    }

    return (
        <AuthContext.Provider value={{ data, saveToken, removeToken, onRefresh }}>
            {children}
        </AuthContext.Provider>
    );
}
