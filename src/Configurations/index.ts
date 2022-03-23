import * as vscode from 'vscode';
import { IConfiguration, Locale } from '../Utils/Typings';
import { Constants } from '../Constants';

// [[GroupIdentifier,['pkg1','pkg2']],[]]

type WorkspacePackageGroup = Array<[string, string[]]>;

class WorkspacePackageGroupConfiguration
  implements IConfiguration<WorkspacePackageGroup>
{
  public identifier = 'workspacePackageGroups';

  public defaultConfig = [];

  public read(): WorkspacePackageGroup {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<WorkspacePackageGroup>(this.identifier, this.defaultConfig);
  }

  public write(input: WorkspacePackageGroup): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, vscode.ConfigurationTarget.Workspace);
  }
}

class ExtraWorkspaceScriptsConfigConfiguration
  implements IConfiguration<string[]>
{
  public identifier = 'extraWorkspaceScripts';

  public defaultConfig = [];

  public read(): string[] {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<string[]>(this.identifier, this.defaultConfig);
  }

  public write(input: string[]): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, vscode.ConfigurationTarget.Workspace);
  }
}

interface IPrivateConfig {
  username?: string;
  email?: string;
}

class PrivateExtensionConfigConfiguration
  implements IConfiguration<IPrivateConfig>
{
  public identifier = 'privateExtConfig';

  public defaultConfig = {};

  public read(): IPrivateConfig {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<IPrivateConfig>(this.identifier, this.defaultConfig);
  }

  public write(input: IPrivateConfig): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, true);
  }
}

class CodeLenConfiguration implements IConfiguration<boolean> {
  public identifier = 'enableCodeLens';

  public defaultConfig = false;

  public read() {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<boolean>(this.identifier, this.defaultConfig);
  }

  public write(input: boolean): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, true);
  }
}

class LocaleConfigurations implements IConfiguration<Locale> {
  public identifier = 'locale';

  public defaultConfig: Locale = 'en-US';

  public read() {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<Locale>(this.identifier, this.defaultConfig);
  }

  public write(input: Locale): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, true);
  }
}

export type SharedBooleanConfigChoices = ['enable', 'disable'];

class WorkspaceFeatureConfiguration implements IConfiguration<boolean> {
  public identifier = 'workspace';

  public defaultConfig = true;

  public read() {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<boolean>(this.identifier, this.defaultConfig);
  }

  public write(input: boolean): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, true);
  }
}

class ShamefullyHoistConfiguration implements IConfiguration<boolean> {
  public identifier = 'shamefullyHoist';

  public defaultConfig = false;

  public read() {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<boolean>(this.identifier, this.defaultConfig);
  }

  public write(input: boolean): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, vscode.ConfigurationTarget.Workspace);
  }
}

class WorkspacePackagesConfiguration
  implements IConfiguration<Record<string, string>>
{
  public identifier = 'workspacePackages';

  public defaultConfig = {};

  public read() {
    return vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<Record<string, string>>(this.identifier, this.defaultConfig);
  }

  public write(input: Record<string, string>): void {
    vscode.workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .update(this.identifier, input, vscode.ConfigurationTarget.Workspace);
  }
}

export class ExtensionConfiguration {
  public static locale = new LocaleConfigurations();

  public static codeLen = new CodeLenConfiguration();

  public static workspace = new WorkspaceFeatureConfiguration();

  public static shamefullyHoist = new ShamefullyHoistConfiguration();

  public static packages = new WorkspacePackagesConfiguration();

  public static privateExtConfig = new PrivateExtensionConfigConfiguration();

  public static extraWorkspaceScript =
    new ExtraWorkspaceScriptsConfigConfiguration();

  public static workspacePackageGroup =
    new WorkspacePackageGroupConfiguration();
}
