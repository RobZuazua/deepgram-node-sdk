/// <reference types="node" />
import { ReadStream } from "fs";
export declare type RequestFunction = NodeRequest | BrowserRequest;
export declare type NodeRequest = (method: string, apiKey: string, apiUrl: string, requireSSL: boolean, path: string, payload?: string | Buffer | ReadStream, options?: Object) => Promise<any>;
export declare type BrowserRequest = (method: string, apiKey: string, apiUrl: string, requireSSL: boolean, path: string, payload?: string) => Promise<any>;
