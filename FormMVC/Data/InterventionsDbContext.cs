using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FormMVC.Models;


namespace FormMVC.Data
{
    public class InterventionsDbContext : DbContext
    {
        public InterventionsDbContext(DbContextOptions<InterventionsDbContext> options)
            : base(options)
        {
        }

        public DbSet<FormMVC.Models.Intervention>? Interventions { get; set; }
    }

    
}
