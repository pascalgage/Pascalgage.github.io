using FreelanceTP.DomainModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Freelance.DomainModel
{
    [Table("Customers")]
    public class Customer:Model
    {
        
        

        [Required]
        [Column("customer_name")]
        [Display(Name ="Customer name")]
        [MaxLength(100)]
        public string? CustomerName { get; set; }

        [Required]
        [Column("customer_email")]
        [Display(Name = "Customer email")]
        [MaxLength(255)]
        public string? CustomerEmail { get; set;}

        [ForeignKey("CustomersCats")]
        public int CatId  { get; set; }

        [ForeignKey("CatId")]
        public CustomerCat? CustomerCat { get; set; }

    }
}