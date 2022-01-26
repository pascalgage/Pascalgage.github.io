using Freelance.DomainModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FreelanceTP.DomainModel
{
    [Table("Jobs")]
    public class Job :Model
    {
        
        
        [Column("job_state")]
        [MaxLength(10)]
        [Display(Name ="Job state")]
        public char JobState { get; set; }
        
        [Column("job_title")]
        [MaxLength(100)]
        [Display(Name = "Job title")]
        public string JobTitle { get; set; }
        
        [Column("job_start")]
        [Display(Name = "Job starts at")]
        public DateTime JobStart { get; set; }
        
        [Column("job_end")]
        [Display(Name = "Job ends at")]
        public DateTime JobEnd { get; set; }

        [Column("job_description")]
        [DataType(DataType.MultilineText)]
        [Display(Name = "Job description")]
        public string JobDescription { get; set; }

        [ForeignKey("Customers")]
        public int CustomerId { get; set; }


        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }


    }
}
