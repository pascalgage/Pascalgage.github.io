using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FreelanceTP.DomainModel;

namespace FreelanceTP.DataAccessLayer.Repositories
{
    public interface IRepository<T> where T : Model
    {
        T Create(T entity);

        T Update(T entity);

        IQueryable<T> GetAll();

        T GetById(int id);

        bool Delete(int id);

        IQueryable<T> Search(Predicate<T> predicate);
    }
}
