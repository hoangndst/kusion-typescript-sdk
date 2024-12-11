import { type OptionsLegacyParser } from "@hey-api/client-fetch";
import type { CreateBackendData, DeleteBackendData, GetBackendData, UpdateBackendData, ListModuleData, ListModuleResponse, CreateModuleData, DeleteModuleData, GetModuleData, UpdateModuleData, ListOrganizationResponse, CreateOrganizationData, DeleteOrganizationData, GetOrganizationData, UpdateOrganizationData, ListProjectData, ListProjectResponse, CreateProjectData, DeleteProjectData, GetProjectData, UpdateProjectData, GetResourceData, GetResourceGraphData, GetRunData, GetRunResultData, CreateSourceData, DeleteSourceData, GetSourceData, UpdateSourceData, ListRunData, ListRunResponse, ListStackData, ListStackResponse, CreateStackData, DeleteStackData, GetStackData, UpdateStackData, ApplyStackData, ApplyStackAsyncData, DestroyStackData, DestroyStackAsyncData, GenerateStackData, GenerateStackAsyncData, PreviewStackAsyncData, CreateWorkspaceData, DeleteWorkspaceData, GetWorkspaceData, UpdateWorkspaceData, GetWorkspaceConfigsData, UpdateWorkspaceConfigsData, CreateWorkspaceModDepsData, ValidateWorkspaceConfigsData } from "./types.gen";
export declare const client: import("@hey-api/client-fetch").Client<Request, Response, unknown, import("@hey-api/client-fetch").RequestOptions<boolean, string>>;
export declare class BackendService {
    /**
     * List backends
     * List all backends
     */
    static listBackend<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Backend, unknown, ThrowOnError>;
    /**
     * Create backend
     * Create a new backend
     */
    static createBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateBackendData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Backend, unknown, ThrowOnError>;
    /**
     * Delete backend
     * Delete specified backend by ID
     */
    static deleteBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteBackendData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Get backend
     * Get backend information by backend ID
     */
    static getBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetBackendData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Backend, unknown, ThrowOnError>;
    /**
     * Update backend
     * Update the specified backend
     */
    static updateBackend<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateBackendData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Backend, unknown, ThrowOnError>;
}
export declare class DebugService {
    /**
     * List all available endpoints
     * List all registered endpoints in the router
     */
    static getEndpoints<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
}
export declare class ModuleService {
    /**
     * List module
     * List module information
     */
    static listModule<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListModuleData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<ListModuleResponse, unknown, ThrowOnError>;
    /**
     * Create module
     * Create a new Kusion module
     */
    static createModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateModuleData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Module, unknown, ThrowOnError>;
    /**
     * Delete module
     * Delete the specified module by name
     */
    static deleteModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteModuleData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Get module
     * Get module information by module name
     */
    static getModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetModuleData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Module, unknown, ThrowOnError>;
    /**
     * Update module
     * Update the specified module
     */
    static updateModule<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateModuleData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Module, unknown, ThrowOnError>;
}
export declare class OrganizationService {
    /**
     * List organizations
     * List all organizations
     */
    static listOrganization<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<ListOrganizationResponse, unknown, ThrowOnError>;
    /**
     * Create organization
     * Create a new organization
     */
    static createOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateOrganizationData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Organization, unknown, ThrowOnError>;
    /**
     * Delete organization
     * Delete specified organization by ID
     */
    static deleteOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteOrganizationData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Get organization
     * Get organization information by organization ID
     */
    static getOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetOrganizationData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Organization, unknown, ThrowOnError>;
    /**
     * Update organization
     * Update the specified organization
     */
    static updateOrganization<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateOrganizationData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Organization, unknown, ThrowOnError>;
}
export declare class ProjectService {
    /**
     * List projects
     * List all or a subset of the projects
     */
    static listProject<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListProjectData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<ListProjectResponse, unknown, ThrowOnError>;
    /**
     * Create project
     * Create a new project
     */
    static createProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateProjectData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Project, unknown, ThrowOnError>;
    /**
     * Delete project
     * Delete specified project by ID
     */
    static deleteProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteProjectData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Get project
     * Get project information by project ID
     */
    static getProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProjectData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Project, unknown, ThrowOnError>;
    /**
     * Update project
     * Update the specified project
     */
    static updateProject<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateProjectData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Project, unknown, ThrowOnError>;
}
export declare class ResourceService {
    /**
     * List resource
     * List resource information
     */
    static listResource<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Resource, unknown, ThrowOnError>;
    /**
     * Get resource
     * Get resource information by resource ID
     */
    static getResource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetResourceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Resource, unknown, ThrowOnError>;
    /**
     * Get resource graph
     * Get resource graph by stack ID
     */
    static getResourceGraph<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetResourceGraphData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_ResourceGraph, unknown, ThrowOnError>;
}
export declare class RunService {
    /**
     * Get run
     * Get run information by run ID
     */
    static getRun<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetRunData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Run, unknown, ThrowOnError>;
    /**
     * Get run result
     * Get run result by run ID
     */
    static getRunResult<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetRunResultData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Run, unknown, ThrowOnError>;
}
export declare class SourceService {
    /**
     * List source
     * List source information by source ID
     */
    static listSource<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Source, unknown, ThrowOnError>;
    /**
     * Create source
     * Create a new source
     */
    static createSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateSourceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Source, unknown, ThrowOnError>;
    /**
     * Delete source
     * Delete specified source by ID
     */
    static deleteSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteSourceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Source, unknown, ThrowOnError>;
    /**
     * Get source
     * Get source information by source ID
     */
    static getSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetSourceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Source, unknown, ThrowOnError>;
    /**
     * Update source
     * Update the specified source
     */
    static updateSource<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateSourceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Source, unknown, ThrowOnError>;
}
export declare class StackService {
    /**
     * List runs
     * List all runs
     */
    static listRun<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListRunData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<ListRunResponse, unknown, ThrowOnError>;
    /**
     * List stacks
     * List all stacks
     */
    static listStack<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<ListStackResponse, unknown, ThrowOnError>;
    /**
     * Create stack
     * Create a new stack
     */
    static createStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Stack, unknown, ThrowOnError>;
    /**
     * Delete stack
     * Delete specified stack by ID
     */
    static deleteStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Get stack
     * Get stack information by stack ID
     */
    static getStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Stack, unknown, ThrowOnError>;
    /**
     * Update stack
     * Update the specified stack
     */
    static updateStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Stack, unknown, ThrowOnError>;
    /**
     * Apply stack
     * Apply stack information by stack ID
     */
    static applyStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ApplyStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Asynchronously apply stack
     * Start a run and asynchronously apply stack changes by stack ID
     */
    static applyStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ApplyStackAsyncData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Run, unknown, ThrowOnError>;
    /**
     * Destroy stack
     * Destroy stack information by stack ID
     */
    static destroyStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DestroyStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Asynchronously destroy stack
     * Start a run and asynchronously destroy stack resources by stack ID
     */
    static destroyStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DestroyStackAsyncData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Generate stack
     * Generate stack information by stack ID
     */
    static generateStack<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GenerateStackData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").v1_Spec, unknown, ThrowOnError>;
    /**
     * Asynchronously generate stack
     * Start a run and asynchronously generate stack spec by stack ID
     */
    static generateStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GenerateStackAsyncData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").v1_Spec, unknown, ThrowOnError>;
    /**
     * Asynchronously preview stack
     * Start a run and asynchronously preview stack changes by stack ID
     */
    static previewStackAsync<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<PreviewStackAsyncData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Run, unknown, ThrowOnError>;
}
export declare class WorkspaceService {
    /**
     * List workspaces
     * List all workspaces
     */
    static listWorkspace<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Workspace, unknown, ThrowOnError>;
    /**
     * Create workspace
     * Create a new workspace
     */
    static createWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateWorkspaceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Workspace, unknown, ThrowOnError>;
    /**
     * Delete workspace
     * Delete specified workspace by ID
     */
    static deleteWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteWorkspaceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Get workspace
     * Get workspace information by workspace ID
     */
    static getWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetWorkspaceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Workspace, unknown, ThrowOnError>;
    /**
     * Update workspace
     * Update the specified workspace
     */
    static updateWorkspace<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateWorkspaceData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").entity_Workspace, unknown, ThrowOnError>;
    /**
     * get workspace configurations
     * Get configurations in the specified workspace
     */
    static getWorkspaceConfigs<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetWorkspaceConfigsData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").request_WorkspaceConfigs, unknown, ThrowOnError>;
    /**
     * Update workspace configurations
     * Update the configurations in the specified workspace
     */
    static updateWorkspaceConfigs<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateWorkspaceConfigsData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").request_WorkspaceConfigs, unknown, ThrowOnError>;
    /**
     * Create the module dependencies of the workspace
     * Create the module dependencies in kcl.mod of the specified workspace
     */
    static createWorkspaceModDeps<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateWorkspaceModDepsData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<string, unknown, ThrowOnError>;
    /**
     * Validate workspace configurations
     * Validate the configurations in the specified workspace
     */
    static validateWorkspaceConfigs<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ValidateWorkspaceConfigsData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<import("./types.gen").request_WorkspaceConfigs, unknown, ThrowOnError>;
}
