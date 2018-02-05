using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ChuangKeWeb.Controllers
{
    public class PersonController : Controller
    {
        //
        // GET: /Person/
        public ActionResult Person()
        {
            return View();
        }
        public ActionResult ForgotPassword()
        {
            return View();
        }
	}
}