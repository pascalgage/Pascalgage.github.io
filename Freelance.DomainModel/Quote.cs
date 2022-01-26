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
    public class Quote
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int QuoteId { get; set; }
        [Column("quote_state")]
        [MaxLength(10)]
        public char QuoteState { get; set; }
        [Column("quote_date")]
        public DateTime QuoteDate { get; set; }
        [Column("quote_amount")]
        public int QuoteAmount { get; set; }
        [Column("quote_final_date")]
        public DateTime QuoteFinalDate { get; set; }
        [Column("quote_final_amount")]
        public int QuoteFinalAmount { get; set; }
        [Column("job_id")]
        public Job Job { get; set; }
    }
}
