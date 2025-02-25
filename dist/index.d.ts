import { Keys } from "./keys";
import { Projects } from "./projects";
import { Transcriber } from "./transcription";
import { Usage } from "./usage";
import { Members } from "./members";
import { Invitation } from "./invitation";
import { Billing } from "./billing";
import { Scopes } from "./scopes";
export declare class Deepgram {
    private _apiUrl;
    private _apiKey;
    private _requireSSL;
    keys: Keys;
    projects: Projects;
    transcription: Transcriber;
    usage: Usage;
    members: Members;
    invitation: Invitation;
    billing: Billing;
    scopes: Scopes;
    constructor(apiKey: string, apiUrl?: string, requireSSL?: boolean);
}
