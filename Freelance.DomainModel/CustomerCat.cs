using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FreelanceTP.DomainModel
{
    [Table("CustomersCats")]
    public class CustomerCat
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("cat_id")]
        public int CatId { get; set; }
        [Required]
        [Column("cat_name")]
        public string CatName { get; set; }
        [Column("cat_description")]
        [DataType(DataType.MultilineText)]
        public string CatDescription { get; set;}
    }
}
