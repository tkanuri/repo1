package demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class APPController {

	  @RequestMapping("/home")
	    public String welcome(ModelAndView modelAndView) {
	    	
	        return "index";
	  }
	
	  
	 
}
