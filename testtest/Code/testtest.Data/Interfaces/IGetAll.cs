using System.Collections.Generic;

namespace testtest.Data.Interfaces
{
    public interface IGetAll<out T> where T : class
    {
        IEnumerable<T> GetAll();
    }
}
