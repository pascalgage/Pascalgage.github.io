using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FormMVC.Models;
using FormMVC.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace FormMVC.Controllers
{
    public class InterventionController : Controller
    {

        private readonly InterventionsDbContext _context;

        public InterventionController(InterventionsDbContext context)
        {
            _context = context;
        }


        static private readonly List<Intervention> interventions;

        static InterventionController() { 
            interventions = new List<Intervention>();
        
        Intervention Rousseau=new Intervention()
        {
            InterventionId=2,
            Name="Rousseau",
            Phone="0389",
            Mail="rousseau@gmail.com",
            Needs="Rien",
            Instructions="A voir réseau eau potable"
        };
        
        
        interventions.Add(Rousseau);
        
        
        }



        // GET: InterventionController
        public ActionResult Index()
        {
            return View(interventions);
        }

        // GET: InterventionController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: InterventionController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: InterventionController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("InterventionId,Name,Phone,Mail,Needs,Instructions")] Intervention interventions)
        {
            if (ModelState.IsValid)
            {
                _context.Add(interventions);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(interventions);
        }

        // GET: InterventionController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: InterventionController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: InterventionController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: InterventionController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
