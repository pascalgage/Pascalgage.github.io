using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FreelanceTP.DataAccessLayer.Migrations
{
    public partial class initial3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_CustomersCats_CustomerCatCatId",
                table: "Customers");

            migrationBuilder.RenameColumn(
                name: "CustomerCatCatId",
                table: "Customers",
                newName: "CatId");

            migrationBuilder.RenameIndex(
                name: "IX_Customers_CustomerCatCatId",
                table: "Customers",
                newName: "IX_Customers_CatId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_CustomersCats_CatId",
                table: "Customers",
                column: "CatId",
                principalTable: "CustomersCats",
                principalColumn: "cat_id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_CustomersCats_CatId",
                table: "Customers");

            migrationBuilder.RenameColumn(
                name: "CatId",
                table: "Customers",
                newName: "CustomerCatCatId");

            migrationBuilder.RenameIndex(
                name: "IX_Customers_CatId",
                table: "Customers",
                newName: "IX_Customers_CustomerCatCatId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_CustomersCats_CustomerCatCatId",
                table: "Customers",
                column: "CustomerCatCatId",
                principalTable: "CustomersCats",
                principalColumn: "cat_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
