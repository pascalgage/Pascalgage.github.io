using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FreelanceTP.DataAccessLayer.Migrations
{
    public partial class initial7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "QuoteId",
                table: "Quotes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "job_id",
                table: "Jobs",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "cat_id",
                table: "CustomersCats",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "customer_id",
                table: "Customers",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Quotes",
                newName: "QuoteId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Jobs",
                newName: "job_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CustomersCats",
                newName: "cat_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Customers",
                newName: "customer_id");
        }
    }
}
