export declare const constant_RunStatusSchema: {
    readonly enum: readonly ["Scheduling", "InProgress", "Failed", "Succeeded", "Cancelled", "Queued"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["RunStatusScheduling", "RunStatusInProgress", "RunStatusFailed", "RunStatusSucceeded", "RunStatusCancelled", "RunStatusQueued"];
};
export declare const constant_RunTypeSchema: {
    readonly enum: readonly ["Generate", "Preview", "Apply", "Destroy"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["RunTypeGenerate", "RunTypePreview", "RunTypeApply", "RunTypeDestroy"];
};
export declare const constant_SourceProviderTypeSchema: {
    readonly enum: readonly ["git", "git", "github", "oci", "local"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["DefaultSourceType", "SourceProviderTypeGit", "SourceProviderTypeGithub", "SourceProviderTypeOCI", "SourceProviderTypeLocal"];
};
export declare const constant_StackStateSchema: {
    readonly enum: readonly ["UnSynced", "Synced", "OutOfSync", "Creating", "Generating", "GenerateFailed", "Generated", "Previewing", "PreviewFailed", "Previewed", "Applying", "ApplyFailed", "ApplySucceeded", "Destroying", "DestroyFailed", "DestroySucceeded"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["StackStateUnSynced", "StackStateSynced", "StackStateOutOfSync", "StackStateCreating", "StackStateGenerating", "StackStateGenerateFailed", "StackStateGenerated", "StackStatePreviewing", "StackStatePreviewFailed", "StackStatePreviewed", "StackStateApplying", "StackStateApplyFailed", "StackStateApplySucceeded", "StackStateDestroying", "StackStateDestroyFailed", "StackStateDestroySucceeded"];
};
export declare const entity_BackendSchema: {
    readonly properties: {
        readonly backendConfig: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.BackendConfig";
            }];
            readonly description: "// Type is the type of the backend.\nType string `yaml:\"type\" json:\"type\"`\nBackend is the configuration of the backend.";
        };
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the backend.";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the backend.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the backend.";
            readonly type: "integer";
        };
        readonly name: {
            readonly description: "Name is the name of the backend.";
            readonly type: "string";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the backend.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_ModuleSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the module.";
            readonly type: "string";
        };
        readonly doc: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/url.URL";
            }];
            readonly description: "Doc is the documentation URL of the module.";
        };
        readonly name: {
            readonly description: "Name is the module name.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the module.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly url: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/url.URL";
            }];
            readonly description: "URL is the module oci artifact registry URL.";
        };
    };
    readonly type: "object";
};
export declare const entity_OrganizationSchema: {
    readonly properties: {
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the organization.";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the organization.";
            readonly type: "string";
        };
        readonly displayName: {
            readonly description: "DisplayName is the human-readable display name.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the organization.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the organization.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the organization.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the organization.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the organization.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_ProjectSchema: {
    readonly properties: {
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the project.";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the project.";
            readonly type: "string";
        };
        readonly displayName: {
            readonly description: "DisplayName is the human-readable display name.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the project.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the project.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the project.";
            readonly type: "string";
        };
        readonly organization: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/entity.Organization";
            }];
            readonly description: "Organization is the configuration source associated with the project.";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the project.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly path: {
            readonly description: "Path is the relative path of the project within the sources.";
            readonly type: "string";
        };
        readonly source: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/entity.Source";
            }];
            readonly description: "Source is the configuration source associated with the project.";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the project.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_ResourceSchema: {
    readonly properties: {
        readonly LastAppliedRevision: {
            readonly description: "LastAppliedRevision is the revision of the last sync.";
            readonly type: "string";
        };
        readonly LastAppliedTimestamp: {
            readonly description: "LastAppliedTimestamp is the timestamp of the last sync.";
            readonly type: "string";
        };
        readonly attributes: {
            readonly additionalProperties: true;
            readonly description: "Attributes is the attributes of the resource.";
            readonly type: "object";
        };
        readonly cloudResourceID: {
            readonly description: "CloudResourceID is the id of the resource in the cloud.";
            readonly type: "string";
        };
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the resource.";
            readonly type: "string";
        };
        readonly dependsOn: {
            readonly description: "DependsOn is the depends on of the resource.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly extensions: {
            readonly additionalProperties: true;
            readonly description: "Extensions is the extensions of the resource.";
            readonly type: "object";
        };
        readonly iamResourceID: {
            readonly description: "IAMResourceID is the id of the resource in IAM.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the resource.";
            readonly type: "integer";
        };
        readonly kusionResourceID: {
            readonly description: "KusionResourceID is the id of the resource in Kusion.";
            readonly type: "string";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the resource.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the resource.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly provider: {
            readonly description: "Provider is the provider of the resource.";
            readonly type: "string";
        };
        readonly resourceName: {
            readonly description: "ResourceName is the name of the resource.";
            readonly type: "string";
        };
        readonly resourcePlane: {
            readonly description: "ResourcePlane is the plane of the resource.";
            readonly type: "string";
        };
        readonly resourceType: {
            readonly description: "ResourceType is the type of the resource.";
            readonly type: "string";
        };
        readonly stack: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/entity.Stack";
            }];
            readonly description: "Stack is the stack associated with the resource.";
        };
        readonly status: {
            readonly description: "Status is the status of the resource.";
            readonly type: "string";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the resource.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_ResourceGraphSchema: {
    readonly properties: {
        readonly relations: {
            readonly items: {
                readonly $ref: "#/definitions/entity.ResourceRelation";
            };
            readonly type: "array";
        };
        readonly resources: {
            readonly additionalProperties: {
                readonly $ref: "#/definitions/entity.ResourceInfo";
            };
            readonly type: "object";
        };
        readonly workload: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_ResourceInfoSchema: {
    readonly properties: {
        readonly cloudResourceID: {
            readonly description: "CloudResourceID is the id of the resource in the cloud.";
            readonly type: "string";
        };
        readonly iamResourceID: {
            readonly description: "IAMResourceID is the id of the resource in IAM.";
            readonly type: "string";
        };
        readonly resourceName: {
            readonly description: "ResourceName is the name of the resource.";
            readonly type: "string";
        };
        readonly resourcePlane: {
            readonly description: "ResourcePlane is the plane of the resource.";
            readonly type: "string";
        };
        readonly resourceType: {
            readonly description: "ResourceType is the type of the resource.";
            readonly type: "string";
        };
        readonly status: {
            readonly description: "Status is the status of the resource.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_ResourceRelationSchema: {
    readonly properties: {
        readonly dependencyResource: {
            readonly type: "string";
        };
        readonly dependentResource: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_RunSchema: {
    readonly properties: {
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the run.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the run.";
            readonly type: "integer";
        };
        readonly logs: {
            readonly description: "Logs is the logs of the run.";
            readonly type: "string";
        };
        readonly result: {
            readonly description: "Result is the result of the run.";
            readonly type: "string";
        };
        readonly stack: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/entity.Stack";
            }];
            readonly description: "Stack is the stack of the run.";
        };
        readonly status: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/constant.RunStatus";
            }];
            readonly description: "Status is the status of the run.";
        };
        readonly trace: {
            readonly description: "Trace is the trace of the run.";
            readonly type: "string";
        };
        readonly type: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/constant.RunType";
            }];
            readonly description: "RunType is the type of the run provider.";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the run.";
            readonly type: "string";
        };
        readonly workspace: {
            readonly description: "Workspace is the target workspace of the run.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_SourceSchema: {
    readonly properties: {
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the source.";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the source.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the source.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the source.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the source.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the source.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly remote: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/url.URL";
            }];
            readonly description: "Remote is the source URL, including scheme.";
        };
        readonly sourceProvider: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/constant.SourceProviderType";
            }];
            readonly description: "SourceProvider is the type of the source provider.";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the source.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_StackSchema: {
    readonly properties: {
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the stack.";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the stack.";
            readonly type: "string";
        };
        readonly desiredVersion: {
            readonly description: "Desired is the desired version of stack.";
            readonly type: "string";
        };
        readonly displayName: {
            readonly description: "DisplayName is the human-readable display nams.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the stack.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the stack.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly lastAppliedRevision: {
            readonly description: "LastAppliedRevision is the spec ID of the last apply operation for the stack.";
            readonly type: "string";
        };
        readonly lastAppliedTimestamp: {
            readonly description: "LastAppliedTimestamp is the timestamp of the last apply operation for the stack.";
            readonly type: "string";
        };
        readonly lastGeneratedRevision: {
            readonly description: "LastGeneratedRevision is the spec ID of the last generate operation for the stack.";
            readonly type: "string";
        };
        readonly lastPreviewedRevision: {
            readonly description: "LastPreviewedRevision is the spec ID of the last preview operation for the stack.";
            readonly type: "string";
        };
        readonly name: {
            readonly description: "Name is the name of the stack.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the stack.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly path: {
            readonly description: "Path is the relative path of the stack within the sourcs.";
            readonly type: "string";
        };
        readonly project: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/entity.Project";
            }];
            readonly description: "Project is the project associated with the stack.";
        };
        readonly syncState: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/constant.StackState";
            }];
            readonly description: "SyncState is the current state of the stack.";
        };
        readonly type: {
            readonly description: "Type is the type of the stack.";
            readonly type: "string";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the stack.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const entity_WorkspaceSchema: {
    readonly properties: {
        readonly backend: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/entity.Backend";
            }];
            readonly description: "Backend is the corresponding backend for this workspace.";
        };
        readonly creationTimestamp: {
            readonly description: "CreationTimestamp is the timestamp of the created for the workspace.";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the workspace.";
            readonly type: "string";
        };
        readonly displayName: {
            readonly description: "DisplayName is the human-readable display name.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the workspace.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the workspace.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the workspace.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the workspace.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly updateTimestamp: {
            readonly description: "UpdateTimestamp is the timestamp of the updated for the workspace.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const kusionstack_io_kusion_pkg_apis_api_kusion_io_v1_TypeSchema: {
    readonly enum: readonly ["Kubernetes", "Terraform"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["Kubernetes", "Terraform"];
};
export declare const models_ActionTypeSchema: {
    readonly enum: readonly [0, 1, 2, 3, 4];
    readonly type: "integer";
    readonly "x-enum-comments": {
        readonly Create: "creating a new resource.";
        readonly Delete: "deleting an existing resource.";
        readonly UnChanged: "nothing to do.";
        readonly Undefined: "invalidate value";
        readonly Update: "updating an existing resource.";
    };
    readonly "x-enum-varnames": readonly ["Undefined", "UnChanged", "Create", "Update", "Delete"];
};
export declare const models_ChangeStepSchema: {
    readonly properties: {
        readonly action: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/models.ActionType";
            }];
            readonly description: "the operation performed by this step";
        };
        readonly from: {
            readonly description: "old data";
        };
        readonly id: {
            readonly description: "the resource id";
            readonly type: "string";
        };
        readonly to: {
            readonly description: "new data";
        };
    };
    readonly type: "object";
};
export declare const models_ChangesSchema: {
    readonly properties: {
        readonly changeSteps: {
            readonly additionalProperties: {
                readonly $ref: "#/definitions/models.ChangeStep";
            };
            readonly type: "object";
        };
        readonly stepKeys: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const request_CreateBackendRequestSchema: {
    readonly properties: {
        readonly backendConfig: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.BackendConfig";
            }];
            readonly description: "BackendConfig is the configuration of the backend.";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the backend.";
            readonly type: "string";
        };
        readonly name: {
            readonly description: "Name is the name of the backend.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name"];
    readonly type: "object";
};
export declare const request_CreateModuleRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the module.";
            readonly type: "string";
        };
        readonly doc: {
            readonly description: "Doc is the documentation URL of the module.";
            readonly type: "string";
        };
        readonly name: {
            readonly description: "Name is the module name.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the module.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly url: {
            readonly description: "URL is the module oci artifact registry URL.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name", "url"];
    readonly type: "object";
};
export declare const request_CreateOrganizationRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the organization.";
            readonly type: "string";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the organization.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the organization.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the organization.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["owners"];
    readonly type: "object";
};
export declare const request_CreateProjectRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the project.";
            readonly type: "string";
        };
        readonly domain: {
            readonly description: "Domain is the domain of the project, typically serving as the parent folder name for the project.";
            readonly type: "string";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the project.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the project.";
            readonly type: "string";
        };
        readonly organizationID: {
            readonly description: "OrganizationID is the organization id associated with the project.";
            readonly type: "integer";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the project.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly path: {
            readonly description: "Path is the relative path of the project within the sources.";
            readonly type: "string";
        };
        readonly sourceID: {
            readonly description: "SourceID is the configuration source id associated with the project.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["domain"];
    readonly type: "object";
};
export declare const request_CreateSourceRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the source.";
            readonly type: "string";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the source.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the source.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the source.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly remote: {
            readonly description: "Remote is the source URL, including scheme.";
            readonly type: "string";
        };
        readonly sourceProvider: {
            readonly description: "SourceProvider is the type of the source provider.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name", "remote", "sourceProvider"];
    readonly type: "object";
};
export declare const request_CreateStackRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the stack.";
            readonly type: "string";
        };
        readonly desiredVersion: {
            readonly description: "DesiredVersion is the desired revision of stack.";
            readonly type: "string";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the stack.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the stack.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the stack.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly path: {
            readonly description: "Path is the relative path of the stack within the source.";
            readonly type: "string";
        };
        readonly projectID: {
            readonly description: "ProjectID is the project id of the stack within the source.";
            readonly type: "integer";
        };
        readonly projectName: {
            readonly description: "ProjectName is the project name of the stack within the source.";
            readonly type: "string";
        };
        readonly type: {
            readonly description: "Type is the type of the stack.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name"];
    readonly type: "object";
};
export declare const request_CreateWorkspaceRequestSchema: {
    readonly properties: {
        readonly backendID: {
            readonly description: "BackendID is the configuration backend id associated with the workspace.";
            readonly type: "integer";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the workspace.";
            readonly type: "string";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the workspace.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the workspace.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the workspace.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["backendID", "name", "owners"];
    readonly type: "object";
};
export declare const request_StackImportRequestSchema: {
    readonly properties: {
        readonly importedResources: {
            readonly additionalProperties: {
                readonly type: "string";
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const request_UpdateBackendRequestSchema: {
    readonly properties: {
        readonly backendConfig: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.BackendConfig";
            }];
            readonly description: "BackendConfig is the configuration of the backend.";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the backend.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the backend.";
            readonly type: "integer";
        };
        readonly name: {
            readonly description: "Name is the name of the backend.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "name"];
    readonly type: "object";
};
export declare const request_UpdateModuleRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the module.";
            readonly type: "string";
        };
        readonly doc: {
            readonly description: "Doc is the documentation URL of the module.";
            readonly type: "string";
        };
        readonly name: {
            readonly description: "Name is the module name.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the module.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly url: {
            readonly description: "URL is the module oci artifact registry URL.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name"];
    readonly type: "object";
};
export declare const request_UpdateOrganizationRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the organization.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the organization.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the organization.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the organization.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the organization.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["id", "owners"];
    readonly type: "object";
};
export declare const request_UpdateProjectRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the project.";
            readonly type: "string";
        };
        readonly domain: {
            readonly description: "Domain is the domain of the project, typically serving as the parent folder name for the project.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the project.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the project.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the project.";
            readonly type: "string";
        };
        readonly organizationID: {
            readonly description: "OrganizationID is the organization id associated with the project.";
            readonly type: "integer";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the project.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly path: {
            readonly description: "Path is the relative path of the project within the sources.";
            readonly type: "string";
        };
        readonly sourceID: {
            readonly description: "SourceID is the configuration source id associated with the project.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["domain", "id"];
    readonly type: "object";
};
export declare const request_UpdateSourceRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the source.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the source.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the source.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the source.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the source.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly remote: {
            readonly description: "Remote is the source URL, including scheme.";
            readonly type: "string";
        };
        readonly sourceProvider: {
            readonly description: "SourceProvider is the type of the source provider.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "name", "remote", "sourceProvider"];
    readonly type: "object";
};
export declare const request_UpdateStackRequestSchema: {
    readonly properties: {
        readonly description: {
            readonly description: "Description is a human-readable description of the stack.";
            readonly type: "string";
        };
        readonly desiredVersion: {
            readonly description: "DesiredVersion is the desired revision of stack.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the stack.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly description: "Labels are custom labels associated with the stack.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly name: {
            readonly description: "Name is the name of the stack.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the stack.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly path: {
            readonly description: "Path is the relative path of the stack within the source.";
            readonly type: "string";
        };
        readonly projectID: {
            readonly description: "ProjectID is the project id of the stack within the source.";
            readonly type: "integer";
        };
        readonly projectName: {
            readonly description: "ProjectName is the project name of the stack within the source.";
            readonly type: "string";
        };
        readonly type: {
            readonly description: "Type is the type of the stack.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "name"];
    readonly type: "object";
};
export declare const request_UpdateWorkspaceRequestSchema: {
    readonly properties: {
        readonly backendID: {
            readonly description: "BackendID is the configuration backend id associated with the workspace.";
            readonly type: "integer";
        };
        readonly description: {
            readonly description: "Description is a human-readable description of the workspace.";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "ID is the id of the workspace.";
            readonly type: "integer";
        };
        readonly labels: {
            readonly additionalProperties: {
                readonly type: "string";
            };
            readonly description: "Labels are custom labels associated with the workspace.";
            readonly type: "object";
        };
        readonly name: {
            readonly description: "Name is the name of the workspace.";
            readonly type: "string";
        };
        readonly owners: {
            readonly description: "Owners is a list of owners for the workspace.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["backendID", "id", "owners"];
    readonly type: "object";
};
export declare const request_WorkspaceConfigsSchema: {
    readonly properties: {
        readonly context: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.GenericConfig";
            }];
            readonly description: "Context contains workspace-level configurations, such as runtimes, topologies, and metadata, etc.";
        };
        readonly modules: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.ModuleConfigs";
            }];
            readonly description: "Modules are the configs of a set of modules.";
        };
        readonly secretStore: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.SecretStore";
            }];
            readonly description: "SecretStore represents a secure external location for storing secrets.";
        };
    };
    readonly type: "object";
};
export declare const url_URLSchema: {
    readonly properties: {
        readonly forceQuery: {
            readonly description: "append a query ('?') even if RawQuery is empty";
            readonly type: "boolean";
        };
        readonly fragment: {
            readonly description: "fragment for references, without '#'";
            readonly type: "string";
        };
        readonly host: {
            readonly description: "host or host:port (see Hostname and Port methods)";
            readonly type: "string";
        };
        readonly omitHost: {
            readonly description: "do not emit empty host (authority)";
            readonly type: "boolean";
        };
        readonly opaque: {
            readonly description: "encoded opaque data";
            readonly type: "string";
        };
        readonly path: {
            readonly description: "path (relative paths may omit leading slash)";
            readonly type: "string";
        };
        readonly rawFragment: {
            readonly description: "encoded fragment hint (see EscapedFragment method)";
            readonly type: "string";
        };
        readonly rawPath: {
            readonly description: "encoded path hint (see EscapedPath method)";
            readonly type: "string";
        };
        readonly rawQuery: {
            readonly description: "encoded query values, without '?'";
            readonly type: "string";
        };
        readonly scheme: {
            readonly type: "string";
        };
        readonly user: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/url.Userinfo";
            }];
            readonly description: "username and password information";
        };
    };
    readonly type: "object";
};
export declare const url_UserinfoSchema: {
    readonly type: "object";
};
export declare const v1_AWSProviderSchema: {
    readonly properties: {
        readonly profile: {
            readonly description: "The profile to be used to interact with AWS Secrets Manager.\nIf not set, the default profile created with `aws configure` will be used.";
            readonly type: "string";
        };
        readonly region: {
            readonly description: "AWS Region to be used to interact with AWS Secrets Manager.\nExamples are us-east-1, us-west-2, etc.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_AlicloudProviderSchema: {
    readonly properties: {
        readonly region: {
            readonly description: "Alicloud Region to be used to interact with Alicloud Secrets Manager.\nExamples are cn-beijing, cn-shanghai, etc.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_AzureEnvironmentTypeSchema: {
    readonly enum: readonly ["PublicCloud", "USGovernmentCloud", "ChinaCloud", "GermanCloud"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["AzureEnvironmentPublicCloud", "AzureEnvironmentUSGovernmentCloud", "AzureEnvironmentChinaCloud", "AzureEnvironmentGermanCloud"];
};
export declare const v1_AzureKVProviderSchema: {
    readonly properties: {
        readonly environmentType: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.AzureEnvironmentType";
            }];
            readonly description: "EnvironmentType specifies the Azure cloud environment endpoints to use for connecting and authenticating with Azure.\nBy-default it points to the public cloud AAD endpoint, and the following endpoints are available:\nPublicCloud, USGovernmentCloud, ChinaCloud, GermanCloud\nRef: https://github.com/Azure/go-autorest/blob/main/autorest/azure/environments.go#L152";
        };
        readonly tenantId: {
            readonly description: "TenantID configures the Azure Tenant to send requests to.";
            readonly type: "string";
        };
        readonly vaultUrl: {
            readonly description: "Vault Url from which the secrets to be fetched from.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_BackendConfigSchema: {
    readonly properties: {
        readonly configs: {
            readonly additionalProperties: {};
            readonly description: "Configs contains config items of the backend, whose keys differ from different backend types.";
            readonly type: "object";
        };
        readonly type: {
            readonly description: "Type is the backend type, supports BackendTypeLocal, BackendTypeOss, BackendTypeS3.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_ConfigsSchema: {
    readonly properties: {
        readonly default: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.GenericConfig";
            }];
            readonly description: "Default is default block of the module config.";
        };
    };
    readonly type: "object";
};
export declare const v1_FakeProviderSchema: {
    readonly properties: {
        readonly data: {
            readonly items: {
                readonly $ref: "#/definitions/v1.FakeProviderData";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const v1_FakeProviderDataSchema: {
    readonly properties: {
        readonly key: {
            readonly type: "string";
        };
        readonly value: {
            readonly type: "string";
        };
        readonly valueMap: {
            readonly additionalProperties: {
                readonly type: "string";
            };
            readonly type: "object";
        };
        readonly version: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_GenericConfigSchema: {
    readonly additionalProperties: {};
    readonly type: "object";
};
export declare const v1_ModuleConfigSchema: {
    readonly properties: {
        readonly configs: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.Configs";
            }];
            readonly description: "Configs contains all levels of module configs";
        };
        readonly path: {
            readonly description: "Path is the path of the module. It can be a local path or a remote URL";
            readonly type: "string";
        };
        readonly version: {
            readonly description: "Version is the version of the module.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_ModuleConfigsSchema: {
    readonly additionalProperties: {
        readonly $ref: "#/definitions/v1.ModuleConfig";
    };
    readonly type: "object";
};
export declare const v1_ModulePatcherConfigSchema: {
    readonly properties: {
        readonly projectSelector: {
            readonly description: "ProjectSelector contains the selected projects.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const v1_OnPremisesProviderSchema: {
    readonly properties: {
        readonly attributes: {
            readonly additionalProperties: {
                readonly type: "string";
            };
            readonly description: "attributes of the provider";
            readonly type: "object";
        };
        readonly name: {
            readonly description: "platform name of the provider";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const v1_ProviderSpecSchema: {
    readonly properties: {
        readonly alicloud: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.AlicloudProvider";
            }];
            readonly description: "Alicloud configures a store to retrieve secrets from Alicloud Secrets Manager.";
        };
        readonly aws: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.AWSProvider";
            }];
            readonly description: "AWS configures a store to retrieve secrets from AWS Secrets Manager.";
        };
        readonly azure: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.AzureKVProvider";
            }];
            readonly description: "Azure configures a store to retrieve secrets from Azure KeyVault.";
        };
        readonly fake: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.FakeProvider";
            }];
            readonly description: "Fake configures a store with static key/value pairs";
        };
        readonly onpremises: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.OnPremisesProvider";
            }];
            readonly description: "Onprem configures a store in on-premises environments";
        };
        readonly vault: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.VaultProvider";
            }];
            readonly description: "Vault configures a store to retrieve secrets from HashiCorp Vault.";
        };
        readonly viettelcloud: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.ViettelCloudProvider";
            }];
            readonly description: "ViettelCloud configures a store to retrieve secrets from ViettelCloud Secrets Manager.";
        };
    };
    readonly type: "object";
};
export declare const v1_ResourceSchema: {
    readonly properties: {
        readonly attributes: {
            readonly additionalProperties: true;
            readonly description: "Attributes represents all specified attributes of this resource";
            readonly type: "object";
        };
        readonly dependsOn: {
            readonly description: "DependsOn contains all resources this resource depends on";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly extensions: {
            readonly additionalProperties: true;
            readonly description: "Extensions specifies arbitrary metadata of this resource";
            readonly type: "object";
        };
        readonly id: {
            readonly description: "ID is the unique key of this resource.\nApiVersion:Kind:Namespace:Name is an idiomatic way for Kubernetes resources.\nproviderNamespace:providerName:resourceType:resourceName for Terraform resources";
            readonly type: "string";
        };
        readonly type: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/kusionstack_io_kusion_pkg_apis_api_kusion_io_v1.Type";
            }];
            readonly description: "Type represents all Context we supported like Kubernetes and Terraform";
        };
    };
    readonly type: "object";
};
export declare const v1_SecretStoreSchema: {
    readonly properties: {
        readonly provider: {
            readonly $ref: "#/definitions/v1.ProviderSpec";
        };
    };
    readonly type: "object";
};
export declare const v1_SpecSchema: {
    readonly properties: {
        readonly context: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.GenericConfig";
            }];
            readonly description: "Context contains workspace-level configurations, such as runtimes, topologies, and metadata, etc.";
        };
        readonly resources: {
            readonly description: "Resources is the list of Resource this Spec contains.";
            readonly items: {
                readonly $ref: "#/definitions/v1.Resource";
            };
            readonly type: "array";
        };
        readonly secretStore: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.SecretStore";
            }];
            readonly description: "SecretSore represents a external secret store location for storing secrets.";
        };
    };
    readonly type: "object";
};
export declare const v1_VaultKVStoreVersionSchema: {
    readonly enum: readonly ["v1", "v2"];
    readonly type: "string";
    readonly "x-enum-varnames": readonly ["VaultKVStoreV1", "VaultKVStoreV2"];
};
export declare const v1_VaultProviderSchema: {
    readonly properties: {
        readonly path: {
            readonly description: "Path is the mount path of the Vault KV backend endpoint, e.g: \"secret\".";
            readonly type: "string";
        };
        readonly server: {
            readonly description: "Server is the target Vault server address to connect, e.g: \"https://vault.example.com:8200\".";
            readonly type: "string";
        };
        readonly version: {
            readonly allOf: readonly [{
                readonly $ref: "#/definitions/v1.VaultKVStoreVersion";
            }];
            readonly description: "Version is the Vault KV secret engine version. Version can be either \"v1\" or\n\"v2\", defaults to \"v2\".";
        };
    };
    readonly type: "object";
};
export declare const v1_ViettelCloudProviderSchema: {
    readonly properties: {
        readonly cmpURL: {
            readonly description: "ViettelCloud CMP URL to be used to interact with ViettelCloud Secrets Manager.\nExamples are https://console.viettelcloud.vn/api/";
            readonly type: "string";
        };
        readonly projectID: {
            readonly description: "ProjectID to be used to interact with ViettelCloud Secrets Manager.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
