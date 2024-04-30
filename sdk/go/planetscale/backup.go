// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package planetscale

import (
	"context"
	"reflect"

	"errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/sst/pulumi-planetscale/sdk/go/planetscale/internal"
)

// A PlanetScale backup.
//
// Known limitations:
// - It is not currently possible to manage backup schedules, only retention periods.
type Backup struct {
	pulumi.CustomResourceState

	// .
	Actor BackupActorOutput `pulumi:"actor"`
	// The policy used by the backup.
	BackupPolicy BackupBackupPolicyOutput `pulumi:"backupPolicy"`
	// The branch being backed up.
	Branch pulumi.StringOutput `pulumi:"branch"`
	// When the backup was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// The database to which the branch being backed up belongs to.
	Database pulumi.StringOutput `pulumi:"database"`
	// The estimated storage cost of the backup.
	EstimatedStorageCost pulumi.StringOutput `pulumi:"estimatedStorageCost"`
	// The name of the backup.
	Name pulumi.StringOutput `pulumi:"name"`
	// The organization in which the database branch being backed up belongs to.
	Organization pulumi.StringOutput `pulumi:"organization"`
	// Whether or not the backup policy is required.
	Required pulumi.BoolOutput `pulumi:"required"`
	// Branches that have been restored with this backup.
	RestoredBranches pulumi.StringArrayOutput `pulumi:"restoredBranches"`
	// The size of the backup.
	Size pulumi.Float64Output `pulumi:"size"`
	// The current state of the backup.
	State pulumi.StringOutput `pulumi:"state"`
	// When the backup was last updated.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
}

