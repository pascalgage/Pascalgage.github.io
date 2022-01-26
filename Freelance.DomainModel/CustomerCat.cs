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
    public class CustomerCat:Model
    {
        

        [Required]
        [Column("cat_name")]
        [MaxLength(50)]
        [Display(Name = "Cat name")]
        public string CatName { get; set; }

        [Column("cat_description")]
        [Display(Name = "Cat description")]
        [DataType(DataType.MultilineText)]
        public string CatDescription { get; set;}
    }
}
