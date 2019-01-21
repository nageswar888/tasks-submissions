package files_exceptionhandling;

class NestedTry{  
	 public static void main(String args[]){  
	  try{  
	    try{  
	     System.out.println("going to divide");  
	     int b =39/0;  
	    }
	    catch(ArithmeticException e) // this block catches the 39/0 exception
	    {
	    	System.out.println(e);
	    	}  
	   
	    try{  
	    int a[]=new int[5];  
	    a[5]=4;  
	    }
	    catch(ArrayIndexOutOfBoundsException e) // this block catches the array out of bounds exception
	    {
	    	System.out.println(e);
	    	}  
	     
	    System.out.println("other statement");  
	  }
	  catch(Exception e)
	  {
		  System.out.println("handeled");
		  }  
	  
	  System.out.println("normal flow..");  
	 }  
	}  
