// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package planetscale

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/sst/pulumi-planetscale/sdk/go/planetscale/internal"
)

// A PlanetScale organization.
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
//			example, err := planetscale.GetOrganization(ctx, &planetscale.GetOrganizationArgs{
//				Name: "example",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			ctx.Export("org", example)
//			return nil
//		})
//	}
//
// ```
func GetOrganization(ctx *pulumi.Context, args *GetOrganizationArgs, opts ...pulumi.InvokeOption) (*GetOrganizationResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv GetOrganizationResult
	err := ctx.Invoke("planetscale:index/getOrganization:getOrganization", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getOrganization.
type GetOrganizationArgs struct {
	// The name of the organization.
	Name string `pulumi:"name"`
}

// A collection of values returned by getOrganization.
type GetOrganizationResult struct {
	// Whether or not only administrators can access production branches in the organization.
	AdminOnlyProductionAccess bool `pulumi:"adminOnlyProductionAccess"`
	// The billing email of the organization.
	BillingEmail string `pulumi:"billingEmail"`
	// Whether or not more databases can be created in the organization.
	CanCreateDatabases bool `pulumi:"canCreateDatabases"`
	// When the organization was created.
	CreatedAt string `pulumi:"createdAt"`
	// The number of databases in the organization.
	DatabaseCount float64 `pulumi:"databaseCount"`
	// Features that are enabled on the organization.
	Features GetOrganizationFeatures `pulumi:"features"`
	// .
	Flags GetOrganizationFlags `pulumi:"flags"`
	// The number of remaining free databases that can be created in the organization.
	FreeDatabasesRemaining float64 `pulumi:"freeDatabasesRemaining"`
	// Whether or not the organization has past due billing invoices.
	HasPastDueInvoices bool `pulumi:"hasPastDueInvoices"`
	// The ID for the organization.
	Id string `pulumi:"id"`
	// Whether or not the IdP provider is be responsible for managing roles in PlanetScale.
	IdpManagedRoles bool `pulumi:"idpManagedRoles"`
	// The name of the organization.
	Name string `pulumi:"name"`
	// The billing plan of the organization.
	Plan string `pulumi:"plan"`
	// Whether or not the organization has single tenancy enabled.
	SingleTenancy bool `pulumi:"singleTenancy"`
	// The number of sleeping databases in the organization.
	SleepingDatabaseCount float64 `pulumi:"sleepingDatabaseCount"`
	// Whether or not SSO is enabled on the organization.
	Sso bool `pulumi:"sso"`
	// Whether or not the organization uses a WorkOS directory.
	SsoDirectory bool `pulumi:"ssoDirectory"`
	// The URL of the organization's SSO portal.
	SsoPortalUrl string `pulumi:"ssoPortalUrl"`
	// When the organization was last updated.
	UpdatedAt string `pulumi:"updatedAt"`
	// Whether or not the organization's billing information is valid.
	ValidBillingInfo bool `pulumi:"validBillingInfo"`
}

func GetOrganizationOutput(ctx *pulumi.Context, args GetOrganizationOutputArgs, opts ...pulumi.InvokeOption) GetOrganizationResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (GetOrganizationResult, error) {
			args := v.(GetOrganizationArgs)
			r, err := GetOrganization(ctx, &args, opts...)
			var s GetOrganizationResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(GetOrganizationResultOutput)
}

// A collection of arguments for invoking getOrganization.
type GetOrganizationOutputArgs struct {
	// The name of the organization.
	Name pulumi.StringInput `pulumi:"name"`
}

func (GetOrganizationOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetOrganizationArgs)(nil)).Elem()
}

// A collection of values returned by getOrganization.
type GetOrganizationResultOutput struct{ *pulumi.OutputState }

func (GetOrganizationResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetOrganizationResult)(nil)).Elem()
}

func (o GetOrganizationResultOutput) ToGetOrganizationResultOutput() GetOrganizationResultOutput {
	return o
}

func (o GetOrganizationResultOutput) ToGetOrganizationResultOutputWithContext(ctx context.Context) GetOrganizationResultOutput {
	return o
}

