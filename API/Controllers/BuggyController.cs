using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails
            {
                Title = "this is a bad request!",
                Status = 400,
            });
        }
        [HttpGet("unauthorized")]
        public ActionResult GetUnAuthorized()
        {
            return Unauthorized();
        }
        [HttpGet("server-error")]
        public ActionResult GetServerExceition()
        {
            throw new Exception("A server side error!");
        }
    }
}