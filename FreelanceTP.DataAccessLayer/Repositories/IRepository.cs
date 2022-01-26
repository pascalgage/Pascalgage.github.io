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

        
    }
}
