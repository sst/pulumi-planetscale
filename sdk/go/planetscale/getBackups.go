// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package planetscale

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/sst/pulumi-planetscale/sdk/go/planetscale/internal"
)

// A list of PlanetScale backups.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//	"github.com/sst/pulumi-planetscale/sdk/go/planetscale"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			example, err := planetscale.GetBackups(ctx, &planetscale.GetBackupsArgs{
//				Organization: "example.com",
//				Database:     "example_db",
//				Branch:       "main",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			ctx.Export("backups", example)
//			return nil
//		})
//	}
//
// ```
func GetBackups(ctx *pulumi.Context, args *GetBackupsArgs, opts ...pulumi.InvokeOption) (*GetBackupsResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv GetBackupsResult
	err := ctx.Invoke("planetscale:index/getBackups:getBackups", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getBackups.
type GetBackupsArgs struct {
	Branch       string `pulumi:"branch"`
	Database     string `pulumi:"database"`
	Organization string `pulumi:"organization"`
}

// A collection of values returned by getBackups.
type GetBackupsResult struct {
	Backups  []GetBackupsBackup `pulumi:"backups"`
	Branch   string             `pulumi:"branch"`
	Database string             `pulumi:"database"`
	// The provider-assigned unique ID for this managed resource.
	Id           string `pulumi:"id"`
	Organization string `pulumi:"organization"`
}

func GetBackupsOutput(ctx *pulumi.Context, args GetBackupsOutputArgs, opts ...pulumi.InvokeOption) GetBackupsResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (GetBackupsResult, error) {
			args := v.(GetBackupsArgs)
			r, err := GetBackups(ctx, &args, opts...)
			var s GetBackupsResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(GetBackupsResultOutput)
}

// A collection of arguments for invoking getBackups.
type GetBackupsOutputArgs struct {
	Branch       pulumi.StringInput `pulumi:"branch"`
	Database     pulumi.StringInput `pulumi:"database"`
	Organization pulumi.StringInput `pulumi:"organization"`
}

func (GetBackupsOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetBackupsArgs)(nil)).Elem()
}

// A collection of values returned by getBackups.
type GetBackupsResultOutput struct{ *pulumi.OutputState }

func (GetBackupsResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetBackupsResult)(nil)).Elem()
}

func (o GetBackupsResultOutput) ToGetBackupsResultOutput() GetBackupsResultOutput {
	return o
}

func (o GetBackupsResultOutput) ToGetBackupsResultOutputWithContext(ctx context.Context) GetBackupsResultOutput {
	return o
}

func (o GetBackupsResultOutput) Backups() GetBackupsBackupArrayOutput {
	return o.ApplyT(func(v GetBackupsResult) []GetBackupsBackup { return v.Backups }).(GetBackupsBackupArrayOutput)
}

func (o GetBackupsResultOutput) Branch() pulumi.StringOutput {
	return o.ApplyT(func(v GetBackupsResult) string { return v.Branch }).(pulumi.StringOutput)
}

func (o GetBackupsResultOutput) Database() pulumi.StringOutput {
	return o.ApplyT(func(v GetBackupsResult) string { return v.Database }).(pulumi.StringOutput)
}

// The provider-assigned unique ID for this managed resource.
func (o GetBackupsResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v GetBackupsResult) string { return v.Id }).(pulumi.StringOutput)
}

func (o GetBackupsResultOutput) Organization() pulumi.StringOutput {
	return o.ApplyT(func(v GetBackupsResult) string { return v.Organization }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(GetBackupsResultOutput{})
}
