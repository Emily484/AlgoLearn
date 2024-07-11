using Microsoft.AspNetCore.Mvc;

namespace AlgoLearn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello from UserController");
        }
    }
}