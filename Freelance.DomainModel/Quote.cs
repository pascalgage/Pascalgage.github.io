using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FreelanceTP.DomainModel
{
    [Table("Quotes")]
    public class Quote:Model
    {
        

        [Column("quote_state")]
        [MaxLength(10)]
        [Display(Name = "Quote state")]
        public string QuoteState { get; set; }

        [Column("quote_date")]
        [Display(Name = "Quote date")]
        public DateTime QuoteDate { get; set; }

        [Column("quote_amount")]
        [Display(Name = "Quote amount")]
        public int QuoteAmount { get; set; }

        [Column("quote_final_date")]
        [Display(Name = "Quote final date")]
        public DateTime QuoteFinalDate { get; set; }

        [Column("quote_final_amount")]
        [Display(Name = "Quote final amount")]
        public int QuoteFinalAmount { get; set; }

        [Column("job_id")]
        public Job Job { get; set; }
    }
}
