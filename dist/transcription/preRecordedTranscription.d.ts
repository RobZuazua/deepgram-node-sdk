import { PrerecordedTranscriptionOptions, PrerecordedTranscriptionResponse, TranscriptionSource } from "../types";
/**
 * Transcribes audio from a file or buffer
 *
 * @param apiKey string
 * @param apiUrl string
 * @param requireSSL boolean
 * @param source TranscriptionSource
 * @param options PrerecordedTranscriptionOptions
 * @param options string
 * @returns Promise<PrerecordedTranscriptionResponse>
 */
export declare const preRecordedTranscription: (apiKey: string, apiUrl: string, requireSSL: boolean, source: TranscriptionSource, options?: PrerecordedTranscriptionOptions | undefined, endpoint?: string) => Promise<PrerecordedTranscriptionResponse>;