// NewBackup registers a new resource with the given unique name, arguments, and options.
func NewBackup(ctx *pulumi.Context,
	name string, args *BackupArgs, opts ...pulumi.ResourceOption) (*Backup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.BackupPolicy == nil {
		return nil, errors.New("invalid value for required argument 'BackupPolicy'")
	}
	if args.Branch == nil {
		return nil, errors.New("invalid value for required argument 'Branch'")
	}
	if args.Database == nil {
		return nil, errors.New("invalid value for required argument 'Database'")
	}
	if args.Organization == nil {
		return nil, errors.New("invalid value for required argument 'Organization'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Backup
	err := ctx.RegisterResource("planetscale:index/backup:Backup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetBackup gets an existing Backup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBackup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *BackupState, opts ...pulumi.ResourceOption) (*Backup, error) {
	var resource Backup
	err := ctx.ReadResource("planetscale:index/backup:Backup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Backup resources.
type backupState struct {
	// .
	Actor *BackupActor `pulumi:"actor"`
	// The policy used by the backup.
	BackupPolicy *BackupBackupPolicy `pulumi:"backupPolicy"`
	// The branch being backed up.
	Branch *string `pulumi:"branch"`
	// When the backup was created.
	CreatedAt *string `pulumi:"createdAt"`
	// The database to which the branch being backed up belongs to.
	Database *string `pulumi:"database"`
	// The estimated storage cost of the backup.
	EstimatedStorageCost *string `pulumi:"estimatedStorageCost"`
	// The name of the backup.
	Name *string `pulumi:"name"`
	// The organization in which the database branch being backed up belongs to.
	Organization *string `pulumi:"organization"`
	// Whether or not the backup policy is required.
	Required *bool `pulumi:"required"`
	// Branches that have been restored with this backup.
	RestoredBranches []string `pulumi:"restoredBranches"`
	// The size of the backup.
	Size *float64 `pulumi:"size"`
	// The current state of the backup.
	State *string `pulumi:"state"`
	// When the backup was last updated.
	UpdatedAt *string `pulumi:"updatedAt"`
}

type BackupState struct {
	// .
	Actor BackupActorPtrInput
	// The policy used by the backup.
	BackupPolicy BackupBackupPolicyPtrInput
	// The branch being backed up.
	Branch pulumi.StringPtrInput
	// When the backup was created.
	CreatedAt pulumi.StringPtrInput
	// The database to which the branch being backed up belongs to.
	Database pulumi.StringPtrInput
	// The estimated storage cost of the backup.
	EstimatedStorageCost pulumi.StringPtrInput
	// The name of the backup.
	Name pulumi.StringPtrInput
	// The organization in which the database branch being backed up belongs to.
	Organization pulumi.StringPtrInput
	// Whether or not the backup policy is required.
	Required pulumi.BoolPtrInput
	// Branches that have been restored with this backup.
	RestoredBranches pulumi.StringArrayInput
	// The size of the backup.
	Size pulumi.Float64PtrInput
	// The current state of the backup.
	State pulumi.StringPtrInput
	// When the backup was last updated.
	UpdatedAt pulumi.StringPtrInput
}

func (BackupState) ElementType() reflect.Type {
	return reflect.TypeOf((*backupState)(nil)).Elem()
}

type backupArgs struct {
	// The policy used by the backup.
	BackupPolicy BackupBackupPolicy `pulumi:"backupPolicy"`
	// The branch being backed up.
	Branch string `pulumi:"branch"`
	// The database to which the branch being backed up belongs to.
	Database string `pulumi:"database"`
	// The name of the backup.
	Name *string `pulumi:"name"`
	// The organization in which the database branch being backed up belongs to.
	Organization string `pulumi:"organization"`
}

// The set of arguments for constructing a Backup resource.
type BackupArgs struct {
	// The policy used by the backup.
	BackupPolicy BackupBackupPolicyInput
	// The branch being backed up.
	Branch pulumi.StringInput
	// The database to which the branch being backed up belongs to.
	Database pulumi.StringInput
	// The name of the backup.
	Name pulumi.StringPtrInput
	// The organization in which the database branch being backed up belongs to.
	Organization pulumi.StringInput
}

func (BackupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*backupArgs)(nil)).Elem()
}

type BackupInput interface {
	pulumi.Input

	ToBackupOutput() BackupOutput
	ToBackupOutputWithContext(ctx context.Context) BackupOutput
}

func (*Backup) ElementType() reflect.Type {
	return reflect.TypeOf((**Backup)(nil)).Elem()
}

func (i *Backup) ToBackupOutput() BackupOutput {
	return i.ToBackupOutputWithContext(context.Background())
}

func (i *Backup) ToBackupOutputWithContext(ctx context.Context) BackupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BackupOutput)
}

// BackupArrayInput is an input type that accepts BackupArray and BackupArrayOutput values.
// You can construct a concrete instance of `BackupArrayInput` via:
//
//	BackupArray{ BackupArgs{...} }
type BackupArrayInput interface {
	pulumi.Input

	ToBackupArrayOutput() BackupArrayOutput
	ToBackupArrayOutputWithContext(context.Context) BackupArrayOutput
}

type BackupArray []BackupInput

func (BackupArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Backup)(nil)).Elem()
}

func (i BackupArray) ToBackupArrayOutput() BackupArrayOutput {
	return i.ToBackupArrayOutputWithContext(context.Background())
}

func (i BackupArray) ToBackupArrayOutputWithContext(ctx context.Context) BackupArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BackupArrayOutput)
}

// BackupMapInput is an input type that accepts BackupMap and BackupMapOutput values.
// You can construct a concrete instance of `BackupMapInput` via:
//
//	BackupMap{ "key": BackupArgs{...} }
type BackupMapInput interface {
	pulumi.Input

	ToBackupMapOutput() BackupMapOutput
	ToBackupMapOutputWithContext(context.Context) BackupMapOutput
}

type BackupMap map[string]BackupInput

func (BackupMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Backup)(nil)).Elem()
}

func (i BackupMap) ToBackupMapOutput() BackupMapOutput {
	return i.ToBackupMapOutputWithContext(context.Background())
}

func (i BackupMap) ToBackupMapOutputWithContext(ctx context.Context) BackupMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BackupMapOutput)
}

