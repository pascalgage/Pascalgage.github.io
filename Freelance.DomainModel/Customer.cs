using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Freelance.DomainModel
{
    [Table("Customers")]
    public class Customer
    {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("customer_id")]
        public int CustomerId { get; set; }
        [Required]
        [Column("customer_name")]
        public string CustomerName { get; set; }
        [Required]
        [Column("customer_email")]
        public string CustomerEmail { get; set;}
        [Column("cat_id")]
        public int CatId { get; set; }

    }
}