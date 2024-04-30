// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package planetscale

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/sst/pulumi-planetscale/sdk/go/planetscale/internal"
)

// A list of PlanetScale read-only regions.
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
//			_, err := planetscale.GetDatabaseReadOnlyRegions(ctx, &planetscale.GetDatabaseReadOnlyRegionsArgs{
//				Organization: "example.com",
//				Name:         "example_db",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			ctx.Export("databaseRoRegions", data.Planetscale_database_regions.Example)
//			return nil
//		})
//	}
//
// ```
func GetDatabaseReadOnlyRegions(ctx *pulumi.Context, args *GetDatabaseReadOnlyRegionsArgs, opts ...pulumi.InvokeOption) (*GetDatabaseReadOnlyRegionsResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv GetDatabaseReadOnlyRegionsResult
	err := ctx.Invoke("planetscale:index/getDatabaseReadOnlyRegions:getDatabaseReadOnlyRegions", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getDatabaseReadOnlyRegions.
type GetDatabaseReadOnlyRegionsArgs struct {
	// The name of the database for which the read-only regions are available.
	Name string `pulumi:"name"`
	// The organization for which the read-only regions are available.
	Organization string `pulumi:"organization"`
}

// A collection of values returned by getDatabaseReadOnlyRegions.
type GetDatabaseReadOnlyRegionsResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// The name of the database for which the read-only regions are available.
	Name string `pulumi:"name"`
	// The organization for which the read-only regions are available.
	Organization string `pulumi:"organization"`
	// The list of read-only regions available for the database.
	Regions []GetDatabaseReadOnlyRegionsRegion `pulumi:"regions"`
}

func GetDatabaseReadOnlyRegionsOutput(ctx *pulumi.Context, args GetDatabaseReadOnlyRegionsOutputArgs, opts ...pulumi.InvokeOption) GetDatabaseReadOnlyRegionsResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (GetDatabaseReadOnlyRegionsResult, error) {
			args := v.(GetDatabaseReadOnlyRegionsArgs)
			r, err := GetDatabaseReadOnlyRegions(ctx, &args, opts...)
			var s GetDatabaseReadOnlyRegionsResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(GetDatabaseReadOnlyRegionsResultOutput)
}

// A collection of arguments for invoking getDatabaseReadOnlyRegions.
type GetDatabaseReadOnlyRegionsOutputArgs struct {
	// The name of the database for which the read-only regions are available.
	Name pulumi.StringInput `pulumi:"name"`
	// The organization for which the read-only regions are available.
	Organization pulumi.StringInput `pulumi:"organization"`
}

func (GetDatabaseReadOnlyRegionsOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetDatabaseReadOnlyRegionsArgs)(nil)).Elem()
}

// A collection of values returned by getDatabaseReadOnlyRegions.
type GetDatabaseReadOnlyRegionsResultOutput struct{ *pulumi.OutputState }

func (GetDatabaseReadOnlyRegionsResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetDatabaseReadOnlyRegionsResult)(nil)).Elem()
}

func (o GetDatabaseReadOnlyRegionsResultOutput) ToGetDatabaseReadOnlyRegionsResultOutput() GetDatabaseReadOnlyRegionsResultOutput {
	return o
}

func (o GetDatabaseReadOnlyRegionsResultOutput) ToGetDatabaseReadOnlyRegionsResultOutputWithContext(ctx context.Context) GetDatabaseReadOnlyRegionsResultOutput {
	return o
}

// The provider-assigned unique ID for this managed resource.
func (o GetDatabaseReadOnlyRegionsResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v GetDatabaseReadOnlyRegionsResult) string { return v.Id }).(pulumi.StringOutput)
}

// The name of the database for which the read-only regions are available.
func (o GetDatabaseReadOnlyRegionsResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v GetDatabaseReadOnlyRegionsResult) string { return v.Name }).(pulumi.StringOutput)
}

// The organization for which the read-only regions are available.
func (o GetDatabaseReadOnlyRegionsResultOutput) Organization() pulumi.StringOutput {
	return o.ApplyT(func(v GetDatabaseReadOnlyRegionsResult) string { return v.Organization }).(pulumi.StringOutput)
}

// The list of read-only regions available for the database.
func (o GetDatabaseReadOnlyRegionsResultOutput) Regions() GetDatabaseReadOnlyRegionsRegionArrayOutput {
	return o.ApplyT(func(v GetDatabaseReadOnlyRegionsResult) []GetDatabaseReadOnlyRegionsRegion { return v.Regions }).(GetDatabaseReadOnlyRegionsRegionArrayOutput)
}

func init() {
	pulumi.RegisterOutputType(GetDatabaseReadOnlyRegionsResultOutput{})
}
