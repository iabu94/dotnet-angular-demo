using DotNet.Api.Data;
using DotNet.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNet.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly DemoDbContext _context;

        public StudentController(DemoDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IList<Student>> GetAll()
        {
            var students = _context.Students.ToList();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public ActionResult<Student> Get(int id)
        {
            var student = _context.Students.Find(id);
            if (student == null)
            {
                return BadRequest();
            }

            return Ok(student);
        }

        [HttpPost]
        public ActionResult Post(Student student)
        {
            try
            {
                _context.Students.Add(student);
                _context.SaveChanges();

                return Ok(student);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public ActionResult<Student> Put(Student student)
        {
            try
            {
                _context.Students.Update(student);
                _context.SaveChanges();

                return Ok(student);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var student = _context.Students.Find(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                _context.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }
    }
}