// Whether or not only administrators can access production branches in the organization.
func (o GetOrganizationResultOutput) AdminOnlyProductionAccess() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.AdminOnlyProductionAccess }).(pulumi.BoolOutput)
}

// The billing email of the organization.
func (o GetOrganizationResultOutput) BillingEmail() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.BillingEmail }).(pulumi.StringOutput)
}

// Whether or not more databases can be created in the organization.
func (o GetOrganizationResultOutput) CanCreateDatabases() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.CanCreateDatabases }).(pulumi.BoolOutput)
}

// When the organization was created.
func (o GetOrganizationResultOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.CreatedAt }).(pulumi.StringOutput)
}

// The number of databases in the organization.
func (o GetOrganizationResultOutput) DatabaseCount() pulumi.Float64Output {
	return o.ApplyT(func(v GetOrganizationResult) float64 { return v.DatabaseCount }).(pulumi.Float64Output)
}

// Features that are enabled on the organization.
func (o GetOrganizationResultOutput) Features() GetOrganizationFeaturesOutput {
	return o.ApplyT(func(v GetOrganizationResult) GetOrganizationFeatures { return v.Features }).(GetOrganizationFeaturesOutput)
}

// .
func (o GetOrganizationResultOutput) Flags() GetOrganizationFlagsOutput {
	return o.ApplyT(func(v GetOrganizationResult) GetOrganizationFlags { return v.Flags }).(GetOrganizationFlagsOutput)
}

// The number of remaining free databases that can be created in the organization.
func (o GetOrganizationResultOutput) FreeDatabasesRemaining() pulumi.Float64Output {
	return o.ApplyT(func(v GetOrganizationResult) float64 { return v.FreeDatabasesRemaining }).(pulumi.Float64Output)
}

// Whether or not the organization has past due billing invoices.
func (o GetOrganizationResultOutput) HasPastDueInvoices() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.HasPastDueInvoices }).(pulumi.BoolOutput)
}

// The ID for the organization.
func (o GetOrganizationResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.Id }).(pulumi.StringOutput)
}

// Whether or not the IdP provider is be responsible for managing roles in PlanetScale.
func (o GetOrganizationResultOutput) IdpManagedRoles() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.IdpManagedRoles }).(pulumi.BoolOutput)
}

// The name of the organization.
func (o GetOrganizationResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.Name }).(pulumi.StringOutput)
}

// The billing plan of the organization.
func (o GetOrganizationResultOutput) Plan() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.Plan }).(pulumi.StringOutput)
}

// Whether or not the organization has single tenancy enabled.
func (o GetOrganizationResultOutput) SingleTenancy() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.SingleTenancy }).(pulumi.BoolOutput)
}

// The number of sleeping databases in the organization.
func (o GetOrganizationResultOutput) SleepingDatabaseCount() pulumi.Float64Output {
	return o.ApplyT(func(v GetOrganizationResult) float64 { return v.SleepingDatabaseCount }).(pulumi.Float64Output)
}

// Whether or not SSO is enabled on the organization.
func (o GetOrganizationResultOutput) Sso() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.Sso }).(pulumi.BoolOutput)
}

// Whether or not the organization uses a WorkOS directory.
func (o GetOrganizationResultOutput) SsoDirectory() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.SsoDirectory }).(pulumi.BoolOutput)
}

// The URL of the organization's SSO portal.
func (o GetOrganizationResultOutput) SsoPortalUrl() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.SsoPortalUrl }).(pulumi.StringOutput)
}

// When the organization was last updated.
func (o GetOrganizationResultOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v GetOrganizationResult) string { return v.UpdatedAt }).(pulumi.StringOutput)
}

// Whether or not the organization's billing information is valid.
func (o GetOrganizationResultOutput) ValidBillingInfo() pulumi.BoolOutput {
	return o.ApplyT(func(v GetOrganizationResult) bool { return v.ValidBillingInfo }).(pulumi.BoolOutput)
}

func init() {
	pulumi.RegisterOutputType(GetOrganizationResultOutput{})
}