type BackupOutput struct{ *pulumi.OutputState }

func (BackupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Backup)(nil)).Elem()
}

func (o BackupOutput) ToBackupOutput() BackupOutput {
	return o
}

func (o BackupOutput) ToBackupOutputWithContext(ctx context.Context) BackupOutput {
	return o
}

// .
func (o BackupOutput) Actor() BackupActorOutput {
	return o.ApplyT(func(v *Backup) BackupActorOutput { return v.Actor }).(BackupActorOutput)
}

// The policy used by the backup.
func (o BackupOutput) BackupPolicy() BackupBackupPolicyOutput {
	return o.ApplyT(func(v *Backup) BackupBackupPolicyOutput { return v.BackupPolicy }).(BackupBackupPolicyOutput)
}

// The branch being backed up.
func (o BackupOutput) Branch() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.Branch }).(pulumi.StringOutput)
}

// When the backup was created.
func (o BackupOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.CreatedAt }).(pulumi.StringOutput)
}

// The database to which the branch being backed up belongs to.
func (o BackupOutput) Database() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.Database }).(pulumi.StringOutput)
}

// The estimated storage cost of the backup.
func (o BackupOutput) EstimatedStorageCost() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.EstimatedStorageCost }).(pulumi.StringOutput)
}

// The name of the backup.
func (o BackupOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// The organization in which the database branch being backed up belongs to.
func (o BackupOutput) Organization() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.Organization }).(pulumi.StringOutput)
}

// Whether or not the backup policy is required.
func (o BackupOutput) Required() pulumi.BoolOutput {
	return o.ApplyT(func(v *Backup) pulumi.BoolOutput { return v.Required }).(pulumi.BoolOutput)
}

// Branches that have been restored with this backup.
func (o BackupOutput) RestoredBranches() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringArrayOutput { return v.RestoredBranches }).(pulumi.StringArrayOutput)
}

// The size of the backup.
func (o BackupOutput) Size() pulumi.Float64Output {
	return o.ApplyT(func(v *Backup) pulumi.Float64Output { return v.Size }).(pulumi.Float64Output)
}

// The current state of the backup.
func (o BackupOutput) State() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.State }).(pulumi.StringOutput)
}

// When the backup was last updated.
func (o BackupOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *Backup) pulumi.StringOutput { return v.UpdatedAt }).(pulumi.StringOutput)
}

type BackupArrayOutput struct{ *pulumi.OutputState }

func (BackupArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Backup)(nil)).Elem()
}

func (o BackupArrayOutput) ToBackupArrayOutput() BackupArrayOutput {
	return o
}

func (o BackupArrayOutput) ToBackupArrayOutputWithContext(ctx context.Context) BackupArrayOutput {
	return o
}

func (o BackupArrayOutput) Index(i pulumi.IntInput) BackupOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Backup {
		return vs[0].([]*Backup)[vs[1].(int)]
	}).(BackupOutput)
}

type BackupMapOutput struct{ *pulumi.OutputState }

func (BackupMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Backup)(nil)).Elem()
}

func (o BackupMapOutput) ToBackupMapOutput() BackupMapOutput {
	return o
}

func (o BackupMapOutput) ToBackupMapOutputWithContext(ctx context.Context) BackupMapOutput {
	return o
}

func (o BackupMapOutput) MapIndex(k pulumi.StringInput) BackupOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Backup {
		return vs[0].(map[string]*Backup)[vs[1].(string)]
	}).(BackupOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*BackupInput)(nil)).Elem(), &Backup{})
	pulumi.RegisterInputType(reflect.TypeOf((*BackupArrayInput)(nil)).Elem(), BackupArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*BackupMapInput)(nil)).Elem(), BackupMap{})
	pulumi.RegisterOutputType(BackupOutput{})
	pulumi.RegisterOutputType(BackupArrayOutput{})
	pulumi.RegisterOutputType(BackupMapOutput{})
}
