export declare enum constant_RunStatus {
    RunStatusScheduling = "Scheduling",
    RunStatusInProgress = "InProgress",
    RunStatusFailed = "Failed",
    RunStatusSucceeded = "Succeeded",
    RunStatusCancelled = "Cancelled",
    RunStatusQueued = "Queued"
}
export declare enum constant_RunType {
    RunTypeGenerate = "Generate",
    RunTypePreview = "Preview",
    RunTypeApply = "Apply",
    RunTypeDestroy = "Destroy"
}
export declare enum constant_SourceProviderType {
    DefaultSourceType = "git",
    SourceProviderTypeGit = "github",
    SourceProviderTypeGithub = "oci",
    SourceProviderTypeOCI = "local"
}
export declare enum constant_StackState {
    StackStateUnSynced = "UnSynced",
    StackStateSynced = "Synced",
    StackStateOutOfSync = "OutOfSync",
    StackStateCreating = "Creating",
    StackStateGenerating = "Generating",
    StackStateGenerateFailed = "GenerateFailed",
    StackStateGenerated = "Generated",
    StackStatePreviewing = "Previewing",
    StackStatePreviewFailed = "PreviewFailed",
    StackStatePreviewed = "Previewed",
    StackStateApplying = "Applying",
    StackStateApplyFailed = "ApplyFailed",
    StackStateApplySucceeded = "ApplySucceeded",
    StackStateDestroying = "Destroying",
    StackStateDestroyFailed = "DestroyFailed",
    StackStateDestroySucceeded = "DestroySucceeded"
}
export type entity_Backend = {
    /**
     * // Type is the type of the backend.
     * Type string `yaml:"type" json:"type"`
     * Backend is the configuration of the backend.
     */
    backendConfig?: v1_BackendConfig;
    /**
     * CreationTimestamp is the timestamp of the created for the backend.
     */
    creationTimestamp?: string;
    /**
     * Description is a human-readable description of the backend.
     */
    description?: string;
    /**
     * ID is the id of the backend.
     */
    id?: number;
    /**
     * Name is the name of the backend.
     */
    name?: string;
    /**
     * UpdateTimestamp is the timestamp of the updated for the backend.
     */
    updateTimestamp?: string;
};
export type entity_Module = {
    /**
     * Description is a human-readable description of the module.
     */
    description?: string;
    /**
     * Doc is the documentation URL of the module.
     */
    doc?: url_URL;
    /**
     * Name is the module name.
     */
    name?: string;
    /**
     * Owners is a list of owners for the module.
     */
    owners?: Array<string>;
    /**
     * URL is the module oci artifact registry URL.
     */
    url?: url_URL;
};
export type entity_Organization = {
    /**
     * CreationTimestamp is the timestamp of the created for the organization.
     */
    creationTimestamp?: string;
    /**
     * Description is a human-readable description of the organization.
     */
    description?: string;
    /**
     * DisplayName is the human-readable display name.
     */
    displayName?: string;
    /**
     * ID is the id of the organization.
     */
    id?: number;
    /**
     * Labels are custom labels associated with the organization.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the organization.
     */
    name?: string;
    /**
     * Owners is a list of owners for the organization.
     */
    owners?: Array<string>;
    /**
     * UpdateTimestamp is the timestamp of the updated for the organization.
     */
    updateTimestamp?: string;
};
export type entity_Project = {
    /**
     * CreationTimestamp is the timestamp of the created for the project.
     */
    creationTimestamp?: string;
    /**
     * Description is a human-readable description of the project.
     */
    description?: string;
    /**
     * DisplayName is the human-readable display name.
     */
    displayName?: string;
    /**
     * ID is the id of the project.
     */
    id?: number;
    /**
     * Labels are custom labels associated with the project.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the project.
     */
    name?: string;
    /**
     * Organization is the configuration source associated with the project.
     */
    organization?: entity_Organization;
    /**
     * Owners is a list of owners for the project.
     */
    owners?: Array<string>;
    /**
     * Path is the relative path of the project within the sources.
     */
    path?: string;
    /**
     * Source is the configuration source associated with the project.
     */
    source?: entity_Source;
    /**
     * UpdateTimestamp is the timestamp of the updated for the project.
     */
    updateTimestamp?: string;
};
export type entity_Resource = {
    /**
     * LastAppliedRevision is the revision of the last sync.
     */
    LastAppliedRevision?: string;
    /**
     * LastAppliedTimestamp is the timestamp of the last sync.
     */
    LastAppliedTimestamp?: string;
    /**
     * Attributes is the attributes of the resource.
     */
    attributes?: unknown;
    /**
     * CloudResourceID is the id of the resource in the cloud.
     */
    cloudResourceID?: string;
    /**
     * CreationTimestamp is the timestamp of the created for the resource.
     */
    creationTimestamp?: string;
    /**
     * DependsOn is the depends on of the resource.
     */
    dependsOn?: Array<string>;
    /**
     * Extensions is the extensions of the resource.
     */
    extensions?: unknown;
    /**
     * IAMResourceID is the id of the resource in IAM.
     */
    iamResourceID?: string;
    /**
     * ID is the id of the resource.
     */
    id?: number;
    /**
     * KusionResourceID is the id of the resource in Kusion.
     */
    kusionResourceID?: string;
    /**
     * Labels are custom labels associated with the resource.
     */
    labels?: Array<string>;
    /**
     * Owners is a list of owners for the resource.
     */
    owners?: Array<string>;
    /**
     * Provider is the provider of the resource.
     */
    provider?: string;
    /**
     * ResourceName is the name of the resource.
     */
    resourceName?: string;
    /**
     * ResourcePlane is the plane of the resource.
     */
    resourcePlane?: string;
    /**
     * ResourceType is the type of the resource.
     */
    resourceType?: string;
    /**
     * Stack is the stack associated with the resource.
     */
    stack?: entity_Stack;
    /**
     * Status is the status of the resource.
     */
    status?: string;
    /**
     * UpdateTimestamp is the timestamp of the updated for the resource.
     */
    updateTimestamp?: string;
};
export type entity_ResourceGraph = {
    relations?: Array<entity_ResourceRelation>;
    resources?: {
        [key: string]: entity_ResourceInfo;
    };
    workload?: string;
};
export type entity_ResourceInfo = {
    /**
     * CloudResourceID is the id of the resource in the cloud.
     */
    cloudResourceID?: string;
    /**
     * IAMResourceID is the id of the resource in IAM.
     */
    iamResourceID?: string;
    /**
     * ResourceName is the name of the resource.
     */
    resourceName?: string;
    /**
     * ResourcePlane is the plane of the resource.
     */
    resourcePlane?: string;
    /**
     * ResourceType is the type of the resource.
     */
    resourceType?: string;
    /**
     * Status is the status of the resource.
     */
    status?: string;
};
export type entity_ResourceRelation = {
    dependencyResource?: string;
    dependentResource?: string;
};
export type entity_Run = {
    /**
     * CreationTimestamp is the timestamp of the created for the run.
     */
    creationTimestamp?: string;
    /**
     * ID is the id of the run.
     */
    id?: number;
    /**
     * Logs is the logs of the run.
     */
    logs?: string;
    /**
     * Result is the result of the run.
     */
    result?: string;
    /**
     * Stack is the stack of the run.
     */
    stack?: entity_Stack;
    /**
     * Status is the status of the run.
     */
    status?: constant_RunStatus;
    /**
     * Trace is the trace of the run.
     */
    trace?: string;
    /**
     * RunType is the type of the run provider.
     */
    type?: constant_RunType;
    /**
     * UpdateTimestamp is the timestamp of the updated for the run.
     */
    updateTimestamp?: string;
    /**
     * Workspace is the target workspace of the run.
     */
    workspace?: string;
};
export type entity_Source = {
    /**
     * CreationTimestamp is the timestamp of the created for the source.
     */
    creationTimestamp?: string;
    /**
     * Description is a human-readable description of the source.
     */
    description?: string;
    /**
     * ID is the id of the source.
     */
    id?: number;
    /**
     * Labels are custom labels associated with the source.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the source.
     */
    name?: string;
    /**
     * Owners is a list of owners for the source.
     */
    owners?: Array<string>;
    /**
     * Remote is the source URL, including scheme.
     */
    remote?: url_URL;
    /**
     * SourceProvider is the type of the source provider.
     */
    sourceProvider?: constant_SourceProviderType;
    /**
     * UpdateTimestamp is the timestamp of the updated for the source.
     */
    updateTimestamp?: string;
};
export type entity_Stack = {
    /**
     * CreationTimestamp is the timestamp of the created for the stack.
     */
    creationTimestamp?: string;
    /**
     * Description is a human-readable description of the stack.
     */
    description?: string;
    /**
     * Desired is the desired version of stack.
     */
    desiredVersion?: string;
    /**
     * DisplayName is the human-readable display nams.
     */
    displayName?: string;
    /**
     * ID is the id of the stack.
     */
    id?: number;
    /**
     * Labels are custom labels associated with the stack.
     */
    labels?: Array<string>;
    /**
     * LastAppliedRevision is the spec ID of the last apply operation for the stack.
     */
    lastAppliedRevision?: string;
    /**
     * LastAppliedTimestamp is the timestamp of the last apply operation for the stack.
     */
    lastAppliedTimestamp?: string;
    /**
     * LastGeneratedRevision is the spec ID of the last generate operation for the stack.
     */
    lastGeneratedRevision?: string;
    /**
     * LastPreviewedRevision is the spec ID of the last preview operation for the stack.
     */
    lastPreviewedRevision?: string;
    /**
     * Name is the name of the stack.
     */
    name?: string;
    /**
     * Owners is a list of owners for the stack.
     */
    owners?: Array<string>;
    /**
     * Path is the relative path of the stack within the sourcs.
     */
    path?: string;
    /**
     * Project is the project associated with the stack.
     */
    project?: entity_Project;
    /**
     * SyncState is the current state of the stack.
     */
    syncState?: constant_StackState;
    /**
     * Type is the type of the stack.
     */
    type?: string;
    /**
     * UpdateTimestamp is the timestamp of the updated for the stack.
     */
    updateTimestamp?: string;
};
export type entity_Workspace = {
    /**
     * Backend is the corresponding backend for this workspace.
     */
    backend?: entity_Backend;
    /**
     * CreationTimestamp is the timestamp of the created for the workspace.
     */
    creationTimestamp?: string;
    /**
     * Description is a human-readable description of the workspace.
     */
    description?: string;
    /**
     * DisplayName is the human-readable display name.
     */
    displayName?: string;
    /**
     * ID is the id of the workspace.
     */
    id?: number;
    /**
     * Labels are custom labels associated with the workspace.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the workspace.
     */
    name?: string;
    /**
     * Owners is a list of owners for the workspace.
     */
    owners?: Array<string>;
    /**
     * UpdateTimestamp is the timestamp of the updated for the workspace.
     */
    updateTimestamp?: string;
};
export declare enum kusionstack_io_kusion_pkg_apis_api_kusion_io_v1_Type {
    Kubernetes = "Kubernetes",
    Terraform = "Terraform"
}
export declare enum models_ActionType {
    Undefined = 0,
    UnChanged = 1,
    Create = 2,
    Update = 3,
    Delete = 4
}
export type models_Changes = {
    changeSteps?: {
        [key: string]: models_ChangeStep;
    };
    stepKeys?: Array<string>;
};
export type models_ChangeStep = {
    /**
     * the operation performed by this step
     */
    action?: models_ActionType;
    /**
     * old data
     */
    from?: unknown;
    /**
     * the resource id
     */
    id?: string;
    /**
     * new data
     */
    to?: unknown;
};
export type request_CreateBackendRequest = {
    /**
     * BackendConfig is the configuration of the backend.
     */
    backendConfig?: v1_BackendConfig;
    /**
     * Description is a human-readable description of the backend.
     */
    description?: string;
    /**
     * Name is the name of the backend.
     */
    name: string;
};
export type request_CreateModuleRequest = {
    /**
     * Description is a human-readable description of the module.
     */
    description?: string;
    /**
     * Doc is the documentation URL of the module.
     */
    doc?: string;
    /**
     * Name is the module name.
     */
    name: string;
    /**
     * Owners is a list of owners for the module.
     */
    owners?: Array<string>;
    /**
     * URL is the module oci artifact registry URL.
     */
    url: string;
};
export type request_CreateOrganizationRequest = {
    /**
     * Description is a human-readable description of the organization.
     */
    description?: string;
    /**
     * Labels are custom labels associated with the organization.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the organization.
     */
    name?: string;
    /**
     * Owners is a list of owners for the organization.
     */
    owners: Array<string>;
};
export type request_CreateProjectRequest = {
    /**
     * Description is a human-readable description of the project.
     */
    description?: string;
    /**
     * Domain is the domain of the project, typically serving as the parent folder name for the project.
     */
    domain: string;
    /**
     * Labels are custom labels associated with the project.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the project.
     */
    name?: string;
    /**
     * OrganizationID is the organization id associated with the project.
     */
    organizationID?: number;
    /**
     * Owners is a list of owners for the project.
     */
    owners?: Array<string>;
    /**
     * Path is the relative path of the project within the sources.
     */
    path?: string;
    /**
     * SourceID is the configuration source id associated with the project.
     */
    sourceID?: number;
};
export type request_CreateSourceRequest = {
    /**
     * Description is a human-readable description of the source.
     */
    description?: string;
    /**
     * Labels are custom labels associated with the source.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the source.
     */
    name: string;
    /**
     * Owners is a list of owners for the source.
     */
    owners?: Array<string>;
    /**
     * Remote is the source URL, including scheme.
     */
    remote: string;
    /**
     * SourceProvider is the type of the source provider.
     */
    sourceProvider: string;
};
export type request_CreateStackRequest = {
    /**
     * Description is a human-readable description of the stack.
     */
    description?: string;
    /**
     * DesiredVersion is the desired revision of stack.
     */
    desiredVersion?: string;
    /**
     * Labels are custom labels associated with the stack.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the stack.
     */
    name: string;
    /**
     * Owners is a list of owners for the stack.
     */
    owners?: Array<string>;
    /**
     * Path is the relative path of the stack within the source.
     */
    path?: string;
    /**
     * ProjectID is the project id of the stack within the source.
     */
    projectID?: number;
    /**
     * ProjectName is the project name of the stack within the source.
     */
    projectName?: string;
    /**
     * Type is the type of the stack.
     */
    type?: string;
};
export type request_CreateWorkspaceRequest = {
    /**
     * BackendID is the configuration backend id associated with the workspace.
     */
    backendID: number;
    /**
     * Description is a human-readable description of the workspace.
     */
    description?: string;
    /**
     * Labels are custom labels associated with the workspace.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the workspace.
     */
    name: string;
    /**
     * Owners is a list of owners for the workspace.
     */
    owners: Array<string>;
};
export type request_StackImportRequest = {
    importedResources?: {
        [key: string]: string;
    };
};
export type request_UpdateBackendRequest = {
    /**
     * BackendConfig is the configuration of the backend.
     */
    backendConfig?: v1_BackendConfig;
    /**
     * Description is a human-readable description of the backend.
     */
    description?: string;
    /**
     * ID is the id of the backend.
     */
    id: number;
    /**
     * Name is the name of the backend.
     */
    name: string;
};
export type request_UpdateModuleRequest = {
    /**
     * Description is a human-readable description of the module.
     */
    description?: string;
    /**
     * Doc is the documentation URL of the module.
     */
    doc?: string;
    /**
     * Name is the module name.
     */
    name: string;
    /**
     * Owners is a list of owners for the module.
     */
    owners?: Array<string>;
    /**
     * URL is the module oci artifact registry URL.
     */
    url?: string;
};
export type request_UpdateOrganizationRequest = {
    /**
     * Description is a human-readable description of the organization.
     */
    description?: string;
    /**
     * ID is the id of the organization.
     */
    id: number;
    /**
     * Labels are custom labels associated with the organization.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the organization.
     */
    name?: string;
    /**
     * Owners is a list of owners for the organization.
     */
    owners: Array<string>;
};
export type request_UpdateProjectRequest = {
    /**
     * Description is a human-readable description of the project.
     */
    description?: string;
    /**
     * Domain is the domain of the project, typically serving as the parent folder name for the project.
     */
    domain: string;
    /**
     * ID is the id of the project.
     */
    id: number;
    /**
     * Labels are custom labels associated with the project.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the project.
     */
    name?: string;
    /**
     * OrganizationID is the organization id associated with the project.
     */
    organizationID?: number;
    /**
     * Owners is a list of owners for the project.
     */
    owners?: Array<string>;
    /**
     * Path is the relative path of the project within the sources.
     */
    path?: string;
    /**
     * SourceID is the configuration source id associated with the project.
     */
    sourceID?: number;
};
export type request_UpdateSourceRequest = {
    /**
     * Description is a human-readable description of the source.
     */
    description?: string;
    /**
     * ID is the id of the source.
     */
    id: number;
    /**
     * Labels are custom labels associated with the source.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the source.
     */
    name: string;
    /**
     * Owners is a list of owners for the source.
     */
    owners?: Array<string>;
    /**
     * Remote is the source URL, including scheme.
     */
    remote: string;
    /**
     * SourceProvider is the type of the source provider.
     */
    sourceProvider: string;
};
export type request_UpdateStackRequest = {
    /**
     * Description is a human-readable description of the stack.
     */
    description?: string;
    /**
     * DesiredVersion is the desired revision of stack.
     */
    desiredVersion?: string;
    /**
     * ID is the id of the stack.
     */
    id: number;
    /**
     * Labels are custom labels associated with the stack.
     */
    labels?: Array<string>;
    /**
     * Name is the name of the stack.
     */
    name: string;
    /**
     * Owners is a list of owners for the stack.
     */
    owners?: Array<string>;
    /**
     * Path is the relative path of the stack within the source.
     */
    path?: string;
    /**
     * ProjectID is the project id of the stack within the source.
     */
    projectID?: number;
    /**
     * ProjectName is the project name of the stack within the source.
     */
    projectName?: string;
    /**
     * Type is the type of the stack.
     */
    type?: string;
};
export type request_UpdateWorkspaceRequest = {
    /**
     * BackendID is the configuration backend id associated with the workspace.
     */
    backendID: number;
    /**
     * Description is a human-readable description of the workspace.
     */
    description?: string;
    /**
     * ID is the id of the workspace.
     */
    id: number;
    /**
     * Labels are custom labels associated with the workspace.
     */
    labels?: {
        [key: string]: string;
    };
    /**
     * Name is the name of the workspace.
     */
    name?: string;
    /**
     * Owners is a list of owners for the workspace.
     */
    owners: Array<string>;
};
export type request_WorkspaceConfigs = {
    /**
     * Context contains workspace-level configurations, such as runtimes, topologies, and metadata, etc.
     */
    context?: v1_GenericConfig;
    /**
     * Modules are the configs of a set of modules.
     */
    modules?: v1_ModuleConfigs;
    /**
     * SecretStore represents a secure external location for storing secrets.
     */
    secretStore?: v1_SecretStore;
};
export type url_URL = {
    /**
     * append a query ('?') even if RawQuery is empty
     */
    forceQuery?: boolean;
    /**
     * fragment for references, without '#'
     */
    fragment?: string;
    /**
     * host or host:port (see Hostname and Port methods)
     */
    host?: string;
    /**
     * do not emit empty host (authority)
     */
    omitHost?: boolean;
    /**
     * encoded opaque data
     */
    opaque?: string;
    /**
     * path (relative paths may omit leading slash)
     */
    path?: string;
    /**
     * encoded fragment hint (see EscapedFragment method)
     */
    rawFragment?: string;
    /**
     * encoded path hint (see EscapedPath method)
     */
    rawPath?: string;
    /**
     * encoded query values, without '?'
     */
    rawQuery?: string;
    scheme?: string;
    /**
     * username and password information
     */
    user?: url_Userinfo;
};
export type url_Userinfo = unknown;
export type v1_AlicloudProvider = {
    /**
     * Alicloud Region to be used to interact with Alicloud Secrets Manager.
     * Examples are cn-beijing, cn-shanghai, etc.
     */
    region?: string;
};
export type v1_AWSProvider = {
    /**
     * The profile to be used to interact with AWS Secrets Manager.
     * If not set, the default profile created with `aws configure` will be used.
     */
    profile?: string;
    /**
     * AWS Region to be used to interact with AWS Secrets Manager.
     * Examples are us-east-1, us-west-2, etc.
     */
    region?: string;
};
export declare enum v1_AzureEnvironmentType {
    AzureEnvironmentPublicCloud = "PublicCloud",
    AzureEnvironmentUSGovernmentCloud = "USGovernmentCloud",
    AzureEnvironmentChinaCloud = "ChinaCloud",
    AzureEnvironmentGermanCloud = "GermanCloud"
}
export type v1_AzureKVProvider = {
    /**
     * EnvironmentType specifies the Azure cloud environment endpoints to use for connecting and authenticating with Azure.
     * By-default it points to the public cloud AAD endpoint, and the following endpoints are available:
     * PublicCloud, USGovernmentCloud, ChinaCloud, GermanCloud
     * Ref: https://github.com/Azure/go-autorest/blob/main/autorest/azure/environments.go#L152
     */
    environmentType?: v1_AzureEnvironmentType;
    /**
     * TenantID configures the Azure Tenant to send requests to.
     */
    tenantId?: string;
    /**
     * Vault Url from which the secrets to be fetched from.
     */
    vaultUrl?: string;
};
export type v1_BackendConfig = {
    /**
     * Configs contains config items of the backend, whose keys differ from different backend types.
     */
    configs?: {
        [key: string]: unknown;
    };
    /**
     * Type is the backend type, supports BackendTypeLocal, BackendTypeOss, BackendTypeS3.
     */
    type?: string;
};
export type v1_Configs = {
    /**
     * Default is default block of the module config.
     */
    default?: v1_GenericConfig;
};
export type v1_FakeProvider = {
    data?: Array<v1_FakeProviderData>;
};
export type v1_FakeProviderData = {
    key?: string;
    value?: string;
    valueMap?: {
        [key: string]: string;
    };
    version?: string;
};
export type v1_GenericConfig = {
    [key: string]: unknown;
};
export type v1_ModuleConfig = {
    /**
     * Configs contains all levels of module configs
     */
    configs?: v1_Configs;
    /**
     * Path is the path of the module. It can be a local path or a remote URL
     */
    path?: string;
    /**
     * Version is the version of the module.
     */
    version?: string;
};
export type v1_ModuleConfigs = {
    [key: string]: v1_ModuleConfig;
};
export type v1_ModulePatcherConfig = {
    /**
     * ProjectSelector contains the selected projects.
     */
    projectSelector?: Array<string>;
};
export type v1_OnPremisesProvider = {
    /**
     * attributes of the provider
     */
    attributes?: {
        [key: string]: string;
    };
    /**
     * platform name of the provider
     */
    name?: string;
};
export type v1_ProviderSpec = {
    /**
     * Alicloud configures a store to retrieve secrets from Alicloud Secrets Manager.
     */
    alicloud?: v1_AlicloudProvider;
    /**
     * AWS configures a store to retrieve secrets from AWS Secrets Manager.
     */
    aws?: v1_AWSProvider;
    /**
     * Azure configures a store to retrieve secrets from Azure KeyVault.
     */
    azure?: v1_AzureKVProvider;
    /**
     * Fake configures a store with static key/value pairs
     */
    fake?: v1_FakeProvider;
    /**
     * Onprem configures a store in on-premises environments
     */
    onpremises?: v1_OnPremisesProvider;
    /**
     * Vault configures a store to retrieve secrets from HashiCorp Vault.
     */
    vault?: v1_VaultProvider;
    /**
     * ViettelCloud configures a store to retrieve secrets from ViettelCloud Secrets Manager.
     */
    viettelcloud?: v1_ViettelCloudProvider;
};
export type v1_Resource = {
    /**
     * Attributes represents all specified attributes of this resource
     */
    attributes?: unknown;
    /**
     * DependsOn contains all resources this resource depends on
     */
    dependsOn?: Array<string>;
    /**
     * Extensions specifies arbitrary metadata of this resource
     */
    extensions?: unknown;
    /**
     * ID is the unique key of this resource.
     * ApiVersion:Kind:Namespace:Name is an idiomatic way for Kubernetes resources.
     * providerNamespace:providerName:resourceType:resourceName for Terraform resources
     */
    id?: string;
    /**
     * Type represents all Context we supported like Kubernetes and Terraform
     */
    type?: kusionstack_io_kusion_pkg_apis_api_kusion_io_v1_Type;
};
export type v1_SecretStore = {
    provider?: v1_ProviderSpec;
};
export type v1_Spec = {
    /**
     * Context contains workspace-level configurations, such as runtimes, topologies, and metadata, etc.
     */
    context?: v1_GenericConfig;
    /**
     * Resources is the list of Resource this Spec contains.
     */
    resources?: Array<v1_Resource>;
    /**
     * SecretSore represents a external secret store location for storing secrets.
     */
    secretStore?: v1_SecretStore;
};
export declare enum v1_VaultKVStoreVersion {
    VaultKVStoreV1 = "v1",
    VaultKVStoreV2 = "v2"
}
export type v1_VaultProvider = {
    /**
     * Path is the mount path of the Vault KV backend endpoint, e.g: "secret".
     */
    path?: string;
    /**
     * Server is the target Vault server address to connect, e.g: "https://vault.example.com:8200".
     */
    server?: string;
    /**
     * Version is the Vault KV secret engine version. Version can be either "v1" or
     * "v2", defaults to "v2".
     */
    version?: v1_VaultKVStoreVersion;
};
export type v1_ViettelCloudProvider = {
    /**
     * ViettelCloud CMP URL to be used to interact with ViettelCloud Secrets Manager.
     * Examples are https://console.viettelcloud.vn/api/
     */
    cmpURL?: string;
    /**
     * ProjectID to be used to interact with ViettelCloud Secrets Manager.
     */
    projectID?: string;
};
export type ListBackendResponse = entity_Backend;
export type ListBackendError = unknown;
export type CreateBackendData = {
    /**
     * Created backend
     */
    body: request_CreateBackendRequest;
};
export type CreateBackendResponse = entity_Backend;
export type CreateBackendError = unknown;
export type DeleteBackendData = {
    path: {
        /**
         * Backend ID
         */
        id: number;
    };
};
export type DeleteBackendResponse = string;
export type DeleteBackendError = unknown;
export type GetBackendData = {
    path: {
        /**
         * Backend ID
         */
        id: number;
    };
};
export type GetBackendResponse = entity_Backend;
export type GetBackendError = unknown;
export type UpdateBackendData = {
    /**
     * Updated backend
     */
    body: request_UpdateBackendRequest;
    path: {
        /**
         * Backend ID
         */
        id: number;
    };
};
export type UpdateBackendResponse = entity_Backend;
export type UpdateBackendError = unknown;
export type GetEndpointsResponse = string;
export type GetEndpointsError = unknown;
export type ListModuleData = {
    query?: {
        /**
         * Workspace ID to filter module list by. Default to all workspaces.
         */
        workspaceID?: number;
    };
};
export type ListModuleResponse = Array<entity_Module>;
export type ListModuleError = unknown;
export type CreateModuleData = {
    /**
     * Created module
     */
    body: request_CreateModuleRequest;
};
export type CreateModuleResponse = entity_Module;
export type CreateModuleError = unknown;
export type DeleteModuleData = {
    path: {
        /**
         * Module Name
         */
        name: string;
    };
};
export type DeleteModuleResponse = string;
export type DeleteModuleError = unknown;
export type GetModuleData = {
    path: {
        /**
         * Module Name
         */
        name: string;
    };
};
export type GetModuleResponse = entity_Module;
export type GetModuleError = unknown;
export type UpdateModuleData = {
    /**
     * Updated module
     */
    body: request_UpdateModuleRequest;
    path: {
        /**
         * Module Name
         */
        name: string;
    };
};
export type UpdateModuleResponse = entity_Module;
export type UpdateModuleError = unknown;
export type ListOrganizationResponse = Array<entity_Organization>;
export type ListOrganizationError = unknown;
export type CreateOrganizationData = {
    /**
     * Created organization
     */
    body: request_CreateOrganizationRequest;
};
export type CreateOrganizationResponse = entity_Organization;
export type CreateOrganizationError = unknown;
export type DeleteOrganizationData = {
    path: {
        /**
         * Organization ID
         */
        id: number;
    };
};
export type DeleteOrganizationResponse = string;
export type DeleteOrganizationError = unknown;
export type GetOrganizationData = {
    path: {
        /**
         * Organization ID
         */
        id: number;
    };
};
export type GetOrganizationResponse = entity_Organization;
export type GetOrganizationError = unknown;
export type UpdateOrganizationData = {
    /**
     * Updated organization
     */
    body: request_UpdateOrganizationRequest;
    path: {
        /**
         * Organization ID
         */
        id: number;
    };
};
export type UpdateOrganizationResponse = entity_Organization;
export type UpdateOrganizationError = unknown;
export type ListProjectData = {
    query?: {
        /**
         * Project name to filter project list by. This should only return one result if set.
         */
        name?: string;
        /**
         * OrganizationID to filter project list by. Default to all projects.
         */
        orgID?: number;
    };
};
export type ListProjectResponse = Array<entity_Project>;
export type ListProjectError = unknown;
export type CreateProjectData = {
    /**
     * Created project
     */
    body: request_CreateProjectRequest;
};
export type CreateProjectResponse = entity_Project;
export type CreateProjectError = unknown;
export type DeleteProjectData = {
    path: {
        /**
         * Project ID
         */
        project_id: number;
    };
};
export type DeleteProjectResponse = string;
export type DeleteProjectError = unknown;
export type GetProjectData = {
    path: {
        /**
         * Project ID
         */
        project_id: number;
    };
};
export type GetProjectResponse = entity_Project;
export type GetProjectError = unknown;
export type UpdateProjectData = {
    /**
     * Updated project
     */
    body: request_UpdateProjectRequest;
    path: {
        /**
         * Project ID
         */
        project_id: number;
    };
};
export type UpdateProjectResponse = entity_Project;
export type UpdateProjectError = unknown;
export type ListResourceResponse = entity_Resource;
export type ListResourceError = unknown;
export type GetResourceData = {
    path: {
        /**
         * Resource ID
         */
        id: number;
    };
};
export type GetResourceResponse = entity_Resource;
export type GetResourceError = unknown;
export type GetResourceGraphData = {
    query: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
};
export type GetResourceGraphResponse = entity_ResourceGraph;
export type GetResourceGraphError = unknown;
export type GetRunData = {
    path: {
        /**
         * Run ID
         */
        run: number;
    };
};
export type GetRunResponse = entity_Run;
export type GetRunError = unknown;
export type GetRunResultData = {
    path: {
        /**
         * Run ID
         */
        run: number;
    };
};
export type GetRunResultResponse = entity_Run;
export type GetRunResultError = unknown;
export type ListSourceResponse = entity_Source;
export type ListSourceError = unknown;
export type CreateSourceData = {
    /**
     * Created source
     */
    body: request_CreateSourceRequest;
};
export type CreateSourceResponse = entity_Source;
export type CreateSourceError = unknown;
export type DeleteSourceData = {
    path: {
        /**
         * Source ID
         */
        id: number;
    };
};
export type DeleteSourceResponse = entity_Source;
export type DeleteSourceError = unknown;
export type GetSourceData = {
    path: {
        /**
         * Source ID
         */
        id: number;
    };
};
export type GetSourceResponse = entity_Source;
export type GetSourceError = unknown;
export type UpdateSourceData = {
    /**
     * Updated source
     */
    body: request_UpdateSourceRequest;
    path: {
        /**
         * Source ID
         */
        id: number;
    };
};
export type UpdateSourceResponse = entity_Source;
export type UpdateSourceError = unknown;
export type ListRunData = {
    query?: {
        /**
         * Cloud to filter runs by. Default to all
         */
        cloud?: string;
        /**
         * Environment to filter runs by. Default to all
         */
        env?: string;
        /**
         * OrgID to filter runs by. Default to all
         */
        orgID?: number;
        /**
         * ProjectID to filter runs by. Default to all
         */
        projectID?: number;
        /**
         * ProjectName to filter runs by. Default to all
         */
        projectName?: string;
    };
};
export type ListRunResponse = Array<entity_Stack>;
export type ListRunError = unknown;
export type ListStackData = {
    query?: {
        /**
         * Cloud to filter stacks by. Default to all
         */
        cloud?: string;
        /**
         * Environment to filter stacks by. Default to all
         */
        env?: string;
        /**
         * OrgID to filter stacks by. Default to all
         */
        orgID?: number;
        /**
         * ProjectID to filter stacks by. Default to all
         */
        projectID?: number;
        /**
         * ProjectName to filter stacks by. Default to all
         */
        projectName?: string;
    };
};
export type ListStackResponse = Array<entity_Stack>;
export type ListStackError = unknown;
export type CreateStackData = {
    /**
     * Created stack
     */
    body: request_CreateStackRequest;
    query?: {
        /**
         * Whether to create an AppConfig from template when creating the stack
         */
        fromTemplate?: boolean;
        /**
         * Whether to initialize an AppTopology from template when creating the stack
         */
        initTopology?: boolean;
    };
};
export type CreateStackResponse = entity_Stack;
export type CreateStackError = unknown;
export type DeleteStackData = {
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
};
export type DeleteStackResponse = string;
export type DeleteStackError = unknown;
export type GetStackData = {
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
};
export type GetStackResponse = entity_Stack;
export type GetStackError = unknown;
export type UpdateStackData = {
    /**
     * Updated stack
     */
    body: request_UpdateStackRequest;
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
};
export type UpdateStackResponse = entity_Stack;
export type UpdateStackError = unknown;
export type ApplyStackData = {
    /**
     * The resources to import during the stack preview
     */
    body?: request_StackImportRequest;
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Apply in dry-run mode
         */
        dryrun?: boolean;
        /**
         * Force the apply even when the stack is locked. May cause concurrency issues!!!
         */
        force?: boolean;
        /**
         * Import existing resources during the stack preview
         */
        importResources?: boolean;
        /**
         * The Spec ID to use for the apply. Will generate a new spec if omitted.
         */
        specID?: string;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type ApplyStackResponse = string;
export type ApplyStackError = unknown;
export type ApplyStackAsyncData = {
    /**
     * The resources to import during the stack preview
     */
    body?: request_StackImportRequest;
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Apply in dry-run mode
         */
        dryrun?: boolean;
        /**
         * Force the apply even when the stack is locked. May cause concurrency issues!!!
         */
        force?: boolean;
        /**
         * Import existing resources during the stack preview
         */
        importResources?: boolean;
        /**
         * The Spec ID to use for the apply. Will generate a new spec if omitted.
         */
        specID?: string;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type ApplyStackAsyncResponse = entity_Run;
export type ApplyStackAsyncError = unknown;
export type DestroyStackData = {
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Destroy in dry-run mode
         */
        dryrun?: boolean;
        /**
         * Force the destroy even when the stack is locked. May cause concurrency issues!!!
         */
        force?: boolean;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type DestroyStackResponse = string;
export type DestroyStackError = unknown;
export type DestroyStackAsyncData = {
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Destroy in dry-run mode
         */
        dryrun?: boolean;
        /**
         * Force the destroy even when the stack is locked. May cause concurrency issues!!!
         */
        force?: boolean;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type DestroyStackAsyncResponse = string;
export type DestroyStackAsyncError = unknown;
export type GenerateStackData = {
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Force the generate even when the stack is locked
         */
        force?: boolean;
        /**
         * The format to generate the spec in. Choices are: spec. Default to spec.
         */
        format?: string;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type GenerateStackResponse = v1_Spec;
export type GenerateStackError = unknown;
export type GenerateStackAsyncData = {
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Force the generate even when the stack is locked
         */
        force?: boolean;
        /**
         * The format to generate the spec in. Choices are: spec. Default to spec.
         */
        format?: string;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type GenerateStackAsyncResponse = v1_Spec;
export type GenerateStackAsyncError = unknown;
export type PreviewStackAsyncData = {
    /**
     * The resources to import during the stack preview
     */
    body?: request_StackImportRequest;
    path: {
        /**
         * Stack ID
         */
        stack_id: number;
    };
    query: {
        /**
         * Show detailed output
         */
        detail?: boolean;
        /**
         * Force the preview even when the stack is locked
         */
        force?: boolean;
        /**
         * Import existing resources during the stack preview
         */
        importResources?: boolean;
        /**
         * Output format. Choices are: json, default. Default to default output format in Kusion.
         */
        output?: string;
        /**
         * The Spec ID to use for the preview. Default to the last one generated.
         */
        specID?: string;
        /**
         * The target workspace to preview the spec in.
         */
        workspace: string;
    };
};
export type PreviewStackAsyncResponse = entity_Run;
export type PreviewStackAsyncError = unknown;
export type ListWorkspaceResponse = entity_Workspace;
export type ListWorkspaceError = unknown;
export type CreateWorkspaceData = {
    /**
     * Created workspace
     */
    body: request_CreateWorkspaceRequest;
};
export type CreateWorkspaceResponse = entity_Workspace;
export type CreateWorkspaceError = unknown;
export type DeleteWorkspaceData = {
    path: {
        /**
         * Workspace ID
         */
        id: number;
    };
};
export type DeleteWorkspaceResponse = string;
export type DeleteWorkspaceError = unknown;
export type GetWorkspaceData = {
    path: {
        /**
         * Workspace ID
         */
        id: number;
    };
};
export type GetWorkspaceResponse = entity_Workspace;
export type GetWorkspaceError = unknown;
export type UpdateWorkspaceData = {
    /**
     * Updated workspace
     */
    body: request_UpdateWorkspaceRequest;
    path: {
        /**
         * Workspace ID
         */
        id: number;
    };
};
export type UpdateWorkspaceResponse = entity_Workspace;
export type UpdateWorkspaceError = unknown;
export type GetWorkspaceConfigsData = {
    path: {
        /**
         * Workspace ID
         */
        id: number;
    };
};
export type GetWorkspaceConfigsResponse = request_WorkspaceConfigs;
export type GetWorkspaceConfigsError = unknown;
export type UpdateWorkspaceConfigsData = {
    /**
     * Updated workspace configurations
     */
    body: request_WorkspaceConfigs;
    path: {
        /**
         * Workspace ID
         */
        id: number;
    };
};
export type UpdateWorkspaceConfigsResponse = request_WorkspaceConfigs;
export type UpdateWorkspaceConfigsError = unknown;
export type CreateWorkspaceModDepsData = {
    path: {
        /**
         * Workspace ID
         */
        id: number;
    };
};
export type CreateWorkspaceModDepsResponse = string;
export type CreateWorkspaceModDepsError = unknown;
export type ValidateWorkspaceConfigsData = {
    /**
     * Workspace configurations to be validated
     */
    body: request_WorkspaceConfigs;
};
export type ValidateWorkspaceConfigsResponse = request_WorkspaceConfigs;
export type ValidateWorkspaceConfigsError = unknown;
