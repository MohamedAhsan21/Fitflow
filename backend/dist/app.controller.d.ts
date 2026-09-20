export declare class AppController {
    health(): {
        status: string;
        service: string;
        timestamp: string;
    };
    summary(): {
        app: string;
        tagline: string;
        features: string[];
    };
}
