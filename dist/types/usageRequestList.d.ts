import { UsageRequest } from "./usageRequest";
export declare type UsageRequestList = {
    page: number;
    limit: number;
    requests?: Array<UsageRequest>;
    err_code?: string;
    err_msg?: string;
};
