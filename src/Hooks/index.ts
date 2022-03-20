import * as vscode from 'vscode';
import { ExtensionPreHook } from './Pre';
import { ExtensionExperimentalHook } from './Experimentals';

export class ExtensionHooks {
  public static async execute(context: vscode.ExtensionContext) {
    await ExtensionExperimentalHook.experimentalWorks(context);
    await ExtensionPreHook.preCheckShamefullyHoistConfig();
    await ExtensionPreHook.preCollectWorkspacePackages();
  }
}
