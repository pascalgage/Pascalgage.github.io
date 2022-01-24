using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace FormMVC.Models
{
    [Table("Interventions")]
    public class Intervention
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InterventionId { get; set; }
        public string? Name { get; set; }
        public string? Phone { get; set; }
        public string? Mail { get; set; }
        public string? Needs { get; set; }
        public string? Instructions { get; set; }
    }
}
