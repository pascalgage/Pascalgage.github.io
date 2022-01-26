using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FreelanceTP.DataAccessLayer.Migrations
{
    public partial class initial5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Customers_CustomerId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_CustomerId",
                table: "Jobs");

            migrationBuilder.AddColumn<int>(
                name: "Customer_id",
                table: "Jobs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_Customer_id",
                table: "Jobs",
                column: "Customer_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Customers_Customer_id",
                table: "Jobs",
                column: "Customer_id",
                principalTable: "Customers",
                principalColumn: "customer_id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Customers_Customer_id",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_Customer_id",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "Customer_id",
                table: "Jobs");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_CustomerId",
                table: "Jobs",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Customers_CustomerId",
                table: "Jobs",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "customer_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
