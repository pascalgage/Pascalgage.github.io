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


        //public DbSet<FormMVC.Models.Intervention>? Interventions { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;Initial Catalog=dbIntervention;Integrated Security=True");
        }

        public DbSet<Intervention> Interventions { get; set; }
    }


}
