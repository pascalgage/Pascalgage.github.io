using Microsoft.AspNetCore.Mvc;

namespace IntroMVC.Controllers
{
    public class TestController : Controller
    {
        public string Index()
        {
            return "Hello World";
        }

        public string Toto()
        {
            return "<h1>SALUT les Copains !!!!</h1>";
        }

        public IActionResult Barry()
        {
            return View();
        }
    }
}
