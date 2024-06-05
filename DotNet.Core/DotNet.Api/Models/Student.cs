namespace DotNet.Api.Models
{
    public class Student
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Mobile { get; set; }
        public required string Email { get; set; }
    }
}
