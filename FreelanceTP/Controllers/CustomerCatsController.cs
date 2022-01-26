#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FreelanceTP.DataAccessLayer;
using FreelanceTP.DomainModel;

namespace FreelanceTP.Controllers
{
    public class CustomerCatsController : Controller
    {
        private readonly FreelanceTPDbContext _context;

        public CustomerCatsController(FreelanceTPDbContext context)
        {
            _context = context;
        }

        // GET: CustomerCats
        public async Task<IActionResult> Index()
        {
            return View(await _context.CustomerCats.ToListAsync());
        }

        // GET: CustomerCats/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customerCat = await _context.CustomerCats
                .FirstOrDefaultAsync(m => m.Id == id);
            if (customerCat == null)
            {
                return NotFound();
            }

            return View(customerCat);
        }

        // GET: CustomerCats/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: CustomerCats/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CatName,CatDescription,Id")] CustomerCat customerCat)
        {
            if (ModelState.IsValid)
            {
                _context.Add(customerCat);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(customerCat);
        }

        // GET: CustomerCats/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customerCat = await _context.CustomerCats.FindAsync(id);
            if (customerCat == null)
            {
                return NotFound();
            }
            return View(customerCat);
        }

        // POST: CustomerCats/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CatName,CatDescription,Id")] CustomerCat customerCat)
        {
            if (id != customerCat.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(customerCat);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CustomerCatExists(customerCat.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(customerCat);
        }

        // GET: CustomerCats/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customerCat = await _context.CustomerCats
                .FirstOrDefaultAsync(m => m.Id == id);
            if (customerCat == null)
            {
                return NotFound();
            }

            return View(customerCat);
        }

        // POST: CustomerCats/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var customerCat = await _context.CustomerCats.FindAsync(id);
            _context.CustomerCats.Remove(customerCat);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CustomerCatExists(int id)
        {
            return _context.CustomerCats.Any(e => e.Id == id);
        }
    }
}
