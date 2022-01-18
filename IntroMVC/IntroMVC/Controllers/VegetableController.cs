using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IntroMVC.Controllers
{
    public class VegetableController : Controller
    {
        // GET: VegetableController
        //afficher un élément par son identifiant
        public ActionResult Index()
        {
            return View();
        }

        // GET: VegetableController/Details/5
        //créer un nouvel élément
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VegetableController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: VegetableController/Create
        //validation du formulaire Create (l'action ci dessus)
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
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

        // GET: VegetableController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: VegetableController/Edit/5
        //validation du formulaire d'édition
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

        // GET: VegetableController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VegetableController/Delete/5
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
