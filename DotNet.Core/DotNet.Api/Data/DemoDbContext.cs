using DotNet.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNet.Api.Data
{
    public class DemoDbContext : DbContext
    {
        public DemoDbContext(DbContextOptions<DemoDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
