using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FormMVC.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<InterventionsDbContext>();

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Interventions}/{action=Index}/{id?}");

app.Run();
