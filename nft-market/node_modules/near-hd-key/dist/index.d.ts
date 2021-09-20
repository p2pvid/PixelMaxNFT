/// <reference types="node" />
declare type Keys = {
    key: Buffer;
    chainCode: Buffer;
};
export declare const getMasterKeyFromSeed: (seed: string) => Keys;
export declare const getPublicKey: (privateKey: Buffer, withZeroByte?: boolean) => Buffer;
export declare const isValidPath: (path: string) => boolean;
export declare const derivePath: (path: string, seed: string) => Keys;
export {};
