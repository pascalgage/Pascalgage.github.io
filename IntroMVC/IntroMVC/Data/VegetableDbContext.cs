#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using IntroMVC.Models;

namespace IntroMVC.Data
{
    public class VegetableDbContext : DbContext
    {
        public VegetableDbContext (DbContextOptions<VegetableDbContext> options)
            : base(options)
        {
        }

        public DbSet<IntroMVC.Models.Vegetable> Vegetable { get; set; }
    }
}
