using Freelance.DomainModel;
using FreelanceTP.DomainModel;
using Microsoft.EntityFrameworkCore;

namespace FreelanceTP.DataAccessLayer
{
    public class FreelanceTPDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;Initial Catalog=dbFreelance;Integrated Security=True;AttachDBFileName=C:\Users\Stagiaire\db_freelance.mdf");
        }

        public DbSet<CustomerCat> CustomerCats { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Quote> Quotes { get; set; }
    }
}