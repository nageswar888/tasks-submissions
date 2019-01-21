package files_exceptionhandling;

import java.util.Scanner;
class Ex {
	  public static void main(String[] args) {
	 
	  String languages[] = { "C", "C++", "Java", "Perl", "Python" };
	       
	  try {
	    for (int c = 1; c <= 5; c++) {
	      System.out.println(languages[c]);
	    }
	  }
	  catch (Exception e) {
	    System.out.println(e);
	  }
	  }
}

