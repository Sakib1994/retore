using API.Attribute;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowCrossSite]
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
    }
}