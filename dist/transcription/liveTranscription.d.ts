/// <reference types="node" />
import EventEmitter from "events";
import { ConnectionState } from "../enums";
import { LiveTranscriptionOptions, ToggleConfigOptions } from "../types";
export declare class LiveTranscription extends EventEmitter {
    private _socket;
    constructor(credentials: string, apiUrl: string, requireSSL: boolean, options?: LiveTranscriptionOptions, endpoint?: string);
    private _bindSocketEvents;
    configure(config: ToggleConfigOptions): void;
    keepAlive(): void;
    /**
     * Returns the ready state of the websocket connection
     */
    getReadyState(): ConnectionState;
    /**
     * Sends data to the Deepgram API via websocket connection
     * @param data Audio data to send to Deepgram
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    /**
     * Denote that you are finished sending audio and close
     * the websocket connection when transcription is finished
     */
    finish(): void;
}
