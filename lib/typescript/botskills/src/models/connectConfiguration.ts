import { ILogger } from '../logger';

/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */

export interface IConnectConfiguration {
    botName: string;
    localManifest: string;
    remoteManifest: string;
    dispatchName: string;
    language: string;
    luisFolder: string;
    dispatchFolder: string;
    outFolder: string;
    lgOutFolder: string;
    skillsFile: string;
    resourceGroup: string;
    appSettingsFile: string;
    cognitiveModelsFile: string;
    logger: ILogger;
}
