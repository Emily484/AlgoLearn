namespace AlgoLearn.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        // Add more properties as needed

        // Navigation properties if relationships are needed
        // public ICollection<SomeOtherEntity> RelatedEntities { get; set; }
    }
}