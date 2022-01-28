using FreelanceTP.DomainModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FreelanceTP.DataAccessLayer.Repositories
{
    public class Repository<T> : IRepository<T> where T : Model
    {
        readonly DbContext dbContext;
        readonly DbSet<T> dbset;

        public Repository(DbContext context)
        {
            dbContext = context;
            dbset = dbContext.Set<T>();
        }


        public T Create(T entity)
        {
            dbset.Add(entity);
            dbContext.SaveChanges();
            return entity;
        }

        public bool Delete(int id)
        {
            var result = GetById(id);

            if (result != null)
            {
                dbset.Remove(result);
                dbContext.SaveChanges();
                return true;
            }

            return false;
        }

        public IQueryable<T> GetAll()
        {
            return dbset;
        }

        public T GetById(int id)
        {
            return dbset.FirstOrDefault(x => x.Id == id);
        }

        public IQueryable<T> Search(Predicate<T> predicate)
        {
            List<T> result = new List<T>();

            foreach (var item in dbset)
            {
                if (predicate(item))
                {
                    result.Add(item);
                }
            }

            return result.AsQueryable<T>();
        }

        public T Update(T entity)
        {
            dbset.Update(entity);
            dbContext.SaveChanges();
            return entity;
        }
    }
}
